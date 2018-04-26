<template>
  <div id="app">
    <div class="navbar-header navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span class="navbar-brand" href="#">Le Bonneteau</span>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><router-link to="/explications">1 — Explications</router-link></li>
            <li > <router-link to="/game">2- Mon bonneteau</router-link></li>
          </ul>
        </div> 
      </div>
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
  body {
    padding-top: 50px;
  }
  .starter-template {
    padding: 40px 15px;
  }
</style>
