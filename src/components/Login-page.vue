<template>

    
    <div class="vue-tempalte">
        <h3>Login to your account</h3>
        <form class="form1">
            
            <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <button type="submit" class="btn btn-success btn-lg btn-block">Login</button>
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