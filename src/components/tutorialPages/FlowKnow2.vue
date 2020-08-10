<template>
    <b-modal 
      id="modal-center-FlowKnow2" 
      size="xl"
      centered title="Instruction Page 14 of 14"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="true"
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
               <img :src="require('../../assets/Instructions/FlowKnow/fk text 01a.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '-1%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/fk text 05a.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '-1%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.2s' }"/>
               
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

               <img :src="require('../../assets/Instructions/FlowKnow/yougot1.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_31, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/yougot2.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_32, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/yougot3.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_33, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/yougot4.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_34, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/FlowKnow/yougot5.png')" v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_35, transition: 'opacity 0.2s' }"/>
            </div>

            <div>
                <b-button :variant="sbc" size='lg' v-bind:style="{ height: 'auto', marginTop: '52.75%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_0, transition: 'opacity 0.5s'}" >Press {{press}}.</b-button>
            </div>

      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="hold" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" :variant="nbc" :disabled="finish || hold" size="lg">Next</b-button>
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
                skey: false,
                block_listeners: true,
                sbc: "outline-secondary",
                nbc: "outline-primary",
                press: "space bar",
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
                opacity_0: '0%',
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
                opacity_27: '0%',
                opacity_31: '0%',
                opacity_32: '0%',
                opacity_33: '0%',
                opacity_34: '0%',
                opacity_35: '0%',
                keyflow1: false,
                keyflow2: false,
                keyflow3: false,
                keyflow4: false,
                keyflow5: false,
                keyflow6: false,
                keyflow6: false,

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
                if (parent.keyflow1 == true && event.keyCode == 32) {
                    // Spacebar 1
                    parent.animate1()
                    parent.keyflow1 = false
                } else if (parent.keyflow2 == true && event.keyCode == 65) {
                    // Predict A
                    parent.animateA()
                    parent.keyflow2 = false
                } else if (parent.keyflow2 == true && event.keyCode == 90) {
                    // Predict Z
                    parent.animateZ()
                    parent.keyflow2 = false
                } else if (parent.keyflow3 == true && event.keyCode == 74) {
                    // Give Control
                    parent.animateJ()
                    parent.keyflow3 = false
                } else if (parent.keyflow3 == true && event.keyCode == 75) {
                    // Keep Control
                    parent.animateK()
                    parent.keyflow3 = false
                    // parent.keyflow1 = true
                } else if (event.keyCode == 192) {
                    // Enable Secret Key
                    parent.skey = true
                } else if (parent.skey == true && event.keyCode == 49) {
                    // Secret Key
                    parent.finish = false
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
                this.opacity_0 = "0%"
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
                this.opacity_31 = "0%"
                this.opacity_32 = "0%"
                this.opacity_33 = "0%"
                this.opacity_34 = "0%"
                this.opacity_35 = "0%"

                this.nbc = "outline-primary"
                this.sbc = "outline-secondary"
                this.press = "space bar"
                this.keyflow1 = false
                this.keyflow2 = false
                this.keyflow3 = false
                this.keyflow4 = false
                this.keyflow5 = false
                this.keyflow6 = false
                this.keyflow7 = false
                this.skey = false
                this.locked = true
                this.mutex = false
                this.finish = false

                // Experimental hold variable to prevent rapid page hopping
                this.hold = true
            },
            animatefantastic() {
                let parent = this 
 
                setTimeout(() => {parent.opacity_21 = "100%"}, 0);
            },
            animate0() {
                let parent = this 

                // Press Space Bar. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {this.keyflow1 = true; parent.opacity_0 = "100%"; }, 3000);
                setTimeout(() => {parent.opacity_0 = "0%"; }, 3500);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_0 = "100%"; }, 4000);
            },
            animate1() {
                let parent = this 

                // Text swap
                setTimeout(() => {parent.opacity_13 = "0%";}, 0);

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

                // Press A or Z. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {this.keyflow2 = true; this.press = "A or Z"; parent.opacity_0 = "100%"; parent.opacity_5 = "100%"; }, 2500);
                setTimeout(() => {parent.opacity_0 = "0%"; parent.opacity_5 = "0%"; }, 3000);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_0 = "100%"; parent.opacity_5 = "100%"; }, 3500);
            },
            animateA() {
                let parent = this 

                // Kill key reminder 
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_5 = "0%"; }, 0);

                // Prediction Feedback Up 
                setTimeout(() => {parent.opacity_5 = "0%"; parent.opacity_6 = "0%"; parent.opacity_8 = "0%"; parent.opacity_0 = "0%"; parent.opacity_7 = "100%"}, 0);
                setTimeout(() => {parent.opacity_6 = "100%"; parent.opacity_17 = "100%"}, 1000);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // Press J or K. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {this.keyflow3 = true; this.press = "J or K"; parent.opacity_6 = "100%"; parent.opacity_0 = "100%"; }, 1000);
                setTimeout(() => {parent.opacity_0 = "0%"; parent.opacity_6 = "0%"}, 1500);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_0 = "100%"; parent.opacity_6 = "100%"}, 2000);
            },
            animateZ() {
                let parent = this 

                // Kill key reminder 
                setTimeout(() => {parent.opacity_0 = "0%"; parent.opacity_5 = "0%"; parent.opacity_6 = "0%"; }, 0);

                // Prediction Feedback Up 
                setTimeout(() => {parent.opacity_5 = "0%"; parent.opacity_6 = "0%"; parent.opacity_7 = "0%"; parent.opacity_0 = "0%"; parent.opacity_8 = "100%"}, 0);
                setTimeout(() => {parent.opacity_6 = "100%"; parent.opacity_17 = "100%"}, 1000);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // Press J or K. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {this.keyflow3 = true; this.press = "J or K"; parent.opacity_6 = "100%"; parent.opacity_0 = "100%"; }, 1000);
                setTimeout(() => {parent.opacity_0 = "0%"; parent.opacity_6 = "0%"}, 1500);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_0 = "100%"; parent.opacity_6 = "100%"}, 2000);
            },
            animateJ() {
                let parent = this 

                // Kill key reminder 
                setTimeout(() => {parent.opacity_0 = "0%"; parent.opacity_5 = "0%"; parent.opacity_6 = "0%"; }, 0);

                // Control Feedback Give
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_19 = "0%"; parent.opacity_9 = "100%"}, 0);
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_7 = "0%"; parent.opacity_8 = "0%"; parent.opacity_9 = "0%"; parent.opacity_10 = "0%"; parent.opacity_17 = "0%"}, 2000);
                setTimeout(() => {parent.opacity_21 = "0%"}, 3500);
                setTimeout(() => {parent.opacity_19 = "100%"}, 5000);
           
                // Control stuff dissapears and then barrier.
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_6 = "0%"; parent.opacity_17 = "0%"; parent.opacity_24 = "0%"}, 1000);
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_10 = "0%"}, 2000);
                setTimeout(() => {parent.opacity_20 = "0%"}, 3000);

                // Meeting 2 choice
                setTimeout(() => {parent.opacity_19 = "100%"}, 4000);

                // Swap text
                setTimeout(() => {parent.opacity_13 = "0%"}, 0);
                setTimeout(() => {parent.opacity_14 = "100%"}, 5500);
                setTimeout(() => {parent.opacity_15 = "0%"}, 0);
                setTimeout(() => {parent.opacity_26 = "0%"}, 0);
                setTimeout(() => {parent.opacity_27 = "0%"}, 0);

                // Kill JK if participant presses keys out of order
                setTimeout(() => {parent.opacity_6 = "0%"}, 4000);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // You Got x dots
                setTimeout(() => {parent.opacity_35 = "100%"}, 5000);
                setTimeout(() => {parent.opacity_31 = "0%"}, 0);
                setTimeout(() => {parent.opacity_32 = "0%"}, 0);
                setTimeout(() => {parent.opacity_33 = "0%"}, 0);
                setTimeout(() => {parent.opacity_34 = "0%"}, 0);
                setTimeout(() => {parent.opacity_35 = "0%"}, 0);

                // This changes the button to green!
                setTimeout(() => {parent.finish = false; parent.nbc = "success";}, 8000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 8500);
                setTimeout(() => {parent.nbc = "success";}, 9000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 10500);
                setTimeout(() => {parent.nbc = "success";}, 11000);
            },
            animateK() {
                let parent = this 

                // Kill key reminder 
                setTimeout(() => {parent.opacity_0 = "0%"; parent.opacity_5 = "0%"; parent.opacity_6 = "0%"; }, 0);

                // Control Feedback Give
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_19 = "0%"; parent.opacity_10 = "100%"}, 0);
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_7 = "0%"; parent.opacity_8 = "0%"; parent.opacity_10 = "0%"; parent.opacity_10 = "0%"; parent.opacity_17 = "0%"}, 2000);
                setTimeout(() => {parent.opacity_21 = "0%"}, 3500);
                setTimeout(() => {parent.opacity_19 = "100%"}, 5000);

                // Control stuff dissapears and then barrier.
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_6 = "0%"; parent.opacity_17 = "0%"; parent.opacity_24 = "0%"}, 1000);
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_10 = "0%"}, 2000);
                setTimeout(() => {parent.opacity_20 = "0%"}, 3000);

                // Meeting 2 choice
                setTimeout(() => {parent.opacity_19 = "100%"}, 4000);

                // Swap text
                setTimeout(() => {parent.opacity_13 = "0%"}, 0);
                setTimeout(() => {parent.opacity_14 = "100%"}, 5000);
                setTimeout(() => {parent.opacity_15 = "0%"}, 0);
                setTimeout(() => {parent.opacity_26 = "0%"}, 0);
                setTimeout(() => {parent.opacity_27 = "0%"}, 0);

                // Kill JK if participant presses keys out of order
                setTimeout(() => {parent.opacity_6 = "0%"}, 4000);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // You Got x dots
                setTimeout(() => {parent.opacity_33 = "100%"}, 800);
                setTimeout(() => {parent.opacity_31 = "0%"}, 0);
                setTimeout(() => {parent.opacity_32 = "0%"}, 0);
                setTimeout(() => {parent.opacity_33 = "0%"}, 0);
                setTimeout(() => {parent.opacity_34 = "0%"}, 0);
                setTimeout(() => {parent.opacity_35 = "0%"}, 0);

                // This changes the button to green!
                setTimeout(() => {parent.finish = false; parent.nbc = "success";}, 8000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 8500);
                setTimeout(() => {parent.nbc = "success";}, 9000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 10500);
                setTimeout(() => {parent.nbc = "success";}, 11000);
            },
        },
    }
</script>

<style scoped>
</style>