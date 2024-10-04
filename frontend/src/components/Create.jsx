import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Create=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState(0)
    const [error,setError]=useState("")
    const navigate=useNavigate()
    console.log(name,email,age);
    const handleSubmit=async (e)=>{
        e.preventDefault(); // to handle default form thing
        const userData={name,email,age};
        const response=await fetch("http://localhost:4000/",{
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                "Content-type":"application/json",
            }
        });
        const result=await response.json();
        if(!response.ok)
        {
            console.log(result.error)
            setError(result.error)
        }
        if(response.ok)
        {
            console.log(result)
            setError("")
            setName("")
            setAge("")
            setEmail("")
            navigate("/all")


        }           

    }
    return (
       
        <div className="container my-2">
        <form onSubmit={handleSubmit}>
        {error && <div class="alert alert-danger"> {error} </div>}
        <div className="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input type="text" className="form-control"  placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>          
            <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control"  placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
            <label for="exampleInputPassword1">Age</label>
            <input type="number" className="form-control"  placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        </div>
    )
}

export default Create;