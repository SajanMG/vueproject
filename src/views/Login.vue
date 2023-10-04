<template>
    <h1>This is Login page</h1>
    <img src="https://electricloans.com.au/wp-content/themes/theme/_assets/images/Logo.svg" alt="logo" />

    <div class="form">
        <input type="email" v-model="email" placeholder="enter email" />
        <input type="password" v-model="password" placeholder="enter password" />
        <button type="submit" @click=login()>Login</button>
        <p>
            <router-link to="/Signup">SignUp</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login',

    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        async login() {
            try {
                let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
                console.log(result);
                if (result.status == 200 && result.data.length > 0) {
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                    this.$router.push({ name: 'Home' });
                } else {
                    alert('check your credentials');
                }
            } catch (error) {
                console.log("error while fetching:", error);

            }
        }
    },

    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'Home' })
        }
    }
}

</script>

<style>
.form {
    margin-top: 1rem;
}

.form input {
    display: block;
    width: 300px;
    height: 50px;
    margin-bottom: 1rem;
    margin-inline: auto;
    border: 1px solid skyblue;
    padding-left: 20px;
}

.form button {
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