<template>
    <section class="about_section">
        <div class="section-title-block">
            <h2 class="section-title">Blog</h2>
            <h5 class="section-description">My Diary</h5>
        </div>

        <div class="container">
            <div class="card">
                <div class="image-box">
                     <a href="#">
                        <img alt="A frog riding a bicycle" src="../../img/4th-img.jpg" />
                        <div class="mask"> </div>
                    </a>
                </div>

                <div class="date">
                    <span>
                        6
                    </span>
                    <span>
                        Dec
                    </span>
                </div>
                <div class="card-content">
                    <p>
                        Travel
                    </p>
                    <h3>
                        Bootstrap is the Most Popular Framework
                    </h3>
                </div>
            </div>
            <div class="card">
                <div class="image-box">
                    <a href="#">
                        <img alt="A frog riding a bicycle" src="../../img/4th-img.jpg" />
                        <div class="mask"> </div>
                    </a>

                </div>
                <div class="date">
                    <span>
                        3
                    </span>
                    <span>
                        Nov
                    </span>
                </div>
                <div class="card-content">
                    <p>
                        jQuery
                    </p>
                    <h3>
                        One Framework, Every Device
                    </h3>
                </div>
            </div>
            <div class="card">
                <div class="image-box">
                     <a href="#">
                        <img alt="A frog riding a bicycle" src="../../img/4th-img.jpg" />
                        <div class="mask"> </div>
                    </a>
                </div>
                <div class="date">
                    <span>
                        12
                    </span>
                    <span>
                        Oct
                    </span>
                </div>
                <div class="card-content">
                    <p>
                        Sport
                    </p>
                    <h3>
                        Bootstrap is the Most Popular Framework
                    </h3>
                </div>
            </div>
            <div class="card">
                <div class="image-box">
                     <a href="#">
                        <img alt="A frog riding a bicycle" src="../../img/4th-img.jpg" />
                        <div class="mask"> </div>
                    </a>
                </div>
                <div class="date">
                    <span>
                        18
                    </span>
                    <span>
                        Aug
                    </span>
                </div>
                <div class="card-content">
                    <p>
                        CSS
                    </p>
                    <h3>
                        Bootstrap is the Most Popular Framework
                    </h3>
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
}

.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
}

.card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 48%;
    position: relative;
    transition: all .3s ease;

    .image-box {
        position: relative;
        height: 250px;
        width: 100%;

        img {
            width: 100%;
            height: 100%;
        }

        .mask {
            position: absolute;
            background: #4f565e;
            background: rgba(79, 86, 94, 0.6);
            display: inline-block;
            font-family: 'Pe-icon-7-stroke';
            width: 100%;
            left: 0;
            bottom: 0;
            top: 0;
            opacity: 0;
            visibility: hidden;
            transition: all 0.2s ease-in-out;
        }

        &:hover {
            background-color: #222;

            .mask {
                opacity: 1;
                visibility: visible;
            }
        }
    }
}

.card:hover {
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.11);
}

.card-content {
    padding: 10px;
    text-align: center;
}

.card-content h3 {
    margin: 10px 0;
    color: #222;
    font-family: Oswald, Helvetica, sans-serif;
    font-size: 1em;
    font-weight: 500;
    line-height: 1.5em;
}

.card-content p {
    color: #666;
    font-family: 'PT Sans', Helvetica, sans-serif;
    margin: 0;
    font-size: 14px;
}

.date {
    position: absolute;
    background-color: #ffcd38;
    color: white;
    padding: 2px 10px;
    bottom: 70px;
    right: 15px;
    font-weight: 500;
    font-family: 'PT Sans', Helvetica, sans-serif;
    font-size: 12px;
}

.date span {
    display: block;
}

@media (max-width: 768px) {
    .card {
        width: 100%;
    }
}
</style>