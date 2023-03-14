import React from 'react'
import { Image, Popover, Button, Text, Modal, useModal } from "@nextui-org/react";
import Link from 'next/link';

export default function Nav(props) {


  const { setVisible, bindings } = useModal();

  return (
    <nav className='flex justify-between h-16'>
        <div className='lg:pt-3 pt-4'>
           <a href='/'><img src='namelogo.svg' className='lg:h-12 lg:pb-2 h-8 pt-2'/></a> 
        </div>
        <div className='lg:flex lg:justify-end lg:mt-5 lg:mb-5 lg:mr-20 lg:visible invisible hidden'>
            <ul className='flex'>
            <li className={`px-3 rounded-lg text-white font-medium hover:bg-slate-100 hover:text-slate-900`}><a href='/'>Home</a></li>
            <li className={`px-3 rounded-lg font-medium ${props.acolor} hover:bg-slate-100 hover:text-slate-900`}><a href='/about'>About</a></li>
            <li className={`px-3 rounded-lg ${props.wcolor} font-medium hover:bg-slate-100 hover:text-slate-900`}><a href='/works'>Works</a></li>
            <li className={`px-3 rounded-lg ${props.kcolor} font-medium hover:bg-slate-100 hover:text-slate-900`}><a href='/know'>Know More</a></li>
            <li className={`px-3 rounded-lg ${props.ccolor} font-medium hover:bg-slate-100 hover:text-slate-900`}><a href='/contact'>Contact</a></li>   
            </ul>
        </div>
        <div className='lg:hidden pt-3'>      
        <Button auto flat onPress={() => setVisible(true)}>
        Open modal
      </Button>
      <Modal
        scroll
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
         
        </Modal.Header>
        <Modal.Body>
         <div className='bg-teal-900'>
            hello
         </div>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
        </div>
    </nav>
  )
}
