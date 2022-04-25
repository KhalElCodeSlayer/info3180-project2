<template>
  <main>
    <section id="home">
      <h1>Buy and Sell Cars Online</h1>
      <p>
        United Auto Sales provides the fastest, easiest and <br>
        most user friendy way to buy or sell cars online. Find a <br>
        Great Price on the Vehicle You Want
      </p>
      <div class="btns">
        <a href="/signup" class="register-btn">Register
        </a>
        <a href="/login" class="login-btn">Login</a>
      </div>
    </section>
    <img src="src\assets\redcar.jpg" alt="car" />
  </main>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
<style scoped>
main {
  display: grid;
  grid-template-columns: 2fr 2fr;
  height: 100%;
}

.login-btn {
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
}

.register-btn {
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

h1 {

  font-size: 48px;
  color: black;
  max-width: 400px;
}
p {
  max-width: 400px;
  
}

#home {
  display: flex;
  flex-direction: column;
  padding: 50px;
  justify-content: center;
  background-color: #ffffff;
}

.btns {
  display: flex;
  justify-content: start;
  width: 100%;
}
.register-btn {
  margin-right: 7px;
  background: #00b7ff;
  
  width: 115px;
  border-radius: 3px;
  color: #e9e3e3;
  padding: 10px 23px;
}
.login-btn {
  margin-right: 7px;
  background: #00d67d;
  width: 115px;
  border-radius: 3px;
  color: #d5d1d1;
  padding: 10px 23px;
}




</style>