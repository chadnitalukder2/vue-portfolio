<template>
    <section class="about_section">
        <div class="section-title-block">
            <h2 class="section-title">Resume</h2>
            <h5 class="section-description">1 Years of Experience</h5>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.about_section {
    padding: 0 70px 50px;
    width: 100%;
    height: auto;
    font-family: Oswald, Helvetica, sans-serif;

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
</style>