<script>
import Navbar from './Navbar.vue';
export default {
components:{
    Navbar
}
}
</script>
<template>
    <Navbar/>
    <h1>Hello App !</h1>
    <p>
        <strong>Current route path: </strong> {{ $route.fullPath }}
    </p>
    <nav>
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/about">About</router-link>
    </nav>
    <main>
        <router-view/>
    </main>



















    
</template>
