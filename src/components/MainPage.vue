
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      (1) View the PowerPoint Instructions <br>
      (2)  progress to Block 1. <br>
      (3) Please fill out the survey. <br>
      (4) You do not need to select Block 2 or Block 3. <br>
      (5) Please do not click the refresh button.
    </p>
    <div class="bv-example-row bv-example-row-flex-cols">
      <b-row class="my-4 justify-content-center">
        <!-- <b-button :disabled="!this.b_show_0" v-b-modal.modal-center-0>Tutorial</b-button> -->
        <b-button><a v-on:click="this.showInstructions">Instructions</a></b-button>
      </b-row>
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
        Participant ID: {{this.form.name}}
      </b-row>
      <b-row class="my-4 justify-content-center">
      </b-row>
    </div>


    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Experiment Survey"
    >
      <b-form>

      <b-form-group id="input-group-2" label="Participant ID:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.id"
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

      <b-button variant="primary" @click="this.surveyFinish">Submit</b-button>
    </b-form>
    </b-modal>
    <Tutorial/>
    <BlockOne @blockOneDone="blockOneFinished" :participant_name="this.form.name"/>
    <BlockTwo @blockTwoDone="blockTwoFinished" :participant_name="this.form.name"/>
    <BlockThree @blockThreeDone="blockThreeFinished" :participant_name="this.form.name"/>
  </div>
</template>

<script>
import BlockOne from './blockOne.vue'
import BlockTwo from './blockTwo.vue'
import BlockThree from './blockThree.vue'
import Tutorial from './tutorial.vue'

