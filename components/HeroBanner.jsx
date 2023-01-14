
import React from 'react';
import Link from 'next/link';
import use from 'react';

// import { api } from '../lib/client';

const HeroBanner = ({ products }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">텍스트</p>
        <h3>미드</h3>
        <h1>물건</h1>
     
        {/* <img src={getProduct(products.image)} alt="headphones" className="hero-banner-image" /> */}

        <div>
          <Link href={`/product/`}>
            <button type="button">버튼</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>설명</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner