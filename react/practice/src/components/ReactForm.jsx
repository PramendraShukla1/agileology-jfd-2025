import React from 'react'
import {useForm} from "react-hook-form"

const ReactForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm()

    const onSubmit = (data) =>{
        console.log("Form Data: ", data)
        alert("Check Console for submitted data!")
        reset()
    }
  return (
    <div style={{maxWidth:"400px", margin:"40px auto"}}>
        <h2>React Hook Form Demo</h2>

        <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex', flexDirection:"column", gap:"10px"}}>
            {/* Name */}
            <div style={{display:'flex', flexDirection:"row", gap:"10px"}}>
<label htmlFor="name">Name</label>
<input type="text" id='name' {...register("name", {
    required: "Name is required",
    minLength:{
        value: 5,
        message:"Name must be at least 3 characters"
    }
})}/>
{
    errors.name && (
        <p style={{color: "red"}}>
            {errors.name.message}
        </p>
    )
}
            </div>
            {/* Email */}
            <div style={{display:'flex', flexDirection:"row", gap:"10px"}}>
                <label htmlFor="email">Email</label>
                    <input id='email' type="email" {...register("email",{
                        required: "Email is required",
                        pattern:{
                            value: /^\S+@\S+$/i,
                            message: "Enter a valid email"
                        }
                    })} />
                
                {
    errors.email && (
        <p style={{color: "red"}}>
            {errors.email.message}
        </p>
    )
}
            </div>

            {/* Password */}
            <div style={{display:'flex', flexDirection:"row", gap:"10px"}}>
<label htmlFor="password">Passowrd</label>
<input type="password" {...register("password",{
    required: "Password is required",
    minLength:{
        value: 6,
        message: "Minimum 6 characters"
    }
})} />
{
    errors.password && (
        <p style={{color: "red"}}>
            {errors.password.message}
        </p>
    )
}
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default ReactForm