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
               <img :src="require(`../../assets/tutorials/QuizFull/Q${this.q_num}.png`)" v-bind:style="{ maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/QuizFull/A${this.q_num}.png`)" v-bind:style="{ maxWidth: '10%', height: 'auto', marginTop: '21.8%', transform: 'translate(-50%, 0) scalex(8) scaleY(7.5)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }"/>
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" size="lg">Next</b-button>

        <b-button @click="reveal_False" :disabled="this.ans_disable" v-bind:style="{ marginLeft: '6%', marginTop: '-16%',  }" :variant="this.b_1_style" size="lg">False</b-button>
        <b-button @click="reveal_True" :disabled="this.ans_disable" v-bind:style="{ marginRight: '6%', marginTop: '-8%',  }" style="float: right;" :variant="this.b_2_style" size="lg">True</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial24',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "24",
                q_num: '5',
                opacity_a: '100%',
                ans_disable: false,
                b_1_style: 'primary',
                b_2_style: 'primary',
                ans: 't',
            }
        },
        computed: {
            page_id() {
                return "modal-center-instruction" + this.page_num
            },
            center_title() {
                return "Instructions page " + this.page_num
            },
        },
        mounted() {
            this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
            // eslint-disable-next-line no-console
            console.log('Modal is about to be shown', bvEvent, modalId)
            if (modalId != "modal-center-instruction" + this.page_num) {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            })
        },
        methods: {
            reset_animation_back() {
                this.$bvModal.hide("modal-center-instruction" + this.page_num)
                this.$bvModal.show("modal-center-instruction" + ((Number(this.page_num) - 1).toString()))
            },
            reset_animation_next() {
                this.$bvModal.hide("modal-center-instruction" + this.page_num)
                this.$bvModal.show("modal-center-instruction" + ((Number(this.page_num) + 1).toString()))
            },
            reveal_False() {
                this.$emit('answered', [this.ans == 'f', this.ans])
                this.opacity_a = "0%"
                this.ans_disable = true
                this.button_after()
            },
            reveal_True() {
                this.$emit('answered', [this.ans == 't', this.ans])
                this.opacity_a = "0%"
                this.ans_disable = true
                this.button_after()
            },
            button_after() {
                if (this.ans == 'f') {
                    this.b_1_style = 'success'
                    this.b_2_style = 'danger'
                }
                else {
                    this.b_2_style = 'success'
                    this.b_1_style = 'danger'
                }
            }
        },
    }
</script>


<style scoped>
</style>