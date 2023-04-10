import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
   
      <main>
       <Navbar/>
          <div>
          <Image src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={500} height={100} />
          </div>
       <Footer/>
      </main>
    </>
  )
}
