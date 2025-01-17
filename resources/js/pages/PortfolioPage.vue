<template>
    <section class="about_section">
        <div class="section-title-block">
            <h2 class="section-title">Portfolio</h2>
            <h5 class="section-description">My Best Works</h5>
        </div>

        <div class="portfolio-content">
            <ul class="portfolio-filters">
                <li>
                    <a href="#" class="active">All</a>
                </li>
                <li>
                    <a href="#">Media</a>
                </li>
                <li>
                    <a href="#">Illustration</a>
                </li>
                <li>
                    <a href="#">Video</a>
                </li>
            </ul>
        </div>

        <div class="portfolio-item-block">
            <div class="item">
                <a class="ajax-page-load" href="portfolio-1.html">
                    <img src="../../img/1s-item.jpg" alt="">
                    <div class="details">
                        <h5 class="name">Project Name</h5>
                        <small>Media</small>
                        <i class="fa fa-file-text-o"></i>
                    </div>
                </a>
            </div>
            <div class="item">
                <a class="ajax-page-load" href="portfolio-1.html">
                    <img src="../../img/2m-img.jpg" alt="">
                    <div class="details">
                        <h5 class="name">Project Name</h5>
                        <small>Media</small>
                        <i class="fa fa-file-text-o"></i>
                    </div>
                </a>
            </div>
            <div class="item">
                <a class="ajax-page-load" href="portfolio-1.html">
                    <img src="../../img/2m-img.jpg" alt="">
                    <div class="details">
                        <h5 class="name">Project Name</h5>
                        <small>Media</small>
                        <i class="fa fa-file-text-o"></i>
                    </div>
                </a>
            </div>
            <div class="item">
                <a class="ajax-page-load" href="portfolio-1.html">
                    <img src="../../img/2m-img.jpg" alt="">
                    <div class="details">
                        <h5 class="name">Project Name</h5>
                        <small>Media</small>
                        <i class="fa fa-file-text-o"></i>
                    </div>
                </a>
            </div>
            <div class="item">
                <a class="ajax-page-load" href="portfolio-1.html">
                    <img src="../../img/2m-img.jpg" alt="">
                    <div class="details">
                        <h5 class="name">Project Name</h5>
                        <small>Media</small>
                        <i class="fa fa-file-text-o"></i>
                    </div>
                </a>
            </div>
            <div class="item">
                <a href="portfolio-1.html">
                    <img src="../../img/2m-img.jpg" alt="">
                    <div class="details">
                        <h5 class="name">Project Name</h5>
                        <small>Media</small>
                        <i class="fa fa-file-text-o"></i>
                    </div>
                </a>
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
        padding: 0 20px 50px;
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

    .portfolio-content {
        .portfolio-filters {
            font-family: 'PT Sans', Helvetica, sans-serif;
            list-style: none;
            padding: 0;
            margin: 0 0 2em;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;

            li {
                a {
                    color: #888;
                    padding: 5px 10px;
                    font-size: 14px;
                    line-height: 1.5;
                    transition: all .3s;
                }

                .active,
                a:hover {
                    background: #ffcd38;
                    color: #fff;
                }

            }
        }
    }

    .portfolio-item-block {
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(4, 1fr);
        @media (max-width: 1277px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 702px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 438px) {
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
        }

        .item {
            a {
                transition: all .3s;
                position: relative;
                img {
                    display: block;
                    width: 100%;
                }

                .details {
                    position: absolute;
                    background: rgba(79, 86, 94, 0.7);
                    width: 100%;
                    height: 100%;
                    color: #888;
                    left: 0;
                    top: 0px;
                    opacity: 0;
                    transition: all .3s;

                    .name {
                        display: inline-block;
                        font-size: 1rem;
                        margin: 10px 0;
                        color: #fff;
                        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
                        padding: 5px 20px;

                        &::after {
                            display: block;
                            content: '';
                            width: 100%;
                            height: 2px;
                            margin: 0 auto;
                            background-color: #ffcd38;
                        }
                    }

                    small {
                        color: #eee;
                        position: absolute;
                        bottom: 10px;
                        left: 20px;
                        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
                    }
                }

                &:hover {
                    .details {
                        top: 0;
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }


        }




    }
}
</style>