import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import Link from 'next/link'
import projectImage from '../../public/images/projects/project3.png'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
      <article className='w-full flex items-center justify-between relative rounded-br-2xl
      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light dark:text-light
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
      '>
      <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      '/>
        <Link href={link} target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
            <Image src={img} alt={title} className='w-full h-auto'
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width:1200px) 50vw, 50vw" />
        </Link> 

        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm
            '>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
                <Link href={link} target="_blank"
                className='ml-4 rounded-lg bg-dark text-light p-2.5 px-6 text-lg font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark sm:px-4 sm:text-base'> Visit Project</Link>
            </div>
        </div>
      </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:text-light dark:border-light xs:p-4
        '>
    <div className='absolute top-0 -right-5 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      '/>
            <Link 
                href={link} 
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
            <Image src={img} alt={title} className='w-full h-auto' />
        </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
            <Link 
                href={link} 
                target="_blank" 
                className='hover:underline underline-offset-2'
            >
            <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
            </Link>
            <div className='w-full mt-2 flex items-center justify-between'>
                <Link 
                    href={link} 
                    target="_blank"
                    className='text-lg font-semibold underline md:text-base'
                > Visit 
                </Link>
                <Link href={github} target="_blank" className='w-8 md:w-6'> 
                    {""}
                    <GithubIcon /> {""}
                </Link>
            </div>
        </div>
        </article>
    )
}
const projects = () => {
    return(
        <>
        <Head>
            <title>Christine Wong | Projects</title>
            <meta name="description" content='Projects of Christine Wong' />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16 '>
                <AnimatedText text="Imagination Trumps Knowledge" 
                className='mb-16 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl'/>

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject                       
                        title="Craft: The Local Brewery Finder"
                        img={projectImage}
                        summary="Craft features a search function that returns local breweries in your area. You can locate them easily on the provided Google Map, click on the brewery website to get more information."
                        link="https://ga-project-1.onrender.com/"
                        github="https://github.com/cwon07/project1"
                        type="Featured Project"
                        />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                       <Project 
                       title="Creme de la Creme - a digital recipe box"
                       img={projectImage}
                       type="Featured Project"
                       link="https://ga-project-2.onrender.com/"
                       github="https://github.com/cwon07/project2"
                       summary="Creme de la Creme makes it easy for users to save their favorite recipes in one esthetically-pleasing digital recipe box. Built as a full CRUD website with MongoDB database, using Vanilla JS, Node, Express, RESTful API."/>
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                       <Project 
                       title="Interview Tracker"
                       img={projectImage}
                       type="Featured Project"
                       link="https://interview-tracker-project-4.onrender.com/"
                       github="https://github.com/cwon07/project4_backend"
                       summary="Interview Tracker is an interactive app that allows users to save all the details of their interview preparations in one place. Created using the MERN stack. Save all the important details in one place so you’re good to go!"/>
                    </div>

                    <div className='col-span-12'>
                        <FeaturedProject                       
                        title="Craft: The Local Brewery Finder"
                        img={projectImage}
                        summary="loren ipsum blah blah blah"
                        link="/"
                        github="/"
                        type="Featured Project"
                        />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                       <Project 
                       title="Interview Tracker"
                       img={projectImage}
                       type="Featured Project"
                       link="/"
                       github="/"
                       summary=""/>
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                       <Project 
                       title="Interview Tracker"
                       img={projectImage}
                       type="Featured Project"
                       link="/"
                       github="/"
                       summary=""/>
                    </div>

                </div>
            </Layout>
        </main>
        </>
    )
}

export default projects 