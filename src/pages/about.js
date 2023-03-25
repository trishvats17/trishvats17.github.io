import Head from 'next/head'
import { Card, Text, Image} from "@nextui-org/react";
import { about, about1, aboutfronttext } from '@/content';
import Nav from './Nav';
import Link from 'next/link';



function About() {

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

        <main className="bg-teal-900 font-poppins">
            <section>
              <Nav acolor='text-white' wcolor='text-black' kcolor='text-black' ccolor='text-black'/>
                <div className='bg-white'><Card.Divider/></div>
                </section>

                <section className='bg-teal-900 lg:pt-40 lg:pr-80 lg:pl-80 pl-5 pr-10 pt-16'>
                <Text><b className='text-white flex text-center text-3xl lg:text-5xl' >{aboutfronttext.desc}</b></Text>
                </section>
                <section className='bg-teal-900 lg:pt-20 lg:pb-60 pt-10 pr-20 pl-20 flex justify-center'>
                    <Image
                    className=''
                    src="trishabh.svg"
                    alt="Picture of the author"      
                    />
                </section>

               <section className='bg-teal-900 lg:pl-40 pt-5 pl-5 lg:pb-10 pb-5 lg:flex grid lg:grid-cols-2'>
               <div className="lg:w-80">
                        <Text><b className='text-white flex text-start text-1xl lg:text-3xl text-3xl ' >{about1.main_heading}</b></Text>                   
                </div>
               </section>
               
               <section>
                  {about.map(i => {
        
                    return(
                      <section key={i.id}>
                        <section className='bg-teal-900 lg:pl-40 pl-5 flex'>
                        <div className="grid lg:grid-cols-2">
                        <div className='pr-6'>
                                  <Text><b className='text-white flex text-start text-2xl pb-4 lg:text-xl lg:pt-3' >{i.heading}</b></Text>
                                  <Text color='#fff' className=' flex text-start text-1xl lg:text-x lg:pt-2 lg:pr-60' >{i.desc}</Text>
                                  <Image width={2} className=' float-left lg:pt-4 lg:flex lg:visible hidden' src='div.svg' alt='.'/>
                                  <Image width={2} className=' float-left flex visible lg:hidden' src='div-sm.svg' alt='.'/>

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
               <section className='bg-teal-900 lg:pl-40 pl-5 flex'>
               <div className='pt-2 '>
                <Text><b className='text-white text-3xl lg:text-3xl' >IF MY EXPERIENCE RESONATES WITH YOU. </b></Text>
                <Link href={'/contact'}><button className="rounded-full bg-white p-3 mb-20 mt-2 hover:bg-black hover:text-white text-black">Reach Out</button></Link>
                </div>
               </section>
        </main>
      </>
    
      )
  }
  
  export default About