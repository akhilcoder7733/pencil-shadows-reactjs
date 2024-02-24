import React from 'react'
import Welcome from '../Pages/Welcome'
import Features from '../Pages/Features'
import About from '../Pages/About'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
        <meta charSet="utf-8" />
        {/* Add more meta tags as needed */}
      </Helmet>
     <Welcome/> 
     <Features/> 
     <About/> 
    </>
  )
}

export default Home
