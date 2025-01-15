<script>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
export default {
    components: {
        Navbar,
        Sidebar
    }
}
</script>
<template>
    <div class="main_container">
        <div class="left_content">
            <Sidebar />
        </div>
        <div class="middle"></div>
        <div class="right_content">
            <navbar />
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main_container {
    display: flex;
    width: 100%;

    .left_content {
        flex-basis: 25%;
        height: 100vh;
        overflow: hidden;
        background: #b0d4e3;
    }
    .middle{
        width: 6px;
        height: auto;
        background: #00000014;
    }
    .right_content {
        flex-basis: 85%;
    }
}
</style>