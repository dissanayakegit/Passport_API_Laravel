<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div id="navbarNav" class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav">
                    <template>
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/register">Register</router-link>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Nav",

}
</script>

<style scoped>

</style>
