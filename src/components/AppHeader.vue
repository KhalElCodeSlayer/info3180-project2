<template>
  <header v-if="this.$store.state.token=='' ">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">United Auto Sales</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/login">Login</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/signup">Register</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <header v-if="this.$store.state.token!='' ">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">United Auto Sales</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/cars/new">Add Car</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/explore">Explore</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="`/users/${users}`">My Profile</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

</template>

<script>
  import { RouterLink } from "vue-router";
  export default {
    methods: {
      getCsrfToken() {
        fetch('/api/csrf-token')
          .then((response)=> response.json())
          .then((data)=> {
              this.$store.commit('update_csrf_token', data.csrf_token)
              console.log(this.$store.state.csrf_token)
        })
      }
    },
    created() {
        this.getCsrfToken()
      }
  }
</script>

<style scoped>

</style>