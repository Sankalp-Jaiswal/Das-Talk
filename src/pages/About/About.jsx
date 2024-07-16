import React from 'react'
import Layout from '../../components/Layout'
import Image from './Image'
import Details from './Details'
import Panel from './Panel'
import InfiniteScroll from './InfiniteScroll'

const About = () => {
  return (
    <div>
      <Layout>
        <Image />
        <Details />
        <Panel />
        <InfiniteScroll />
      </Layout>
    </div>
  )
}

export default About
