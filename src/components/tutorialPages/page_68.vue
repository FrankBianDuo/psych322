<template>
    <b-modal 
      :id="this.page_id" 
      size="xl"
      centered 
      :title="this.center_title"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
               <img :src="require('../../assets/tutorials/Quiz2/Q8.png')" v-bind:style="{ maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/tutorials/Quiz2/A.png')" v-bind:style="{ maxWidth: '73%', height: 'auto', marginTop: '10%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_a, transition: 'opacity 0.5s' }"/>
            </div>
              
      </b-container>
        <b-button :disabled="true" variant="outline-primary" size="lg">Back</b-button>
        <b-button :disabled="true" style="float: right;" variant="outline-primary" size="lg">Next</b-button>

        <b-button @click="reveal_False" :disabled="this.ans_disable" v-bind:style="{ marginLeft: '6%', marginTop: '-16%',  }" :variant="this.b_1_style" size="lg">False</b-button>
        <b-button @click="reveal_True" :disabled="this.ans_disable" v-bind:style="{ marginRight: '6%', marginTop: '-8%',  }" style="float: right;" :variant="this.b_2_style" size="lg">True</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial68',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "68",
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
            reveal_False() {
                this.opacity_a = "0%"
                this.ans_disable = true
                this.button_after()
            },
            reveal_True() {
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