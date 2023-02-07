<template>
  <div id="app">
    <h1 class="title">Todo application</h1>
    <hr>

    <router-view />
  </div>
</template>


<style>
body {
  background-color: #254571;
  color: #fff;
}
.title {
  color: #fff;
}
.text {
  color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
