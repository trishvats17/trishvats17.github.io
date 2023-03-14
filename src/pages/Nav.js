import React from 'react'
import { Image, Popover, Button, Text, Modal, useModal } from "@nextui-org/react";
import Link from 'next/link';

export default function Nav(props) {

  return (
    <nav className='flex justify-between h-16'>
    
        <div className='pt-4'>
        <Link href="/"><Image src='namelogo.svg' alt="Trishab Vats"/></Link>
         
        </div>
        <div className='lg:flex lg:justify-end lg:mt-5 lg:mb-5 lg:mr-20 lg:visible invisible hidden'>
            <ul className='flex'>
            <li className={`px-3 rounded-lg text-black font-medium hover:bg-slate-100 hover:text-slate-900`}><Link href='/'>Home</Link></li>
            <li className={`px-3 rounded-lg font-medium ${props.acolor} hover:bg-slate-100 hover:text-slate-900`}><Link href='/about'>About</Link></li>
            <li className={`px-3 rounded-lg ${props.wcolor} font-medium hover:bg-slate-100 hover:text-slate-900`}><Link href='/works'>Works</Link></li>
            <li className={`px-3 rounded-lg ${props.kcolor} font-medium hover:bg-slate-100 hover:text-slate-900`}><Link href='/know'>Know More</Link></li>
            <li className={`px-3 rounded-lg ${props.ccolor} font-medium hover:bg-slate-100 hover:text-slate-900`}><Link href='/contact'>Contact</Link></li>   
            </ul>
        </div>
        
    </nav>
  )
}
