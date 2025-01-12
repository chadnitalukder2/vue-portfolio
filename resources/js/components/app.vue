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
    gap: 10px;
    width: 100%;

    .left_content {
        flex-basis: 25%;
        height: 100%;
        overflow: hidden;
    }

    .right_content {
        flex-basis: 85%;
    }
}
</style>