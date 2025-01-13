<template>
    <div class="navbar">
        <div class="left_nav">
            <!-- Main menu -->
            <ul class="site-main-menu">
                <!-- About Me Subpage link -->
                <li >
                    <router-link to="/">About me</router-link>
                </li>
                <li>
                    <a class="pt-trigger" href="#resume" data-animation="59" data-goto="2">Resume</a>
                </li>
                <li>
                    <a class="pt-trigger" href="#portfolio" data-animation="60" data-goto="3">Portfolio</a>
                </li>
                <li>
                    <a class="pt-trigger" href="#blog" data-animation="61" data-goto="4">Blog</a>
                </li>
                <li>
                    <a class="pt-trigger" href="#contact" data-animation="58" data-goto="5">Contact</a>
                </li>
            </ul>
            <!-- /Main menu -->

            <!-- Social buttons -->
            <ul class="social-links">
                <li><a class="tip social-button" href="#" title="Twitter"><i class="fa-solid fa-house"></i>git</a></li>
                <!-- Full list of social icons: http://fontawesome.io/icons/#brand -->
                <li><a class="tip social-button" href="#" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                <li><a class="tip social-button" href="#" title="Google Plus"><i class="fa fa-google-plus"></i></a></li>
            </ul>
            <!-- /Social buttons -->
        </div>
        <div class="right-nav">

        </div>
    </div>
</template>
<style lang="scss">
.navbar {
    background: #fff;

    .left_nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        padding: 30px 70px;

        .site-main-menu {
            display: flex;
            gap: 30px;
            padding: 0;
            margin: 0;
            font-family: Oswald, Helvetica, sans-serif;

            li {
                display: inline-block;
                position: relative;
                a {
                    color: #222;
                    font-size: 15px;
                    font-weight: 500;
                    position: relative;
                    text-decoration: none;
                    outline: none;
                    transition: all .3s;
                }
                a:hover{
                    &::after {
                        display: block;
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: -3px;
                        content: '';
                        width: 21px;
                        height: 2px;
                        margin: 0 auto;
                        background-color: #ffcd38;
                    }
                }
                .router-link-active{
                    &::after {
                        display: block;
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: -3px;
                        content: '';
                        width: 21px;
                        height: 2px;
                        margin: 0 auto;
                        background-color: #ffcd38;
                    }
                }
            }
        }
    }
}
</style>