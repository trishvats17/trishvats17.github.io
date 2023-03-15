import React from 'react'
import { Image, Popover, Button, Text, Modal, useModal, Navbar, Card  } from "@nextui-org/react";
import Link from 'next/link';

export default function Nav(props) {


  const { setVisible, bindings } = useModal();

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
        <div className='lg:invisible lg:hidden visible p-3'>
        <Button color={''} auto flat onPress={() => setVisible(true)}>
        <Image src='hamburger.svg' alt='.'/>
      </Button>
      <Modal
        scroll
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
 
        <Modal.Body>
          <Link href={'/'}><Text className='bg-white p-10 text-center font-bold text-black text-2xl' id="modal-description">Home</Text></Link>
          <Link href={'/about'}><Text color='white' className='bg-teal-800 font-bold p-16 text-center text-2xl -mr-6 -ml-6 ' id="modal-description">About</Text></Link>
          <Link href={'/works'}><Text color='white' className='bg-yellow-600 font-bold p-16 -mt-4 text-center text-2xl -mr-6 -ml-6 ' id="modal-description">Works</Text></Link>
          <Link href={'/know'}><Text color='white' className='bg-blue-600 font-bold p-16 -mt-4 text-center text-2xl -mr-6 -ml-6 ' id="modal-description">Know More</Text></Link>
          <Link href={'/contact'}><Text color='white' className='bg-yellow-800 font-bold p-16 -mt-4 text-center text-2xl -mr-6 -ml-6 ' id="modal-description">Contact</Text></Link>
        </Modal.Body>
       
      </Modal>
    
        </div>
        
    </nav>
  )
}
