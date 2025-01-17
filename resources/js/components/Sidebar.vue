<template>
    <div  class="header">
        <div class="site-title-block">
            <h1 class="site-title">Chadni Talukder</h1>
            <p class="site-description">Web Developer</p>
        </div>

        <div class="my-photo">
            <img src="../../img/profile.png" alt="image">
            <div class="mask"></div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
//@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');

.header {
       position: fixed;
       width: 22.7%;
        height: 100vh;
        background: #b0d4e3  ;
        font-family: Oswald, Helvetica, sans-serif;

       
    .site-title-block {
        margin: 30px 43px 60px 43px;
        text-align: center;
       

        .site-title {
            color: #fff;
            font-size: 35px;
            font-weight: 500;
            line-height: 1.1em;
            margin: 15px 0 0 0;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
            font-family: Oswald, Helvetica, sans-serif;
            
            @media (max-width: 1277px) {
                font-size: 28px;
            }
        }

        .site-description {
            color: #fff;
            font-size: 18px;
            font-weight: 300;
            margin: 10px 0;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
        }
    }

    .my-photo {
        height: 170px;
        width: 170px;
        text-align: center;
        border-radius: 50%;
        background-color: #c2e5e5db;
        overflow: hidden;
        margin: 0 auto;

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
    }

}
</style>