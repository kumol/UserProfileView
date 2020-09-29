import axios from "axios";
import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";

const ViewUser=()=>{
    let {id}= useParams();
    const [user,setUser]=useState({});
    useEffect(()=>{
        loadUser();
    },[])
    let logo = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80" ;
    const loadUser=async()=>{
        let res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }
    return (
        <div className="card">
            <img className="image" src={logo}/>
            <h1>John Doe</h1>
            <p className="title">CEO  Founder, Example</p>
            <p>Harvard University</p>
            <div >
            <a href="#"><i className="fa fa-dribbble"></i>{user.name}</a> 
            <a href="#"><i className="fa fa-twitter"></i>{user.email}</a>  
            <a href="#"><i className="fa fa-linkedin"></i>{user.userName}</a>  
            <a href="#"><i className="fa fa-facebook"></i>{user.website}</a> 
            </div>
            <p><button>Contact</button></p>
      </div>
    )
}

export default ViewUser;