<template>
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
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="bv-example-row">
        <b-row class="justify-content-center align-items-center my-1">
          <b-progress style="width: 100%;" :value="this.current_progress" :max="this.max_avatar" show-progress animated></b-progress>
        </b-row>
        <b-row class="justify-content-center align-items-center my-1"
        :style=this.prior_choice_style>
          <div style="position: absolute; top: 16%; left: 49%;">
            <h1 style="position: absolute;">
              {{this.combinations[this.current_avatar].pr_p.a_first}}
            </h1>
          </div>
          <div style="position: absolute;  top: 16%; right: 43%;">
            <h1 style="position: absolute; color: #4B00FF;">
              {{this.combinations[this.current_avatar].pr_p.p_first}}
            </h1>
          </div>
          <div style="position: absolute; top: 36%; left: 49%;">
            <h1 style="position: absolute;">
              {{this.combinations[this.current_avatar].pr_p.a_second}}
            </h1>
          </div>
          <div style="position: absolute; top: 36%; right: 43%;">
            <h1 style="position: absolute; color: #4B00FF;">
              {{this.combinations[this.current_avatar].pr_p.p_second}}
            </h1>
          </div>
          <img :src="require('../assets/Blank Square.png')" style="position: relative; width: 50%; height: 50%; top: 10px;"/>
          <img v-on:keyup.space="priorAvatar" :src="require(`../assets/avatarsgalore/slice${this.avatar_list[this.current_avatar]}.png`)" style="position: absolute; max-width:15%; max-height:15%; left: 30%; top: 22%;"/>
          <img :src="require(`../assets/Arrows ${this.arrow_num}.png`)" style="position: absolute;max-width:30%; max-height:30%; top: 15%; left: 39%;" />
          <img :src="require('../assets/You Full 1.png')" style="position: absolute;max-width:15%; max-height:15%; right: 28%; top: 22%;"/>
        </b-row>

        <!-- Current Choice Block -->
        <b-row class="justify-content-center align-items-center mt-5 bt-5" :style=this.current_choice_style>
          <div style="position: absolute; top: 65%; left: 48.5%;">
            <h1 style="position: absolute;">
              {{this.combinations[this.current_avatar].a_p.a_first}}
            </h1>
          </div>
          <div style="position: absolute;  top: 65%; right: 43%;">
            <h1 style="position: absolute; color: #4B00FF;">
              {{this.combinations[this.current_avatar].a_p.p_first}}
            </h1>
          </div>
          <div style="position: absolute; top: 85%; left: 48.5%;">
            <h1 style="position: absolute;">
              {{this.combinations[this.current_avatar].a_p.a_second}}
            </h1>
          </div>
          <div style="position: absolute; top: 85%; right: 43%;">
            <h1 style="position: absolute; color: #4B00FF;">
              {{this.combinations[this.current_avatar].a_p.p_second}}
            </h1>
          </div>
          <img :src="require('../assets/Blank Square.png')" style="position: relative; width: 50%; height: 50%; top: 10px;"/>
          <!-- Avatar -->
          <img :src="require(`../assets/Feedback Trust.png`)" :style=this.trust_effect_style />
          <img :src="require(`../assets/avatarsgalore/slice${this.avatar_list[this.current_avatar]}.png`)" style="position: absolute; max-width:15%; max-height:15%; left: 30%; bottom: 13%;"/>
          <img :src="require(`../assets/${current_arrow}`)" style="position: absolute;max-width:30%; max-height:30%; bottom: 6%; left: 39%;" />
          <!-- You Avatar  -->
          <img :src="require(`../assets/Feedback Distrust.png`)" :style=this.distrust_effect_style />
          <img :src="require(`../assets/You Blank ${this.you_avatar_type}.png`)" style="position: absolute;max-width:15%; max-height:15%; right: 28%; bottom: 13%;"/>
          <div v-if="this.show_cur_num && this.combinations[this.current_avatar].pl_p == '2' " style="position: absolute; top: 76%; right: 33.5%;">
            <h1 style="position: absolute; color: #4B00FF;">
              {{this.combinations[this.current_avatar].pl_p}}
            </h1>
          </div>
          <div v-else-if="this.show_cur_num" style="position: absolute; top: 76%; right: 34.8%;">
            <h1 style="position: absolute; color: #4B00FF;">
              {{this.combinations[this.current_avatar].pl_p}}
            </h1>
          </div>
        </b-row>
      </b-container>
    </b-modal>
