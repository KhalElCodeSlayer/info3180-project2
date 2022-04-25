<template>

    <div class="vue-tempalte">
        <h3>Register New User</h3>
        <form class="form2" id="signup" @submit.prevent="handler">
            
            <div class="form-group">
                <label>Username</label>
                <input type="text" name="Username" class="form-control form-control-lg"/>
                </div>
            <div class="form-group">
                <label>Fullname</label>
                <input type="text" name="Full Name" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" name="Password" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="Email" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Location</label>
                <input type="text" name="Location" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Biography</label>
                <input type="textarea" name="Biography" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Upload Photo</label>
                <input type="file" name="Photo" class="form-control form-control-lg" accept="image/*"/>
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
                let self = this;
                let form_data = new FormData(document.getElementById('signup'))
                console.log(...form_data)
                fetch('/api/register', {
                    method: 'POST',
                    body: form_data,
                    headers: {
                        'X-CSRFToken': this.csrf_token
                    }
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log(data)
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