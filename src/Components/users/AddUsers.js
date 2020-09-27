
import Axios from "axios";
import React, { useState } from "react";
import {useHistory} from 'react-router-dom'

const AddUsers = ()=>{
    let history = useHistory();
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });

    const onChangeInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const onSubmit = async(e)=>{
        e.preventDefault();
        await Axios.post("http://localhost:3003/users",user);
        history.push("/")
    }

    return (        
        <div>
            <form onSubmit={e=>onSubmit(e)}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input onChange={e=>onChangeInput(e)} name="name" value={user.name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">User Name</label>
                    <input onChange={e=>onChangeInput(e)} name="username" value={user.username} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={e=>onChangeInput(e)} name="email" value={user.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Number</label>
                    <input onChange={e=>onChangeInput(e)} name="number" value={user.number} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter number"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Website</label>
                    <input onChange={e=>onChangeInput(e)} name="website" value={user.website} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter website"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddUsers;