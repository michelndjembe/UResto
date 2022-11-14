<template>
    <section class="dishes" id="dishes">
        <h3 class="sub-heading">Our Dishes</h3>
        <h1 class="heading">Popular Dishes</h1>
        <div class="box-container">
            <div class="box">

                <a href="#" class="heart">
                    <font-awesome-icon icon="fa-solid fa-heart" class="icon" />
                </a>
                <a href="#" class="eye">
                    <font-awesome-icon icon="fa-solid fa-eye" class="icon" />
                </a>
                <h3>tasty food</h3>
                <img src="./../../assets/food-picture/big/no_bg/asian-soup-with-noodles.png" alt="">

                <div class="stars">
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star-half-alt" class="icon" />
                </div>
                <div class="down">
                    <span>$15.99</span>
                    <a href="#" class="btn">add to carte</a>
                </div>
            </div>

            <div class="box">
                <a href="#" class="heart">
                    <font-awesome-icon icon="fa-solid fa-heart" class="icon" />
                </a>
                <a href="#" class="eye">
                    <font-awesome-icon icon="fa-solid fa-eye" class="icon" />
                </a>
                <h3>tasty food</h3>
                <img src="./../../assets/food-picture/big/no_bg/spaghetti-bolognese-with-tomato-sauce.png" alt="">

                <div class="stars">
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star-half-alt" class="icon" />
                </div>
                <div class="down">
                    <span>$15.99</span>
                    <a href="#" class="btn">add to carte</a>
                </div>
            </div>

            <div class="box">
                <a href="#" class="heart">
                    <font-awesome-icon icon="fa-solid fa-heart" class="icon" />
                </a>
                <a href="#" class="eye">
                    <font-awesome-icon icon="fa-solid fa-eye" class="icon" />
                </a>
                <h3>tasty food</h3>
                <img src="./../../assets/food-picture/big/no_bg/barbecue-stick-with-juicy-grill.png" alt="barbecue-stick-with-juicy-grill">

                <div class="stars">
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star-half-alt" class="icon" />
                </div>
                <div class="down">
                    <span>$15.99</span>
                    <a href="#" class="btn">add to carte</a>
                </div>
            </div>


            <div class="box">
                <a href="#" class="heart">
                    <font-awesome-icon icon="fa-solid fa-heart" class="icon" />
                </a>
                <a href="#" class="eye">
                    <font-awesome-icon icon="fa-solid fa-eye" class="icon" />
                </a>
                <h3>tasty food</h3>
                <img src="./../../assets/food-picture/big/no_bg/baked-black-bean-paste-buns.png" alt="baked-black-bean-paste-buns">

                <div class="stars">
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star-half-alt" class="icon" />
                </div>
                <div class="down">
                    <span>$15.99</span>
                    <a href="#" class="btn">add to carte</a>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'DishesPage',
    props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(./../../assets/fonts/css/_fonts.scss);
@import url(./../../assets/_themes.scss);



.dishes {
    white-space: nowrap;
    background-color: rgb(230, 230, 230);
    padding: 1rem auto;
    padding: 1rem 0;
    width: 100vw;

    .sub-heading {
        text-align: center;
        color: var(--main);
        font-family: Lobster;
        font-size: 150%;
        font-weight: 900;
        padding-top: 1rem;
    }

    .heading {
        text-align: center;
        color: black;
        font-size: 240%;
        font-family: polya;
        font-weight: bolder;
        text-transform: uppercase;
        margin-bottom: 2rem;
        color: var(--second);
    }

    .box-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        gap: 1.5rem;
        width: 90vw;
        margin: 0 auto;


        .box {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;;
            padding: 0 1rem;
            background: #fff;
            border-radius: .5rem;
            border: .1rem solid rgba(0, 0, 0, .2);
            box-shadow: var(--shadow);
            overflow: hidden;
            text-align: center;
            position: relative;
                &:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: .3rem;
                    width: 100%;
                    height: 110%;
                    background: var(--second);
                    clip-path: polygon(25% 0%, 100% 75%, 100% 100%, 74% 100%, 0 23%, 0 0);
                    transform: rotate(-35deg);
                    transition: 0.5s ease-in-out;
                }

            &:hover {
                transform: scale(1.1);
                box-shadow: var(--shadow);


                .heart {
                    right: 1.5rem;
                    transition: all 0.25s;
                }

                .eye {
                    left: 1.5rem;
                    transition: all 0.25s;
                }

                img{
                    animation: rota 10s steps(440) infinite normal;
                    
                    &:active{
                        animation-play-state: paused;
                    }

                }

         @keyframes rota {
           from {
             transform: none;
           }

           to {
             transform: rotate(360deg);
           }
         }
            }

            .heart,
            .eye {
                position: absolute;
                top: 1.3rem;
                background: #eee;
                border-radius: 50%;
                height: 1.7rem;
                width: 1.7rem;
                display: flex;
                justify-content: center;
                align-items: center;
                line-height: 1rem;
                font-size: medium;
                color: var(--main);

                &:hover {
                    background: var(--main);
                    color: #fff;
                }


            }

            .heart {
                right: -15rem;
                transition: all 0.25s;
            }

            .eye {
                left: -15rem;
                transition: all 0.25s;
            }

            img {
                height: auto;
                width: 70%;
                margin: .4rem 0;
                position: relative;
            }

            h3 {
                color: var(--dark);
                font-size: 1.5rem;
                margin-top: 2rem;
                font-family: Lobster;
                position: relative;
            }


            .stars {
                padding: .5rem 0;
                position: relative;
                margin-bottom: .3rem;

                .icon {
                    font-size: 1.2rem;
                    color: var(--gold)
                }
            }

                .down{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0rem auto;
                    margin-bottom: 1rem;
                    width: 100%;
                    position: relative;
                    bottom: .3rem;

                span{
                    color: var(--main);
                    position: relative;
                    font-family: Langar;
                    font-size: 1.3rem;
                    right: 0rem;
                }
                }

            .btn {
                display: inline-block;
                font-size: .8rem;
                color: #fff;
                background-color: var(--second);
                border-radius: .8rem;
                font-weight: 500;
                font-family: Langar;
                cursor: pointer;
                padding: .8rem 2rem;

                &:hover {
                    background-color: var(--main);
                    color: #eee;
                    transition: .6s all;
                }
            }


        }


    }


}


@media screen and (max-width: 560px) {
    .dishes {

        .box-container {
            .box {
                width: 80%;
                margin: 1.2rem auto;
            }
        }
    }
}


@media screen and (max-width: 700px) {
    .dishes {

        .box-container {
            .box {
                img {
                    height: auto;
                    width: 100%;
                }
            }
        }
    }
}
</style>