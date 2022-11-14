<template>
    <section class="about" id="about">
        <h3 class="sub-heading">about us</h3>
        <h1 class="heading">Why choose us</h1>

        <div class="row">
            <div class="image">
                <img class="img2"
                    src="./../../assets/bg/chef/istockphoto-1300835557-612x612-transformed-removebg-preview.png"
                    alt="Cooking master">
                <img class="img1" src="./../../assets/bg/chef/black1-transformed-removebg-preview.png"
                    alt="Cooking master">
                <img class="img3"
                    src="./../../assets/bg/chef/istockphoto-477546297-612x612-transformed-removebg-preview.png"
                    alt="Cooking master">
            </div>

            <div class="content">
                <h3> -->> best food in the country &#60;&#60;-- </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus, repudiandae molestias illo
                    porro beatae cumque sunt. Doloribus nisi consequuntur molestiae harum quam. Amet libero adipisci
                    quos
                    accusantium voluptas similique!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quaerat unde beatae. Culpa
                    consectetur, eius id nobis temporibus veritatis voluptatum!
                </p>

                <div class="icons-container">
                    <div class="icons">
                        <font-awesome-icon icon="fa fa-shipping-fast" class="icon" />
                        <span>free delivery</span>
                    </div>
                    <div class="icons">
                        <font-awesome-icon icon="fa fa-dollar-sign" class="icon" />
                        <span>free payment</span>
                    </div>
                    <div class="icons">
                        <font-awesome-icon icon="fa fa-headset" class="icon" />
                        <span>24/7 service</span>
                    </div>
                </div>

                <a href="" class="btn">Learn more</a>
            </div>
        </div>


    </section>
</template>

<script>
export default {
    name: 'AboutPage',
    props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(./../../assets/fonts/css/_fonts.scss);
@import url(./../../assets/_themes.scss);


.btn {
    margin-top: 1rem;
    display: inline-block;
    font-size: .8rem;
    color: #fff;
    background-color: var(--second);
    border-radius: .8rem;
    font-weight: 500;
    font-family: Langar;
    cursor: pointer;
    padding: .8rem 3rem;

    &:hover {
        background-color: var(--main);
        color: #eee;
        transition: .6s all;
    }
}

.about {
    width: 90vw;
    padding: 2rem 0 2rem 2rem;
    background-color: #fff;
    padding: 0 auto;



    .sub-heading {
        text-align: center;
        color: var(--main);
        font-size: 150%;
        font-weight: 900;
        padding-top: 1rem;
        font-family: Lobster;
    }

    .heading {
        text-align: center;
        color: black;
        font-size: 250%;
        font-family: polya;
        font-weight: bolder;
        text-transform: uppercase;
        margin-bottom: 2rem;
        color: var(--second);
    }

    .row {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2.5rem;
        align-items: center;

        .image {

            flex: 1 1 25rem;


            img {
                position: relative;
                width: 32%;


                &:hover {
                    box-shadow: var(--shadow);
                    margin-bottom: 1rem;
                }
            }

            .img1 {
                width: 36%
            }


        }

        .content {
            flex: 1 1 25rem;
            border-left: solid var(--main) .3rem;
            padding-left: 1rem;
            background-color: rgb(230, 230, 230);
            padding: 1rem;
            box-shadow: rgba(0, 0, 0, .4) -.3rem .5rem 1.5rem;

            h3 {
                color: var(--second);
                font-size: 1.5rem;
                padding: .5rem 0;
                text-align: center;
                font-family: Langar;
            }

            p {
                color: var(--light-color);
                font-size: 1rem;
                padding: .5rem 0;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                font-weight: lighter;
                line-height: 1.4;
            }

            .icons-container {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
                padding: 1rem 0;
                margin-top: .5rem;

                .icons {
                    background: #eee;
                    border-radius: .5rem;
                    border: .1rem solid rgba(0, 0, 0, .2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    flex: 1 1 10rem;
                    padding: .7rem .8rem;

                    .icon {
                        font-size: 1.5rem;
                        color: var(--main);
                    }

                    span {
                        font-size: 1rem;
                        color: var(--dark);
                        font-family: Langar;
                    }
                }
            }


        }
    }
}
</style>