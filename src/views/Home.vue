<template>
    <Header />
    <div>
        <h1 v-if="name">Welcome {{ name }}, This is homepage</h1>
        <h1 v-else>This is homepage</h1>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
export default {
    name: 'Home',
    components: {
        Header,
    },
    data() {
        return {
            name: ''
        }
    },

    mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: 'Signup' });
        }
    }
}
</script>
<style></style>