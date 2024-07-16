import React from 'react'
import Layout from '../../components/Layout'
import Intro from './Intro'
import MarketingStrat from './MarketingStrat'
import WhyMarketing from './WhyMarketing'

const Home = () => {
  return (
    <div>
      <Layout>
        <Intro/>
        <MarketingStrat />
        <WhyMarketing />
      </Layout>
    </div>
  )
}

export default Home
 