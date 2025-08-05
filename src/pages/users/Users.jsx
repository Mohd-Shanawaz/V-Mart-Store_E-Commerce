import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";

export default function AllUsers(){
    const [users,setUsers] = useState([]);

    useEffect(()=>{
       
      axios.get("https://fakestoreapi.in/api/users")
        .then((res)=>{
            setUsers(res.data.users)
            console.log(res.data.users)
        })    
    },[])
    console.log(users.id)

    return(<div>
        <h1 style={{paddingTop:"5px",marginTop:"10px"}}>Users Information</h1>
        {users?<table border="" style={{margin:"20px auto",width:"920px",backgroundColor:"mediumpurple", borderRadius:"10px"}}>
            <thead>
                <tr>
                   <th style={{padding:"3px",borderRadius:"10px 10px 0 0 ",margin:"10px",color:"yellow"}}>
                    <th style={{width:"30px"}}>ID</th>
                    <th style={{width:"120px"}}>ID</th>
                    <th style={{width:"150px"}}>Name</th>
                    <th style={{width:"200px"}}>Address</th>
                    <th style={{width:"220px"}}>Phone</th>
                    <th style={{width:"150px"}}>Password</th>
                   </th> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td  style={{borderRadius:"0 0 10px 10px",padding:"5px",backgroundColor:"lightgrey"}}>{users.map((user)=>{
                    const {id ,name , password,phone,address,username} = user;

                        return <tr style={{marginLeft:"100px"}}>
                            <td style={{width:"30px"}}>{id}</td>
                            <td style={{width:"120px"}}> {name.firstname}</td>
                            <td style={{width:"150px"}}>{username}</td>
                            <td style={{width:"200px"}}>{address.city}</td>
                            <td style={{width:"250px"}}>{phone}{}</td>
                            <td style={{width:"150px"}}>{password}</td> 
                        </tr>
                    })}</td>
                    </tr>
                        
            </tbody>

        </table>
:<p>Loading....</p>}</div>)

}