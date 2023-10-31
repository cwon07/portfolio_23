import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import {motion} from 'framer-motion'

const Footer = () => {
    return(
        <footer className='w-full border-t-2 border-solid border-dark
        font-medium text-lg dark:text-light dark:border-light
        '>
            <Layout className='py-8 flex itemx-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className='flex items-center'>Built With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
                    by&nbsp; <Link href="/">Christine Wong</Link>
                </div>
                
                <motion.a href="mailto:jumiryoo@gmail.com" target={"_blank"}
                 whileHover={{y:-2}}
                 whileTap={{scale:0.9}}>Say Hello &#128075;</motion.a>

            </Layout>
        </footer>
    )
}

export default Footer