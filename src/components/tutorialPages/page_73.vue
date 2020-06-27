<template>
    <b-modal 
      :id="this.page_id" 
      size="xl"
      centered 
      :title="this.center_title"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
               <img :src="require(`../../assets/tutorials/${this.gen_question_src(this.wrong_questions[0])['q_img_src']}`)" v-bind:style="this.gen_question_src(this.wrong_questions[0])['q_img_style']"/>
               <img :src="require(`../../assets/tutorials/${this.gen_question_src(this.wrong_questions[0])['a_img_src']}`)" v-bind:style="this.gen_question_src(this.wrong_questions[0])['a_img_style']"/>
            </div>
              
      </b-container>
        <!-- <b-button :disabled="true" @click="this.reset_animation_back" variant="outline-primary" size="lg">Back</b-button>
        <b-button :disabled="this.proceed" @click="this.reset_animation_next" style="float: right;" variant="outline-primary" size="lg">Next</b-button> -->

        <b-button @click="reveal_False" :disabled="this.ans_disable" v-bind:style="{ marginLeft: '6%', marginTop: '-16%',  }" :variant="this.b_1_style" size="lg">False</b-button>
        <b-button @click="reveal_True" :disabled="this.ans_disable" v-bind:style="{ marginRight: '6%', marginTop: '-8%',  }" style="float: right;" :variant="this.b_2_style" size="lg">True</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial73',
        props: {
            windowsize: String,
            previous_ans: Object
        },
        components: {
        },
        data() {
            return {
                proceed: true,
                page_num: "73",
                opacity_a: '100%',
                ans_disable: false,
                b_1_style: 'primary',
                b_2_style: 'primary',
                ans: 't',
                wrong_questions: [20],
                q_1_src: `QuizFull/Q1.png`,
                a_1_src: `QuizFull/A1.png`
            }
        },
        computed: {
            page_id() {
                return "modal-center-instruction" + this.page_num
            },
            center_title() {
                return "Instructions page " + this.page_num
            },
            // q_1_src() {
            //     return `../../assets/tutorials/QuizFull/Q1.png`
            // },
            // a_1_src() {
            //     return `../../assets/tutorials/QuizFull/A1.png`
            // }
        },
        mounted() {
            this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
            // eslint-disable-next-line no-console
            console.log('Modal is about to be shown', bvEvent, modalId)
            // eslint-disable-next-line no-console
            console.log(this.windowsize)
            if (modalId != "modal-center-instruction" + this.page_num) {
                return
            }
            if (this.mutex == true) {
                return
            }
            this.question_present()
            })
        },
        methods: {
            // If we ever reach here it means they got some question wrong
            question_present() {
                // eslint-disable-next-line no-console
                console.log("to question_present")
                this.wrong_questions.pop()
                for (let [key, value] of Object.entries(this.previous_ans)) {
                    if (value[0] == false) {
                        this.wrong_questions.push(key)
                    }
                }
            },
            reset_animation_next() {
                // eslint-disable-next-line no-console
                console.log("to block1")
                // eslint-disable-next-line no-console
                console.log("modal-center-instruction" + this.page_num)
                this.$bvModal.show("modal-center")
            },
            reveal_False() {
                this.opacity_a = "0%"
                this.ans_disable = true
                this.button_after("f")
            },
            reveal_True() {
                this.opacity_a = "0%"
                this.ans_disable = true
                this.button_after("t")
            },
            button_after(received_ans) {
                if (this.ans == 'f') {
                    this.b_1_style = 'success'
                    this.b_2_style = 'danger'
                }
                else {
                    this.b_2_style = 'success'
                    this.b_1_style = 'danger'
                }
                let parent = this
                setTimeout(() => {
                    parent.b_1_style = 'primary'
                    parent.b_2_style = 'primary'
                    // They got it right this time
                    if (parent.previous_ans[parent.wrong_questions[0]][1] == received_ans) {
                        parent.wrong_questions.shift()
                        if (parent.wrong_questions.length == 0) {
                            parent.reset_animation_next()
                        }
                    }
                    else {
                        parent.wrong_questions.push(parent.wrong_questions.shift())
                    }
                    parent.ans_disable = false
                    this.opacity_a = "100%"
                }, 1000);
            },
            gen_question_src(q_id) {
                var srcmap = {
                    20: {
                        "q_img_src": `QuizFull/Q1.png`,
                        "a_img_src": `QuizFull/A1.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '10%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    21: {
                        "q_img_src": `QuizFull/Q2.png`,
                        "a_img_src": `QuizFull/A2.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '10%', height: 'auto', marginTop: '21.8%', transform: 'translate(-50%, 0) scalex(8) scaleY(7.5)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    22: {
                        "q_img_src": `QuizFull/Q3.png`,
                        "a_img_src": `QuizFull/A3.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '10%', height: 'auto', marginTop: '21.8%', transform: 'translate(-50%, 0) scalex(8) scaleY(7.5)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    23: {
                        "q_img_src": `QuizFull/Q4.png`,
                        "a_img_src": `QuizFull/A4.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '10%', height: 'auto', marginTop: '21.8%', transform: 'translate(-50%, 0) scalex(8) scaleY(7.5)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    24: {
                        "q_img_src": `QuizFull/Q5.png`,
                        "a_img_src": `QuizFull/A5.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '10%', height: 'auto', marginTop: '21.8%', transform: 'translate(-50%, 0) scalex(8) scaleY(7.5)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    25: {
                        "q_img_src": `QuizFull/Q6.png`,
                        "a_img_src": `QuizFull/A6.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '10%', height: 'auto', marginTop: '21.8%', transform: 'translate(-50%, 0) scalex(8) scaleY(7.5)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    26: {
                        "q_img_src": `QuizFull/Q7.png`,
                        "a_img_src": `QuizFull/A7.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '10%', height: 'auto', marginTop: '21.8%', transform: 'translate(-50%, 0) scalex(8) scaleY(6)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    27: {
                        "q_img_src": `QuizFull/Q8.png`,
                        "a_img_src": `QuizFull/A8.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '10%', height: 'auto', marginTop: '21.8%', transform: 'translate(-50%, 0) scalex(8) scaleY(7)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    28: {
                        "q_img_src": `QuizFull/Q9.png`,
                        "a_img_src": `QuizFull/A9.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '10%', height: 'auto', marginTop: '21.6%', transform: 'translate(-50%, 0) scalex(8) scaleY(7.5)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    29: {
                        "q_img_src": `QuizFull/Q10.png`,
                        "a_img_src": `QuizFull/A10.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '10%', height: 'auto', marginTop: '21.8%', transform: 'translate(-50%, 0) scalex(8) scaleY(7.5)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    61: {
                        "q_img_src": `Quiz2/Q1.png`,
                        "a_img_src": `Quiz2/A.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '73%', height: 'auto', marginTop: '10%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    62: {
                        "q_img_src": `Quiz2/Q2.png`,
                        "a_img_src": `Quiz2/A.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '73%', height: 'auto', marginTop: '4%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    63: {
                        "q_img_src": `Quiz2/Q3.png`,
                        "a_img_src": `Quiz2/A.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '73%', height: 'auto', marginTop: '4%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    64: {
                        "q_img_src": `Quiz2/Q4.png`,
                        "a_img_src": `Quiz2/A.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '73%', height: 'auto', marginTop: '7%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    65: {
                        "q_img_src": `Quiz2/Q5.png`,
                        "a_img_src": `Quiz2/A.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '75%', height: 'auto', marginTop: '4%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    66: {
                        "q_img_src": `Quiz2/Q6.png`,
                        "a_img_src": `Quiz2/A.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '73%', height: 'auto', marginTop: '7%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    67: {
                        "q_img_src": `Quiz2/Q7.png`,
                        "a_img_src": `Quiz2/A.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '20%', height: 'auto', marginTop: '25%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    },
                    68: {
                        "q_img_src": `Quiz2/Q8.png`,
                        "a_img_src": `Quiz2/A.png`,
                        "q_img_style": { maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' },
                        "a_img_style": { maxWidth: '73%', height: 'auto', marginTop: '10%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }
                    }
                }
                return srcmap[q_id]
            }
        },
    }
</script>


<style scoped>
</style>