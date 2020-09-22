<template>
    <div class="app">
        <Nav />
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from './components/Nav'

export default {
    name: "App",
    data() {
        return {}
    },
    components: {
        Nav
    },
}
</script>

<style scoped>

</style>
