import Head from 'next/head'
import { Card, Text, Image, Link, Segment, Grid, Divider, Row } from "@nextui-org/react";
import { knowmore, worklogo, works } from '@/content';
import Nav from './Nav';


function Know() {
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
      <main className="bg-blue-600 font-poppins">
          <section>
          <Nav acolor='text-black' wcolor='text-black' kcolor='text-white' ccolor='text-black'/>
              <div className='bg-white'><Card.Divider/></div>
              </section>
              <section className='bg-blue-600 pt-16 lg:pt-40 lg:pr-72 lg:pl-72 pl-10 pr-10 lg:pb-20'>
              <Text><b className='text-white flex text-center text-3xl md:text-5xl' >BECAUSE GETTING TO KNOW ME BETTER IS EXACTLY HOW YOU WANT TO SPEND YOUR TIME, RIGHT?</b></Text>
              </section>


              {knowmore.map(i => {
                return(
                    <section className='bg-blue-600 lg:pl-40 pl-5 pr-5 lg:pr-40 lg:flex lg:pb-20 pt-10' key={i.id}>
                        <div className='w-60'>
                            <div className='flex'>
                            <div className='flex'>
                              <Image src={i.logo} width={50} height={50} alt='icon'/>
                            </div>
                            <Text color='white' className='ml-4 mt-2'><b>{i.topic}</b></Text>
                            </div>
                            <div className='wrap lg:pt-5'>
                            <Text><b className='text-white text-3xl lg:text-4xl' >{i.what}</b></Text>
                            </div>
                            <div className='bg-blue-600 pt-10 lg:flex lg:visible hidden float-left'>
                            <Image src='div.svg' alt=''/>
                            </div>
                        </div>
                        <div className='lg:flex lg:p-20'>
                          <div className='w-80'>
                              <div className='lg:mb-20 lg:h-40'>
                              <Text color='white' className=' pt-3 lg:text-2xl text-2xl'><b>{i.topic1}</b></Text>
                              <Text color='white' className=' pt-3 lg:text-xs'>{i.topic1desc}</Text>
                              </div>
                              <div>
                              <Text color='white' className=' pt-3 lg:text-2xl text-2xl'><b>{i.topic3}</b></Text>
                              <Text color='white' className=' pt-3 lg:text-xs'>{i.topic3desc}</Text>
                              </div>
                          </div>
                          <div className='w-20'></div>
                          <div className='w-80 '>                      
                              <div className='md:mb-20 md:h-40'>
                              <Text color='white' className=' pt-3 lg:text-2xl text-2xl'><b>{i.topic2}</b></Text>
                              <Text color='white' className=' pt-3 lg:text-xs'>{i.topic2desc}</Text>
                              </div>
                              
                              <div>
                              <Text color='white' className=' pt-3 lg:text-2xl text-2xl'><b>{i.topic4}</b></Text>
                              <Text color='white' className=' pt-3 lg:text-xs'>{i.topic4desc}</Text>
                              </div>
                          </div>
                        </div>
                    </section>
                )  
                })}






          <section className='bg-blue-600 lg:pl-40 pl-5 flex'>
               <div className='lg:pt-2 pt-16'>
                <Text className='pt-3 pb-3'><b className='text-white text-3xl lg:text-3xl' >SAME<br></br> INTERESTS?!</b></Text>
                <Link href={'/contact'}><button className="rounded-full bg-white p-3 mb-20 mt-2 hover:bg-black hover:text-white text-black">Let&apos;s Catch Up!</button></Link>
                </div>
          </section>

          
  
      </main>
    </>
      )
  }
  
  export default Know