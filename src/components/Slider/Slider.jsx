import PropTypes from "prop-types";

import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import * as St from "./Slider.styled";
import { SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { getAllMovie } from "../../utils/movieApi";

const Slider = ({ time, link, index }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await getAllMovie("Movie");
            console.log(data);
            setMovies(data);
        })();
    }, []);

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
            {movies.map((item) => (
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
    time: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

export default Slider;
