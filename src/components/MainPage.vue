
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Description of the experiment<br>
      Other information
    </p>
    <div class="bv-example-row bv-example-row-flex-cols">
      <b-row class="my-4 justify-content-center">
        <b-button v-b-modal.modal-center>Block #1</b-button>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button v-b-modal.modal-center>Block #2</b-button>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button v-b-modal.modal-center>Block #3</b-button>
      </b-row>
    </div>

    <b-modal 
      id="modal-center" 
      size="xl"
      centered title="Block #1"
      v-model="show"
      :hide-footer="true"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="bv-example-row">
        <!-- <b-row>
          <b-col  class="mx-2 box" :style="this.scenarioColor" ></b-col>
          <b-col cols="6" class="bg-danger mx-2" style="height: 280px;" ></b-col>
          <b-col cols="2" class="mx-2" style="height: 280px;">
            <b-button v-on:click="nextUp" class="py-4 my-4" variant="outline-primary">Option #1</b-button>
            <b-button v-on:click="nextUp" class="py-4 my-4" variant="outline-primary">Option #2</b-button>
          </b-col>
        </b-row> -->
        <b-row class="justify-content-center align-items-center my-1">
          <div style="position: absolute;">
            <h1>1</h1>
          </div>
          <img :src="require('../retrollystimuli/Current Choice Square.png')" style="position: relative; width: 50%; height: 50%; top: 10px;"/>
          <img :src="require('../retrollystimuli/Ex Avatar 001.png')" style="position: absolute; max-width:15%; max-height:15%; left: 30%; top: 25%;"/>
          <img :src="require('../retrollystimuli/Arrows 1.png')" style="position: absolute;max-width:30%; max-height:30%; top: 18%;" />
          <img :src="require('../retrollystimuli/You Full 1.png')" style="position: absolute;max-width:15%; max-height:15%; right: 30%; top: 25%;"/>
        </b-row>
        <b-row class="justify-content-center align-items-center mt-5 bt-5">
          <img :src="require('../retrollystimuli/Current Choice Square.png')" style="position: relative; width: 50%; height: 50%; top: 10px;"/>
          <img :src="require('../retrollystimuli/Ex Avatar 001.png')" style="position: absolute; max-width:15%; max-height:15%; left: 30%; bottom: 9%;"/>
          <img :src="require('../retrollystimuli/Arrows 1.png')" style="position: absolute;max-width:30%; max-height:30%; bottom: 1%;" />
          <img :src="require('../retrollystimuli/You Full 1.png')" style="position: absolute;max-width:15%; max-height:15%; right: 30%; bottom: 9%;"/>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import gameCase from './gameCase.vue'

export default {
  name: 'MainPage',
  components: {
    gameCase,
  },
  props: {
    msg: String
  },
  data() {
    return {
      show: false,
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'warning',
      footerTextVariant: 'dark',
      colors:['red', 'yellow', 'brown', 'orange', 'black'],
      scenarioColor: `height: 280px; backgroundColor: red;`,
      index: 0,
      configKonva: {
        width: 200,
        height: 200
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: "red",
        stroke: "black",
        strokeWidth: 4
      }
    }
  },
  methods: {
    nextUp () {
      this.index += 1
      if (this.index >= this.colors.length) {
        this.index = 0
      }
      this.scenarioColor = `height: 280px; backgroundColor: ${this.colors[this.index]};`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

.b-col {
  transition: background-color .3s;
}
</style>
