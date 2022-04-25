<template>

    <div class="vue-tempalte">
        <h3>Register New User</h3>
        <form class="form2">
            <div class="first-row">
            <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control form-control-lg" required/>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" required/>
            </div>
            </div>
            <div class="second-row">
            <div class="form-group">
                <label>Fullname</label>
                <input type="text" class="form-control form-control-lg" required/>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" required/>
            </div>
            </div>
            <div class="form-group">
                <label>Location</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Biography</label>
                <input type="text" class="form-control form-control-lg"/>
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
    width: 700px;
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
.first-row{

    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.first-row > * {
    margin: 0 10px 5px 0;
    width: 25%;
    min-width: 100px;
    flex: 1;
}
.second-row{

    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.second-row > * {
    margin: 0 10px 5px 0;
    width: 25%;
    min-width: 100px;
    flex: 1;
}
</style>