import Link from 'next/link'

export default function Footer() {


    return (
        <footer className="bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center text-xs">
                <div className="footer-link flex flex-col md:flex-row">
                   
                    <a href="#" className=" text-gray-700 hover:underline px-4">من نحن</a>
                    <a href="#" className=" text-gray-700 hover:underline px-4">سياسة الخصوصية</a>
                    <a href="#" className=" text-gray-700 hover:underline px-4">حقوق الملكية</a>
            </div>
            <div className="footer-social flex justify-center md:justify-end">
            </div>
            <div className="footer-copy text-gray-700 mt-4">
                <Link href="/">
                <strong className="font-bold">  كورة لايف | koora live</strong>
                </Link>
              

            </div>
               

                        

                
            </div>
            
        </footer>
    )
}