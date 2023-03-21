import Head from 'next/head'
import { Card, Text, Image } from "@nextui-org/react";
import {home1, home5} from '../content';
import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Trishabh Vats</title>
        <meta name="description" content="Trisabh's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />

      </Head>

      <main className="bg-slate-100	 font-poppins">
        <section className='flex justify-center lg:pr-20 lg:pl-20 -mt-3 '>
          <section className='flex flex-wrap p-5 justify-center '>
              <div className='flex flex-wrap justify-center -mb-3 xl:grid xl:grid-cols-3 '>
                <Card isHoverable variant="bordered" css={{ w:340, h:340, margin:7 }} >
                <Card.Body>
                <Text className=''><b className='pl-2'>{home1.name}</b></Text>
                <Text className='pl-2'>{home1.tag}</Text>
                <Text className=''><b className='flex absolute bottom-20 pl-2 xl:pr-4 text-2xl '>{home1.quote}</b></Text>
                <div className='absolute inset-x-3 bottom-14'> 
                  <Card.Divider/>
                  <Text className='font-poppins pl-2 absolute -bottom-7 text-sm'>{home1.location}</Text>

                </div>            
                </Card.Body>
                </Card>

                {home5.map(i => {
                  
                return(

                <Card isHoverable className='cursor-pointer' variant="bordered" key={i.id} css={{ w:340, h:340, margin:7  }}>
                <Card.Body onClick={() => router.push(`${i.route}`) } className={i.color}>
                  <div className='pt-3'>
                    <Image
                    width={200}
                    height={200}  
                    src={i.icon}
                    alt="Default Image"
                  />
                  <div className='pt-4 absolute inset-x-3'>
                    <Text><b className='pl-2 text-white text-base'>{i.heading}</b></Text>
                    <div className='bg-white mt-2 mb-1'><Card.Divider/></div>
                    <Text color='white' className='pl-2 pr-3 text-xs absolute'>{i.desc}</Text>
                  </div>
                
                  </div>
                
                </Card.Body>
                </Card>
                    )  
                    })}
              </div>
          </section>
        </section>  
      </main>
    </>
  )
}
