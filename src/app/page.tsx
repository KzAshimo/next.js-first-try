'use client';

import { useEffect, useState } from "react";

interface User{
  id:number,
  username:string,
  password:string,
  group:number
}

const Page =  () =>{
  const [users,setUsers] = useState<User[]>([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    fetch('api/users')
        .then((res)=>res.json())
        .then((data)=>{
          if(data.success){
            setUsers(data.data);
          }
          setLoading(false);
        })
  },[]);

  if(loading)return<div>Loading...</div>;

  return(
    <>
    <h1>User</h1>
    <ul>
      {users.map((user) =>(
        <li key={user.id}>
        ID:{user.id},Username:{user.username},Group:{user.group}
        </li>
      ))}
    </ul>
    </>
  )
}

export default Page;