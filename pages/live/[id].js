import Navbar from "../../components/Navbar";
import { FaPlayCircle } from "react-icons/fa";

export default function live ({ matches, cdn1}) {





    return (
        <>
        <Navbar/>
        <main className="grid grid-cols-6 pb-16 pt-4 ">
            <div></div>
            <div className="col-span-6 mx-3 my-3 lg:col-span-4 lg:mx-0  mb-6 ">
                <div className="relative container my-2 py-2 cursor-pointer group  ">
                    <div className="match bg-gray-700 rounded-lg shadow-md py-4 my-2 flex justify-center ">
                        <h1 className="text-2xl font-bold text-white mt-2 ">{matches.title}</h1>
                    </div>
                    <div className="match bg-zinc-100 rounded-lg shadow-md">
                  
                     {matches.cdn !=="not found" ? (
                    <iframe src={cdn1.cdn} width="100%" height="480px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                        ) : (
                            <div className='absolute top-0 left-0 w-full h-[480px] bg-black  z-10 items-center justify-center flex p-4 m-4 flex-col'>
                                   <FaPlayCircle className="flex justify-center text-teal-500 text-6xl group-hover transition-all decoration-neutral-800 duration-500 animate-pulse my-2" />
                                <p className='text-teal-500 text-6xl group-hover transition-all decoration-neutral-800 duration-500 animate-pulse'>
                                 
                                Live will start soon 
                                </p>
                                

        </div>
                        )}
 </div>
    </div>
</div>
</main>
</>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://127.0.0.1:8000/api/${context.params.id}`)
    const matches = await res.json()
    const vv = matches.cdn.split('/')[4]
    console.log(vv)
    const res1 = await fetch(`http://127.0.0.1:8000/api/player/${vv}`)
    const cdn1 = await res1.json()
    console.log(`http://127.0.0.1:8000/api/player/${vv}`)
    return {
        props: {
            matches,
            cdn1
        },
    }
}
