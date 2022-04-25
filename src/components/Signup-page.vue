<template>

    <div class="vue-tempalte">
        <h3>Register New User</h3>
        <form class="form2">
            
            <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control form-control-lg"/>
                </div>
            <div class="form-group">
                <label>Fullname</label>
                <input type="text" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Location</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Biography</label>
                <input type="textarea" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Upload Photo</label>
                <input type="file" class="form-control form-control-lg" accept="image/*"/>
            </div>
            
            <button type="submit" class="btn btn-success btn-lg btn-block">Register</button>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
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