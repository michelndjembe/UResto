<template>
    <section class="menu" id="menu">
        <h3 class="sub-heading">Our menu</h3>
        <h1 class="heading">Today's speciality</h1>

        <div class="box-container">

            <div class="box">
                <div class="image">
                    <img src="./../../assets/menu/Cat/5c6b9a4bcf028.jpg" alt="">
                    <a href="#" class="heart">
                        <font-awesome-icon icon="fa-solid fa-heart" class="icon" />
                    </a>

                </div>

                <div class="content">
                    <div class="stars">
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star-half-alt" class="icon" />
                    </div>
                    <h3>delicious food</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, molestias!</p>

                    <div class="down">
                        <a href="#" class="btn">add to carte</a>
                        <span>$15.99</span>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="./../../assets/menu/Cat/5c6b9a4bcf028.jpg" alt="">
                    <a href="#" class="heart">
                        <font-awesome-icon icon="fa-solid fa-heart" class="icon" />
                    </a>

                </div>

                <div class="content">
                    <div class="stars">
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star-half-alt" class="icon" />
                    </div>
                    <h3>delicious food</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, molestias!</p>

                    <div class="down">
                        <a href="#" class="btn">add to carte</a>
                        <span>$15.99</span>
                    </div>
                </div>
            </div>


            <div class="box">
                <div class="image">
                    <img src="./../../assets/menu/Cat/5c6b9a4bcf028.jpg" alt="">
                    <a href="#" class="heart">
                        <font-awesome-icon icon="fa-solid fa-heart" class="icon" />
                    </a>

                </div>

                <div class="content">
                    <div class="stars">
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star-half-alt" class="icon" />
                    </div>
                    <h3>delicious food</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, molestias!</p>

                    <div class="down">
                        <a href="#" class="btn">add to carte</a>
                        <span>$15.99</span>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="./../../assets/menu/Cat/5c6b9a4bcf028.jpg" alt="">
                    <a href="#" class="heart">
                        <font-awesome-icon icon="fa-solid fa-heart" class="icon" />
                    </a>

                </div>

                <div class="content">
                    <div class="stars">
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-star-half-alt" class="icon" />
                    </div>
                    <h3>delicious food</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, molestias!</p>

                    <div class="down">
                        <a href="#" class="btn">add to carte</a>
                        <span>$15.99</span>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'MenuPage',
    props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(./../../assets/fonts/css/_fonts.scss);
@import url(./../../assets/_themes.scss);

.menu {
    background: rgb(230, 230, 230);
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
        font-size: 3rem;
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
            background: #fff;
            border: .1rem solid rgba(0, 0, 0, .2);
            border-radius: .5rem;
            overflow: hidden;
            box-shadow: var(--shadow);
            font-family: Langar;
            position: relative;

            .image {
                height: 15rem;
                width: 100%;
                overflow: hidden;
                position: relative;
                top: 0;
                left: 0;
                margin-bottom: 1rem;

                &:after {
                    content: '';
                    z-index: 10;
                    width: 200%;
                    height: 100%;
                    top: -90%;
                    left: -20px;
                    position: absolute;
                    opacity: 0.1;
                    transform: rotate(45deg);
                    background: linear-gradient(to top, transparent, #fff 15%, rgba(255, 255, 255, 0.808));
                    transition: 0.3s;
                }

                &:active,
                &:hover,
                &:focus {
                    transform: translateY(-3px) scale(1.05) rotateX(15deg);

                    &:after {
                        transform: rotate(25deg);
                        top: -30%;
                        opacity: 0.2;
                    }
                }


                img {
                    width: 100%;
                    min-height: 100%;
                    top: -5rem;



                }

                .fa-heart {
                    position: absolute;
                    width: .8rem;
                    height: .8rem;
                    padding: .5rem;
                    top: 1.5rem;
                    right: 1.5rem;
                    text-align: center;
                    background: #fff;
                    border-radius: 50%;
                    color: var(--main);

                    &:hover {
                        background: var(--main);
                        color: white;
                        transition: all .3s
                    }
                }
            }

            .content {
                padding: .5rem;
                padding-top: 0;

                .stars {
                    padding-bottom: 1rem;
                    text-align: center;

                    .icon {
                        font-size: .8rem;
                        color: var(--main);
                    }
                }

                h3 {
                    color: var(--dark);
                    font-size: 1.5rem;
                    font-family: Lobster;
                    text-align: center;
                }

                p {
                    color: var(--light-color);
                    font-size: 1rem;
                    padding: .3rem 0;
                    line-height: 1;
                    font-family: Langar;
                }

                .down {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0 auto;
                    width: 100%;

                    span {
                        color: var(--main);
                        position: relative;
                        font-family: Langar;
                        font-size: 1.3rem;
                        right: 0rem;
                    }
                }

            }


        }
    }








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
        padding: .8rem 1rem;

        &:hover {
        background-color: var(--main);
        color: #eee;
        transition: .6s all;
    }
    }
}
</style>