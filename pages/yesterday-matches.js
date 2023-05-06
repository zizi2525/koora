import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaPlayCircle } from 'react-icons/fa'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ matches }) {
  return (
    <>
    <Navbar/>
  
    <main className="grid grid-cols-6 pb-16 pt-4 dark:bg-zinc-950 ">
      <div></div>
      <div className="col-span-6 mx-3 my-3 lg:col-span-4 lg:mx-0 mt-2 mb-6 ">
        <div className="flex flex-row justify-center items-center m-2 p-2">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300 p-2 m-2">مباريات الأمس</h1>
            <h2 className='text-xl font-bold text-gray-700 dark:text-gray-300'> الكورة لايف </h2>
          
        
        </div>
        <div className="flex flex-row justify-between items-center">
        
     
          <Link href="/" className="text-md font-bold text-gray-700 dark:text-gray-300  bg-gray-300 px-4 py-2 ">
          مباريات اليوم
          </Link>
     
          <Link href="/yesterday-matches" className="text-md font-bold text-gray-700 dark:text-gray-300   bg-red-500 px-4 py-2 animate-pulse">
          مباريات الأمس
          </Link>
          <Link href="/tomorrow-matches" className="text-md font-bold text-gray-700 dark:text-gray-300 bg-gray-300 px-4 py-2 ">
            <strong>مباريات الغد</strong>
          </Link>
   
   </div>
        <section className='' >
        {matches.map((match,index) => (
   
       <div  key={`match${index}`}  className="relative container my-2 py-2 cursor-pointer group group-hover:text-yellow-500 ">
      
       <div className="match bg-zinc-100 rounded-lg shadow-md">
       <div className="match bg-white rounded-sm shadow-md">
    <div className="match-header flex items-center justify-center px-4 py-2 flex-col ">
   
      <div className="match-tournament flex items-center font-bold text-xl text-gray-700 group-hover:text-yellow-500">
    
        <span className="truncate">{match.league}</span>
      </div>

      </div>
      </div>
         <div className="match-content flex">
           <div className="column flex items-center justify-center p-4 w-1/3">
             <div className="team team--home flex flex-col items-center">
               <div className="team-logo w-[80px] h-[80px] rounded-full bg-white  m-2 p-4 shadow-md overflow-hidden">
                 <Image src={match.team1logo} alt="" width={70} height={70} className="w-full h-full object-center" />
               </div>
               <h2 className="team-name text-lg font-semibold text-gray-700 group-hover:text-yellow-500 mt-2">{match.team1}</h2>
             </div>
           </div>
           <div className="column flex flex-col justify-center items-center p-4 w-1/3">
             <div className="match-details text-center">
               <div className="match-date text-gray-600 group-hover:text-yellow-500">
               <strong> PM {match.date}</strong>
               </div>
               <div className="match-score flex items-center justify-center mt-2">
                {match.score ? 
                (
                  <>
                  <span className="match-score-number match-score-number--leading text-4xl font-bold text-gray-700 group-hover:text-yellow-500">{match.score.split('-')[0]}</span>
                  <span className="match-score-divider mx-2 text-4xl font-bold text-gray-700 group-hover:text-yellow-500">-</span>
                  <span className="match-score-number text-4xl font-bold text-gray-700 group-hover:text-yellow-500">{match.score.split('-')[1]}</span>
                  </>
                 ) : (
              null
                  )

        }
               </div>
               {match.match_status == "بث مباشر" ? (
                 <>
                   <div className="match-status flex items-center text-sm font-medium text-red-600 bg-red-100 rounded-md px-3 py-2 ml-auto animate-pulse">
                   <span className="flex items-center justify-center w-3 h-3 rounded-full bg-red-600"></span>
                   <span className="mr-2">           {match.match_status}</span>
                
                 </div>
                 </>
               
                ) : (
                <div className="match-time-lapsed text-white bg-gray-500 rounded-md px-3 py-2 font-medium text-sm mt-2 group-hover:text-yellow-500 ">
                {match.match_status}
                </div>
                )}
                

                  
           
               <div className="match-bet-options flex flex-wrap justify-center mt-2">
                  <div className="match-bet-option flex items-end justify-end bg-green-100 text-green-600 rounded-md px-3 py-1 font-medium text-sm mr-2 mb-2 group-hover:text-yellow-500">
               <strong className="truncate">ضد</strong>
                </div>
                </div>
              </div>
            
            </div>
            <div className="column flex items-center justify-center p-4 w-1/3">
              <div className="team team--away flex flex-col items-center">
              <div className="team-logo w-[80px] h-[80px] rounded-full bg-white  m-2 p-4 shadow-md overflow-hidden">
                 <Image src={match.team2logo} alt="" width={70} height={70} className="w-full h-full object-center" />
               </div>
                <h2 className="team-name text-lg font-semibold text-gray-700 mt-2 group-hover:text-yellow-500">{match.team2}</h2>
              </div>
            </div>
          </div>
          <div className="match bg-white rounded-sm shadow-md">
    <div className="match-header flex items-center justify-evenly px-4 py-2 ">
   
      <div className="match-tournament flex items-center font-medium text-gray-700 group-hover:text-yellow-500">
    
        <span className="truncate">{match.commentary}</span>
      </div>


   
   <div className="match-tournament flex items-center font-medium text-gray-700 group-hover:text-yellow-500">
 
     <span className="truncate">{match. channel}</span>
   </div>
     
     
      </div>
      </div>
      </div>
      </div>
    
      
        ))}


      

        


              
          
</section>
     <section className='seo flex flex-col items-center justify-center w-full  bg-gray-100 py-8'>
      <div className='flex flex-col items-center justify-center w-full '>
        <h2 className='text-4xl font-bold text-gray-700 mb-4'>SEO</h2>
        <p className='text-gray-600 text-lg text-center mb-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
        
      </div>
</section>
      </div>
      <div></div>
     
    </main>
   <Footer />
    </>
  )
}


export async function getStaticProps() {

    const res = await fetch('http://127.0.0.1:8000/api/yesterday')
    const matches = await res.json()
  
    return {
      props: {
        matches,
      },
    }
  }
