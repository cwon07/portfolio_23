import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import MainImage from '@/components/MainImage'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Christine Wong | Portfolio</title>
        <meta name="description" content="Christine Wong - Full Stack Developer - Portfolio" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-full md:w-full'>
              <MainImage alt='undraw - innovative' className='w-full h-auto lg:hidden md:inline-block md:w-full' 
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design" className='!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/dummy.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:bg-light dark:text-dark md:p-2 md:px-4 md:text-base'>Resume <LinkArrow className={"w-6 ml-1"}/></Link>
                <Link href="mailto:jumiryoo@gmail.com" target={"_blank"}
                className='ml-4 flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark  hover:dark:border-light hover:dark:text-light md:p-2 md:px-4 md:text-base'>Contact <LinkArrow className={"w-6 ml-1"}/></Link>
              </div>
            </div>
          </div> 
        </Layout>
      </main>
    </>
  )
}
