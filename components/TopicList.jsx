"use client";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { useRouter } from "next/navigation";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
const getTopics = async ()=>{
    const apiUrl=process.env.API_URL;
    const router=useRouter();
    try {
        
        const res= await fetch(`https://kysotra-crud.netlify.app/api/topics`,{
            cache: "no-store"
        })
        if(!res.ok){
            throw new Error("Failed to fetch topics");
        }
        return res.json();
        router.refresh();
    } catch (error) {
        console.log("Error loading topic", error);
    }
};
export default async function TopicList(){
    const {topics} = await getTopics(); 
    return(
        <>
        {topics.map((t)=>(
        <div className="w-auto mt-5 px-5 py-5 border-2 mx-5 flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">{t.title}</h2>
          <p>{t.description}</p>
        </div> 
        <div className="flex">
            <RemoveBtn id={t._id} />
          <Link className="text-2xl flex items-center hover:text-blue-500" href={`/editTopic/${t._id}`}>
              <AiOutlineEdit />
          </Link>
        </div>
    </div>  
    ))}
    </>
    )
}