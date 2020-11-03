<template>
  <div class="container">
    <h1>Vælg din boxtype - Skrædersyet</h1>
    <img src="../assets/helseboxenheader.jpg" alt="" class="helseboxenHeaderImg" />
    <p>
      Med en skædersyet helsebox får du en box med lige nøjagtig de vitaminer og mineraler du skal bruge for at have en
      optimal hverdag. Helseboxen bliver sammensat ud fra dine valg i quizzen.
    </p>

    <router-link to="/helseboxenquiz">Klik her for at tage quizzen.</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelseboxenCustom',
  };
</script>

<style scoped>
  .container {
    width: 60%;
    margin: auto;
  }
  .helseboxenHeaderImg {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
</style>
