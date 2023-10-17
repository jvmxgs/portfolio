import Navbar from './components/Navbar'
import { GoArrowUpRight } from 'react-icons/go'
import { GiSandsOfTime } from 'react-icons/gi'
import { RiArrowUpDoubleFill } from 'react-icons/ri'
import { FaAsterisk } from 'react-icons/fa'
import { CiCircleCheck } from 'react-icons/ci'
import { IoIosArrowForward } from 'react-icons/io'

export default function Home () {
  return (
    <main className="mx-auto max-w-6xl" id='top'>
      <article className="h-screen flex flex-col gap-3 px-2">
        <Navbar />
        <div className='flex flex-col-reverse items-center md:flex-row gap-6 h-full justify-center'>
          <section className="md:w-1/3 flex flex-col gap-3 justify-center items-center md:items-start">
            <span className="text-dim-gray text-3xl">Hello, i'm</span>
            <span className="text-yellow-green text-4xl font-semibold">Víctor Gómez</span>
            <span className="text-white text-4xl text-center md:text-left">Fullstack Web Developer</span>
            <p className='text-nobel text-sm capitalize block md:hidden'>
              <span className='text-yellow-green font-semibold'>6+</span> years experience
            </p>
            <p className="text-nobel my-2">
              Proficient writing web applications. Based in Mexico
            </p>
            <a href='/cv-victor-gomez.pdf' className='text-white text-sm capitalize flex items-center'>
              Download resume <IoIosArrowForward className='text-yellow-green' />
            </a>
          </section>
          <section className="md:w-1/3 flex items-center px-2 md:px-0">
            <img src="me.png" alt="Victor Gomez" className="rounded-full w-full" loading="lazy"/>
          </section>
          <section className="w-1/3 hidden md:flex justify-end items-center">
            <article className="rounded-md bg-dark-gray p-6 w-fit flex flex-col gap-4">
              <section>
                <p className="text-yellow-green text-3xl">6+</p>
                <span className="text-nobel text-sm whitespace-nowrap capitalize">Years of experience</span>
              </section>
              <hr className="border-mid-grey" />
              <section>
                <p className="text-yellow-green text-3xl">9</p>
                <span className="text-nobel text-sm whitespace-nowrap capitalize">projects on production</span>
              </section>
              <hr className="border-mid-grey" />
              <section>
                <p className="text-yellow-green text-3xl">5+</p>
                <span className="text-nobel text-sm whitespace-nowrap capitalize">years laravel experience</span>
              </section>
              <hr className="border-mid-grey" />
              <section>
                <p className="text-yellow-green text-3xl">5+</p>
                <span className="text-nobel text-sm whitespace-nowrap capitalize">years vue experience</span>
              </section>
            </article>
          </section>
        </div>
      </article>
      <article className="bg-dark-gray flex flex-col py-10 gap-8" id="projects">
        <section className='flex flex-col items-center'>
          <span className='capitalize text-nobel text-sm'>Latest works</span>
          <p className='capitalize text-white text-3xl'>Explore my <span className='text-yellow-green'>projects</span></p>
        </section>
        <section className='grid md:grid-col md:grid-cols-2 p-8 gap-6'>
          <div className='flex justify-center items-center'>
            <img className='w-full' src="ejam.png" alt="Responsive page" loading="lazy" />
          </div>
          <div className='flex flex-col'>
            <div className='w-full md:w-2/3 h-full self-start flex flex-col justify-center items-center md:items-start gap-3'>
              <p className='capitalize text-yellow-green text-sm'>Frontend development</p>
              <p className='text-white text-3xl text-center md:text-left'>Responsive Page</p>
              <p className='text-nobel text-sm text-center md:text-left'>I took on a code challenge, bringing a Figma design to life. With Tailwind CSS and Next.js, I meticulously crafted a responsive website that captures the essence of the design. Every pixel and layout adapts seamlessly, creating an engaging user experience.</p>
              <a href='https://jvmxgs.github.io/ejam' target='_blank' className='rounded-full border border-seal-brown hover:border-yellow-green hover:bg-yellow-green text-white hover:text-dark-gray w-10 h-10 text-md flex justify-center items-center'>
                <GoArrowUpRight />
              </a>
            </div>
          </div>
        </section>
        <section className='flex flex-col-reverse md:grid md:grid-cols-2 p-8 gap-6'>
          <div className='flex flex-col'>
            <div className='w-full md:w-2/3 h-full self-end flex flex-col justify-center items-center md:items-start gap-3'>
              <p className='capitalize text-yellow-green text-sm'>Fullstack development</p>
              <p className='text-white text-3xl text-center md:text-left'>Creepy Bestiary & Horror Stories</p>
              <p className='text-nobel text-sm text-center md:text-left'>Get ready for a spine-tingling experience! With React and Express.js, I'm crafting a site that delves into the chilling world of monsters and creepy stories. From vampires to La Llorona, it's a bestiary of nightmares, with a dedicated section for haunting tales shared by the community. Stay tuned for a journey into the macabre.</p>
              <span className='cursor-pointer rounded-full border border-seal-brown hover:border-yellow-green hover:bg-yellow-green text-white hover:text-dark-gray w-10 h-10 text-md flex justify-center items-center'>
                <GiSandsOfTime className='text-xl' />
              </span>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-full' src="project0.png" alt="Creepy Bestiary & Horror Stories" loading="lazy" />
          </div>
        </section>
        <section className='grid md:grid-col md:grid-cols-2 p-8 gap-6'>
          <div className='flex justify-center items-center'>
            <img className='w-full' src="blog.png" alt="My personal blog" loading="lazy" />
          </div>
          <div className='flex flex-col'>
            <div className='w-full md:w-2/3 h-full self-start flex flex-col justify-center items-center md:items-start gap-3'>
              <p className='capitalize text-yellow-green text-sm'>Fullstack development</p>
              <p className='text-white text-3xl text-center md:text-left'>My personal blog</p>
              <p className='text-nobel text-sm text-center md:text-left'>My personal blog is a tech-driven project in the works. Designed with Laravel for the backend and Vue.js for the frontend, it's a dynamic platform under development. Explore the future home of thought-provoking content, interactive features, and a tech-savvy experience.</p>
              <a href='#' target='_blank' className='rounded-full border border-seal-brown hover:border-yellow-green hover:bg-yellow-green text-white hover:text-dark-gray w-10 h-10 text-md flex justify-center items-center'>
                <GoArrowUpRight />
              </a>
            </div>
          </div>
        </section>
        <section className='flex flex-col-reverse md:grid md:grid-cols-2 p-8 gap-6'>
          <div className='flex flex-col'>
            <div className='w-full md:w-2/3 h-full self-end flex flex-col justify-center items-center md:items-start gap-3'>
              <p className='capitalize text-yellow-green text-sm'>Fullstack development</p>
              <p className='text-white text-3xl text-center md:text-left'>User Registration & Airbnb Explorer</p>
              <p className='text-nobel text-sm text-center md:text-left'>I embraced a code challenge by building a user-friendly platform made with React, ExpressJS and MongoDB. Users can register, explore Airbnb listings, read reviews, and view them in a structured table. The result is a simple yet efficient solution that demonstrates my skills in web development and user interaction.</p>
              <span className='cursor-pointer rounded-full border border-seal-brown hover:border-yellow-green hover:bg-yellow-green text-white hover:text-dark-gray w-10 h-10 text-md flex justify-center items-center'>
                <GiSandsOfTime className='text-xl' />
              </span>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-full' src="airbnb.png" alt="airbnb project" loading="lazy" />
          </div>
        </section>
      </article>
      <article className="grid grid-cols-1 md:grid-cols-3 py-10 gap-8" id="experience">
        <section className='md:flex justify-end hidden'>
          <span className='text-9xl bg-cinder border border-tuna w-48 h-48 rounded-full flex items-center justify-center text-yellow-green'>
            <FaAsterisk />
          </span>
        </section>
        <section className='flex flex-col items-center md:items-start col-span-2'>
          <span className='capitalize text-nobel text-sm'>My resume</span>
          <p className='capitalize text-white text-3xl text-center md:text-left'>Real <span className='text-yellow-green'>problem solutions</span> Experience</p>
          <div className='md:bg-cinder rounded-md w-full grid grid-cols-1 md:grid-cols-11 p-8 mt-8 gap-x-4 gap-y-8'>
            <article className='flex gap-3 col-span-5'>
              <CiCircleCheck className='text-yellow-green text-3xl' />
              <section className='flex flex-col'>
                <span className='text-nobel text-sm'>2022 - 2023</span>
                <span className='capitalize text-white text-lg'>Senior Software Engineer</span>
                <span className='capitalize text-dim-gray'>Wishpond LTD</span>
              </section>
            </article>
            <div className='border-l border-dim-gray w-px h-full row-span-2 hidden md:block'></div>
            <article className='flex gap-3 col-span-5'>
              <CiCircleCheck className='text-yellow-green text-3xl' />
              <section className='flex flex-col'>
                <span className='text-nobel text-sm'>2014 - 2016</span>
                <span className='capitalize text-white text-lg'>Jr Full Stack Web Developer</span>
                <span className='capitalize text-dim-gray'>INIFECH</span>
              </section>
            </article>
            <article className='flex gap-3 col-span-5'>
              <CiCircleCheck className='text-yellow-green text-3xl' />
              <section className='flex flex-col'>
                <span className='text-nobel text-sm'>2020 - 2022</span>
                <span className='capitalize text-white text-lg'>Lead Fullstack Developer</span>
                <span className='capitalize text-dim-gray'>Webforce HQ</span>
              </section>
            </article>
            <article className='flex gap-3 col-span-5'>
              <CiCircleCheck className='text-yellow-green text-3xl' />
              <section className='flex flex-col'>
                <span className='text-nobel text-sm'>2013 - 2014</span>
                <span className='capitalize text-white text-lg'>Jr Full Stack Web Developer</span>
                <span className='capitalize text-dim-gray'>Trazzos Web</span>
              </section>
            </article>
          </div>
        </section>
      </article>
      <a href='#top' className='bg-yellow-green w-10 h-10 rounded-lg fixed bottom-10 right-10 text-xl justify-center items-center hidden md:flex'>
        <RiArrowUpDoubleFill />
      </a>
    </main>
  )
}
