import React from 'react'
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from 'next/link';
import { AiOutlineMail } from "react-icons/ai";



const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-100 py-8 px-10 text-gray-800 flex justify-around'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <h2 className='text-xl font-bold mb-4'>Core Courses</h2>
                <ul className='space-y-2 text-lg'>
                    <li>Programming Fundamentals</li>
                    <li>Web2 Using NextJS</li>
                    <li>Earn as You Learn</li>
                </ul>
            </div>
            <div>
            <h2 className='text-xl font-bold mb-4'>Advanced Courses</h2>
                <ul className='space-y-2 text-lg'>
                    <li>Web 3 and Metaverse</li>
                    <li>Cloud-Native Computing</li>
                    <li>Artificial Intelligence (AI) and Deep Learning</li>
                    <li>Ambient Computing and IoT</li>
                    <li>Genomics and Bioinformatics</li>
                    <li>Network Programmability and Automation</li>
                </ul>
             </div>
             <div>
             <h2 className='text-xl font-bold mb-4'>Social Links</h2>
             <div className='flex space-x-4 mb-4'>
                <Link href="#"><FaFacebookF className='text-white w-6 h-6 rounded-full bg-blue-700 pt-1 pb-1 '/></Link>
                <Link href="#"><FaYoutube className='text-white w-6 h-6 rounded-full bg-red-600 pt-1 pb-1 ' /></Link>
                <Link href="#"><FaTwitter className='text-white w-6 h-6 rounded-full bg-blue-400 pt-1 pb-1 '/></Link>
                <Link href="#"><FaInstagram className='text-white w-6 h-6 rounded-full bg-pink-500 pt-1 pb-1 '/></Link>
                <Link href="#"><FaTiktok className='text-white w-6 h-6 rounded-full bg-black pt-1 pb-1 '/></Link>
             </div>
             <a href="mailto:navaid789@yahoo.com" className='text-blue-700 underline flex items-center gap-2'>
             <AiOutlineMail className='size-5'/>
            navaid789@yahoo.com</a>
         </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
