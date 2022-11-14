<template >

    <section class="order" id="order">
        <h3 class="sub-heading">
            Order Now
        </h3>
        <h1 class="heading">
            Free and Fast
        </h1>

        <form action="">
            <div class="inputbox">
                <div class="input">
                    <span>Your name</span>
                    <input type="text" name="" id="Name" placeholder="Enter your name">
                </div>
                <div class="input">
                    <span>Your number</span>
                    <input type="text" name="" id="Numero" placeholder="Enter your numero">
                </div>
            </div>

            <div class="inputbox">
                <div class="input">
                    <span>Your Order</span>
                    <input type="text" name="" id="Order" placeholder="Enter your order">
                </div>
                <div class="input">
                    <span>additionnal food</span>
                    <input type="text" name="" id="adfood" placeholder="additional food">
                </div>
            </div>

            <div class="inputbox">
                <div class="input">
                    <span>How much</span>
                    <input type="number" name="" id="number" placeholder=" How many orders ">
                </div>
                <div class="input">
                    <span>date and times</span>
                    <input type="datetime-local" id="datetime">
                </div>
            </div>
            <div class="inputbox">
                <div class="input">
                    <span>Your address</span>
                    <textarea name="address" id="address" cols="30" rows="10" placeholder="enter your address"></textarea>
                </div>
                <div class="input">
                    <span>Your messages</span>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="enter your message"></textarea>
                </div>
            </div>

            <input type="submit" value="order now" class="btn">
        </form>
    </section>
</template>

<script>
export default {
    name: 'OrderPage',
    props: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(./../../assets/fonts/css/_fonts.scss);
@import url(./../../assets/_themes.scss);


.order {
    width: 100%;
    margin-bottom : 2rem;

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



    form{
        width: 75vw;
        border-radius: .5rem;
        box-shadow: var(--shadow);
        border: .1ren solid rgba(0,0,0,.2);
        background: #fff;
        padding: 1.5rem;
        margin: 0 auto;

        .inputbox{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .input{
                width: 49%;

                span{
                    display: block;
                    padding: .5rem 0;
                    font-size: .9rem;
                    color: var(--light-color);
                }

                input, textarea{
                    background: #eee;
                    border-radius: .5rem;
                    padding: .4rem;
                    font-size: .8rem;
                    color: var(--dark);
                    text-transform: none;
                    width: 95%;
                    margin-bottom: 1rem;
                }

                input:focus, textarea:focus{
                    border: .1rem solid var(--main);
                }

                textarea{
                    height: 10rem;
                    resize: none;
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
    padding: .8rem 3rem;

    &:hover {
        background-color: var(--main);
        color: #eee;
        transition: .6s all;
    }
}

@media screen and (max-width: 550px) {
    .order{
        form{
            .inputbox{
                .input{
                    width: 100%;
                }
            }
        }
    }
}
</style>