import AnimatedText from '@/components/AnimatedText'
import React, { useEffect } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import profilePic from '../../public/images/profile/ProfilePic.png'
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
               <AnimatedText text="About Me" className='mb-16 lg:!text-6xl sm:!text-6xl xs:!text-4xl sm:mb-0'/>
               <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
               <div className='col-span-3 relative h-max rounded-3xl'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]'/>
                    <Image src={profilePic} 
                           alt="Christine" 
                           className="w-full h-auto rounded-2xl"
                           priority
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
                <div className='col-span-4 flex flex-col mt-20 items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <p className='font-medium'>
                    Hi, I'm Christine Wong, a full stack developer with a passion for creating beautiful, functional, 
                    and user-centered digital experiences. I am always looking for 
                    new and innovative ways to bring visions to life.
                    </p>
                    <br></br>
                    <p className='font-medium'>
                    With many years of post-secondary experience specializing in the international department, I enjoy bridging the gap between engineering and design that is intuitive, user-friendly and pleasing to the eye - combining my technical knowledge with my keen eye for design to create beautiful, user-friendly projects that anyone can use with ease encompassing any language and background. I aim always to build scalable and efficient applications while providing intuitive and engaging user experiences.
                    </p>
                    <br></br>
                    <p className='font-medium'>
                    When not in front of a computer screen, I’m probably baking some desserts to share with friends and family, enjoying a nice cup of coffee, or capturing the surroundings through the lens of my camera.
                    </p>
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