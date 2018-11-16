import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Card from '../components/card';

const IndexPage = () => (
  <Layout>

    <div class="hero">
      <h2>Daaaaaaniiiiels efa</h2>
      <div class="circleW1"></div>

      <div class="circle1"></div>
      <div class="circle2"></div>
      
      <div class="circleR1"></div>
      <div class="circleR2"></div>
    
    <div class="circleY2"></div>
    <buttonNext>WEITER</buttonNext>
    <p>Ein Versuch ok. Ein Versuch.</p>
      <Link to="/page-2/">Zum Gästebuch</Link>
    </div>
    <div className="Cards"></div>
    <h3></h3>
    <Card 
      title="von index"
      text="auch von index" 
      image={require('../images/gatsby-astronaut.png')}
      />
  </Layout>
)

export default IndexPage