export default {
  name: 'MainPage',
  components: {
    BlockOne,
    BlockTwo,
    BlockThree,
    Tutorial,
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
      b_show_0: true,
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
          id: '',
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
      blockOneRawResults: null,
      blockOneResults: null,
      blockTwoResults: null,
      blockThreeResults: null,
      gender_options: [
        { value: 'Female', text: 'Female' },
        { value: 'Male', text: 'Male' },
        { value: 'Other', text: 'Other' },
      ],
      ra_options: [
        { value: 'Rashi Watwani', text: 'Rashi Watwani' },
        { value: 'Justin Baadarani', text: 'Justin Baadarani' },
        { value: 'Derek Chan', text: 'Derek Chan' },
        { value: 'Monwarul Islam', text: 'Monwarul Islam' },
        { value: 'Al-Taimee Hassan', text: 'Al-Taimee Hassan' },
      ],
    }
  },
  beforeMount() {
  },
  computed: {
  },
  methods: {
    // form ---------------------------------------------------
    showInstructions(){
      window.open('https://github.com/FrankBianDuo/psych322/blob/master/src/assets/Instructions.pdf', '_blank')
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
    surveyFinish() {
      alert('Survey submitted!')
      this.blockOneResults = this.processOneResults(this.blockOneRawResults)
    },
    blockOneFinished(results) {
      // this.b_show_1 = false
      // this.b_show_2 = true
      this.blockOneRawResults = results;
      this.blockOneResults = this.processOneResults(results)
      this.finished_1 = true
    },
    blockThreeFinished(results) {
      // this.b_show_3 = false
      this.finished_3 = true
      this.blockThreeResults = this.processThreeResults(results)
    },
    //(1) Participant_ID, (2) Belief_cond, (3) Encnt1_cond, (4) Encnt2_cond, (5) Trial_ID, (6) Label, (7) Vert_Posit, (8) Trial_order, (9) Avatar, (10) Prediction, (11) Pred_RT, (12) Trust_dist, (13) Trust_RT, (14) Block_order, (15) RA_pres, (16) Date, (17) Age, (18) Gender, (19) Old_bro, (20) Old_sis, (21) Yng_bro, (22) Yng_sis.
    processOneResults(raw) {
      var i;
      var output = [];
      for (i = 0; i < raw.length; i++) {
        var current = {
          'Participant_ID': this.form.id,
          'Belief_cond': '1',
          'Encnt1_cond' : raw[i].game_condition,
          'Encnt2_cond': raw[i].trust_condition,
          'Trial_Number': raw[i].trial_id,
          'Label': raw[i].a_c == '2' ? 
          `Truth = ( ${raw[i].pr_p.p_first} , ${raw[i].pr_p.a_first} ) <- ( ${raw[i].pr_p.p_second} , ${raw[i].pr_p.a_second} )` 
          : 
          `Truth = ( ${raw[i].pr_p.p_second} , ${raw[i].pr_p.a_second} ) <- ( ${raw[i].pr_p.p_first} , ${raw[i].pr_p.a_first} )`,
          'Vert_Posit': 'N/A',
          'Trial_order': raw[i].trial_order,
          'Avatar': raw[i].avatar_id,
          'Prediction': raw[i].prediction,
          'Pred_RT': raw[i].reaction_time_prediction,
          'Trust_dist': raw[i].trust,
          'Trust_RT': raw[i].reaction_time_trust,
          'Block_order': '123',
          'RA_pres': this.form.ra,
          'Date': this.form.date,
          'Age': this.form.age,
          'Gender': this.form.gender,
          'Old_bro': this.form.olderBro,
          'Old_sis': this.form.olderSis,
          'Yng_bro': this.form.youngerBro,
          'Yng_sis': this.form.youngerSis,
        }
        output.push(current)
      }
      output.sort( this.blockOneSort )
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
          'Game Condition' : raw[i].game_condition,
          'Belief Condition': raw[i].belief,
          'Label': raw[i].a_c == '2' ? 
          `Truth = ( ${raw[i].pr_p.p_first} , ${raw[i].pr_p.a_first} ) <- ( ${raw[i].pr_p.p_second} , ${raw[i].pr_p.a_second} ), Belief = ( ${raw[i].t_pr_p.p_first} , ${raw[i].t_pr_p.a_first} ) <- ( ${raw[i].t_pr_p.p_second} , ${raw[i].t_pr_p.a_second} )` 
          : 
          `Truth = ( ${raw[i].pr_p.p_second} , ${raw[i].pr_p.a_second} ) <- ( ${raw[i].pr_p.p_first} , ${raw[i].pr_p.a_first} ), Belief = ( ${raw[i].t_pr_p.p_second} , ${raw[i].t_pr_p.a_second} ) <- ( ${raw[i].t_pr_p.p_first} , ${raw[i].t_pr_p.a_first} )`,
          'Trust Condition': raw[i].trust_condition,
          'Trust/Distrust': raw[i].trust,
          'Reaction Time': raw[i].reaction_time,
          'Trial Order': raw[i].trial_order,
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
        }
        output.push(current)
      }
      output.sort( this.blockThreeSort )
      return output
    },
    blockOneFileName() {
      return `${this.form.id}_block_1.csv`
    },
    blockTwoFileName() {
      return `${this.form.id}_block_2.csv`
    },
    blockThreeFileName() {
      return `${this.form.id}_block_3.csv`
    },
    blockTwoFinished(results) {
      // this.b_show_2 = false
      // this.b_show_3 = true
      this.finished_2 = true
      this.blockTwoResults = this.processTwoResults(results)
    },
    // Functions that sort the results from BlockOne and BlockThree
    blockOneSort(a, b) {
      if (Number(a['Trial_Number']) < Number(b['Trial_Number'])) {
        return -1;
      } else {
        return 1;
      }
    },
    blockThreeSort(a, b) {
      if (a['Game Condition'] < b['Game Condition']) {
        return -1;
      } else if (a['Game Condition'] > b['Game Condition']) {
        return 1;
      } else {
        if (a['Belief Condition'] < b['Belief Condition']) {
          return -1;
        } else if (a['Belief Condition'] > b['Belief Condition']) {
          return 1;
        } else {
          // Same game condition and belief condition, sort by trust condition
          if (a['Trust Condition'] < b['Trust Condition']) {
            return -1;
          } else if (a['Trust Condition'] > b['Trust Condition']) {
            return 1;
          }
        }
      }
      // Should never reach here
      return 0;
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
