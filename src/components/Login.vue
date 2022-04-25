<template>
    <div class="vue-tempalte">
        <h3>Login to your account</h3>
        <form class="form1" id="login" @submit.prevent="handler">
            
            <div class="form-group">
                <label>Username</label>
                <input type="text" name="username" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" class="form-control form-control-lg" />
            </div>
            <button type="submit" class="btn btn-success btn-lg btn-block">Login</button>
        </form>
    </div>
</template>
<script>

    export default {
        data() {
            return {csrf_token: ''}
        },
        methods: {
            handler() {
                let self = this;
                let form_data = new FormData(document.getElementById('login'))
                fetch('/api/auth/login', {
                    method: 'POST',
                    body: form_data,
                    headers: {
                        'X-CSRFToken': this.csrf_token
                    }
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    this.$store.state.token = data.token;
                    this.$store.state.user = data.id;
                }).then((error) => console.log(error))
            },
            getCsrfToken() {
                let self = this;
                fetch('/api/csrf-token')
                .then((response)=> response.json())
                .then((data)=> {
                    console.log(data)
                    self.csrf_token = data.csrf_token
                    })
            }
        },
        created() {
            this.getCsrfToken();
        }
    }
</script>
<style scoped>
button{
    margin-top: 10px;
    width: 100%;
}
.form1 {
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
}
h3{
    text-align: center;
    padding: 5px;
}

.vue-tempalte{
    align-content: center;
    padding-top: 100px;
    padding-bottom: 100px;
}

</style>