"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopic({id, title, description}){
    const [newTitle, setNewTitle]=useState(title);
    const [newDescription, setNewDescription]=useState(description);
    const router=useRouter();  
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try { 
            const res= await fetch(`http://localhost:3000/api/topics/${id}`,{
                method:"PUT",
                headers:{
                    "Content-type": "application/json",
                },
                body: JSON.stringify({newTitle, newDescription}),
            });
        if(!res.ok){
            throw new Error("Failed to update the topic");
        }  
        router.refresh();
        router.push("/");
        } 
        catch (error) {
            console.log(error);
        }
    }
    return(
        <form onSubmit={handleSubmit} name="addTopic" className="mx-5, px-5 py-5">
            <input 
            onChange={(e)=>setNewTitle(e.target.value)}
            value={newTitle}
            className="w-full px-5 py-5 border-2" placeholder="Topic Title" type="text" />
            <input 
            onChange={(e)=>setNewDescription(e.target.value)}
            value={newDescription}
            className="w-full  px-5 py-5 border-2 mt-5" placeholder="Description" type="text" />
            <button className="bg-blue-500 text-white mt-5 px-6 py-3 w-fit">Update Topic</button>
        </form>
    )
}