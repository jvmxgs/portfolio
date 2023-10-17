import Navbar from './components/Navbar'
import { GoArrowUpRight } from 'react-icons/go'
import { GiSandsOfTime } from 'react-icons/gi'

export default function Home () {
  return (
    <main className="mx-auto max-w-6xl">
      <article className="h-screen flex flex-col gap-3 px-2">
        <Navbar />
        <div className='flex flex-col-reverse items-center md:flex-row gap-6 h-full justify-center'>
          <section className="md:w-1/3 flex flex-col gap-3 justify-center items-center md:items-start">
            <span className="text-dim-gray text-3xl">Hello, i'm</span>
            <span className="text-yellow-green text-4xl font-semibold">Víctor Gómez</span>
            <span className="text-white text-4xl text-center md:text-left">Fullstack Web Developer</span>
            <p className="text-nobel">
                Proficient writing web applications.
            </p>
          </section>
          <section className="md:w-1/3 flex items-center px-2 md:px-0">
            <img src="me.png" alt="Victor Gomez" className="rounded-full w-full"/>
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
      <article className="bg-dark-gray flex flex-col py-10 gap-8">
        <section className='flex flex-col items-center'>
          <span className='capitalize text-nobel text-sm'>Latest works</span>
          <p className='capitalize text-white text-3xl'>Explore my <span className='text-yellow-green'>projects</span></p>
        </section>
        <section className='grid md:grid-col md:grid-cols-2 p-8 gap-6'>
          <div className='flex justify-center items-center'>
            <img className='w-full' src="/ejam.png" alt="" />
          </div>
          <div className='flex flex-col'>
            <div className='w-full md:w-2/3 h-full self-start flex flex-col justify-center items-center md:items-start gap-3'>
              <p className='capitalize text-yellow-green text-sm'>Frontend development</p>
              <p className='text-white text-3xl text-center md:text-left'>React Application</p>
              <p className='text-nobel text-sm text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, deserunt?</p>
              <a href='https://jvmxgs.github.io/ejam' target='_blank' className='rounded-full border border-seal-brown hover:border-yellow-green hover:bg-yellow-green text-white hover:text-dark-gray w-10 h-10 text-md flex justify-center items-center'>
                <GoArrowUpRight />
              </a>
            </div>
          </div>
        </section>
        <section className='flex flex-col-reverse md:grid md:grid-cols-2 p-8 gap-6'>
          <div className='flex flex-col'>
            <div className='w-full md:w-2/3 h-full self-end flex flex-col justify-center items-center md:items-start gap-3'>
              <p className='capitalize text-yellow-green text-sm'>Product design</p>
              <p className='text-white text-3xl text-center md:text-left'>Mobile Aplication design</p>
              <p className='text-nobel text-sm text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, deserunt?</p>
              <span className='cursor-pointer rounded-full border border-seal-brown hover:border-yellow-green hover:bg-yellow-green text-white hover:text-dark-gray w-10 h-10 text-md flex justify-center items-center'>
                <GiSandsOfTime className='text-xl' />
              </span>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-full' src="/project0.png" alt="" />
          </div>
        </section>
      </article>
    </main>
  )
}
