import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';
// import Introdetail from './introdetail';


SwiperCore.use([EffectFade, Navigation]);


const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>새해 맞이 <br/>폭탄 세일중</h2>
                <h3> 오늘 주문 내일 도착 </h3>
                <a href="#" className="btn-shop"><i className="icon-right"></i>상품 보기</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>데일리룩 <br/>득템 찬스 75%</h2>
                <h3> 설레는 선물전 </h3>
                <a href="#" className="btn-shop"><i className="icon-right"></i>상품 보기</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <Introdetail /> */}
    </section>
  )
};




export default PageIntro