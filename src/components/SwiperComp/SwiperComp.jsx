import PropTypes from 'prop-types'
import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/scss";
import "./SwiperComp.scss"

function SwiperComp({ children, slidesPerView, spaceBetween, breakpoints }) {
  return (
    <div className="swiper">
      <Swiper
        // install Swiper modules
        className="swiper-inner"
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}>
        {children}
      </Swiper>
      <div className="custom-prev">
        <i className="ri-arrow-left-s-line"></i>
      </div>
      <div className="custom-next">
        <i className="ri-arrow-right-s-line"></i>
      </div>
    </div>
  );
}

SwiperComp.propTypes = {
    children: PropTypes.node.isRequired,
    slidesPerView: PropTypes.number.isRequired,
    spaceBetween: PropTypes.number.isRequired,
    breakpoints: PropTypes.shape({
        0: PropTypes.shape({
            slidesPerView: PropTypes.number.isRequired,
            spaceBetween: PropTypes.number.isRequired,
        })
    })
    

}

export default SwiperComp