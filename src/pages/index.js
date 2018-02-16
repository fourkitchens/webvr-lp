import React from 'react'
import Link from 'gatsby-link'
import Splash from '../components/Splash/Splash'

const IndexPage = () => (
  <div>
    <Splash />
    <h1 style={{
      color: 'red'
    }}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
