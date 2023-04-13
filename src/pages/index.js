import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import ProductCards from '@/Components/ProductCards'
import HomeMainImg from '@/Components/HomeMainImg'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* main Images show in Ads */}
        <div>
          <HomeMainImg/>
        </div>
        {/* Products cards */}
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          
                <ProductCards ProductImage={"https://i.pinimg.com/564x/80/25/c3/8025c3a145cbedc0fe652f012f6754f9.jpg"} ProductName={"niki"} ProductDetails={`fit or good`} ProductPrice={200} />
                <ProductCards ProductImage={"https://i.pinimg.com/564x/80/25/c3/8025c3a145cbedc0fe652f012f6754f9.jpg"} ProductName={"niki"} ProductDetails={`fit or good`} ProductPrice={200} />
                <ProductCards ProductImage={"https://i.pinimg.com/564x/80/25/c3/8025c3a145cbedc0fe652f012f6754f9.jpg"} ProductName={"niki"} ProductDetails={`fit or good`} ProductPrice={200} />
                <ProductCards ProductImage={"https://i.pinimg.com/564x/80/25/c3/8025c3a145cbedc0fe652f012f6754f9.jpg"} ProductName={"niki"} ProductDetails={`fit or good`} ProductPrice={200} />
                <ProductCards ProductImage={"https://i.pinimg.com/564x/80/25/c3/8025c3a145cbedc0fe652f012f6754f9.jpg"} ProductName={"niki"} ProductDetails={`fit or good`} ProductPrice={200} />
         

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
