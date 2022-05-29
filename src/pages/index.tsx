import type { NextPage } from 'next'
import Head from 'next/head'
import BbBackgroundVideo from '@/components/atoms/BbBackgroundVideo'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <BbBackgroundVideo src='/videos/top_firstview.mp4' />
    <div className='mt-96'>aaaa</div>
    <div className='mt-96'>aaaa</div>
    <div className='mt-96'>aaaa</div>
    <div className='mt-96'>aaaa</div>
  </>
)

export default Home
