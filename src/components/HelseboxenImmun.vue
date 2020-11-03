<template>
  <div class="container">
    <h1>Vælg din boxtype - Immunboxsen</h1>
    <img src="../assets/helseboxenheader.jpg" alt="" class="helseboxenHeaderImg" />
    <h2>Styrk dit immunforsvar</h2>
    <p>
      Vi har sammensat denne forsvarsboxs, med alle de rette kosttilskud din krop skal bruge, for at give dit
      immuforsvar et godt boost.
    </p>
    <h3>Hvad indeholder boxsen?</h3>
    <div class="vitaminGrid">
      <img src="../assets/placeholdervitamin.jpg" alt="" />
      <img src="../assets/placeholdervitamin.jpg" alt="" />
      <img src="../assets/placeholdervitamin.jpg" alt="" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelseboxenImmun',
    components: {},
  };
</script>

<style scoped>
  .container {
    width: 60%;
    margin: auto;
  }
  .vitaminGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .helseboxenHeaderImg {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
</style>
