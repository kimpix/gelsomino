<template>
  <div id="game">
     <div class="grid">
       <div @click="show(0)" class="zero"><img :src="zero" width="50%"/></div>
       <div @click="show(1)" class="one"><img :src="one" width="50%"/></div>
       <div @click="show(2)" class="two"><img :src="two" width="50%"/></div>
     </div>
     <button v-on:click="play">{{button}}</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Game',
  data: function() {
         return  {
            zero: 'static/shell.png',
            one: 'static/pearl.jpeg',
            two: 'static/shell.png',
            place: '',
            button: 'Clicker pour demander au monsieur de faire tourner',
            flag: 0
         }
  },
  methods: { 
      hide() {
        this.one = 'static/shell.png';
        this.two = 'static/shell.png';
        this.zero = 'static/shell.png';
      },
      play() {
        if(this.flag !== 0) {
          return false;
        }
        this.hide();
        this.button = 'Il faut trouver du premier coup';
        axios.get(`https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new`)
            .then(response => {
            // JSON responses are automatically parsed.
            this.place = response.data

            console.log(this.place)
        }).catch(e => {
             this.errors.push(e)
        })
        this.flag = 1;
      },
      show(shellPlace){
        console.log(shellPlace);
         if(shellPlace === 0) {
           if(this.place===shellPlace){
              this.zero = 'static/pearl.jpeg';
              this.button = 'Gagné cliquez pour rejouer !!';
              this.flag = 0;
           } else {
              this.zero = '';
              this.button = 'Perdu cliquez pour rejouer !';
              this.flag = 0;
           }
         } else if (shellPlace === 1) {
           if(this.place===shellPlace){
              this.one = 'static/pearl.jpeg';
              this.button = 'Gagné cliquez pour rejouer !!';
              this.flag = 0;
            } else {
              this.one = '';
              this.button = 'Perdu cliquez pour rejouer !!';
              this.flag = 0;
            }
         } else if (shellPlace === 2) {
           if(this.place===shellPlace){
              this.two = 'static/pearl.jpeg';
              this.button = 'Gagné cliquez pour rejouer !!'; 
              this.flag = 0;             
            } else {
              this.two = '';
              this.button = 'Perdu cliquez pour rejouer !!';
              this.flag = 0;
             }

         }
         
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  background-color: white;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
