<template>
    <b-modal 
      id="modal-center-MachinesP" 
      size="xl"
      centered title="Instruction Page 4 of 18"
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
               <img :src="require('../../assets/Instructions/Machines/options5.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/options6.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Bodies/machine07a.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Bodies/machine07b.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/you1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/you2.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.8s' }"/>

               <!-- opacity 11-17 -->
               <img :src="require('../../assets/Instructions/Machines/az.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/Instructions/Machines/jk.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/pred1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/pred2.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/controlgive.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/controlkeep.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/control1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.2s' }"/>

               <!-- opacity 18-21 -->
               <img :src="require('../../assets/Instructions/Machines/mchoice9a.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/mchoice9b.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/mchoice9c.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/mchoice9d.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.0s' }"/>

               <!-- opactiy 22-24 -->
               <!-- <img :src="require('../../assets/Instructions/Machines/Machine Text/space4.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_0, transition: 'opacity 0.0s' }"/> -->
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext07.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 1.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext08.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 1.0s' }"/>

               <!-- Dots opacity 25-30 -->
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspup1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_25, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspdn1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_26, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspup3.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_27, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspdn3.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_28, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspup5.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_29, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspdn5.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_30, transition: 'opacity 0.3s' }"/>

               <!-- You got x dots opacity 31-33 -->
               <img :src="require('../../assets/Instructions/Machines/Machine Text/yougot1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_31, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/yougot3.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_32, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/yougot5.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_33, transition: 'opacity 0.0s' }"/>

               <!-- This redundancy places the machine bodies in front of the flashing arms -->
               <img :src="require('../../assets/Instructions/Machines/Bodies/machine07a.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Bodies/machine07b.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.8s' }"/>

               <!-- Extra text -->
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext06d.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '-1%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_35, transition: 'opacity 1.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext06e.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '-1%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_36, transition: 'opacity 1.0s' }"/>

               <!-- Counter -->
               <img :src="require('../../assets/Instructions/Machines/Machine Text/count03.01.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_34, transition: 'opacity 0.2s' }"/>
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
        name: 'MachinesP',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "13",
                skey: false,
                block_listeners: true,
                nbc: "outline-primary",
                sbc: "outline-secondary",
                press: "space bar",
                keyflow1: false,
                keyflow2: false,
                opacity_1: '100%',
                opacity_2: '100%',
                opacity_3: '100%',
                opacity_4: '100%',
                opacity_5: '100%',
                opacity_6: '100%',
                opacity_7: '100%',
                opacity_8: '100%',
                opacity_9: '100%',
                opacity_10: '100%',
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
                opacity_0: '0%',
                opacity_23: '0%',
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
                if (parent.keyflow1 == true && parent.keyflow2 == false && event.keyCode == 32) {
                    // Spacebar 1
                    parent.keyflow1 = false
                    // parent.keyflow2 = true
                    parent.animate1()
                } else if (parent.keyflow1 == false && parent.keyflow2 == true && event.keyCode == 65) {
                    // Predict A
                    parent.animateA()
                } else if (parent.keyflow1 == false && parent.keyflow2 == true && event.keyCode == 90) {
                    // Predict Z
                    parent.animateZ()
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
            if (modalId != "modal-center-MachinesP") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            this.block_listeners = false;
            setTimeout(() => this.animate0(), 0); 
            // This prevents skipping through pages too quickly.
            setTimeout(() => this.hold = false, 1000);
            })
        },
        methods: {
            reset_animation_back() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-Machines3") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-Machines4")
            },
            resetAnimation() {
                this.$bvModal.hide('modal-center-MachinesP')
                this.opacity_1 = "100%"
                this.opacity_2 = "100%"
                this.opacity_3 = "100%"
                this.opacity_4 = "100%"
                this.opacity_5 = "100%"
                this.opacity_6 = "100%"
                this.opacity_7 = "100%"
                this.opacity_8 = "100%"
                this.opacity_9 = "100%"
                this.opacity_10 = "100%"
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
                this.opacity_0 = "0%"
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
                this.nbc = "outline-primary"
                this.sbc = "outline-secondary"
                this.press = "space bar"
                this.keyflow1 = false
                this.keyflow2 = false
                this.skey = false
                this.mutex = false
                this.finish = false
                this.hold = true
            },
            animate0() {
                let parent = this 
                // Press Space Bar. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {this.keyflow1 = true; parent.opacity_0 = "100%"; }, 500);
                setTimeout(() => {parent.opacity_0 = "0%"; }, 1000);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_0 = "100%"; }, 1500);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
            animate1() {
                let parent = this 

                // Meeting 1 Flashing Prior Selections 
                setTimeout(() => {parent.opacity_0 = "0%"}, 0);
                setTimeout(() => {parent.opacity_18 = "100%"}, 0); 
                setTimeout(() => {parent.opacity_18 = "0%"}, 100);
                setTimeout(() => {parent.opacity_18 = "100%"}, 200);
                setTimeout(() => {parent.opacity_18 = "0%"}, 300);
                setTimeout(() => {parent.opacity_19 = "100%"}, 400);
                setTimeout(() => {parent.opacity_19 = "0%"}, 500);
                setTimeout(() => {parent.opacity_18 = "100%"}, 600);
                setTimeout(() => {parent.opacity_18 = "0%"}, 700);

                setTimeout(() => {parent.opacity_34 = "100%"}, 1000);

                setTimeout(() => {parent.opacity_35 = "100%"}, 1200);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // Press A or Z. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {this.keyflow2 = true; this.press = "A or Z"; parent.opacity_0 = "100%"; parent.opacity_11 = "100%"; }, 6000);
                setTimeout(() => {parent.opacity_0 = "0%"; parent.opacity_11 = "0%"; }, 6500);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_0 = "100%"; parent.opacity_11 = "100%"; }, 7000);
            },
            animateA() {
                let parent = this 

                // Kill key reminder 
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_11 = "0%"; }, 0);

                // Text swap
                setTimeout(() => {parent.opacity_35 = "0%"}, 0);
                setTimeout(() => {parent.opacity_36 = "100%"}, 800);

                // Prediction Feedback Up 
                setTimeout(() => {parent.opacity_21 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_14 = "0%"; parent.opacity_13 = "100%"}, 0);
                setTimeout(() => {parent.opacity_21 = "100%"; }, 1100);

                // This changes the button to green!
                setTimeout(() => {parent.finish = false; parent.nbc = "success";}, 3000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 3500);
                setTimeout(() => {parent.nbc = "success";}, 4000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 8500);
                setTimeout(() => {parent.nbc = "success";}, 9000);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
            animateZ() {
                let parent = this 

                // Kill key reminder 
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_11 = "0%"; }, 0);

                // Text swap
                setTimeout(() => {parent.opacity_35 = "0%"}, 0);
                setTimeout(() => {parent.opacity_36 = "100%"}, 800);

                // Prediction Feedback Down 
                setTimeout(() => {parent.opacity_21 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_13 = "0%"; parent.opacity_14 = "100%"}, 0);
                setTimeout(() => {parent.opacity_21 = "100%"; }, 1100);

                // This changes the button to green!
                setTimeout(() => {parent.finish = false; parent.nbc = "success";}, 3000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 3500);
                setTimeout(() => {parent.nbc = "success";}, 4000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 8500);
                setTimeout(() => {parent.nbc = "success";}, 9000);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
        },
    }
</script>

<style scoped>
</style>