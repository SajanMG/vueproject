<template>
    <Header />
    <div>
        <h1 v-if="name">Welcome {{ name }}, This is Add page</h1>
        <h1 v-else>This is Add page</h1>
    </div>
    <div class="add-form">
        <input type="text" v-model="hotel.name" placeholder="enter name" />
        <input type="text" v-model="hotel.contact" placeholder="enter contact" />
        <input type="text" v-model="hotel.location" placeholder="enter location" />
        <button type="button" v-on:click="addHotel()">Add Hotel</button>
    </div>
</template>
<script>
import axios from 'axios'
import Header from '../components/Header.vue'
export default {
    name: 'Add',
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
        async addHotel() {
            let result = await axios.post("http://localhost:3000/hotel", {
                name: this.hotel.name,
                contact: this.hotel.contact,
                location: this.hotel.location
            });
            if (result.status == 201) {
                this.$router.push({ name: 'Home' });
                alert('New Hotel added successfully');
            }
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
<style>
.add-form {
    margin-top: 1rem;
}

.add-form input {
    display: block;
    width: 300px;
    height: 50px;
    margin-bottom: 1rem;
    margin-inline: auto;
    border: 1px solid skyblue;
    padding-left: 20px;
}

.add-form button {
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