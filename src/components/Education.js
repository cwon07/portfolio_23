import React, { useRef } from 'react'
import { useScroll, motion, scroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({certification, school, time, address, desc}) => {
    const ref = useRef(null);


    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
>

            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {certification}&nbsp;| {school}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {desc}
            </p>
        </motion.div>
    </li>
}
const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return(
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
               
               
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details 
                    certification="Software Engineering Immersive Certificate" school="General Assembly"
                    time="October 2023" address="Online"
                    desc="Completed 420 hours of intensive, expert-led education and training that focuses on establishing development fundamentals, frameworks, data modeling, and object-oriented programming, which helped gain hands-on experience in full-stack software development, honing my skills and knowledge to meet the industry's highest standards."/>

                    <Details 
                    certification="BA English Literature" school="University of British Columbia" 
                    time="2011" address="Vancouver, Canada"
                    desc="Graduated with a deep understanding of literary analysis, critical thinking, and effective communication through the study of diverse literary works. Gained strong analytical and writing skills, making them adept at interpreting and communicating complex ideas in various professional contexts."/>
                </ul>
            </div>
        </div>
    )
}

export default Education