import Head from 'next/head'
import { Card, Text, Image} from "@nextui-org/react";
import { about } from '@/content';
import Nav from './Nav';



function About() {

    return (
        <>
        <Head>
          <title>Trishabh Vats</title>
          <meta name="description" content="Trisab's Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="bg-teal-900 font-poppins">
            <section>
               <Nav acolor='text-black' wcolor='text-white' kcolor='text-white' ccolor='text-white' macolor='text-teal-900'/>
                <div className='bg-white'><Card.Divider/></div>
                </section>
                <section className='bg-teal-900 lg:pt-40 lg:pr-80 lg:pl-80 pl-10 pr-10 pt-16'>
                <Text><b className='text-white flex text-center text-3xl lg:text-5xl' >“DESIGN IS NOT JUST WHAT IT LOOKS LIKE AND FEELS LIKE. DESIGN IS HOW IT WORKS.” — STEVE JOBS</b></Text>
                </section>
                <section className='bg-teal-900 lg:pt-20 lg:pb-60 pt-10 pr-20 pl-20 flex justify-center'>
                    <Image
                    className=''
                    src="trishabh.svg"
                    alt="Picture of the author"
                 
                    />
                </section>
                
               <section className='bg-teal-900 lg:pl-40 pt-10 pl-10 flex'>
               <div className="grid lg:grid-cols-2">
               <div className='pr-10'>
                        <Text><b className='text-white flex text-start text-1xl lg:text-3xl text-3xl' >I'M PRACTICALLY A FOSSIL IN THIS FIELD WITH MY WHOPPING TWO YEARS OF EXPERIENCE.</b></Text>
                        <Text><b className='text-white flex text-start text-2xl pb-4 lg:text-xl lg:pt-10 pt-5' >How it Started?</b></Text>
                        <Text color='#fff' className=' flex text-start text-1xl lg:text-x lg:pt-2 lg:pr-60' >I Initially enrolled in college to pursue Mobile Application Development. but halfway through my senior year, I discovered that coding was not my passion. However, I remained determined to create digital products, and that's when I stumbled upon UX/UI design. Science then, I have been entirely self-taught and have gained 2 years of experience in this field.</Text>
                </div>
                <div className='lg:flex justify-center lg:pr-60 lg:-mt-20 lg:visible hidden'>
                    <Image
                    src="about1.svg"
                    alt="Picture of the author"
                    />
                </div>
                </div>
               </section>
               <section className='bg-teal-900 '>
               <img className='lg:ml-32 lg:pt-10 pl-10 pt-5 pb-5 lg:visible invisible lg:flex hidden' src='div.svg' alt='.'/>
               <img className=' lg:invisible visible lg:hidden pl-11 p-4' src='div-sm.svg' alt='.'/>
               </section>

               <section>
                  {about.map(i => {
                    
                    return(
                      <section key={i.id}>
                        <section className='bg-teal-900 lg:pl-40 pl-10 flex'>
                        <div className="grid lg:grid-cols-2">
                        <div className='pr-6'>
                                  <Text><b className='text-white flex text-start text-2xl pb-4 lg:text-xl lg:pt-3' >{i.heading}</b></Text>
                                  <Text color='#fff' className=' flex text-start text-1xl lg:text-x lg:pt-2 lg:pr-60' >{i.desc}</Text>
                                  <img className='lg:pt-4 lg:flex lg:visible hidden' src='div.svg' alt='.'/>
                                  <img className='lg:invisible lg:hidden visible pl-1 p-4' src='div-sm.svg' alt='.'/>
                        </div>
                          
                    <div className='lg:flex justify-center lg:pr-60 lg:visible hidden'>
                    <Image
                    src={i.image}
                    alt="Picture of the author"
                    className={`${i.hidden}`}
                    />
                </div>
                          </div>
                        </section>
                        
                      </section>
                      )  
                    })}
               </section>   
               <section className='bg-teal-900 lg:pl-40 pl-10 flex'>
               <div className='pt-5 '>
                <Text><b className='text-white text-3xl lg:text-3xl' >IF MY EXPERIENCE RESONATES WITH YOU. </b></Text>
                <button className="rounded-full bg-white p-3 mb-20 mt-2 hover:bg-black hover:text-white">Reach Out!</button>
                </div>
               </section>
        </main>
      </>
    
      )
  }
  
  export default About