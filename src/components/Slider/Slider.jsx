import PropTypes from "prop-types";

import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import * as St from "./Slider.styled";
import { SwiperSlide } from "swiper/react";

const Slider = ({ data, time, link, index }) => {
    return (
        <St.StyledSwiper
            initialSlide={index}
            spaceBetween={14}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 14,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 14,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 14,
                },
            }}
            autoplay={{
                delay: time,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <Link to={`${link}${item.id}`} className="item">
                        <img className="image" src={item.image} alt="" />
                    </Link>
                </SwiperSlide>
            ))}
        </St.StyledSwiper>
    );
};

Slider.propTypes = {
    data: PropTypes.array.isRequired,
    time: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

export default Slider;
