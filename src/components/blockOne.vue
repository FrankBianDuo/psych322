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
          <div style="position: absolute; top: 19%; left: 49%;">
            <h1 style="position: absolute;">
              {{this.combinations[this.current_avatar].pr_p.a_first}}
            </h1>
          </div>
          <div style="position: absolute;  top: 19%; right: 43%;">
            <h1 style="position: absolute; color: #4B00FF;">
              {{this.combinations[this.current_avatar].pr_p.p_first}}
            </h1>
          </div>
          <div style="position: absolute; top: 39%; left: 49%;">
            <h1 style="position: absolute;">
              {{this.combinations[this.current_avatar].pr_p.a_second}}
            </h1>
          </div>
          <div style="position: absolute; top: 39%; right: 43%;">
            <h1 style="position: absolute; color: #4B00FF;">
              {{this.combinations[this.current_avatar].pr_p.p_second}}
            </h1>
          </div>
          <img :src="require('../retrollystimuli/Prior Choice Square.2.1.png')" style="position: relative; width: 50%; height: 50%; top: 10px;"/>
          <img @click="priorAvatar" :src="require(`../retrollystimuli/avatarsgalore/slice${this.avatar_list[this.current_avatar]}.png`)" style="position: absolute; max-width:15%; max-height:15%; left: 30%; top: 25%; cursor: pointer;"/>
          <img :src="require(`../retrollystimuli/Arrows ${this.arrow_num}.png`)" style="position: absolute;max-width:30%; max-height:30%; top: 18%; left: 39%;" />
          <img @click="helper" :src="require('../retrollystimuli/You Full 1.png')" style="position: absolute;max-width:15%; max-height:15%; right: 30%; top: 25%; cursor: pointer;"/>
        </b-row>

        <!-- Current Choice Block -->
        <b-row class="justify-content-center align-items-center mt-5 bt-5" :style=this.current_choice_style>
          <div style="position: absolute; top: 70%; left: 49%;">
            <h1 style="position: absolute;">
              {{this.combinations[this.current_avatar].a_p.a_first}}
            </h1>
          </div>
          <div style="position: absolute;  top: 70%; right: 43%;">
            <h1 style="position: absolute; color: #4B00FF;">
              {{this.combinations[this.current_avatar].a_p.p_first}}
            </h1>
          </div>
          <div style="position: absolute; top: 90%; left: 49%;">
            <h1 style="position: absolute;">
              {{this.combinations[this.current_avatar].a_p.a_second}}
            </h1>
          </div>
          <div style="position: absolute; top: 90%; right: 43%;">
            <h1 style="position: absolute; color: #4B00FF;">
              {{this.combinations[this.current_avatar].a_p.p_second}}
            </h1>
          </div>
          <img :src="require('../retrollystimuli/Current Choice Square.2.1.png')" style="position: relative; width: 50%; height: 50%; top: 10px;"/>
          <img @click="otherChoice" :src="require(`../retrollystimuli/avatarsgalore/slice${this.avatar_list[this.current_avatar]}.png`)" style="position: absolute; max-width:15%; max-height:15%; left: 30%; bottom: 9%; cursor: pointer;"/>
          <img :src="require('../retrollystimuli/Arrows 1.png')" style="position: absolute;max-width:30%; max-height:30%; bottom: 2%; left: 39%;" />
          <img @click="selfChoice" :src="require('../retrollystimuli/You Blank 1.png')" style="position: absolute;max-width:15%; max-height:15%; right: 30%; bottom: 9%; cursor: pointer;"/>
          <div @click="selfChoice" :style="this.combinations[this.current_avatar].pl_p == '2' ? 'position: absolute; top: 80%; right: 33.5%; font-size: 30px; cursor: pointer; color: #4B00FF;' : 'position: absolute; top: 77%; right: 33%; font-size: 25px; cursor: pointer; color: #4B00FF;' ">
              {{this.combinations[this.current_avatar].pl_p == "3/2" ? '1' : '2'}}
                <div v-if="this.combinations[this.current_avatar].pl_p != '2' " class="frac">
                    <span>1</span>
                    <span class="symbol">/</span>
                    <span class="bottom">2</span>
                    
                </div>
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
            arrow_num: '1',
            avatar_num: '1',
            avatar_list: this.shuffle(Array(1080).fill().map((x,i)=>i)),
            current_avatar: 0,
            current_progress: 0,
            // How many games to run
            max_avatar: 216,
            avatar_choices: ["3", "2"],
            player_payoff: ["3/2", "2", "5/2"],
            avatar_payoff: [
                {
                p_first: "3",
                a_first: "2",
                p_second: "1",
                a_second: "3",
                },
                {
                p_first: "3",
                a_first: "3",
                p_second: "1",
                a_second: "2",
                },
                ],
            prior_payoff: [
                // 3 3 1 1
                {
                a_first: "3",
                p_first: "3",
                a_second: "1",
                p_second: "1",
                },
                // 3 3 1 2
                {
                a_first: "3",
                p_first: "3",
                a_second: "1",
                p_second: "2",
                },
                // 3 3 2 1
                {
                a_first: "3",
                p_first: "3",
                a_second: "2",
                p_second: "1",
                },
                // 3 3 2 2
                {
                a_first: "3",
                p_first: "3",
                a_second: "2",
                p_second: "2",
                },
                // 1 3 3 1
                {
                a_first: "1",
                p_first: "3",
                a_second: "3",
                p_second: "1",
                },
                // 1 3 3 2
                {
                a_first: "1",
                p_first: "3",
                a_second: "3",
                p_second: "2",
                },
                // 2 3 3 1
                {
                a_first: "2",
                p_first: "3",
                a_second: "3",
                p_second: "1",
                },
                // 2 3 3 2
                {
                a_first: "2",
                p_first: "3",
                a_second: "3",
                p_second: "2",
                },
                // 8 
                // 3 2 1 1
                {
                a_first: "3",
                p_first: "2",
                a_second: "1",
                p_second: "1",
                },
                // 2 3 1 1
                {
                a_first: "2",
                p_first: "3",
                a_second: "1",
                p_second: "1",
                },
                // 3 2 2 1
                {
                a_first: "3",
                p_first: "2",
                a_second: "2",
                p_second: "1",
                },
                // 2 3 1 2
                {
                a_first: "2",
                p_first: "3",
                a_second: "1",
                p_second: "2",
                },
                // 2 2 1 1
                {
                a_first: "2",
                p_first: "2",
                a_second: "1",
                p_second: "1",
                },
                // 1 2 3 1
                {
                a_first: "1",
                p_first: "2",
                a_second: "3",
                p_second: "1",
                },
                // 1 3 2 1
                {
                a_first: "1",
                p_first: "3",
                a_second: "2",
                p_second: "1",
                },
                // 1 3 2 2
                {
                a_first: "1",
                p_first: "3",
                a_second: "2",
                p_second: "2",
                },
                // 2 2 3 1
                {
                a_first: "2",
                p_first: "2",
                a_second: "3",
                p_second: "1",
                },
                // 1 2 2 1
                {
                a_first: "1",
                p_first: "2",
                a_second: "2",
                p_second: "1",
                },
                // 16
                ],
            combinations: [],
            }
        },
        beforeMount() {
            this.buildCombinations();
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
            otherChoice() {
                this.ChoiceHelper(1);
            },
            selfChoice() {
                this.ChoiceHelper(0);
            },
            ChoiceHelper(input){
                this.show_current = 0;
                this.show_prior = 0;
                let parent = this;
                this.current_progress += 1;
                this.combinations[this.current_avatar].trust = input;
                setTimeout(function() { 
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
                        trust_condition: null,
                    }
                    if (this.player_payoff[k] == '3/2' && this.avatar_payoff[j].a_first == '3') {
                      new_comb.trust_condition = '1'
                    } else if (this.player_payoff[k] == '2' && this.avatar_payoff[j].a_first == '3') {
                      new_comb.trust_condition = '2'
                    } else if (this.player_payoff[k] == '5/2' && this.avatar_payoff[j].a_first == '3') {
                      new_comb.trust_condition = '3'
                    } else if (this.player_payoff[k] == '3/2' && this.avatar_payoff[j].a_first == '2') {
                      new_comb.trust_condition = '4'
                    } else if (this.player_payoff[k] == '2' && this.avatar_payoff[j].a_first == '2') {
                      new_comb.trust_condition = '5'
                    } else if (this.player_payoff[k] == '5/2' && this.avatar_payoff[j].a_first == '2') {
                      new_comb.trust_condition = '6'
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
            console.log(first_segment)
            console.log(second_segment)
            first_segment = this.shuffle(first_segment)
            second_segment = this.shuffle(second_segment)
            first_segment.push(...second_segment)
            this.combinations = first_segment
            console.log(this.combinations)
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