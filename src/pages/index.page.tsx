import type { NextPage } from 'next'
import { Button } from '@/components/common/button/Button'

const Home: NextPage = () => {
  return (
    <section>
      <Button onClick={() => console.log('clicked')}>Button</Button>
      <h1>aaa</h1>
      <h6>aaa</h6>
    </section>
  )
}

export default Home
