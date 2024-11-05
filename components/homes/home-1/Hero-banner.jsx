"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { slides } from "@/data/heroslides";

import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className=" slider-effect-fade position-relative">

      {/* <!-- BANNER & SEARCH --> */}
    <section>
        <div className="str">
            <div className="hom-head">
                <div className="container">
                    <div className="row">
                        <div className="hom-ban">
                            <div className="ban-tit">
                                <span><i class="no1">#1</i> Matrimony Site for Rawa Rajput</span>
                                <h1>Find your<br/><b>Right Match</b> here</h1>
                                <p>Most trusted Rawa Rajput Matrimony Brand in the World.</p>
                            </div>
                            <div className="ban-search chosenini">
                                <form>
                                    <ul>
                                        <li className="sr-look">
                                            <div className="form-group">
                                                <label>I'm looking for</label>
                                                <select className="chosen-select">
                                                    <option value="">I'm looking for</option>
                                                    <option value="Men">Men</option>
                                                    <option value="Women">Women</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li className="sr-age">
                                            <div className="form-group">
                                                <label>from Age</label>
                                                <select className="chosen-select">
                                                    <option value="">Age</option>
                                                    <option value="">18</option>
                                                    <option value="">19</option>
                                                    <option value="">20</option>
                                                    <option value="">21</option>
                                                    <option value="">22</option>
                                                    <option value="">23</option>
                                                    <option value="">24</option>
                                                    <option value="">25</option>
                                                    <option value="">26</option>
                                                    <option value="">27</option>
                                                    <option value="">28</option>
                                                    <option value="">29</option>
                                                    <option value="">30</option>
                                                    <option value="">31</option>
                                                    <option value="">32</option>
                                                    <option value="">33</option>
                                                    <option value="">34</option>
                                                    <option value="">35</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li className="sr-age">
                                            <div className="form-group">
                                                <label>to Age</label>
                                                <select className="chosen-select">
                                                    <option value="">Age</option>
                                                    <option value="">18</option>
                                                    <option value="">19</option>
                                                    <option value="">20</option>
                                                    <option value="">21</option>
                                                    <option value="">22</option>
                                                    <option value="">23</option>
                                                    <option value="">24</option>
                                                    <option value="">25</option>
                                                    <option value="">26</option>
                                                    <option value="">27</option>
                                                    <option value="">28</option>
                                                    <option value="">29</option>
                                                    <option value="">30</option>
                                                    <option value="">31</option>
                                                    <option value="">32</option>
                                                    <option value="">33</option>
                                                    <option value="">34</option>
                                                    <option value="">35</option>
                                                    <option value="">36</option>
                                                    <option value="">37</option>
                                                    <option value="">38</option>
                                                    <option value="">39</option>
                                                    <option value="">40</option>
                                                    <option value="">41</option>
                                                    <option value="">42</option>
                                                    <option value="">43</option>
                                                    <option value="">44</option>
                                                    <option value="45">45</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li className="sr-reli">
                                            <div className="form-group">
                                                <label>Height from</label>
                                                <select className="chosen-select">
                                                    <option selected="true" value="" >Any Height</option>
                                                    <option>4ft</option>
                                                    <option>4ft 1in</option>
                                                    <option>4ft 2in</option>
                                                    <option>4ft 3in</option>
                                                    <option>4ft 4in</option>
                                                    <option>4ft 5in</option>
                                                    <option>4ft 6in</option>
                                                    <option>4ft 7in</option>
                                                    <option>4ft 8in</option>
                                                    <option>4ft 9in</option>
                                                    <option>4ft 10in</option>
                                                    <option>4ft 11in</option>
                                                    <option>5ft</option>
                                                    <option>5ft 1in</option>
                                                    <option>5ft 2in</option>
                                                    <option>5ft 3in</option>
                                                    <option>5ft 4in</option>
                                                    <option>5ft 5in</option>
                                                    <option>5ft 6in</option>
                                                </select>
                                            </div>
                                        </li>

                                        <li className="sr-reli">
                                            <div className="form-group">
                                                <label>to Height</label>
                                                <select className="chosen-select">
                                                    <option selected="true" value="any">Any Height</option>
                                                    <option>4ft 5in</option>
                                                    <option>4ft 6in</option>
                                                    <option>4ft 7in</option>
                                                    <option>4ft 8in</option>
                                                    <option>4ft 9in</option>
                                                    <option>4ft 10in</option>
                                                    <option>4ft 11in</option>
                                                    <option>5ft</option>
                                                    <option>5ft 1in</option>
                                                    <option>5ft 2in</option>
                                                    <option>5ft 3in</option>
                                                    <option>5ft 4in</option>
                                                    <option>5ft 5in</option>
                                                    <option>5ft 6in</option>
                                                    <option>5ft 7in</option>
                                                    <option>5ft 8in</option>
                                                    <option>5ft 9in</option>
                                                    <option>5ft 10in</option>
                                                    <option>5ft 11in</option>
                                                    <option>6ft</option>
                                                    <option>6ft 1in</option>
                                                    <option>6ft 2in</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li className="sr-cit">
                                            <div className="form-group">
                                                <label>City</label>
                                                <select className="chosen-select">
                                                    <option value="">Location</option>
                                                    <option value="">Any location</option>
                                                    <option value="">New Delhi</option>
                                                    <option value="">Utter Pradesh</option>
                                                    <option value="">Mumbai</option>
                                                  
                                                </select>
                                            </div>
                                        </li>
                                        <li className="sr-btn">
                                            <input type="submit" value="Search" />
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- END --> */}

    {/* <!-- BANNER SLIDER --> */}
    <section>
        <div className="hom-ban-sli">
            <div>
                <ul className="ban-sli">
                    <li>
                        <div className="image">
                            <img src="images/banner/ban-bg.jpg" alt="" loading="lazy"/>
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="images/banner/banner.jpg" alt="" loading="lazy"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    {/* <!-- END --> */}

    </div>
  );
}
