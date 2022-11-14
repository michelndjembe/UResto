<template>
    <div class="review" id="review">
        <h3 class="sub-heading">Customer's review</h3>
        <h1 class="heading">what they say</h1>

        <div class="wrapper">

            <swiper :breakpoints="swiperOptions.breakpoints" :autoplay="{ delay: 7500, disableOnInteraction: true,}"
                :pagination="{clickable: true}" :loop="true" a:navigation="true" :modules="modules"
                class="review-slider">

                <swiper-slide>
                    <div class="slide">
                        <font-awesome-icon icon="fa-solid fa-quote-right" class="icon1" />
                        <div class="user">
                            <img src="./../../assets/food-picture/big/no_bg/eggplants-stir-fried-with-minced.jpg" />
                            <div class="user-info">
                                <h3 class="username">Albert NGAH</h3>
                                <div class="marks">
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star-half-alt" class="icon" />
                                </div>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur dolore
                                quibusdam minima optio eos quo perferendis, deserunt totam fuga nihil, atque, pariatur
                                architecto repudiandae aliquid ipsa velit nam quas. Sunt temporibus soluta laudantium
                                quae eum corporis molestiae? Laboriosam, odit reiciendis doloribus quae consectetur
                                sequi officiis fuga adipisci cum assumenda!
                            </p>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="slide">
                        <font-awesome-icon icon="fa-solid fa-quote-right" class="icon1" />
                        <div class="user">
                            <img src="./../../assets/food-picture/big/no_bg/eggplants-stir-fried-with-minced.jpg" />
                            <div class="user-info">
                                <h3 class="username">Light BISSOU</h3>
                                <div class="marks">
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star-half-alt" class="icon" />
                                </div>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur dolore
                                quibusdam minima optio eos quo perferendis, deserunt totam fuga nihil, atque, pariatur
                                architecto repudiandae aliquid ipsa velit nam quas. Sunt temporibus soluta laudantium
                                quae eum corporis molestiae? Laboriosam, odit reiciendis doloribus quae consectetur
                                sequi officiis fuga adipisci cum assumenda!
                            </p>
                        </div>
                    </div>
                </swiper-slide>


                <swiper-slide>
                    <div class="slide">
                        <font-awesome-icon icon="fa-solid fa-quote-right" class="icon1" />
                        <div class="user">
                            <img src="./../../assets/food-picture/big/no_bg/eggplants-stir-fried-with-minced.jpg" />
                            <div class="user-info">
                                <h3 class="username">Alexia YOMB</h3>
                                <div class="marks">
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star-half-alt" class="icon" />
                                </div>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur dolore
                                quibusdam minima optio eos quo perferendis, deserunt totam fuga nihil, atque, pariatur
                                architecto repudiandae aliquid ipsa velit nam quas. Sunt temporibus soluta laudantium
                                quae eum corporis molestiae? Laboriosam, odit reiciendis doloribus quae consectetur
                                sequi officiis fuga adipisci cum assumenda!
                            </p>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="slide">
                        <font-awesome-icon icon="fa-solid fa-quote-right" class="icon1" />
                        <div class="user">
                            <img src="./../../assets/food-picture/big/no_bg/eggplants-stir-fried-with-minced.jpg" />
                            <div class="user-info">
                                <h3 class="username">Serge Fondja</h3>
                                <div class="marks">
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                                    <font-awesome-icon icon="fa-solid fa-star-half-alt" class="icon" />
                                </div>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur dolore
                                quibusdam minima optio eos quo perferendis, deserunt totam fuga nihil, atque, pariatur
                                architecto repudiandae aliquid ipsa velit nam quas. Sunt temporibus soluta laudantium
                                quae eum corporis molestiae? Laboriosam, odit reiciendis doloribus quae consectetur
                                sequi officiis fuga adipisci cum assumenda!
                            </p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>


        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";


export default {
    name: 'ReviewPage',
    props: {},
    data() {
        return {
            APIData: [],
            swiperOptions: {
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 1
                    },

                    800: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },

                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Autoplay, Pagination, Mousewheel, Keyboard],
        };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(./../../assets/fonts/css/_fonts.scss);
@import url(./../../assets/_themes.scss);


.review {
    background: #ffffff;
    width: 100vw;

    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;


    .sub-heading {
        text-align: center;
        color: var(--main);
        font-size: 2rem;
        font-weight: 900;
        padding-top: 1rem;
        font-family: Lobster;
    }

    .heading {
        text-align: center;
        color: black;
        font-size: 2.7rem;
        font-family: polya;
        font-weight: bolder;
        text-transform: uppercase;
        margin-bottom: 2rem;
        color: var(--second);
    }

    .wrapper {
        width: 100vw;
        background-color: rgb(230, 230, 230);
        padding: 2rem auto;

        .review-slider {
            width: 90%;

            .slide {
                padding: .2rem 2rem;
                border: .1rem solid rgba(0, 0, 0, .2);
                border-radius: .5rem;
                margin: 2rem 1.2rem;
                background-color: rgb(255, 255, 255);
                box-shadow: var(--shadow);
                overflow: hidden;
                position: relative;

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--second);
                    clip-path: circle(90px at 0% 0%);
                    transition: 0.2s ease-in-out;
                }

                &:hover {
                    padding: 2rem;

                    &:before {
                        clip-path: circle(230px at 90% 90%);
                    }

                    .user {
                        padding-bottom: 1.5rem;
                        justify-content: left;
                        bottom: 0;
                        margin-top: 2rem;

                        img {
                            width: 4rem;
                        }

                        h3 {
                            font-size: 1.1rem;
                            padding-bottom: .5rem;
                        }

                        p {
                            top: 0;

                        }

                        .icon {
                            color: gold;
                        }
                    }
                }

                .fa-quote-right {
                    position: absolute;
                    top: 2rem;
                    right: 2rem;
                    font-size: 2.7rem;
                    color: var(--main);

                }

                .user {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                    transition: 0.2s ease-in-out;
                    position: relative;
                    bottom: -5rem;


                    img {
                        width: 7rem;
                        border-radius: 50%;
                        border: 1px solid var(--second);
                        padding: 0;
                        object-fit: cover;
                        transition: 0.1s ease-in-out;

                    }

                    h3 {
                        color: var(--main);
                        font-size: 120%;
                        font-family: Lobster;
                        transition: 0.2s ease-in-out;

                    }

                    .icon {
                        font-size: 1rem;
                        color: var(--second);
                        transition: 0.2s ease-in-out;
                    }

                    p {
                        font-size: .9rem;
                        line-height: 1.2;
                        color: var(--light-color);
                        text-transform: none;
                        text-align: justify;
                        font-family: langar;
                        position: relative;
                        top: -1000px;
                        transition: 0.2s ease-in-out all;
                    }
                }



            }
        }
    }




}

@media screen and (max-width: 870px) {
    .review{
        .wrapper{
            .review-slider{
                .slide{
                    &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--second);
                    clip-path: circle(90px at 0% 0%);
                    transition: 0.2s ease-in-out;
                }

                    padding: 2rem;

                    &:before {
                        clip-path: circle(230px at 90% 90%);
                    }

                    .user {
                        padding-bottom: 1.5rem;
                        justify-content: left;
                        bottom: 0;
                        margin-top: 2rem;

                        img {
                            width: 4rem;
                        }

                        h3 {
                            font-size: 1.1rem;
                            padding-bottom: .5rem;
                        }

                        p {
                            top: 0;

                        }

                        .icon {
                            color: gold;
                        }
                    }
                
                }
            }
        }
    }
}
</style>