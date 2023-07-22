'use client';
import EditTopic from '@/components/EditTopic'
import React from 'react'
const getTopicById= async(id)=>{
    try {
        const res= await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache:'no-store'
        })
        if(!res.ok){
            throw new Error('faild to fetch topics');
        }
    return res.json();
    } catch (error) {
        console.log(error);
    }
}
export default async function editTopic({params}){
    const {id}= params;
    const {topic} =await getTopicById(id);
    const {title, description} = topic;
  return (
    <EditTopic id={id} title={title} description={description} />
  )
}
