<script setup>
import { ref } from 'vue';

// Reactive variable for toggling menu
const isMenuOpen = ref(false);

// Function to toggle menu state
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
    <div class="nav">
        <div class="navbar">
            <div class="left_nav">
                <!-- Main menu -->
                <ul class="site-main-menu">
                    <li><router-link to="/">About me</router-link></li>
                    <li><router-link to="resume">Resume</router-link></li>
                    <li><router-link to="portfolio">Portfolio</router-link></li>
                    <li><router-link to="blog">Blog</router-link></li>
                    <li><router-link to="contact">Contact</router-link></li>
                </ul>

                <!-- Social buttons -->
                <ul class="social-links">
                    <li><a class="tip social-button" href="#" title="Twitter"><i class="fa-solid fa-house"></i>git</a>
                    </li>
                    <li><a class="tip social-button" href="#" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                    <li><a class="tip social-button" href="#" title="Google Plus"><i class="fa fa-google-plus"></i></a>
                    </li>
                </ul>
            </div>
            <div class="right-nav"></div>
        </div>

        <!-- Mobile Navbar -->
        <div class="mbl_navbar">
            <div class="logo">Chadni Talukder</div>


            <div class="hamburger-lines" @click="toggleMenu">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <div :class="['nav-links', { 'nav-links-open': isMenuOpen }]">
                <router-link @click="toggleMenu" to="/">About me</router-link>
                <router-link @click="toggleMenu" to="resume">Resume</router-link>
                <router-link @click="toggleMenu" to="portfolio">Portfolio</router-link>
                <router-link @click="toggleMenu" to="blog">Blog</router-link>
                <router-link @click="toggleMenu" to="contact">Contact</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.navbar {
    background: #fff;

    @media (max-width: 1098px) {
        display: none;
    }

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
                a {
                    color: #222;
                    font-size: 15px;
                    text-decoration: none;
                    transition: all 0.3s;
                }

                a:hover::after {
                    display: block;
                    content: '';
                    width: 21px;
                    height: 2px;
                    background-color: #ffcd38;
                    margin: 0 auto;
                }

                .router-link-active {
                    color: #ffcd38;
                }
            }
        }
    }
}

.mbl_navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #f5f5f5;
    background-color: #fff;
    z-index: 100;
    position: fixed;

    .logo {
        font-size: 18px;
        margin: 0;
        line-height: 50px;
        color: #222;
        font-weight: 500;
        font-family: Oswald, Helvetica, sans-serif;
    }

    .hamburger-lines {
        display: block;
        height: 20px;
        width: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .line {
            display: block;
            height: 2px;
            width: 100%;
            border-radius: 10px;
            background: #000;
        }

        .line1 {
            transform-origin: 0% 0%;
            transition: transform 0.3s ease-in-out;
        }

        .line2 {
            transition: transform 0.2s ease-in-out;
        }

        .line3 {
            transform-origin: 0% 100%;
            transition: transform 0.3s ease-in-out;
        }
    }

    .nav-links {
        display: none;
        flex-direction: column;
        background-color: #fff;
        position: absolute;
        top: 50px;
        width: 100%;
        left: 0;
        transition: all 0.66s ease-in-out;
        z-index: 99;
        text-align: center;

        a {
            color: #222;
            font-size: 15px;
            text-decoration: none;
            transition: all 0.3s;
            padding: 15px 20px;
            font-weight: 500;
            font-family: Oswald, Helvetica, sans-serif;
        }

        a:hover::after {
            display: block;
            content: '';
            width: 21px;
            height: 2px;
            color: #ffcd38;
            background-color: #ffcd38;
            margin: 0 auto;
        }

        .router-link-active {
            color: #ffcd38;
        }

    }

    .nav-links-open {
        display: flex;
    }
}

@media (min-width: 1098px) {
    .mbl_navbar {
        display: none;
    }
}
</style>
