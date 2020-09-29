import React,{useState,useEffect} from "react"
import axios from "axios";
import { Link } from "react-router-dom";
const Home= ()=>{
    const [users,setUser] = useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers = async()=>{
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    }

    return (
        <div>
            <h2>Hello from home</h2>
            <table className="table border shadow">
            <thead className="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,key)=>(
                        <tr key={user.id}>
                            <th scope="row">{key+1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-primary mr-2" to={`/users/view/${user.id}`}>View</Link>
                                <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                <Link className="btn btn-danger" to={`/`}>Delete</Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    )
}
export default Home;