</template>

<script>

    export default {
        name: 'BlockOne',
        props: ['participant_name'],
        components: {
        },
        data() {
            return {
            show: false,
            b_show_1: true,
            free_space: true,
            fading: false,
            you_avatar_type: '1',
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
            show_current: 0,
            show_prior: 1,
            trust_effect_style: "position: absolute; max-width:75%; max-height:75%; left: 16%; bottom: -10%; opacity: 0%",
            distrust_effect_style: "position: absolute;max-width:75%; max-height:75%; right: 14.5%; bottom: -10%; opacity: 0%",
            arrow_num: '1',
            avatar_num: '1',
            avatar_list: this.shuffle(Array(1080).fill().map((x,i)=>i)),
            current_avatar: 0,
            current_progress: 0,
            current_arrow: 'Arrows 1.png',
            show_cur_num: false,
            prediction: null,
            // How many games to run
            max_avatar: 216,
            trial_started: 0,
            avatar_choices: ["3", "2"],
            player_payoff: ["1.5", "2", "2.5"],
            avatar_payoff: [
                {
                p_first: "3",
                a_first: "1.5",
                p_second: "1",
                a_second: "2.5",
                },
                {
                p_first: "3",
                a_first: "2.5",
                p_second: "1",
                a_second: "1.5",
                },
                ],
            prior_payoff: [
                // 3 3 1 1
                {
                a_first: "3",
                p_first: "3",
                a_second: "1",
                p_second: "1",
                top: 22,
                down: 4,
                },
                // 3 3 1 2
                {
                a_first: "3",
                p_first: "3",
                a_second: "1",
                p_second: "2",
                top: 26,
                down: 8,
                },
                // 3 3 2 1
                {
                a_first: "3",
                p_first: "3",
                a_second: "2",
                p_second: "1",
                top: 32,
                down: 14,
                },
                // 3 3 2 2
                {
                a_first: "3",
                p_first: "3",
                a_second: "2",
                p_second: "2",
                top: 34,
                down: 16,
                },
                // 1 3 3 1
                {
                a_first: "1",
                p_first: "3",
                a_second: "3",
                p_second: "1",
                top: 11,
                down: 29,
                },
                // 1 3 3 2
                {
                a_first: "1",
                p_first: "3",
                a_second: "3",
                p_second: "2",
                top: 12,
                down: 30,
                },
                // 2 3 3 1
                {
                a_first: "2",
                p_first: "3",
                a_second: "3",
                p_second: "1",
                top: 17,
                down: 35,
                },
                // 2 3 3 2
                {
                a_first: "2",
                p_first: "3",
                a_second: "3",
                p_second: "2",
                top: 18,
                down: 36,
                },
                // 8 
                // 3 2 1 1
                {
                a_first: "3",
                p_first: "2",
                a_second: "1",
                p_second: "1",
                top: 21,
                down: 3,
                },
                // 2 3 1 1
                {
                a_first: "2",
                p_first: "3",
                a_second: "1",
                p_second: "1",
                top: 20,
                down: 2,
                },
                // 3 2 2 1
                {
                a_first: "3",
                p_first: "2",
                a_second: "2",
                p_second: "1",
                top: 31,
                down: 13,
                },
                // 2 3 1 2
                {
                a_first: "2",
                p_first: "3",
                a_second: "1",
                p_second: "2",
                top: 24,
                down: 6,
                },
                // 2 2 1 1
                {
                a_first: "2",
                p_first: "2",
                a_second: "1",
                p_second: "1",
                top: 19,
                down: 1,
                },
                // 1 2 3 1
                {
                a_first: "1",
                p_first: "2",
                a_second: "3",
                p_second: "1",
                top: 7,
                down: 25,
                },
                // 1 3 2 1
                {
                a_first: "1",
                p_first: "3",
                a_second: "2",
                p_second: "1",
                top: 9,
                down: 27,
                },
                // 1 3 2 2
                {
                a_first: "1",
                p_first: "3",
                a_second: "2",
                p_second: "2",
                top: 10,
                down: 28,
                },
                // 2 2 3 1
                {
                a_first: "2",
                p_first: "2",
                a_second: "3",
                p_second: "1",
                top: 15,
                down: 33,
                },
                // 1 2 2 1
                {
                a_first: "1",
                p_first: "2",
                a_second: "2",
                p_second: "1",
                top: 5,
                down: 23,
                },
                // 18
                ],
            combinations: [],
            }
        },
        beforeMount() {
          this.buildCombinations();
        },
        created: function () {
          let parent = this
          window.addEventListener('keyup', function(event) {
            if (parent.show) {
              if (event.keyCode == 32 && parent.free_space) {
                parent.free_space = false
                parent.priorAvatar();
                var d = new Date();
                var n = d.getTime();
                parent.trial_started = n;
              } else if (event.keyCode == 74 && parent.prediction != null && !parent.free_space && !parent.fading) {
                parent.otherChoice();
              } else if (event.keyCode == 75 && parent.prediction != null && !parent.free_space && !parent.fading) {
                parent.selfChoice();
              } else if (event.keyCode == 65 && parent.prediction == null && !parent.free_space && !parent.fading) {
                // Prediction A
                parent.predictUp();
              } else if (event.keyCode == 90 && parent.prediction == null && !parent.free_space && !parent.fading) {
                // Prediction Z
                parent.predictDown();
              }
            } 
          });
        },
        computed: {
            prior_choice_style() {
            return `opacity: ${this.show_prior}; transition: opacity 0.5s;`
            },
            current_choice_style() {
            return `opacity: ${this.show_current}; transition: opacity 0.5s;`
            },
        },
        methods: {
            helper() {
                alert('click the avatar!')
            },
            priorAvatar() {
                this.show_current = 1;
                this.arrow_num = this.combinations[this.current_avatar].a_c;
            },
            predictUp() {
              this.current_arrow = 'Arrows Group Green Top.png'
              this.prediction = 3
              this.predictionHelper()
            },
            predictDown() {
              this.current_arrow = 'Arrows Group Green Bottom.png'
              this.prediction = 1
              this.predictionHelper()
            },
            predictionHelper() {
              this.show_cur_num = true
              var d = new Date();
              var n = d.getTime();
              this.combinations[this.current_avatar].reaction_time_prediction = n - this.trial_started;
              this.combinations[this.current_avatar].reaction_time_prediction *= 0.001
            },
            otherChoice() {
              this.fading = true
              let parent = this
              this.trust_effect_style = "position: absolute; max-width:75%; max-height:75%; left: 16%; bottom: -10%; opacity: 100%";
              setTimeout(function() {
                parent.ChoiceHelper(1);
              }, 500);
            },
            selfChoice() {
              this.fading = true
              let parent = this
              this.distrust_effect_style = "position: absolute;max-width:75%; max-height:75%; right: 14.5%; bottom: -10%; opacity: 100%";
              setTimeout(function() {
                parent.ChoiceHelper(0);
              }, 500);
            },
            ChoiceHelper(input){
              this.fading = true
              this.free_space = false
              var d = new Date();
              var n = d.getTime();
              this.combinations[this.current_avatar].reaction_time_trust = n - this.trial_started;
              this.trial_started = 0;
              this.combinations[this.current_avatar].reaction_time_trust *= 0.001
              this.show_current = 0;
              this.show_prior = 0;
              let parent = this;
              this.current_progress += 1;
              this.combinations[this.current_avatar].trust = input;
              this.combinations[this.current_avatar].trial_order = this.current_progress
              this.combinations[this.current_avatar].prediction = this.prediction
              this.combinations[this.current_avatar].avatar_id = this.avatar_list[this.current_avatar]
              setTimeout(function() { 
                parent.fading = false
                parent.trust_effect_style = "position: absolute; max-width:75%; max-height:75%; left: 16%; bottom: -10%; opacity: 0%"
                parent.distrust_effect_style = "position: absolute;max-width:75%; max-height:75%; right: 14.5%; bottom: -10%; opacity: 0%"
                parent.free_space = true
                parent.current_arrow = 'Arrows 1.png'
                parent.prediction = null
                parent.show_cur_num = false
                parent.current_avatar += 1;
                parent.$emit('blockOneDone', parent.combinations)
                if(parent.current_avatar == parent.max_avatar) {
                    parent.show = false;
                    alert('Block #1 finished')
                    parent.b_show_1 = false;
                }
                parent.show_prior = 1; 
                parent.arrow_num = '1';
              }, 1000);
            },
            shuffle(array) {
              var currentIndex = array.length, temporaryValue, randomIndex;

              // While there remain elements to shuffle...
              while (0 !== currentIndex) {

                  // Pick a remaining element...
                  randomIndex = Math.floor(Math.random() * currentIndex);

                  currentIndex -= 1;

                  // And swap it with the current element.
                  temporaryValue = array[currentIndex];
                  array[currentIndex] = array[randomIndex];
                  array[randomIndex] = temporaryValue;
              }

              return array;
            },
            buildCombinations() {
            var i, k, j, o
            var first_segment = []
            var second_segment = []
            for (i = 0; i < this.avatar_choices.length; i++) {
                for (k = 0; k < this.player_payoff.length; k++) {
                for (j = 0; j < this.avatar_payoff.length; j++) {
                    for (o = 0; o < this.prior_payoff.length; o++) {
                    var new_comb = {
                        a_c: this.avatar_choices[i],
                        pl_p: this.player_payoff[k],
                        a_p: this.avatar_payoff[j],
                        pr_p: this.prior_payoff[o],   
                        trust: null,
                        reaction_time_trust: null,
                        reaction_time_prediction: null,
                        trust_condition: null,
                        trial_order: null,
                        prediction: null,
                        avatar_id: null,
                        game_condition: this.avatar_choices[i] == "2" ? this.prior_payoff[o].top : this.prior_payoff[o].down,
                    }
                    if (this.player_payoff[k] == '1.5' && this.avatar_payoff[j].a_first == '2.5') {
                      new_comb.trust_condition = 1
                    } else if (this.player_payoff[k] == '2' && this.avatar_payoff[j].a_first == '2.5') {
                      new_comb.trust_condition = 2
                    } else if (this.player_payoff[k] == '2.5' && this.avatar_payoff[j].a_first == '2.5') {
                      new_comb.trust_condition = 3
                    } else if (this.player_payoff[k] == '1.5' && this.avatar_payoff[j].a_first == '1.5') {
                      new_comb.trust_condition = 4
                    } else if (this.player_payoff[k] == '2' && this.avatar_payoff[j].a_first == '1.5') {
                      new_comb.trust_condition = 5
                    } else if (this.player_payoff[k] == '2.5' && this.avatar_payoff[j].a_first == '1.5') {
                      new_comb.trust_condition = 6
                    }
                    if (o < 8) {
                      first_segment.push(new_comb);
                    } else {
                      second_segment.push(new_comb);
                    }
                    }
                }
                }
            }
            first_segment = this.shuffle(first_segment)
            second_segment = this.shuffle(second_segment)
            first_segment.push(...second_segment)
            this.combinations = first_segment
            },
        }

    }
</script>


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
.frac {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    letter-spacing: 0.001em;
    text-align: center;
}
.frac > span {
    display: block;
    padding: 0.1em;
}
.frac span.bottom {
    border-top: thin solid #4B00FF;
}
.frac span.symbol {
    display: none;
} 
</style>