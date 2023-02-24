import Header from '@/components/Header'
import Jobs from '@/components/Jobs'
import Project from '@/components/Project'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Design from '@/components/Design'
import Redes from '@/components/Redes'
import Head from 'next/head'


export default function Home() {
  return (
    <>

    <Head>
      <title>Enzo Prina | Frontend Developer</title>
      <meta name='title' content='Frontend developer' />
    </Head>


    <Header/>
    <Jobs/>
    <Project />
    <About />
    <Contact />
    <Design/>
    <Redes />
    </>
  )
}
