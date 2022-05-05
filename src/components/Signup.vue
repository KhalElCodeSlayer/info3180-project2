<template>

    <div class="vue-tempalte">
        <h3>Register New User</h3>
        <form class="form2" id="signup" @submit.prevent="handler">
            
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" class="form-control form-control-lg"/>
                </div>
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" name="name" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label for="location">Location</label>
                <input type="text" name="location" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label for="biography">Biography</label>
                <textarea name="biography" cols="30" rows="5" class="form-control form-control-lg"></textarea>
            </div>
            <div class="form-group">
                <label for="photo">Upload Photo</label>
                <input type="file" name="photo" class="form-control form-control-lg" accept="image/*"/>
            </div>
            
            <button type="submit" class="btn btn-success btn-lg btn-block">Register</button>
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
                let form_data = new FormData(document.getElementById('signup'))
                fetch('/api/register', {
                    method: 'POST',
                    body: form_data,
                    headers: {
                        'X-CSRFToken': this.$store.state.csrf_token
                    }
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    this.$router.push('login')
                }).then((error) => console.log(error))
            }
        }
    }

</script>
<style>

.form2{
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
}
button{
    margin-top: 10px;
}

h3{
    text-align: center;
    padding: 5px;
}

</style>