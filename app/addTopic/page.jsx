"use client";
import { headers } from "@/next.config";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function addTopic(){
    const router= useRouter();
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");
    const handleSubmit= async (e)=>{
        e.preventDefault();

        if(!title || !description){
            alert("Title and description are required");
            return;
        }
        
        try {
            const res= await fetch('http://localhost:3000/api/topics',{
                method: "POST",
                headers: {
                    "Content-type":"application/jason",
                },
                body: JSON.stringify({title, description}),
            });
        if(res.ok){
            router.push('/');
        }else{
            throw new Error("Failed to add a topic")
        }
        } catch (error) {
            console.log(error);
        }
    };
    return(
    <>
        <form onSubmit={handleSubmit} name="addTopic" className="mx-5, px-5 py-5">
            <input 
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            className="w-full px-5 py-5 border-2" placeholder="Topic Title" type="text" />
            <input 
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            className="w-full  px-5 py-5 border-2 mt-5" placeholder="Description" type="text" />
            <button type="submit" className="bg-blue-500 text-white mt-5 px-6 py-3 w-fit">Add Topic</button>
        </form>
    </>
    )
}