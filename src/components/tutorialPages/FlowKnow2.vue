<template>
    <b-modal 
      id="modal-center-FlowKnow2" 
      size="xl"
      centered title="Instruction Page 18 of 18"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              
               <!-- opacity 1-5 -->
               <img :src="require('../../assets/Instructions/FlowKnow/FKmeet1.02a.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/FKmeet2.02a.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFcontrolb.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/FKevap1.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFaz.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"/>
               
               <!-- opacity 6-10 -->
               <img :src="require('../../assets/Instructions/FlowKnow/GFjk.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFpredup.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFpreddn.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFgk.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFkc.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.2s' }"/>

               <!-- opacity 11-15 -->
               <img :src="require('../../assets/Instructions/FlowKnow/FKchoice1.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GF01c.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/fk text 03a.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '-1%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/fk text 04a.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '-1%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/fk text 05a.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '-1%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/fk text 06a.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '-1%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_26, transition: 'opacity 0.2s' }"/>
               
               <!-- opacity 17-21 -->
               <img :src="require('../../assets/Instructions/FlowKnow/GFd3b.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFd3.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/FKchoice3.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFbarr1.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/GFbarr2.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.0s' }"/>

               <img :src="require('../../assets/Instructions/FlowKnow/FKdm2.02a.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/FKevap1.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 4.5s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/FKevap2.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/FKevap2.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_25, transition: 'opacity 4.5s' }"/>
            </div>

            <div>
                <b-button :variant="SpaceColor" size='lg' v-bind:style="{ height: 'auto', marginTop: '52.75%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.5s'}" >Press space bar.</b-button>
            </div>

      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="hold" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" :variant="ButtonColor" :disabled="finish || hold" size="lg">Next</b-button>
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
                opacity_1: '100%',
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
                opacity_13: '100%',
                opacity_14: '0%',
                opacity_15: '0%',
                opacity_16: '0%',
                opacity_17: '0%',
                opacity_18: '0%',
                opacity_19: '0%',
                opacity_20: '0%',
                opacity_21: '0%',
                opacity_22: '0%',
                opacity_23: '0%',
                opacity_24: '0%',
                opacity_25: '0%',
                opacity_26: '0%',
                keyflow1: false,
                keyflow2: false,
                keyflow3: false,

                mutex: false,
                finish: true,
                hold: true,
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
                if (parent.keyflow1 == true && parent.keyflow2 == false && parent.keyflow3 == false && event.keyCode == 32) {
                    // Spacebar 1
                    parent.animate1()
                    parent.keyflow1 = false
                } else if (parent.keyflow1 == false && parent.keyflow2 == true && parent.keyflow3 == false && event.keyCode == 65) {
                    // Predict A
                    parent.animateA()
                    parent.keyflow2 = false
                } else if (parent.keyflow1 == false && parent.keyflow2 == true && parent.keyflow3 == false && event.keyCode == 90) {
                    // Predict Z
                    parent.animateZ()
                    parent.keyflow2 = false
                } else if (parent.keyflow1 == false && parent.keyflow2 == false && parent.keyflow3 == true && event.keyCode == 74) {
                    // Give Control
                    parent.animateJ()
                    parent.keyflow3 = false
                } else if (parent.keyflow1 == false && parent.keyflow2 == false && parent.keyflow3 == true && event.keyCode == 75) {
                    // Keep Control
                    parent.animateK()
                    parent.keyflow3 = false
                    // parent.keyflow1 = true
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
            // console.log('Modal is about to be shown', bvEvent, modalId)
            if (modalId != "modal-center-FlowKnow2") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            this.block_listeners = false;
            setTimeout(() => this.animate0(), 0); 

            // This is an experiment at preventing skipping through pages too quickly.
            setTimeout(() => this.hold = false, 500);
            })
        },
        methods: {
            reset_animation_back() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-FlowKnow1") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-TF110")
            },
            resetAnimation() {
                this.$bvModal.hide('modal-center-FlowKnow2')
                this.opacity_1 = "100%"
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
                this.opacity_13 = "100%"
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

                this.ButtonColor = "outline-primary"
                this.SpaceColor = "outline-secondary"
                this.keyflow1 = false
                this.keyflow2 = false
                this.keyflow3 = false
                this.locked = true
                this.mutex = false
                this.finish = false

                // Experimental hold variable to prevent rapid page hopping
                this.hold = true
            },
            animate0() {
                let parent = this 

                setTimeout(() => {parent.opacity_16 = "70%"}, 2000);
                setTimeout(() => {parent.SpaceColor = "primary";}, 2500);
                setTimeout(() => {parent.SpaceColor = "outline-secondary";}, 3000);
                setTimeout(() => {parent.opacity_16 = "100%"}, 3000);
                setTimeout(() => {parent.keyflow1 = true}, 3100);
            },
            animate1() {
                let parent = this 

                // Text swap
                setTimeout(() => {parent.opacity_13 = "0%"; parent.opacity_14 = "100%"}, 5000);

                // Meeting 2 appears.
                setTimeout(() => {parent.opacity_11 = "100%"}, 0);
                setTimeout(() => {parent.opacity_2 = "100%"}, 1000);
                setTimeout(() => {parent.opacity_3 = "100%"}, 1000);
                setTimeout(() => {parent.opacity_4 = "100%"}, 1000);
                setTimeout(() => {parent.opacity_22 = "100%"}, 1000);
                setTimeout(() => {parent.opacity_20 = "100%"}, 1000);
                //setTimeout(() => {parent.opacity_24 = "100%"}, 1000);

                // Slower transition evap dots appear after and quick transition evap dots vanish
                setTimeout(() => {parent.opacity_23 = "100%"}, 1000);
                setTimeout(() => {parent.opacity_4 = "0%"}, 5000);
                
                // Flashes AZ to grap attention 
                setTimeout(() => {parent.opacity_5 = "100%"}, 1600);
                setTimeout(() => {parent.opacity_5 = "0%"}, 1800);
                setTimeout(() => {parent.opacity_5 = "100%"}, 2000);
                setTimeout(() => {parent.opacity_5 = "0%"}, 2200);
                setTimeout(() => {parent.opacity_5 = "100%"}, 2400);

                // Barrier Flashes 
                setTimeout(() => {parent.opacity_21 = "100%"}, 3400);
                setTimeout(() => {parent.opacity_21 = "0%"}, 3500);
                setTimeout(() => {parent.opacity_21 = "100%"}, 3600);
                setTimeout(() => {parent.opacity_21 = "0%"}, 3700);
                setTimeout(() => {parent.opacity_21 = "100%"}, 3800);
                setTimeout(() => {parent.opacity_21 = "0%"}, 3900);
                setTimeout(() => {parent.opacity_21 = "100%"}, 4000);
                setTimeout(() => {parent.opacity_21 = "0%"}, 4100);

                // Kill text
                // setTimeout(() => {parent.opacity_14 = "0%"}, 0);
                // setTimeout(() => {parent.opacity_15 = "0%"}, 0);

                // This turns the press space bar reminder off.
                setTimeout(() => {parent.opacity_16 = "0%"}, 0); 

                setTimeout(() => {parent.keyflow2 = true}, 5100);
            },
            animateA() {
                let parent = this 
                // Prediction Feedback Up 
                setTimeout(() => {parent.opacity_5 = "0%"; parent.opacity_6 = "0%"; parent.opacity_8 = "0%"; parent.opacity_16 = "0%"; parent.opacity_7 = "100%"}, 0);
                setTimeout(() => {parent.opacity_6 = "100%"; parent.opacity_17 = "100%"}, 1000);

                // Flashing JK
                setTimeout(() => {parent.opacity_6 = "0%"}, 2200);
                setTimeout(() => {parent.opacity_6 = "100%"}, 2400);
                setTimeout(() => {parent.opacity_6 = "0%"}, 2600);
                setTimeout(() => {parent.opacity_6 = "100%"}, 2800);

                // setTimeout(() => {parent.opacity_6 = "0%"}, 8700);
                // setTimeout(() => {parent.opacity_6 = "100%"}, 8800);
                // setTimeout(() => {parent.opacity_6 = "0%"}, 8900);
                // setTimeout(() => {parent.opacity_6 = "100%"}, 9000);

                // setTimeout(() => {parent.opacity_6 = "0%"}, 12200);
                // setTimeout(() => {parent.opacity_6 = "100%"}, 12400);
                // setTimeout(() => {parent.opacity_6 = "0%"}, 12600);
                // setTimeout(() => {parent.opacity_6 = "100%"}, 12800);

                // Swap text
                setTimeout(() => {parent.opacity_13 = "0%"}, 0);
                setTimeout(() => {parent.opacity_14 = "0%"}, 0);
                setTimeout(() => {parent.opacity_15 = "100%"}, 4000);
                setTimeout(() => {parent.opacity_26 = "0%"}, 0);

                // Put evap dots back if the user cycles back through to this point.
                setTimeout(() => {parent.opacity_23 = "100%"}, 0);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                setTimeout(() => {parent.keyflow3 = true}, 4100);
            },
            animateZ() {
                let parent = this 
                // Prediction Feedback Up 
                setTimeout(() => {parent.opacity_5 = "0%"; parent.opacity_6 = "0%"; parent.opacity_7 = "0%"; parent.opacity_16 = "0%"; parent.opacity_8 = "100%"}, 0);
                setTimeout(() => {parent.opacity_6 = "100%"; parent.opacity_17 = "100%"}, 1000);

                // Flashing JK
                setTimeout(() => {parent.opacity_6 = "0%"}, 2200);
                setTimeout(() => {parent.opacity_6 = "100%"}, 2400);
                setTimeout(() => {parent.opacity_6 = "0%"}, 2600);
                setTimeout(() => {parent.opacity_6 = "100%"}, 2800);

                // setTimeout(() => {parent.opacity_6 = "0%"}, 8700);
                // setTimeout(() => {parent.opacity_6 = "100%"}, 8800);
                // setTimeout(() => {parent.opacity_6 = "0%"}, 8900);
                // setTimeout(() => {parent.opacity_6 = "100%"}, 9000);

                // setTimeout(() => {parent.opacity_6 = "0%"}, 12200);
                // setTimeout(() => {parent.opacity_6 = "100%"}, 12400);
                // setTimeout(() => {parent.opacity_6 = "0%"}, 12600);
                // setTimeout(() => {parent.opacity_6 = "100%"}, 12800);

                // Swap text
                setTimeout(() => {parent.opacity_13 = "0%"}, 0);
                setTimeout(() => {parent.opacity_14 = "0%"}, 0);
                setTimeout(() => {parent.opacity_15 = "100%"}, 4000);
                setTimeout(() => {parent.opacity_26 = "0%"}, 0);

                // Put evap dots back if the user cycles back through to this point.
                setTimeout(() => {parent.opacity_23 = "100%"}, 0);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                setTimeout(() => {parent.keyflow3 = true}, 4100);
            },
            animateJ() {
                let parent = this 
                // Control Feedback Give
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_13 = "0%"; parent.opacity_14 = "0%"; parent.opacity_19 = "0%"; parent.opacity_9 = "100%"}, 0);
           
                // Control stuff dissapears and then barrier.
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_6 = "0%"; parent.opacity_17 = "0%"; parent.opacity_24 = "0%"}, 1000);
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_10 = "0%"}, 2000);
                setTimeout(() => {parent.opacity_20 = "0%"}, 3000);

                // Meeting 2 choice
                setTimeout(() => {parent.opacity_19 = "100%"}, 4000);

                // Swap text
                setTimeout(() => {parent.opacity_13 = "0%"}, 0);
                setTimeout(() => {parent.opacity_14 = "0%"}, 0);
                setTimeout(() => {parent.opacity_15 = "0%"}, 0);
                setTimeout(() => {parent.opacity_26 = "100%"}, 7000);

                // Kill JK if participant presses keys out of order
                setTimeout(() => {parent.opacity_6 = "0%"}, 4000);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // This changes the button to green!
                setTimeout(() => {parent.finish = false; parent.ButtonColor = "success";}, 8000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 8500);
                setTimeout(() => {parent.ButtonColor = "success";}, 9000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 11500);
                setTimeout(() => {parent.ButtonColor = "success";}, 12000);
            },

            animateK() {
                let parent = this 
                // Control Feedback Give
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_13 = "0%"; parent.opacity_14 = "0%"; parent.opacity_19 = "0%"; parent.opacity_10 = "100%"}, 0);

                // Control stuff dissapears and then barrier.
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_6 = "0%"; parent.opacity_17 = "0%"; parent.opacity_24 = "0%"}, 1000);
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_10 = "0%"}, 2000);
                setTimeout(() => {parent.opacity_20 = "0%"}, 3000);

                // Meeting 2 choice
                setTimeout(() => {parent.opacity_19 = "100%"}, 4000);

                // Swap text
                setTimeout(() => {parent.opacity_13 = "0%"}, 0);
                setTimeout(() => {parent.opacity_14 = "0%"}, 0);
                setTimeout(() => {parent.opacity_15 = "0%"}, 0);
                setTimeout(() => {parent.opacity_26 = "100%"}, 7000);

                // Dots evaporate
                // setTimeout(() => {parent.opacity_23 = "0%"}, 4000);

                // Kill JK if participant presses keys out of order
                setTimeout(() => {parent.opacity_6 = "0%"}, 4000);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // This changes the button to green!
                setTimeout(() => {parent.finish = false; parent.ButtonColor = "success";}, 8000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 8500);
                setTimeout(() => {parent.ButtonColor = "success";}, 9000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 11500);
                setTimeout(() => {parent.ButtonColor = "success";}, 12000);
            },
        },
    }
</script>

<style scoped>
</style>