<template>
    <Header />
    <div>
        <h1 v-if="name">Welcome {{ name }}, This is Update page</h1>
        <h1 v-else>This is Update page</h1>
    </div>
    <div class="update-form">
        <input type="text" v-model="hotel.name" name="name" placeholder="enter name" />
        <input type="number" v-model="hotel.contact" name="contact" placeholder="enter contact" />
        <input type="text" v-model="hotel.location" name="location" placeholder="enter location" />
        <button type="button" v-on:click="updateHotel()">Update</button>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import axios from 'axios'
export default {
    name: 'Update',
    components: {
        Header,
    },
    data() {
        return {
            name: '',
            hotel: {
                name: '',
                contact: '',
                location: ''
            }
        }
    },
    methods: {
        async updateHotel() {
            const result = await axios.put("http://localhost:3000/hotel/" + this.$route.params.id, {
                name: this.hotel.name,
                contact: this.hotel.contact,
                location: this.hotel.location
            });
            if (result.status == 200) {
                this.$router.push({ name: 'Home' });
                alert('Updated Successfully');
            }
        }
    },

    async mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: 'Signup' });
        }

        const result = await axios.get("http://localhost:3000/hotel/" + this.$route.params.id);
        this.hotel = result.data;
    }
}
</script>
<style>
.update-form {
    margin-top: 1rem;
}

.update-form input {
    display: block;
    width: 300px;
    height: 50px;
    margin-bottom: 1rem;
    margin-inline: auto;
    border: 1px solid skyblue;
    padding-left: 20px;
}

.update-form button {
    width: 320px;
    height: 50px;
    cursor: pointer;
    background-color: skyblue;
    border: none;
    border-radius: 2px;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
}
</style>