import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import '../../styles/Carousel.css';

import { Card } from './Card';

const Carousel = ({ urls = [] }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const openPreview = (url) => {
    setPreviewUrl(url);
  };

  const closePreview = () => {
    setPreviewUrl(null);
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation
        pagination={{ clickable: true, type: 'progressbar' }}
        virtual={{ slides: urls }}
        loop={false} // loop desactiva centrado con virtual
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {urls.map((url, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div onClick={() => openPreview(url)} style={{ cursor: "pointer" }}>
              <Card url={url} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal Preview */}
      {previewUrl && (
        <div className="preview-overlay" onClick={closePreview}>
          <div className="preview-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePreview}>✖</button>
            <img src={previewUrl} alt="preview" className="preview-img" />
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;









