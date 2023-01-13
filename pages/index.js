import React from 'react'
import {Product, FooterBanner, HeroBanner} from '../components'

const Home = ({ products, bannerData }) => {
  return (
  <div>
    
    <HeroBanner />
    <div className='products-heading'>
      <h2>베스트 셀러</h2>
      <p> 스피커 </p>
    </div>

    <div className='products-container'>
      {['상품1', '상품2'].map((product)=>product)}
    </div>

    <FooterBanner />
  </div>
  )
}

export default Home