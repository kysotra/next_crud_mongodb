"use client";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
export default function RemoveBtn({id}){
    const router = useRouter();
    const removeTopic= async()=>{
        const comfirmed = confirm("Are you sure!");

        if(comfirmed){
            const res= await fetch(`https://kysotra-crud.netlify.app/api/topics?id=${id}`, {
                method: "DELETE",
            });
            if(res.ok){
                router.refresh();
            }
        }  
    }
    return(
        <button onClick={removeTopic} className="text-2xl flex items-center mr-2 hover:text-red-500">
        <AiOutlineDelete />
        </button>
    )
}