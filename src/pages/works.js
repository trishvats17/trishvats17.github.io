import Head from 'next/head'
import { Card, Text, Image, Link, Segment, Grid, Divider, Row } from "@nextui-org/react";
import { worklogo, works } from '@/content';
import Nav from './Nav';



function Works() {
    return (
      <>
      <Head>
        <title>Trishabh Vats</title>
        <meta name="description" content="Trisab's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className="bg-yellow-600 font-poppins">
           <section>
           <Nav acolor='text-black' wcolor='text-white' kcolor='text-black' ccolor='text-black'/>
            <div className='bg-white'><Card.Divider/></div>
            </section>
            <section className='bg-yellow-600 lg:pt-40 lg:pr-80 lg:pl-80 pl-10 pr-10 pt-16'>
            <Text><b className='text-white flex text-center text-3xl lg:text-5xl' >I AM WORKING ON A MASTERPIECE AND I HAVEN&apos;T QUITE FINISHED IT YET. -LEWIS HAMILTON</b></Text>
            </section>

              
            <section className='bg-yellow-600 lg:pt-20 '>
              <div className='lg:flex lg:justify-between lg:pr-60 lg:pl-60 lg:pt-15 lg:pb-40 grid grid-cols-2 pt-10 pb-10 p-10'>
                {worklogo.map(i => {
              return(
                  <div className='' key={i.id}>
                    <Image
                  src={i.logo}
                  alt="Picture of the author"
                  height={60}
                  width={60}
                  className='p-2 lg:p-1'
                  />
                  <Text className='text-center lg:pt-2 pt-2 text-sm' color='white'>{i.logoname}</Text>
                  </div>
              )  
              })}
            
              </div>
            </section>

              {works.map(i => {
                return(
            <section className='bg-yellow-600 lg:pl-40 lg:pr-40 lg:flex lg:pb-10 pl-5 pr-5' key={i.id}  >
            <div className='lg:w-50'>
                <div className='flex'>
                <div>
                  <Image src={i.worklogo} width={50} height={50} alt='.'/>
                </div>
                <Text color='white' className='pl-4 pt-2'><b>{i.workname}</b></Text>
                </div>
                <div className='wrap md:pt-5'>
                <Text><b className='text-white flex text-start text-3xl lg:text-5xl' >{i.workhead}</b></Text>
                </div>
                <div className='flex pt-5 pl-1'>
                  <div>
                      <Image src={i.authorlogo} width={40} height={40} alt='.'/>
                  </div>
                <Text color='white' className='lg:pl-4 lg:pt-3 lg:text-sm pt-3 pl-2 text-xs'><b>{i.author}</b></Text>
                </div>
                <div>
                <Text color='#fff' className=' flex text-start text-sm pt-4 lg:text-xl lg:pt-6 lg:pr-20 ' >{i.desc}</Text>
                </div>
                <div className='bg-yellow-600 lg:pt-12 lg:flex lg:visible hidden float-left'>
                <Image src='div.svg' alt='.'/>
                </div>
            </div>
                                                              
            <div className='lg:w-90 lg:pl-10 lg:pt-4 pt-4'>
              <Card css={{mw: '700px'}} >
                <Card.Body className="bg-yellow-600"> 
                  <Image src={i.image} width={1100} className="rounded-lg" alt='.' />
                </Card.Body>
              </Card>
                  
                <div className='lg:pt-5 pt-4 lg:flex lg:justify-between'>
                  <div className='lg:justify-between'>
                    <div className='flex'>
                      <div>
                        <Image src={i.rolelogo} width={40} height={40} alt='.'/>
                      </div>
                      <Text color='white' className='pl-2 pt-3 lg:text-sm text-xs lg:w-20'><b>{i.role}</b></Text>
                      <Text color='white' className='pl-2 pt-3 lg:text-sm text-xs'>{i.roledesc}</Text>
                    </div>
                    <div className='flex pt-2'>
                      <div>
                         <Image src={i.projectlogo} width={40} height={40} alt='.'/>
                      </div>
                      <Text color='white' className='pl-2 lg:pt-3 lg:text-sm text-xs pt-3 lg:w-28 w-22'><b>{i.project}</b></Text>
                      <Text color='white' className='lg:pl-2 pl-2 lg:pt-3 lg:text-sm pt-3 text-xs'>{i.projectdesc}</Text>
                    </div>
                  </div>
                  <div className='lg:text-end lg:w-36 flex flex-row lg:flex-col lg:pt-0 pt-10 justify-center'>
                    <div className='lg:pb-2 pb-20'>
                      <Link href={i.button1link}><button className="p-2 mr-2 md:mr-0 rounded-full bg-white hover:bg-black hover:text-white text-sm "><b>{i.button1name}</b></button></Link>
                    </div>
                    <div>
                      <Link href={i.button2link}><button className={`${i.button2Visible} p-2 ml-2 lg:ml-0 rounded-full bg-white hover:bg-black hover:text-white text-sm`}><b>{i.button2name}</b></button></Link> 
                    </div>
                  </div>
                </div> 
            </div>
          </section>
                )  
                })}


          <section className='bg-yellow-600 lg:pl-40 flex pl-5'>
            <div className='pt-2'>
              <Text color='white'><b>Mesmerized?</b></Text>
              <Text className='pt-3 pb-3'><b className='text-white text-2xl lg:text-3xl' >LET&apos;S EXCHANGE<br></br> NUMBERS?</b></Text>
              <button className="rounded-full bg-white p-3 mb-20 mt-2 hover:bg-black hover:text-white">Reach Out!</button>
            </div>
          </section>
      
      </main>
    </>
      )
  }
  
  export default Works