<template>
    <Header />
    <div>
        <h1 v-if="name">Welcome {{ name }}, This is homepage</h1>
        <h1 v-else>This is homepage</h1>
    </div>
    <div>
        <table class="table" border="1" width="100%">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in hotel" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.contact }}</td>
                    <td>{{ item.location }}</td>
                    <td style="display:flex;align-items: center;gap: 1rem;">
                        <router-link :to="'/Update/' + item.id" class="btn updt">Update</router-link>
                        <button type="button" class="btn dlt" v-on:click="deleteHotel(item.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>


<script>
import axios from 'axios'
import Header from '../components/Header.vue'
export default {
    name: 'Home',
    components: {
        Header,
    },
    data() {
        return {
            name: '',
            hotel: [],
        }
    },
    methods: {

        async deleteHotel(id) {
            let result = await axios.delete("http://localhost:3000/hotel/" + id);
            if (result.status == 200) {
                this.loadData();
            } else {
                alert("there is some error");
            }
        },
        async loadData() {
            let result = await axios.get("http://localhost:3000/hotel");
            this.hotel = result.data;

            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({ name: 'Signup' });
            }
        }
    },

    mounted() {
        this.loadData();
    }
}
</script>
<style>
.table {
    max-width: 1200px;
    margin-inline: auto;
    background-color: aliceblue;
}

.table td,
th {
    padding: 0.5rem;
    text-align: left;
}

.btn {
    text-decoration: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 2px;
}

.btn.dlt {
    background-color: orangered;
    color: #fff;
    font-size: 1rem;
    font-family: "Poppins", 'sans-serif';
}

.btn.updt {
    background-color: skyblue;
    font-size: 1rem;
    font-weight: 500;
}
</style>