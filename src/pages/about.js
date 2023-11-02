import AnimatedText from '@/components/AnimatedText'
import React, { useEffect } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import profilePic from '../../public/images/profile/no_background_profile.png'
import Image from 'next/image'
import { motionValue, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value); 
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Christine Wong | About Page</title>
                <meta name="description" content="about Christine" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
               <Layout className="pt-14">
               <AnimatedText text="Passion Fuels Purpose" className='mb-16 lg:!text-6xl sm:!text-6xl xs:!text-4xl sm:mb-0'/>
               <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
                    <p className='font-medium'>
                    Hi, I'm Christine Wong, a full stack developer with a passion for creating beautiful, functional, 
                    and user-centered digital experiences. I am always looking for 
                    new and innovative ways to bring visions to life.
                    </p>
                    <br></br>
                    <p className='font-medium'>
                    With many years of post-secondary experience specializing in international students, I enjoy bridging the gap between engineering and intuitive, user-focused design - combining my technical knowledge with my keen eye for design to create beautiful, user-friendly projects that anyone can use with ease regardless of language and background. I aim always to build scalable and efficient applications while providing intuitive and engaging user experiences.
                    </p>
                    <br></br>
                    <p className='font-medium'>
                    When not in front of a computer screen, I’m probably baking, sipping on a nice cup of coffee, and taking my camera around to snap photos and videos of beautiful surroundings.
                    </p>
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                    <Image src={profilePic} 
                           alt="Christine" 
                           className="w-full h-auto rounded-2xl"
                           priority
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
                <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={10} />+
                        </span>
                        <h2 classname="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">projects completed</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={15} />+
                        </span>
                        <h2 classname="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">years of work experience</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={20} />+
                        </span>
                        <h2 classname="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">satisfied clients</h2>
                    </div>
                </div>
               </div>
               <Skills />
               <Experience />
               <Education />
                </Layout> 
            </main>
        </>
    )
}
 
export default about