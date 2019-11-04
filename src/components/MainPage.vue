
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
        <download-csv v-if="this.finished_1" class="btn btn-default" :data="this.blockOneResults" :name="this.blockOneFileName()">
            <b-button> Download data for Block #1 </b-button>
        </download-csv>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button :disabled="!this.b_show_2" v-b-modal.modal-center-2>Block #2</b-button>
        <download-csv v-if="this.finished_2" class="btn btn-default" :data="this.blockTwoResults" :name="this.blockTwoFileName()">
            <b-button> Download data for Block #2 </b-button>
        </download-csv>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button :disabled="!this.b_show_3" v-b-modal.modal-center-3>Block #3</b-button>
        <download-csv v-if="this.finished_3" class="btn btn-default" :data="this.blockThreeResults" :name="this.blockThreeFileName()">
            <b-button> Download data for Block #3 </b-button>
        </download-csv>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button v-b-modal.modal-prevent-closing>Experiment Survey</b-button>
      </b-row>
      <b-row class="my-4 justify-content-center">
        Participant Name: {{this.form.name}}
      </b-row>
      <b-row class="my-4 justify-content-center">
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
        <b-form-select v-model="form.gender" :options="gender_options"></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="RA Present:" label-for="input-2">
        <b-form-select v-model="form.ra" :options="ra_options"></b-form-select>
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

    <BlockOne @blockOneDone="blockOneFinished" :participant_name="this.form.name"/>
    <BlockTwo @blockTwoDone="blockTwoFinished" :participant_name="this.form.name"/>
    <BlockThree @blockThreeDone="blockThreeFinished" :participant_name="this.form.name"/>
  </div>
</template>

<script>
import BlockOne from './blockOne.vue'
import BlockTwo from './blockTwo.vue'
import BlockThree from './blockThree.vue'

export default {
  name: 'MainPage',
  components: {
    BlockOne,
    BlockTwo,
    BlockThree,
  },
  props: {
    msg: String
  },
  data() {
    return {
      finished_1: false,
      finished_2: false,
      finished_3: false,
      show: false,
      b_show_1: true,
      b_show_2: true,
      b_show_3: true,
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
      blockOneResults: null,
      blockTwoResults: null,
      blockThreeResults: null,
      gender_options: [
        { value: 'Female', text: 'Female' },
        { value: 'Male', text: 'Male' },
        { value: 'Other', text: 'Other' },
      ],
      ra_options: [
        { value: 'RA1', text: 'RA1' },
        { value: 'RA2', text: 'RA2' },
        { value: 'RA3', text: 'RA3' },
      ],
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
      // if(this.b_show_1 == false && this.b_show_2 == false && this.b_show_2 == false) {
      //   this.b_show_1 = true
      // }
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
    blockOneFinished(results) {
      // this.b_show_1 = false
      // this.b_show_2 = true
      this.blockOneResults = this.processOneResults(results)
      this.finished_1 = true
    },
    blockThreeFinished(results) {
      // this.b_show_3 = false
      this.finished_3 = true
      this.blockThreeResults = this.processThreeResults(results)
    },
    processOneResults(raw) {
      var i;
      var output = [];
      for (i = 0; i < raw.length; i++) {
        var current = {
          'participant_name': this.form.name,
          'Belief Condition': '1',
          'Label': raw[i].a_c == '2' ? 
          `Truth = ( ${raw[i].pr_p.p_first} , ${raw[i].pr_p.a_first} ) <- ( ${raw[i].pr_p.p_second} , ${raw[i].pr_p.a_second} )` 
          : 
          `Truth = ( ${raw[i].pr_p.p_second} , ${raw[i].pr_p.a_second} ) <- ( ${raw[i].pr_p.p_first} , ${raw[i].pr_p.a_first} )`,
          'Trust Condition': raw[i].trust_condition,
          'Trust/Distrust': raw[i].trust,
          // to be FIXED
          'Avatar': 'N/A',
          'Date': this.form.date,
          'Gender': this.form.gender,
          'RA Present': this.form.ra,
          // to be FIXED
          'Block Order': '123',
          'Age': this.form.age,
          'Younger Brother(s)': this.form.youngerBro,
          'Younger Sister(s)': this.form.youngerSis,
          'Older Brother(s)': this.form.olderBro,
          'Older Sister(s)': this.form.olderSis,
          trust: null,
        }
        output.push(current)
      }
      return output
    },
    processTwoResults(raw) {
      var output = []
      for (var i = 0; i < raw.length; i++) {
        var current = {
          'participant_name': this.form.name,
          'Pay Off Structure': raw[i].game_condition,
          'Avatar Present': raw[i].avatar,
          'Template Selected': raw[i].choice,
          'Date': this.form.date,
          'Gender': this.form.gender,
          'RA Present': this.form.ra,
          'Block Order': '123',
          'Age': this.form.age,
          'Younger Brother(s)': this.form.youngerBro,
          'Younger Sister(s)': this.form.youngerSis,
          'Older Brother(s)': this.form.olderBro,
          'Older Sister(s)': this.form.olderSis,
        }
        output.push(current)
      }
      return output
    },
    processThreeResults(raw) {
      var i;
      var output = [];
      for (i = 0; i < raw.length; i++) {
        var current = {
          'participant_name': this.form.name,
          'Belief Condition': raw[i].belief,
          'Label': raw[i].a_c == '2' ? 
          `Truth = ( ${raw[i].pr_p.p_first} , ${raw[i].pr_p.a_first} ) <- ( ${raw[i].pr_p.p_second} , ${raw[i].pr_p.a_second} ), Belief = ( ${raw[i].t_pr_p.p_first} , ${raw[i].t_pr_p.a_first} ) <- ( ${raw[i].t_pr_p.p_second} , ${raw[i].t_pr_p.a_second} )` 
          : 
          `Truth = ( ${raw[i].pr_p.p_second} , ${raw[i].pr_p.a_second} ) <- ( ${raw[i].pr_p.p_first} , ${raw[i].pr_p.a_first} ), Belief = ( ${raw[i].t_pr_p.p_second} , ${raw[i].t_pr_p.a_second} ) <- ( ${raw[i].t_pr_p.p_first} , ${raw[i].t_pr_p.a_first} )`,
          'Trust Condition': raw[i].trust_condition,
          'Trust/Distrust': raw[i].trust,
          // to be FIXED
          'Avatar': 'N/A',
          'Date': this.form.date,
          'Gender': this.form.gender,
          'RA Present': this.form.ra,
          // to be FIXED
          'Block Order': '123',
          'Age': this.form.age,
          'Younger Brother(s)': this.form.youngerBro,
          'Younger Sister(s)': this.form.youngerSis,
          'Older Brother(s)': this.form.olderBro,
          'Older Sister(s)': this.form.olderSis,
          trust: null,
        }
        output.push(current)
      }
      return output
    },
    blockOneFileName() {
      return `${this.form.name}_block_1.csv`
    },
    blockTwoFileName() {
      return `${this.form.name}_block_2.csv`
    },
    blockThreeFileName() {
      return `${this.form.name}_block_3.csv`
    },
    blockTwoFinished(results) {
      // this.b_show_2 = false
      // this.b_show_3 = true
      this.finished_2 = true
      this.blockTwoResults = this.processTwoResults(results)
    },
    
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
