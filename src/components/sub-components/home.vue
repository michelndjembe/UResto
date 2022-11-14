<template>
  <div class="homePage" id="home">
    <div class="wrapper">
      <swiper :spaceBetween="20" :centeredSlides="true" :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"  :navigation="true" :modules="modules" class="mySwiper">

        <swiper-slide>
          <div class="slide">
            <div class="content">
              <span>Our special dishes</span>
              <h1>spicy noodless</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio neque adipisci laborum
                dolore</p>
              <a href="#" class="btn">Order Now</a>
            </div>

            <div class="image">
              <img src="./../../assets/food-picture/big/no_bg/eggplants-stir-fried-with-minced.jpg" />
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="slide">
            <div class="content">
              <span>Our special dishes</span>
              <h1> spicy noodless</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio neque adipisci laborum
                dolore</p>
              <a href="#" class="btn">Order Now</a>
            </div>

            <div class="image">
              <img src="./../../assets/food-picture/big/no_bg/fried-chicken-drumsticks-crispy-skin.png" />
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="slide">
            <div class="content">
              <span>Our special dishes</span>
              <h1> spicy noodless</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio neque adipisci laborum
                dolore</p>
              <a href="#" class="btn">Order Now</a>
            </div>

            <div class="image">
              <img src="./../../assets/food-picture/big/no_bg/hot-spicy-spaghetti-pasta-tomato.png" />
            </div>
          </div>
        </swiper-slide>
      </swiper>


    </div>
  </div>


  <div class="dishes" id="dishes">
    <Dishes-page />
  </div>


</template>

<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";


import DishesPage from "./dishes.vue";
// let nav= document.getElementById('#navmenu');
export default {
  name: "HomePage",
  props: {},
  components: {
    DishesPage,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay, Pagination, Mousewheel, Keyboard],
    };
  },
  data() { },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(./../../assets/fonts/css/_fonts.scss);
@import url(./../../assets/_themes.scss);



.homePage {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(./../../assets/bg/bg2.jpeg) 20% 40%;
  background-size: cover;
  background-color: rgb(230, 230, 230);
  height:100vh;
}



.wrapper {
  position: relative;
  top: 2rem;
  width: 95vw;
  margin: 10vh auto;

  //   .ruban{
  //   position: relative;
  //   float: left;
  //   left: 0;
  //   top: 0;
  //   width: 6rem;
  //   height: 6rem;
  //   content: url(./../../assets/bg/ruban.png);

  // }

  .slide {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 80vw;
    padding: .3rem 1rem;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.4);



    .content {
      flex: 1 1 20rem;
      gap: .5rem;
      position: relative;
      width: 60%;
      border-right: var(--second) solid .3rem;
      text-align: end;
      padding: 1rem;

      span {
        color: var(--main);
        font-size: 1.5rem;
        font-family: Lobster;
      }

      h1 {
        color: var(--second);
        font-family: polya;
        font-size: 250%;
        overflow: hidden;
        font-weight: 600;


        b {
          font-family: Langar;
        }


        // animation: typewriter 3s steps(44) .2s 3 normal both,
        // eraser 3s steps(44) .1s 
        //   blinkTextCursor 500ms steps(44) infinite normal;

        // @keyframes typewriter {
        //   from {
        //     width: 0;
        //   }

        //   to {
        //     width: 22rem;
        //   }
        // }

        // @keyframes blinkTextCursor {
        //   from {
        //     border-right-color: rgba(255, 255, 255, .75);
        //   }

        //   to {
        //     border-right-color: transparent;
        //   }
        // }


      }

      p {
        color: black;
        font-size: 1.2rem;
        padding: .5rem 0;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      }

      .btn {
        margin-top: 1rem;
        display: inline-block;
        font-size: .8rem;
        color: #fff;
        background-color: var(--second);
        border-radius: .5rem;
        font-weight: 600;
        cursor: pointer;
        padding: .8rem 3rem;


        &:hover {
          background-color: var(--main);
          color: #eee;
          letter-spacing: .08rem;
          transition: .2s all;
        }
      }
    }

    .image {
      flex: 1 1 15rem;
      width: 40%;
      height: 60vh;
      margin: 1rem auto;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;

      }
    }


  }
}








@media screen and (max-width: 700px) {
  .homePage {
    font-size: 0.9rem;
  }


  .wrapper {
    margin: 7vh auto;

    .slide {
      width: 100%;
      height: 100%;

      .content {
        width: 100%;

        span {
          color: var(--main);
          font-size: 1.3rem;
        }

        p {
          font-size: 1rem;
        }
      }

      .image {
        width: 140%;
        height: 40vh;

        img {
          width: 100%;
          height: 100%;
        }
      }


    }
  }
}

@media screen and (max-width: 500px) {
  .homePage {

    .wrapper {

      .slide {
        width: 90%;

        span {
          font-size: 1.2rem;
        }

        h1 {
          font-size: 190%;
        }

        p {
          font-size: 1rem;
          padding: .5rem 0;
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
      }

      .image {
        margin: 0;
      }
    }
  }
}

@media screen and (max-height: 500px) {

  .homePage {
    
    .wrapper {
      
      .slide {
        margin-bottom: 2rem;
        span {
          font-size: 1.2rem;
        }

        h1 {
          font-size: 190%;
        }

        p {
          font-size: 1rem;
          padding: .5rem 0;
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
      }

      .image {
        margin: 0;
      }
    }
  }
}

</style> 