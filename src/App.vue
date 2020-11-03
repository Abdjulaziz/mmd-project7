<template>
  <div id="app">
    <nav>
      <router-link to="/">Helseboxen</router-link>
      <router-link to="/helseboxenimmun">Helseboxen - immun</router-link>
      <router-link to="/helseboxencustom">Helseboxen - custom</router-link>
      <router-link to="/helseboxenquiz">Helseboxen - quiz</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 1.6;
  }

  *:before,
  *:after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    font-family: 'Lato', sans-serif;
    height: 100%;
    padding-top: 0;
    width: 100%;
  }

  /* Denne sektion er kun med til at illustrere navigationsbaren - skal fjernes ved reel udgivelse. */
  nav {
    padding: 20px 20px 20px 0;
  }

  nav a {
    padding: 10px;
    text-decoration: none;
    background: #fff666;
    border-radius: 3px;
    color: rgb(0, 110, 255);
    font-weight: bold;
    margin-right: 15px;
  }
  /* Stop af placeholder nav*/
</style>
