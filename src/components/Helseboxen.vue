<template>
  <div class="container">
    <h1>Vælg din boxtype</h1>
    <div class="helseboxenContainer">
      <h2>Lad os komme i gang</h2>
      <p>
        Vi har sammensat en helsebox, som sikrer at du har alt du behøver, for at komme igang med en sundere livstil og
        får de anbefalede daglige vitaminer.
      </p>
      <h3>Hvad skal du vælge?</h3>
      <div class="boxGrid">
        <div class="innerBoxGrid">
          <img src="../assets/placeholdervitamin.jpg" alt="" />
          <h4>Styrk immunforsvaret</h4>
        </div>
        <div class="innerBoxGrid">
          <img src="../assets/placeholdervitamin.jpg" alt="" />
          <h4>All around helsebox</h4>
        </div>
        <div class="innerBoxGrid">
          <img src="../assets/placeholdervitamin.jpg" alt="" />
          <h4>Skræddersyet helsebox</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Helseboxen',
  };
</script>

<style scoped>
  .container {
    width: 60%;
    margin: auto;
  }

  .boxGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .innerBoxGrid {
    text-align: center;
  }
</style>
