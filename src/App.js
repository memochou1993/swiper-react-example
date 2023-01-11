import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/memochou1993/nft-leopard-cat-images/main/output';

function App() {
  const swiperRef = useRef();
  return (
    <>
      <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
      <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          [...Array(10).keys()].map((n) => (
            <SwiperSlide key={n}>
              <img src={`${IMAGE_BASE_URL}/${n}.png`} alt={n} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default App;
