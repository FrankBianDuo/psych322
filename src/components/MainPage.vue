
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Description of the experiment<br>
      Other information
    </p>
    <div class="bv-example-row bv-example-row-flex-cols">
      <b-row class="my-4 justify-content-center">
        <b-button :disabled="!this.b_show_1" v-b-modal.modal-center>Block #1</b-button>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button :disabled="!this.b_show_2" v-b-modal.modal-center>Block #2</b-button>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button :disabled="!this.b_show_3" v-b-modal.modal-center>Block #3</b-button>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button v-b-modal.modal-prevent-closing>Experiment Survey</b-button>
      </b-row>
      <b-row class="my-4 justify-content-center">
        Participant Name: {{this.form.name}}
      </b-row>
    </div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Experiment Survey"
    >
      <b-form @submit="onSubmit" @reset="onReset">

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Date:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.date"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Gender:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.gender"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="RA Present:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.ra"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.age"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Number of Older Brother(s):" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.olderBro"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Number of Older Sister(s):" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.olderSis"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Number of Younger Brother(s):" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.youngerBro"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Number of Younger Sister(s):" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.youngerSis"
          required
        ></b-form-input>
      </b-form-group>

      <b-button class="mr-2" type="submit" variant="primary">Submit</b-button>
      <b-button class="ml-2" type="reset" variant="danger">Reset</b-button>
    </b-form>
    </b-modal>

    <BlockOne @blockOneDone="blockOneFinished"/>
  </div>
</template>

<script>
import BlockOne from './blockOne.vue'

export default {
  name: 'MainPage',
  components: {
    BlockOne,
  },
  props: {
    msg: String
  },
  data() {
    return {
      show: false,
      b_show_1: true,
      b_show_2: false,
      b_show_3: false,
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
      form: {
          name: '',
          date: '',
          gender: '',
          ra: '',
          age: '',
          olderBro: '',
          olderSis: '',
          youngerBro: '',
          youngerSis: '',
        },
      formshow: true,
    }
  },
  beforeMount() {
  },
  computed: {
  },
  methods: {
    // form ---------------------------------------------------
    onSubmit(evt) {
      evt.preventDefault()
      if(this.b_show_1 == false && this.b_show_2 == false && this.b_show_2 == false) {
        this.b_show_1 = true
      }
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.formshow = false
      this.$nextTick(() => {
        this.formshow = true
      })
    },
    blockOneFinished(variable) {
      this.b_show_1 = false
      this.b_show_2 = true
    },
    blockTwoFinished(variable) {
      this.b_show_2 = false
      this.b_show_3 = true
    },
    blockThreeFinished(variable) {
      this.b_show_3 = false
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
