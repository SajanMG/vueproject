<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="Add">Add</router-link>
        <router-link to="Update">Update</router-link>
        <router-link to="Login">Logout</router-link>
    </div>

</template>
<script>
export default {
    name: 'Header',
    component: 'Header',
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