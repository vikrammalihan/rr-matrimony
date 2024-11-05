"use client";
import React from "react";
import Link from "next/link";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function Topbar1() {
  return (
    <div className="tf-top-bar bg_white line">
      <div className="px_15 lg-px_40">
        <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
          <ul className="tf-top-bar_item tf-social-icon d-flex gap-10">
            <li>
              <a
                href="#"
                className="box-icon w_28 round social-facebook bg_line"
              >
                <i className="icon fs-12 icon-fb" />
              </a>
            </li>
            <li>
              <a href="#" className="box-icon w_28 round social-twiter bg_line">
                <i className="icon fs-10 icon-Icon-x" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="box-icon w_28 round social-instagram bg_line"
              >
                <i className="icon fs-12 icon-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="box-icon w_28 round social-tiktok bg_line">
                <i className="icon fs-12 icon-tiktok" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="box-icon w_28 round social-pinterest bg_line"
              >
                <i className="icon fs-12 icon-pinterest-1" />
              </a>
            </li>
          </ul>
          <div className="text-center overflow-hidden">
            <Swiper
              className="swiper tf-sw-top_bar"
              slidesPerView={1}
              modules={[Autoplay]}
              speed={1000}
              autoplay={{
                delay: 2000,
              }}
              loop
            >
              <SwiperSlide className="swiper-slide">
                <p className="top-bar-text fw-5">
                  World's #1 Website for Rawa Rajput {" "}
                  <Link
                    href={`/shop-default`}
                    title="all collection"
                    className="tf-btn btn-line"
                  >
                    Matchmaking
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </p>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <p className="top-bar-text fw-5">
                  Registor Free and Find Your Perfect Match
                </p>
              </SwiperSlide>
              
              <SwiperSlide className="swiper-slide">
                <p className="top-bar-text fw-5">
                  Join Now and Find Your Perfect Match
                </p>
              </SwiperSlide>

            </Swiper>
          </div>

          
        </div>
      </div>
    </div>
  );
}
