const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Chat = require("../models/Chat");
const { v4: uuidv4 } = require("uuid");

const genAI = new GoogleGenerativeAI('AIzaSyCYZdYtkz13ukfFIFUcIF03oO9rGIt3dlU');

// POST /api/chat/send — Send a message and get a Gemini response
router.post("/send", async (req, res) => {
  const { message, sessionId } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const currentSessionId = sessionId || uuidv4();

  try {
    // Find or create a chat session in MongoDB
    let chat = await Chat.findOne({ sessionId: currentSessionId });
    if (!chat) {
      chat = new Chat({ sessionId: currentSessionId, messages: [] });
    }

    // Add the user message
    chat.messages.push({ role: "user", content: message });

    // Set a title from the first message
    if (chat.title === "New Chat" && chat.messages.length === 1) {
      chat.title =
        message.length > 40 ? message.substring(0, 40) + "..." : message;
    }

    // Build history in Gemini format (all messages except the last user one)
    const history = chat.messages.slice(0, -1).map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    }));

    // Initialize the model and start a chat
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    const chatSession = model.startChat({
      history,
      generationConfig: {
        maxOutputTokens: 2048,
      },
    });

    // Send message to Gemini
    const result = await chatSession.sendMessage(message);
    const aiResponse = result.response.text();

    // Save the AI response to MongoDB
    chat.messages.push({ role: "model", content: aiResponse });
    await chat.save();

    res.json({
      sessionId: currentSessionId,
      response: aiResponse,
      title: chat.title,
    });
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    res
      .status(500)
      .json({ error: "Failed to get response from Gemini", details: error.message });
  }
});

// GET /api/chat/history/:sessionId — Load chat history
router.get("/history/:sessionId", async (req, res) => {
  try {
    const chat = await Chat.findOne({ sessionId: req.params.sessionId });
    if (!chat) return res.status(404).json({ error: "Chat not found" });
    res.json(chat);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch chat history" });
  }
});

// GET /api/chat/sessions — List all chat sessions
router.get("/sessions", async (req, res) => {
  try {
    const sessions = await Chat.find(
      {},
      { sessionId: 1, title: 1, updatedAt: 1, "messages": { $slice: -1 } }
    ).sort({ updatedAt: -1 });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sessions" });
  }
});

// DELETE /api/chat/:sessionId — Delete a chat session
router.delete("/:sessionId", async (req, res) => {
  try {
    await Chat.deleteOne({ sessionId: req.params.sessionId });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete session" });
  }
});

module.exports = router;
