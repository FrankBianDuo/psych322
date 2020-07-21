<template>
    <b-modal 
      id="modal-center-FlowKnow2" 
      size="xl"
      centered title="Instruction Page ? of ?"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              
               <!-- opacity 1-5 -->
               <img :src="require('../../assets/Instructions/FlowKnow/GF01a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GF02a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFcontrol.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFeyeleft.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFaz.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.2s' }"/>
               
               <!-- opacity 6-10 -->
               <img :src="require('../../assets/Instructions/FlowKnow/GFjk.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFpredup.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFpreddn.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFgk.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFkc.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.2s' }"/>

               <!-- opacity 11-15 -->
               <img :src="require('../../assets/Instructions/FlowKnow/GF01b.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GF01c.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/fk text 03a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/fk text 04a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/fk text 05a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.2s' }"/>
            </div>

            <div>
                <b-button :variant="SpaceColor" size='lg' v-bind:style="{ height: 'auto', marginTop: '52.75%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.5s'}" >Press space bar.</b-button>
            </div>

      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="finishanimate" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" :variant="ButtonColor" :disabled="finishanimate" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'FlowKnow2',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "13",
                block_listeners: true,
                SpaceColor: "outline-secondary",
                ButtonColor: "outline-primary",
                opacity_1: '0%',
                opacity_2: '0%',
                opacity_3: '0%',
                opacity_4: '0%',
                opacity_5: '0%',
                opacity_6: '0%',
                opacity_7: '0%',
                opacity_8: '0%',
                opacity_9: '0%',
                opacity_10: '0%',
                opacity_11: '0%',
                opacity_12: '0%',
                opacity_13: '0%',
                opacity_14: '0%',
                opacity_15: '0%',
                opacity_16: '0%',
                // opacity_17: '0%',
                // opacity_18: '0%',
                // opacity_19: '0%',
                // opacity_20: '0%',
                // opacity_21: '0%',
                // opacity_22: '0%',
                // opacity_23: '0%',
                // opacity_24: '0%',
                // opacity_25: '0%',
                // opacity_26: '0%',
                // opacity_27: '0%',
                // opacity_28: '0%',
                // opacity_29: '0%',
                // opacity_30: '0%',
                // opacity_31: '0%',
                // opacity_32: '0%',
                // opacity_33: '0%',
                // opacity_34: '0%',
                // opacity_35: '0%',
                // opacity_36: '0%',
                // opacity_37: '0%',
                // opacity_38: '0%',
                // opacity_39: '0%',
                // opacity_40: '0%',

                mutex: false,
                finishanimate: true
            }
        },
        // Keyboard listener
        created: function () {
            let parent = this
            window.addEventListener('keyup', function(event) {
            // eslint-disable-next-line no-console
            if (parent.show) {
                if (parent.block_listeners == true) {
                    return;
                } 
                if (event.keyCode == 32) {
                    // Spacebar 1
                    parent.animate1()
                } else if (event.keyCode == 65) {
                    // Predict A
                    parent.animateA()
                } else if (event.keyCode == 90) {
                    // Predict Z
                    parent.animateZ()
                } else if (event.keyCode == 74) {
                    // Give Control
                    parent.animateJ()
                } else if (event.keyCode == 75) {
                    // Keep Control
                    parent.animateK()
                } 
            } 
            });
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
            if (modalId != "modal-center-FlowKnow2") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            this.block_listeners = false;
            //setTimeout(() => this.animate(), 0); 
            })
        },
        methods: {
            reset_animation_back() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-FlowKnow1") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-TF1118")
            },
            resetAnimation() {
                this.$bvModal.hide('modal-center-FlowKnow2')
                this.opacity_1 = "0%"
                this.opacity_2 = "0%"
                this.opacity_3 = "0%"
                this.opacity_4 = "0%"
                this.opacity_5 = "0%"
                this.opacity_6 = "0%"
                this.opacity_7 = "0%"
                this.opacity_8 = "0%"
                this.opacity_9 = "0%"
                this.opacity_10 = "0%"
                this.opacity_11 = "0%"
                this.opacity_12 = "0%"
                this.opacity_13 = "0%"
                this.opacity_14 = "0%"
                this.opacity_15 = "0%"
                this.opacity_16 = "0%"
                // this.opacity_17 = "0%"
                // this.opacity_18 = "0%"
                // this.opacity_19 = "0%"
                // this.opacity_20 = "0%"
                // this.opacity_21 = "0%"
                // this.opacity_22 = "0%"
                // this.opacity_23 = "0%"
                // this.opacity_24 = "0%"
                // this.opacity_25 = "0%"
                // this.opacity_26 = "0%"
                // this.opacity_27 = "0%"
                // this.opacity_28 = "0%"
                // this.opacity_29 = "0%"
                // this.opacity_30 = "0%"
                // this.opacity_31 = "0%"
                // this.opacity_32 = "0%"
                // this.opacity_33 = "0%"
                // this.opacity_34 = "0%"
                // this.opacity_35 = "0%"
                // this.opacity_36 = "0%"
                // this.opacity_37 = "0%"
                // this.opacity_38 = "0%"
                // this.opacity_39 = "0%"
                // this.opacity_40 = "0%"

                this.ButtonColor = "outline-primary"
                this.SpaceColor = "outline-secondary"
                this.locked = true
                this.mutex = false
                this.finishanimate = false
            },
            animate1() {
                let parent = this 

                // Meeting 1 Flashing Prior Selections 
                setTimeout(() => {parent.opacity_ = "0%"}, 0);
                
                
            },
            animateA() {
                let parent = this 
                // Prediction Feedback Up 
                setTimeout(() => {parent.opacity_11 = "0%"; parent.opacity_12 = "100%"}, 0);
                setTimeout(() => {parent.opacity_21 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_25 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_13 = "100%"; }, 0);
                setTimeout(() => {parent.opacity_14 = "0%"; }, 0);
                //setTimeout(() => {parent.opacity_21 = "100%"; }, 1100);
                setTimeout(() => {parent.opacity_25 = "100%"; }, 2500);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
            animateZ() {
                let parent = this 
                // Prediction Feedback Down 
                setTimeout(() => {parent.opacity_11 = "0%"; parent.opacity_12 = "100%"}, 0);
                setTimeout(() => {parent.opacity_21 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_25 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_14 = "100%"; }, 0);
                setTimeout(() => {parent.opacity_13 = "0%"; }, 0);
                //setTimeout(() => {parent.opacity_21 = "100%"; }, 1100);
                setTimeout(() => {parent.opacity_25 = "100%"; }, 2500);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
            animateJ() {
                let parent = this 
                setTimeout(() => {parent.opacity_21 = "0%"}, 0);
                setTimeout(() => {parent.opacity_12 = "0%";}, 0);
                setTimeout(() => {parent.opacity_37 = "0%";}, 0);
                setTimeout(() => {parent.opacity_15 = "100%";}, 0); 
                setTimeout(() => {parent.opacity_16 = "0%";}, 0);
                setTimeout(() => {parent.opacity_21 = "100%"}, 500);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // This changes the button to green!
                setTimeout(() => {parent.ButtonColor = "success";}, 3000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 3500);
                setTimeout(() => {parent.ButtonColor = "success";}, 4000);

                //Disables BACK NEXT buttons until animation finishes at 4 seconds.
                setTimeout(() => {parent.finishanimate = false}, 4000);
            },

            animateK() {
                let parent = this 
                setTimeout(() => {parent.opacity_21 = "0%"}, 0);
                setTimeout(() => {parent.opacity_12 = "0%";}, 0);
                setTimeout(() => {parent.opacity_38 = "0%";}, 0);
                setTimeout(() => {parent.opacity_16 = "100%";}, 0); 
                setTimeout(() => {parent.opacity_15 = "0%";}, 0);
                setTimeout(() => {parent.opacity_21 = "100%"}, 500);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // This changes the button to green!
                setTimeout(() => {parent.ButtonColor = "success";}, 3000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 3500);
                setTimeout(() => {parent.ButtonColor = "success";}, 4000);

                //Disables BACK NEXT buttons until animation finishes at 4 seconds.
                setTimeout(() => {parent.finishanimate = false}, 4000);
            },
        },
    }
</script>

<style scoped>
</style>