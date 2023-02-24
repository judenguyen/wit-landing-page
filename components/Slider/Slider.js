import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from 'next/image'
import "swiper/css";
import "swiper/css/pagination";

import styles from './Slider.module.scss';

export default () => {
	return (
	  <Swiper 
		spaceBetween={50}
		slidesPerView={5}
		onSlideChange={() => console.log('slide change')}
		onSwiper={(swiper) => console.log(swiper)}
		breakpoints={{
			200: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1100: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}}
	  >
		<SwiperSlide>
		<div className="grid-element">
			<a href="https://www.youtube.com/watch?v=4QROaoXUizs" target="_blank">
			<img
				className="d-block w-100"
				src="/video1.jpg"
				alt="First slide"
			/>
			</a>


			</div>
		</SwiperSlide>
		<SwiperSlide>
		<div className="grid-element">
			<a href="https://www.youtube.com/watch?v=4QROaoXUizs" target="_blank">
				<img
					className="d-block w-100"
					src="/video2.jpg"
					alt="First slide"
				/>
			</a>

			</div>
		</SwiperSlide>
		<SwiperSlide>
		<div className="grid-element">
			<a href="https://www.youtube.com/watch?v=4QROaoXUizs" target="_blank">
				<img
					className="d-block w-100"
					src="/video3.jpg"
					alt="First slide"
				/>
			</a>
			</div>
		</SwiperSlide>
		<SwiperSlide>
		<div className="grid-element">
			<a href="https://www.youtube.com/watch?v=4QROaoXUizs" target="_blank">
				<img
					className="d-block w-100"
					src="/video4.jpg"
					alt="First slide"
				/>
			</a>

			</div>
		</SwiperSlide>
		<SwiperSlide>
		<div className="grid-element">
			<img
				className="d-block w-100"
				src="/video5.jpg"
				alt="First slide"
			/>

			</div>
		</SwiperSlide>
		<SwiperSlide>
		<div className="grid-element">
			<img
				className="d-block w-100"
				src="/video1.jpg"
				alt="First slide"
			/>

			</div>
		</SwiperSlide>
		<SwiperSlide>
		<div className="grid-element">
			<img
				className="d-block w-100"
				src="/video2.jpg"
				alt="First slide"
			/>

			</div>
		</SwiperSlide>
		...
	  </Swiper>
	);
  };