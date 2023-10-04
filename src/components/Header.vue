<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/Add">Add</router-link>
        <router-link to="/Update">Update</router-link>
        <a href="#" v-on:click="logout()">Logout</a>
    </div>
</template>
<script>
export default {
    name: 'Header',

    methods: {
        logout() {
            try {
                let result = localStorage.removeItem('user-info');
                this.$router.push({ name: 'Login' });
                console.log(result)
            } catch {
                console.error("error while logging out:", error);
            }
        }
    }
}

</script>
<style>
.nav {
    background-color: skyblue;
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
}

.nav a {
    padding: 16px 20px;
    text-decoration: none;
    font-size: 1rem;
    color: #fafafa;
}

.nav a:hover {
    background-color: lightblue;
}
</style>