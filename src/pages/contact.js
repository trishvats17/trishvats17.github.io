import Head from 'next/head'
import { Card, Text, Image, Link, Segment, Grid, Divider, Row } from "@nextui-org/react";
import { contact, knowmore, worklogo, works } from '@/content';
import { BsArrowRightCircle } from 'react-icons/bs';
import Nav from './Nav';


function Contact() {
    return (
      <>
      <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-EZ7P9312VS"></script>
  <script>
    {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-EZ7P9312VS');`}
  </script>
        <title>Trishabh Vats</title>
        <meta name="description" content="Trisab's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className="bg-yellow-900 font-poppins">
          <section>
          <Nav acolor='text-black' wcolor='text-black' kcolor='text-black' ccolor='text-white'/>
              <div className='bg-white'><Card.Divider/></div>
              </section>
              <section className='bg-yellow-900 flex justify-center pt-10  pl-10 pr-10  lg:pt-40 pb-20'>
              <Text><b className='text-white flex text-center text-3xl lg:text-5xl' >NOW THAT YOU KNOW ME.<br/> LET&apos;S GET A COFFEE <br/> SOMETIME?</b></Text>
              </section>

              <section className='lg:flex lg:pl-40 lg:pr-40 justify-between pl-5 pr-5'>
                {contact.map((i) => {
                return(
                    <section className='bg-yellow-900 lg:pb-20 w-80' key={i.id}>
                          <Text color='white' className='pt-3 text-2xl'>{i.social}</Text>
                          <Text color='white' className='pt-3 text-sm h-20'>{i.desc}</Text>
                          <Link href={i.linkifany}><BsArrowRightCircle className='h-10 w-10 pr-4 text-white cursor-pointer hover:text-black'/></Link>
                    </section>
                )  
                })}
              </section>


          <section className='bg-yellow-900 md:pl-40 md:pb-20 pl-5 flex'>
               <div className='pt-2 pb-5'>
                  <Text className='pt-3'><b className='text-white text-1xl md:text-sm' >We&apos;re all done here!</b></Text>
                  <Text className='pb-3'><b className='text-white text-2xl md:text-3xl' >SEE YOU LATER 🐊</b></Text>
                </div>
          </section>

          
  
      </main>
    </>
      )
  }
  
  export default Contact