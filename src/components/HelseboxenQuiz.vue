<template>
  <div>
    <form class="helseQuiz" v-on:submit.prevent="onQuizSubmit">
      <p>Hvad er dit navn?</p>
      <input type="text" placeholder="Skriv dit navn her" v-model="name" />

      <p>Hvad er din email?</p>
      <input type="email" placeholder="Skriv dit navn her" v-model="email" />

      <p>Hvad er dit køn?</p>
      <input type="radio" id="male" value="male" name="gender" v-model="gender" />
      <label for="male">Male</label>
      <input type="radio" id="female" value="female" name="gender" v-model="gender" />
      <label for="female">Female</label>

      <p>Hvor mange grøntsager spiser du om dagen?</p>
      <input type="radio" id="0vegetables" name="enoughVegetables" v-model="questions[0]['value']" value="0" />
      <label for="0vegetables">0 stk</label>
      <input type="radio" id="1vegetables" name="enoughVegetables" v-model="questions[0]['value']" value="1" />
      <label for="1vegetables">1 stk</label>
      <input type="radio" id="2vegetables" name="enoughVegetables" v-model="questions[0]['value']" value="2" />
      <label for="2vegetables">2-3 stk</label>
      <input type="radio" id="3vegetables" name="enoughVegetables" v-model="questions[0]['value']" value="3" />
      <label for="3vegetables">Mere end 3 stk</label>

      <p>Hvor meget frugt spiser du om dagen?</p>
      <input type="radio" id="0fruits" name="enoughFruits" v-model="questions[1]['value']" value="0" />
      <label for="0fruits">0 stk</label>
      <input type="radio" id="1fruits" name="enoughFruits" v-model="questions[1]['value']" value="1" />
      <label for="1fruits">1 stk</label>
      <input type="radio" id="2fruits" name="enoughFruits" v-model="questions[1]['value']" value="2" />
      <label for="2fruits">2-3 stk</label>
      <input type="radio" id="3fruits" name="enoughFruits" v-model="questions[1]['value']" value="3" />
      <label for="3fruits">Mere end 3 stk</label>

      <p>Hvor mange gram fuldkorn spiser du om dagen? (1 skive rugbrød svarer ca. til 15 gram fuldkorn)</p>
      <input type="radio" id="0gram" name="enoughWholeGrain" v-model="questions[2]['value']" value="0" />
      <label for="0gram">0 stk</label>
      <input type="radio" id="1gram" name="enoughWholeGrain" v-model="questions[2]['value']" value="1" />
      <label for="1gram">1 stk</label>
      <input type="radio" id="2gram" name="enoughWholeGrain" v-model="questions[2]['value']" value="2" />
      <label for="2gram">2-3 stk</label>
      <input type="radio" id="3gram" name="enoughWholeGrain" v-model="questions[2]['value']" value="3" />
      <label for="3gram">Mere end 3 stk</label>

      <p>Hvor ofte spiser du fed fisk om ugen? (Fed fisk kan f.eks. være laks, makrel eller sild)</p>
      <input type="radio" id="0fish" name="enoughFish" v-model="questions[3]['value']" value="0" />
      <label for="0fish">Aldrig/Sjældent</label>
      <input type="radio" id="1fish" name="enoughFish" v-model="questions[3]['value']" value="1" />
      <label for="1fish">1 servering(150 gram)</label>
      <input type="radio" id="2fish" name="enoughFish" v-model="questions[3]['value']" value="2" />
      <label for="2fish">2 servering(300 gram)</label>
      <input type="radio" id="3fish" name="enoughFish" v-model="questions[3]['value']" value="3" />
      <label for="3fish">3 servering(450 gram)</label>
      <input type="radio" id="4fish" name="enoughFish" v-model="questions[3]['value']" value="5" />
      <label for="4fish">Mere end 3 servering</label>

      <p>Hvor ofte spiser du animalske produkter, æg, fjerkræ, svinekød og rødt kød om ugen?</p>
      <input type="radio" id="0animal" name="enoughVegetarian" v-model="questions[4]['value']" value="0" />
      <label for="0animal">Aldrig/Sjældent</label>
      <input type="radio" id="1animal" name="enoughVegetarian" v-model="questions[4]['value']" value="1" />
      <label for="1animal">1 servering</label>
      <input type="radio" id="2animal" name="enoughVegetarian" v-model="questions[4]['value']" value="2" />
      <label for="2animal">2-4 serveringer</label>
      <input type="radio" id="3animal" name="enoughVegetarian" v-model="questions[4]['value']" value="3" />
      <label for="3animal">Mere end 5 serveringer</label>
      <input type="radio" id="4animal" name="enoughVegetarian" v-model="questions[4]['value']" value="4" />
      <label for="4animal">Mere end 7 serveringer</label>

      <p>Hvor ofte spiser du animalske produkter, æg, fjerkræ, svinekød og rødt kød om ugen?</p>
      <input type="radio" id="0milk" name="enoughMilk" v-model="questions[5]['value']" value="0" />
      <label for="0milk">Aldrig/Sjældent</label>
      <input type="radio" id="1milk" name="enoughMilk" v-model="questions[5]['value']" value="1" />
      <label for="1milk">1 servering</label>
      <input type="radio" id="2milk" name="enoughMilk" v-model="questions[5]['value']" value="2" />
      <label for="2milk">2-4 serveringer</label>
      <input type="radio" id="3milk" name="enoughMilk" v-model="questions[5]['value']" value="3" />
      <label for="3milk">Mere end 5 serveringer</label>
      <input type="radio" id="4milk" name="enoughMilk" v-model="questions[5]['value']" value="4" />
      <label for="4milk">Mere end 7 serveringer</label>

      <br />
      <button type="submit">Submit</button>
    </form>
    <div class="showBoxDiv">
      <p>Vi anbefaler du skal have en helsebox med følgede produkter i:</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelseboxenQuiz',
    data() {
      return {
        name: '',
        email: '',
        gender: '',

        // Negativ = 0/1, positiv = 2/3
        questions: [
          {
            title: 'enoughVegetables',
            value: null,
            product: 'Solaray Spektro Multi-Vita-Min',
            productInfo: 'Hjælper dig på vej mod dine 600 gram frugt og grønt',
          },

          { title: 'enoughFruits', value: null, product: '', productInfo: '' },

          {
            title: 'enoughWholeGrain',
            value: null,
            product: 'Fiber HUSK Daglig Mavebalance ',
            productInfo: 'Fibre til gavn for mætheden og fordøjelsen',
          },

          {
            title: 'enoughFish',
            value: null,
            product: 'Pureviva Omega 3 2000mg',
            productInfo: 'Omega 3 af høj kvalitet på en praktisk måde',
          },

          { title: 'enoughVegetarian', value: null, product: '', productInfo: '' },

          {
            title: 'enoughMilk',
            value: null,
            product: 'Solaray Cal-Mag Citrat Med D-Vitamin',
            productInfo: 'Kosttilskud fra Solaray med calcium, magnesium og d-vitamin',
          },
        ],
      };
    },

    methods: {
      onQuizSubmit() {
        let quizForm = document.querySelector('.helseQuiz');
        console.log(quizForm);
        quizForm.style.display = 'none';
        this.createBox();
      },

      createBox() {
        for (let question of this.questions) {
          if (question.value <= 1 && question.value != null) {
            console.log(question.value);
            console.log(question.product);
            let showBoxDiv = document.querySelector('.showBoxDiv');

            let productHeading = document.createElement('h3');
            let productText = document.createTextNode(`${question.product}`);
            productHeading.appendChild(productText);

            let productPara = document.createElement('p');
            let productInfo = document.createTextNode(`${question.productInfo}`);
            productPara.appendChild(productInfo);

            showBoxDiv.appendChild(productHeading);
            showBoxDiv.appendChild(productPara);
            showBoxDiv.style.display = 'block';
          }
        }
      },
    },
  };
</script>

<style scoped>
  .showBoxDiv {
    display: none;
  }
</style>
