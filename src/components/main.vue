<template>

  <div class="head">
    <header class="header">

      <a href="#" class="logo">
        <font-awesome-icon icon="fas fa-utensils" style="color: #077965;" /> Food.
      </a>
      <nav class="navmenu" id="navmenu" v-bind:class="[isActive ? 'unshow' : 'show']">
        <a class="btn activedBtn" href="#home" @click="handleToggle()">Home</a>
        <a class="btn" href="#dishes" @click="handleToggle()">Dishes</a>
        <a class="btn" href="#about" @click="handleToggle()">About</a>
        <a class="btn" href="#menu" @click="handleToggle()">Menu</a>
        <a class="btn" href="#review" @click="handleToggle()">Review</a>
        <a class="btn" href="#order" @click="handleToggle()">Order</a>

      </nav>

      <div class="tools">
        <button class="rounded-btn" id="menu-bars" @click="handleToggle()">
          <font-awesome-icon icon="fa-solid fa-burger" class="icon" v-bind:class="[isActive ? 'close' : 'open']" />
          <font-awesome-icon icon="fa-solid fa-xmark" class="icon" v-bind:class="[isActive ? 'open' : 'close']" />
        </button>
        <button class="rounded-btn">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" @click="handleToggleSearch()" />
        </button>
        <button class="rounded-btn">
          <font-awesome-icon icon="fa-solid fa-heart" class="icon" />
        </button>
        <button class="rounded-btn">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" class="icon" />
        </button>
      </div>
    </header>

    <form action="" id="search-form" v-bind:class="[isSearching ? 'unshowsearch' : 'showsearch']">
      <input type="search" placeholder="Search here" name="" id="search-box">
      <label for="search-box" class="icon fa-search">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" />
      </label>
      <font-awesome-icon icon="fa-solid fa-xmark" class="icon" id="close" @click="handleToggleSearch()" />
    </form>
  </div>

  <div class="container">
    <div class="home">
      <Home-page />
    </div>

    <div class="about">
      <About-page />
    </div>

    <div class="menu">
      <Menu-page />
    </div>

    <div class="review">
      <Review-page />
    </div>

    <div class="order">
      <Order-page />
    </div>
  </div>


  <div class="footer">
    <div class="box-container">
      <div class="box">
        <h3>Locations</h3>
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from "./sub-components/home";
import AboutPage from "./sub-components/About";

import MenuPage from "./sub-components/Menu";
import ReviewPage from "./sub-components/review";
import OrderPage from "./sub-components/Order";

export default {
  name: "MainPage",
  components: {
    HomePage,
    AboutPage,
    MenuPage,
    ReviewPage,
    OrderPage,
  },
  data() {
    return {
      isActive: true,
      isSearching: true
    };
  },
  methods: {
    handleToggle() {
      this.isActive = !this.isActive;
    },
    handleToggleSearch() {
      this.isSearching = !this.isSearching;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url(./../assets/_themes.scss);
@import url(./../assets/fonts/css/_fonts.scss);


.head{
  display: flex;
  justify-content: center;
}


.header {
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10%;
  margin: 0 auto;
  height: 8%;
  z-index: 10;
  width: 98vw;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background: transparent url('./../assets/bg/bg.jpg') center;
  opacity: .75;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);

  // background: linear-gradient(to top , rgba(237, 232, 225, 0.755), rgba(255, 255, 255, 0.549));
  .logo {
    font-family: Polya;
    font-size: 150%;
    color: var(--second);

  }

  .navmenu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
    padding: 0 2rem;

    .btn {
      padding: 1px;
      width: 4.5rem;
      height: 1.8rem;
      border: none;
      border-radius: 3px;
      background-color: inherit;
      color: var(--main);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Roboto';
      font-weight: 500;
      cursor: pointer;

      &:hover {
        background-color: var(--main);
        color: aliceblue;
        font-weight: 520;
        transition: all 0.4s;
      }
    }

    .activedBtn {
      background-color: var(--main);
      color: #eee;
    }

  }

  .tools {
    display: flex;
    justify-content: center;
    align-items: center;

    #menu-bars {
      display: none;
    }

    .rounded-btn {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      margin: 0 0.5rem;
      width: 1.8rem;
      height: 1.8rem;
      border: none;
      background-color: #eee;
      border-radius: 100%;
      cursor: pointer;

      .icon {
        color: var(--main);
      }

      &:nth-child(3) {
        position: relative;

        &::before {
          position: absolute;
          right: -0.4rem;
          top: -0.2rem;
          background-color: var(--second);
          content: "1";
          font-size: 10px;
          color: var(--main);
          width: 0.7rem;
          display: block;
          height: 0.7rem;
          border: solid 0.1px var(--main);
          border-radius: 25px;
          padding: 0 1.5px 0.9px 0;
          margin: none;
        }
      }

      &:nth-child(4) {
        position: relative;

        &::before {
          position: absolute;
          right: -0.4rem;
          top: -0.2rem;
          background-color: var(--second);
          content: "5";
          font-size: 10px;
          color: #077965;
          width: 0.7rem;
          display: block;
          height: 0.7rem;
          border: solid 0.1px var(--main);
          border-radius: 25px;
          padding: 0 1.2px 0.9px 0;
          margin: none;
        }
      }

      &:hover {
        background-color: var(--main);
        transform: scale(1.1);
        transition: all 0.4s;

        .icon {
          color: whitesmoke;
        }

        &::before {
          display: none;
          transition: inherit;
        }

      }
    }
  }
}



#search-form {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.904);
  padding: 0 1rem;
}

#search-box {
  width: 25rem;
  border: none;
  border-bottom: .1rem solid #fff;
  padding: 1rem 0;
  color: #fff;
  font-size: 1.5rem;
  text-transform: none;
  background: none;

  &::placeholder {
    color: #eee;
    text-transform: capitalize;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    color: #eee;
  }
}

label {
  color: #eee;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    color: var(--main);
  }
}

.showsearch {
  display: flex;
  align-items: center;
  justify-content: center;


}

.unshowsearch {
  display: none;
}

#close {
  color: #fff;
  position: absolute;
  cursor: pointer;
  top: 2rem;
  right: 1rem;
  font-size: 2rem;
}



.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  overflow-x: hidden;
}







@media screen and (max-width: 700px) {
  .header {
    padding: 1rem 0.8rem;

    .logo {
      font-family: Polya;
      font-size: 150%;
      color: var(--second);

    }

    // background: linear-gradient(to top , rgba(237, 232, 225, 0.755), rgba(255, 255, 255, 0.549));

    .unshow {
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
      transition: all .3s;

    }

    .show {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      transition: all .3s;
    }

    .close {
      display: solid;
    }

    .open {
      display: none;
    }


    .navmenu {
      display: block;
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 100%;
      left: 0;
      background: url('./../assets/bg/bg.jpg')  12% center;

      .btn {
        display: block;
        height: 3rem;
        width: 100%;
        padding: 0 1rem;
        margin: .5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        background-color: #eee;
      }

      .activedBtn {
      background-color: var(--main);
      color: #eee;
    }

    }

    .tools {
      #menu-bars {
        display: inline-block;
      }
    }
  }
}

@media screen and (max-width: 500px) {


  .header {
    height: 5%;
  }


}

@media screen and (max-height: 1200px) {

  .header {
    .logo {
      font-size: 120%;

    }
  }

}


@media screen and (max-height: 500px) {

  .header {
    height: 10%;
  }

}
</style>
