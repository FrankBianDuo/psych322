
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Description of the experiment<br>
      Other information
    </p>
    <b-button v-b-modal.modal-center>Get Started</b-button>

    <b-modal 
      id="modal-center" 
      size="xl"
      centered title="Scenario #1"
      v-model="show"
      :hide-footer="true"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container class="bv-example-row">
        <b-row>
          <b-col  class="mx-2 box" :style=this.scenarioColor ></b-col>
          <b-col cols="6" class="bg-danger mx-2" style="height: 280px;" ></b-col>
          <b-col cols="2" class="mx-2" style="height: 280px;">
            <b-button v-on:click="nextUp" class="py-4 my-4" variant="outline-primary">Option #1</b-button>
            <b-button v-on:click="nextUp" class="py-4 my-4" variant="outline-primary">Option #2</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
    <gameCase />
  </div>
</template>

<script>
import gameCase from './gameCase.vue'

export default {
  name: 'HelloWorld',
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
