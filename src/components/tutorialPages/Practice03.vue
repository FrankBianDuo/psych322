<template>
    <b-modal 
      id="modal-center-Practice03" 
      size="xl"
      centered title="Instruction Page 10 of 23"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              
               <!-- Background items opacity 1-10 -->
               <img :src="require('../../assets/Instructions/Machines/box1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/box2.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/arms1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/arms2.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/options1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/options2.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Bodies/machine06a.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Bodies/machine06b.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/you1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/you2.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.8s' }"/>

               <!-- opacity 11-17 -->
               <img :src="require('../../assets/Instructions/Machines/az.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/jk.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/pred1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/pred2.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/controlgive.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/controlkeep.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/control1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.8s' }"/>

               <!-- opacity 18-21 -->
               <img :src="require('../../assets/Instructions/Machines/mchoice1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/mchoice2.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/mchoice3.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/mchoice4.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.0s' }"/>

               <!-- opactiy 22-24 -->
               <img :src="require('../../assets/Instructions/Machines/Machine Text/space4.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext11.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 0.4s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext12.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 0.4s' }"/>

               <!-- Dots opacity 25-33 -->
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspup1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_25, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspdn1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_26, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspup3.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_27, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspdn3.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_28, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspup5.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_29, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspdn5.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_30, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspsafe2.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_31, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspsafe3.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_32, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspsafe4.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_33, transition: 'opacity 0.8s' }"/>

               <!-- You got x dots opacity 34-38 -->
               <img :src="require('../../assets/Instructions/Machines/Machine Text/yougot1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_34, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/yougot2.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_35, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/yougot3.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_36, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/yougot4.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_37, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/yougot5.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_38, transition: 'opacity 0.5s' }"/>
               <!-- Counter -->
               <img :src="require('../../assets/Instructions/Machines/Machine Text/count09.03.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_40, transition: 'opacity 0.2s' }"/>
            </div>

            <div>
                <b-button :variant="SpaceColor" size='lg' v-bind:style="{ height: 'auto', marginTop: '52.75%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_39, transition: 'opacity 0.5s'}" >Press space bar.</b-button>
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="finishanimate" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" :variant="ButtonColor" :disabled="finishanimate" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Practice03',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "13",
                block_listeners: true,
                SpaceColor: "outline-secondary",
                ButtonColor: "outline-primary",
                opacity_1: '100%',
                opacity_2: '0%',
                opacity_3: '100%',
                opacity_4: '0%',
                opacity_5: '100%',
                opacity_6: '0%',
                opacity_7: '100%',
                opacity_8: '0%',
                opacity_9: '100%',
                opacity_10: '0%',
                opacity_11: '0%',
                opacity_12: '0%',
                opacity_13: '0%',
                opacity_14: '0%',
                opacity_15: '0%',
                opacity_16: '0%',
                opacity_17: '0%',
                opacity_18: '0%',
                opacity_19: '0%',
                opacity_20: '0%',
                opacity_21: '0%',
                opacity_22: '0%',
                opacity_23: '100%',
                opacity_24: '0%',
                opacity_25: '0%',
                opacity_26: '0%',
                opacity_27: '0%',
                opacity_28: '0%',
                opacity_29: '0%',
                opacity_30: '0%',
                opacity_31: '0%',
                opacity_32: '0%',
                opacity_33: '0%',
                opacity_34: '0%',
                opacity_35: '0%',
                opacity_36: '0%',
                opacity_37: '0%',
                opacity_38: '0%',
                opacity_39: '100%',
                opacity_40: '0%',

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
            if (modalId != "modal-center-Practice03") {
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
                this.$bvModal.show("modal-center-Practice02") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-MeetPeople")
            },
            resetAnimation() {
                this.$bvModal.hide('modal-center-Practice03')
                this.opacity_1 = "100%"
                this.opacity_2 = "0%"
                this.opacity_3 = "100%"
                this.opacity_4 = "0%"
                this.opacity_5 = "100%"
                this.opacity_6 = "0%"
                this.opacity_7 = "100%"
                this.opacity_8 = "0%"
                this.opacity_9 = "100%"
                this.opacity_10 = "0%"
                this.opacity_11 = "0%"
                this.opacity_12 = "0%"
                this.opacity_13 = "0%"
                this.opacity_14 = "0%"
                this.opacity_15 = "0%"
                this.opacity_16 = "0%"
                this.opacity_17 = "0%"
                this.opacity_18 = "0%"
                this.opacity_19 = "0%"
                this.opacity_20 = "0%"
                this.opacity_21 = "0%"
                this.opacity_22 = "0%"
                this.opacity_23 = "0%"
                this.opacity_24 = "0%"
                this.opacity_25 = "0%"
                this.opacity_26 = "0%"
                this.opacity_27 = "0%"
                this.opacity_28 = "0%"
                this.opacity_29 = "0%"
                this.opacity_30 = "0%"
                this.opacity_31 = "0%"
                this.opacity_32 = "0%"
                this.opacity_33 = "0%"
                this.opacity_34 = "0%"
                this.opacity_35 = "0%"
                this.opacity_36 = "0%"
                this.opacity_37 = "0%"
                this.opacity_38 = "0%"
                this.opacity_39 = "100%"
                this.opacity_40 = "0%"

                this.ButtonColor = "outline-primary"
                this.SpaceColor = "outline-secondary"
                this.locked = true
                this.mutex = false
                this.finishanimate = false
            },
            animate1() {
                let parent = this 

                // Meeting 1 Flashing Prior Selections 
                setTimeout(() => {parent.opacity_39 = "0%"}, 0);
                setTimeout(() => {parent.opacity_18 = "100%"}, 0); 
                setTimeout(() => {parent.opacity_18 = "0%"}, 100);
                setTimeout(() => {parent.opacity_18 = "100%"}, 200);
                setTimeout(() => {parent.opacity_18 = "0%"}, 300);
                setTimeout(() => {parent.opacity_18 = "100%"}, 400);
                setTimeout(() => {parent.opacity_18 = "0%"}, 500);
                setTimeout(() => {parent.opacity_19 = "100%"}, 600);
                setTimeout(() => {parent.opacity_19 = "0%"}, 700);
                setTimeout(() => {parent.opacity_18 = "100%"}, 800);
                setTimeout(() => {parent.opacity_18 = "0%"}, 900);
                setTimeout(() => {parent.opacity_18 = "100%"}, 1000);
                setTimeout(() => {parent.opacity_18 = "0%"}, 1100);
                setTimeout(() => {parent.opacity_18 = "100%"}, 1200);
                setTimeout(() => {parent.opacity_18 = "0%"}, 1300);
                setTimeout(() => {parent.opacity_19 = "100%"}, 1400);
                setTimeout(() => {parent.opacity_19 = "0%"}, 1500);
                setTimeout(() => {parent.opacity_18 = "100%"}, 1600);
                setTimeout(() => {parent.opacity_18 = "0%"}, 1700);
                setTimeout(() => {parent.opacity_19 = "100%"}, 1800);
                setTimeout(() => {parent.opacity_19 = "0%"}, 1900);
                setTimeout(() => {parent.opacity_18 = "100%"}, 2000);
                setTimeout(() => {parent.opacity_18 = "0%"}, 2100);
                setTimeout(() => {parent.opacity_18 = "100%"}, 2200);
                setTimeout(() => {parent.opacity_18 = "0%"}, 2300);
            
                setTimeout(() => {parent.opacity_17 = "100%"}, 2600);
                setTimeout(() => {parent.opacity_26 = "100%"}, 2600);
                setTimeout(() => {parent.opacity_29 = "100%"}, 2600);
                setTimeout(() => {parent.opacity_32 = "100%"}, 2600);
                setTimeout(() => {parent.opacity_2 = "100%"}, 2600);
                setTimeout(() => {parent.opacity_4 = "100%"}, 2600);
                setTimeout(() => {parent.opacity_6 = "100%"}, 2600);
                setTimeout(() => {parent.opacity_8 = "100%"}, 2600);
                setTimeout(() => {parent.opacity_10 = "100%"}, 2600);
                setTimeout(() => {parent.opacity_11 = "100%"}, 3000);
                setTimeout(() => {parent.opacity_40 = "100%"}, 3200);
                //Disables BACK NEXT buttons until animation finishes at 6 seconds.
                setTimeout(() => {parent.finishanimate = false}, 6000);
            },
            animateA() {
                let parent = this 
                // Prediction Feedback Up 
                setTimeout(() => {parent.opacity_11 = "0%"; parent.opacity_12 = "100%"}, 0);
                setTimeout(() => {parent.opacity_20 = "0%"; }, 0);
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
                setTimeout(() => {parent.opacity_20 = "0%"; }, 0);
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
                setTimeout(() => {parent.opacity_20 = "0%"}, 0);
                setTimeout(() => {parent.opacity_12 = "0%";}, 0);
                setTimeout(() => {parent.opacity_37 = "0%";}, 0);
                setTimeout(() => {parent.opacity_15 = "100%";}, 0); 
                setTimeout(() => {parent.opacity_16 = "0%";}, 0);
                setTimeout(() => {parent.opacity_20 = "100%"}, 500);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // This changes the button to green!
                setTimeout(() => {parent.ButtonColor = "success";}, 3000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 3500);
                setTimeout(() => {parent.ButtonColor = "success";}, 4000);
            },

            animateK() {
                let parent = this 
                setTimeout(() => {parent.opacity_20 = "0%"}, 0);
                setTimeout(() => {parent.opacity_12 = "0%";}, 0);
                setTimeout(() => {parent.opacity_38 = "0%";}, 0);
                setTimeout(() => {parent.opacity_16 = "100%";}, 0); 
                setTimeout(() => {parent.opacity_15 = "0%";}, 0);
                setTimeout(() => {parent.opacity_20 = "100%"}, 500);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // This changes the button to green!
                setTimeout(() => {parent.ButtonColor = "success";}, 3000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 3500);
                setTimeout(() => {parent.ButtonColor = "success";}, 4000);
            },
        },
    }
</script>

<style scoped>
</style>