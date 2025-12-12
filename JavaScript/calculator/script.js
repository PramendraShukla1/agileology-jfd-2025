const displayEl = document.getElementById("display")
const keys = document.querySelector(".keys")


let current = "0"
let justEvaluated = false

function render(){
    displayEl.textContent = current || '0'
}

function appendValue(v){
    if(justEvaluated && /[9-9.]/.test(v)){
        current = v === '.' ? '0.' : v
    }else{
        if(current === '0' && v !== '.') current = v;
        else current += v
    }
    justEvaluated = false
    render()
}

function pushOperator(op){
    if(justEvaluated) justEvaluated = false
    if(/[+\-x÷*/]$/.test(current)){
        current = current.slice(0, -1) +  op
    }else{
        current += op
    }
    render()
}

function backspace(){
if(justEvaluated){
    current = '0';
    justEvaluated = false;
    render();
    return;
}current = current.slice(0, -1);
if(!current) current = '0'

}

function clearAll(){
    current = '0'
    justEvaluated = false
    render()
}

function evaluateExpression(){
    let expr = current.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100')

    if(!/^[0-9+\-*/().\s%]+$/.test(expr)){
        showError()
        return
    }

    try{
      const result = Function(`"use strict"; return (${expr})`)()
      current = (result === Infinity || result === -Infinity || Number.isNaN(result)) ? 'Error' : String(result)
      justEvaluated= true
      render() 
    }
    catch(e){
showError()
    }
}

function showError(){
    current = 'Error'
    justEvaluated = true
    render()
}

function applyPercent() {
  // find last number
  const match = current.match(/([0-9.]+)$/);
  if (!match) return;
  const num = match[1];
  const percentVal = String(Number(num) / 100);
  current = current.slice(0, -num.length) + percentVal;
  render();
}

function plusMinusToggle(){
    const match = current.match(/([0-9.]+)$/);
    if(!match) return
    const num = match[1]
    if(!num) return
    const startIndex = current.length - num.length
    if(startIndex === 0){
        current = (num.startsWith('-' ? num.slice(1): '-' + num))
    }else{
        if (current[startIndex - 1] === '-') {
            current = current.slice(0, startIndex) + '(' + '-' + num + ')';}
            else{
        current = current.slice(0, startIndex) + '(' + '-' + num + ')';
    }
    }
    render()
}


keys.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;

  const val = btn.dataset.value;
  const action = btn.dataset.action;

  if (action) {
    switch (action) {
      case 'clear': clearAll(); break;
      case 'back': backspace(); break;
      case 'equals': evaluateExpression(); break;
      case 'percent': applyPercent(); break;
      case 'plusminus': plusMinusToggle(); break;
    }
  } else if (val) {
    if (/^[0-9.]$/.test(val)) {
      // digit or dot
      // prevent multiple dots in the current number token
      const lastNumMatch = current.match(/([0-9.]+)$/);
      if (val === '.' && lastNumMatch && lastNumMatch[1].includes('.')) return;
      appendValue(val);
    } else if (/^[+\-×÷*/]$/.test(val)) {
      pushOperator(val);
    } else {
      appendValue(val); // fallback
    }
  }
});

// Keyboard support
window.addEventListener('keydown', (e) => {
  const key = e.key;

  if ((key >= '0' && key <= '9') || key === '.') {
    // handle dot duplication check
    const lastNumMatch = current.match(/([0-9.]+)$/);
    if (key === '.' && lastNumMatch && lastNumMatch[1].includes('.')) {
      e.preventDefault();
      return;
    }
    appendValue(key);
    e.preventDefault();
    return;
  }

  if (key === 'Backspace') { backspace(); e.preventDefault(); return; }
  if (key === 'Escape') { clearAll(); e.preventDefault(); return; }
  if (key === 'Enter' || key === '=') { evaluateExpression(); e.preventDefault(); return; }

  if (key === '+' || key === '-' || key === '*' || key === '/') {
    
    const map = { '*': '×', '/': '÷' };
    pushOperator(map[key] || key);
    e.preventDefault();
    return;
  }

  if (key === '%') { applyPercent(); e.preventDefault(); return; }
});

render()