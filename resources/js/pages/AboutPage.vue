<template>
    <section class="about_section">
        <div class="section-title-block">
            <h2 class="section-title">About Me</h2>
            <h5 class="section-description">Artist, Thinker, Creative Doer</h5>
        </div>
        <div class="my-photo">
            <img src="../../img/profile.png" alt="image">
            <div class="mask"></div>
        </div>

        <div class="about_me">

            <div class="general-info">
                <h3 class="title">I am Web Developer/Designer @ Company.com</h3>
                <p class="description">Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna
                    ante. Donec massa
                    velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.
                    Ut a mi tempus massa malesuada fermentum.
                    Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras pretium rutrum
                    egestas. Integer ultrices libero sed justo vehicula, eget tincidunt tortor tempus. Sed tellus nibh,
                    lobortis ut blandit sed, convallis a mauris.</p>
            </div>

            <div class="image">
                <img src="../../img/profile.png" alt="profile">
            </div>

        </div>

        <div class="block-title">
            <h3>Services</h3>
        </div>

        <div class="service_section">
            <div class="service-block">
                <div class="service-info">
                    <div class="image-box">
                        <img src="../../img/web_design.png" alt="Responsive Design">
                    </div>

                    <h4 class="title">Web Design</h4>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor.</p>
                </div>
            </div>
            <div class="service-block">
                <div class="service-info">
                    <div class="image-box">
                        <img src="../../img/web_design.png" alt="Responsive Design">
                    </div>

                    <h4 class="title">Web Design</h4>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor.</p>
                </div>
            </div>
            <div class="service-block">
                <div class="service-info">
                    <div class="image-box">
                        <img src="../../img/web_design.png" alt="Responsive Design">
                    </div>

                    <h4 class="title">Web Design</h4>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor.</p>
                </div>
            </div>
            <div class="service-block">
                <div class="service-info">
                    <div class="image-box">
                        <img src="../../img/web_design.png" alt="Responsive Design">
                    </div>

                    <h4 class="title">Web Design</h4>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor.</p>
                </div>
            </div>

        </div>

        <div class="block-title">
            <h3>Services</h3>
        </div>

        <div class="fun-facts">
            <div class="fact">
                <img alt="Smiley face icon" src="https://placehold.co/50x50" />
                <div class="fact-title">
                    Happy Clients
                </div>
                <div class="fact-number">
                    1,024
                </div>
            </div>
            <div class="fact">
                <img alt="Clock icon" src="https://placehold.co/50x50" />
                <div class="fact-title">
                    Working Hours
                </div>
                <div class="fact-number">
                    6,256
                </div>
            </div>
            <div class="fact">
                <img alt="Medal icon" src="https://placehold.co/50x50" />
                <div class="fact-title">
                    Awards Won
                </div>
                <div class="fact-number">
                    21
                </div>
            </div>
            <div class="fact">
                <img alt="Coffee cup icon" src="https://placehold.co/50x50" />
                <div class="fact-title">
                    Coffee Consumed
                </div>
                <div class="fact-number">
                    20,000
                </div>
            </div>
        </div>


    </section>
</template>
<style lang="scss" scoped>
.about_section {
    padding: 0 70px 50px;
    width: 100%;
    height: auto;
    font-family: Oswald, Helvetica, sans-serif;

    @media (max-width: 1098px) {
        padding: 15px 20px 60px;
        position: absolute;
        top: 55px;
        left: 0;
    }

    .my-photo {
        height: 170px;
        width: 170px;
        text-align: center;
        border-radius: 50%;
        background-color: #c2e5e5db;
        overflow: hidden;
        margin: 0 auto 40px;

        img {
            height: 100%;
            width: 100%;
            margin: 0 auto;
            // min-height: 550px;
            // position: absolute;
            // top: 0;
            // left: 50%;
            // transform: translate(-50%, 0);
        }

        @media (min-width: 1098px) {
            display: none;
        }
    }

    .section-title-block {
        margin-bottom: 40px;

        .section-title {
            display: inline-block;
            font-size: 22px;
            position: relative;
            margin: 0 0 0 -70px;
            padding: 10px 20px 10px 63px;
            background-color: #ffcd38;
            color: #fff;
            line-height: 1.1em;
            font-weight: 500;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

            &:after {
                display: block;
                width: 5px;
                height: 100%;
                position: absolute;
                bottom: 5px;
                left: -5px;
                content: "";
                border: 1px solid #ebbd34;
                transform: skew(0deg, 65deg);
                background: #ebbd34;
            }
        }

        .section-description {
            display: inline-block;
            margin: 0 0 0 15px;
            color: #888;
            font-size: 14px;
            font-weight: 200;
        }
    }

    .about_me {
        display: flex;
        gap: 20px;

        .general-info {
            flex-basis: 70%;

            @media (max-width: 1098px) {
                flex-basis: 100%;
            }

            .title {
                color: #222;
                font-family: Oswald, Helvetica, sans-serif;
                line-height: 1.5em;
                margin-bottom: 10px;
                font-size: 1.17em;
                margin-top: 0;
                font-weight: 500;
            }

            .description {
                font-size: 0.875em;
                margin: 0 0 10px;
                font-weight: 300;
                font-family: 'PT Sans', Helvetica, sans-serif;
                color: #666;
                line-height: 1.5em;
            }
        }

        .image {
            width: 175px;
            background: rgb(218 253 253 / 39%);
            height: 180px;

            @media (max-width: 1098px) {
                display: none;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .block-title {
        h3 {
            color: #222;
            font-family: Oswald, Helvetica, sans-serif;
            line-height: 1.5em;
            font-size: 1.17em;
            font-weight: 500;
            display: inline-block;
            margin: 0 0 20px;
            padding-bottom: 3px;

            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 2px;
                margin-top: -1px;
                background-color: #ffcd38;
            }
        }
    }

    .service_section {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        
        @media (max-width: 1277px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 702px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 459px) {
            grid-template-columns: repeat(1, 1fr);
        }

        .service-block {
            text-align: center;

            .service-info {
                .image-box {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .title {
                    color: #222;
                    font-family: Oswald, Helvetica, sans-serif;
                    line-height: 1.5em;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    font-size: 1em;
                    font-weight: 500;
                }

                .description {
                    font-size: 0.875em;
                    margin: 0 0 10px;
                    font-weight: 300;
                    font-family: 'PT Sans', Helvetica, sans-serif;
                    color: #666;
                    line-height: 1.5em;
                }
            }
        }
    }

    .fun-facts {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        
        @media (max-width: 1277px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 702px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 459px) {
            grid-template-columns: repeat(1, 1fr);
           
        }
    }

    .fact {
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
        padding: 20px 10px 15px;
        flex-basis: 22%;
    }

    .fact img {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
        margin: 0 auto;
    }

    .fact-title {
        margin-top: 10px;
        font-weight: 400;
        margin-bottom: 10px;
        color: #222;
        font-family: Oswald, Helvetica, sans-serif;
        line-height: 1.5em;
        font-size: 1em;
    }

    .fact-number {
        font-size: 24px;
        font-weight: 300;
        display: block;
        margin: 10px 0;
        color: #ffcd38;
        font-family: 'PT Sans', Helvetica, sans-serif;
    }

}
</style>