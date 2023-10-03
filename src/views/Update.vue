<template>
    <Header />
    <div>
        <h1 v-if="name">Welcome {{ name }}, This is Update page</h1>
        <h1 v-else>This is Update page</h1>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
export default {
    name: 'Update',
    components: {
        Header,
    },
    data() {
        return {
            name:''
        }
    },

    mounted(){
        let user = JSON.parse(localStorage.getItem('user-info'));
        if (!user) {
            this.$router.push({name: 'Signup'});
        } else {
            this.name = user.data.name;
        };
    }
}
</script>
<style>
</style>