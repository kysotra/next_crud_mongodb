import Link from "next/link";

export default function Navbar(){
    return(
        <div className="bg-black text-white flex justify-between mx-5 my-5 px-5 py-5">
            <Link className="text-3xl flex-1" href={'/'}>Logo</Link>
            <Link className="bg-blue-500 border px-2 py-2" href={'/addTopic'}>Add Topic</Link>
        </div>
    )
}