<template>
    <b-modal 
      id="modal-center-HowChoice0" 
      size="xl"
      centered title="Instruction Page 14 of 18"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              
               <!-- Background opacity 1 -->
               <img :src="require('../../assets/Instructions/Ref Dependence/backgr2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.2s' }"/>

               <!-- Avatar choice smile opacity 2-10 -->
               <img :src="require('../../assets/Instructions/Ref Dependence/refav1.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refch1.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile04b.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.2s' }"/>

               <img :src="require('../../assets/Instructions/Ref Dependence/refav2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refch2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile04b.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.2s' }"/>

               <img :src="require('../../assets/Instructions/Ref Dependence/refav3.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refch3.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile04a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.2s' }"/>

               <!-- Text opacity 11-15 -->
               <img :src="require('../../assets/Instructions/Ref Dependence/reftext04a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/reftext05a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/reftext06a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/reftext06b.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/reftext06c.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.2s' }"/>

               <!-- Text opacity 16-21 -->
               <img :src="require('../../assets/Instructions/Ref Dependence/barr1a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/barr1b.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/barr2a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/barr2b.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/barr3a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/barr3b.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.0s' }"/>
            </div>
              
            <div>
                <b-button :variant="SpaceColor" size='lg' v-bind:style="{ height: 'auto', marginTop: '52.75%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_0, transition: 'opacity 0.5s'}" >Press space bar.</b-button>
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="hold" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" :variant="ButtonColor" :disabled="finish || hold" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'HowChoice0',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "13",
                block_listeners: true,
                ButtonColor: "outline-primary",
                SpaceColor: "outline-secondary",
                spacenum_1: false,
                spacenum_2: false,
                spacenum_3: false,
                spacenum_4: false,
                spacenum_5: false,
                opacity_0: '0%',
                opacity_1: '100%',
                opacity_2: '100%',
                opacity_3: '0%',
                opacity_4: '0%',
                opacity_5: '0%',
                opacity_6: '0%',
                opacity_7: '0%',
                opacity_8: '0%',
                opacity_9: '0%',
                opacity_10: '0%',
                opacity_11: '100%',
                opacity_12: '0%',
                opacity_13: '0%',
                opacity_14: '0%',
                opacity_15: '0%',
                opacity_16: '0%',
                opacity_17: '0%',
                opacity_18: '0%',
                opacity_19: '0%',
                opacity_20: '100%',
                opacity_21: '0%',
                // opacity_22: '0%',
                // opacity_23: '0%',
                // opacity_24: '0%',
                // opacity_25: '0%',
                // opacity_26: '0%',
                // opacity_27: '0%',
                // opacity_28: '0%',
                // opacity_29: '0%',
                // opacity_30: '0%',

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
                if (parent.spacenum_1 == true && parent.spacenum_2 == false && parent.spacenum_3 == false
                && parent.spacenum_4 == false && event.keyCode == 32) {
                    // Spacebar 1
                    parent.spacenum_1 = false
                    parent.animate1()
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == true && parent.spacenum_3 == false 
                && parent.spacenum_4 == false && event.keyCode == 32) {
                    // Spacebar 2
                    parent.spacenum_2 = false
                    parent.animate2()
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == false && parent.spacenum_3 == true 
                && parent.spacenum_4 == false && event.keyCode == 32) {
                    // Spacebar 3
                    parent.spacenum_3 = false
                    parent.animate3();
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == false && parent.spacenum_3 == false 
                && parent.spacenum_4 == true && event.keyCode == 32) {
                    // Spacebar 3
                    parent.spacenum_4 = false
                    parent.animate4();
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
            if (modalId != "modal-center-HowChoice0") {
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
                this.$bvModal.show("modal-center-Reference") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-HowChoice1")
            },
            resetAnimation() {
                this.$bvModal.hide('modal-center-HowChoice0')
                this.opacity_0 = "0%"
                this.opacity_1 = "100%"
                this.opacity_2 = "100%"
                this.opacity_3 = "0%"
                this.opacity_4 = "0%"
                this.opacity_5 = "0%"
                this.opacity_6 = "0%"
                this.opacity_7 = "0%"
                this.opacity_8 = "0%"
                this.opacity_9 = "0%"
                this.opacity_10 = "0%"
                this.opacity_11 = "100%"
                this.opacity_12 = "0%"
                this.opacity_13 = "0%"
                this.opacity_14 = "0%"
                this.opacity_15 = "0%"
                this.opacity_16 = "0%"
                this.opacity_17 = "0%"
                this.opacity_18 = "0%"
                this.opacity_19 = "0%"
                this.opacity_20 = "100%"
                this.opacity_21 = "0%"
                // this.opacity_22 = "0%"
                // this.opacity_23 = "0%"
                // this.opacity_24 = "0%"
                // this.opacity_25 = "0%"
                // this.opacity_26 = "0%"
                // this.opacity_27 = "0%"
                // this.opacity_28 = "0%"
                // this.opacity_29 = "0%"
                // this.opacity_30 = "0%"
                this.ButtonColor = "outline-primary"
                this.SpaceColor = "outline-secondary"
                this.spacenum_1 = false
                this.spacenum_2 = false
                this.spacenum_3 = false
                this.spacenum_4 = false
                this.spacenum_5 = false
                this.mutex = false
                this.finish = false
                this.hold = true
            },
            animate0() {
                let parent = this 

                // Press Space Bar. 
                setTimeout(() => {parent.opacity_0 = "100%"; }, 3000);

                // Flashing barrier
                setTimeout(() => {parent.opacity_21 = "100%"; }, 1000);
                setTimeout(() => {parent.opacity_21 = "0%"; }, 1100);
                setTimeout(() => {parent.opacity_21 = "100%"; }, 1200);
                setTimeout(() => {parent.opacity_21 = "0%"; }, 1300);
                setTimeout(() => {parent.opacity_21 = "100%"; }, 1400);
                setTimeout(() => {parent.opacity_21 = "0%"; }, 1500);
                setTimeout(() => {parent.opacity_21 = "100%"; }, 1600);
                setTimeout(() => {parent.opacity_21 = "0%"; }, 1700);
                setTimeout(() => {parent.opacity_21 = "100%"; }, 1800);
                setTimeout(() => {parent.opacity_21 = "0%"; }, 1900);
                setTimeout(() => {parent.opacity_21 = "100%"; }, 2000);
                setTimeout(() => {parent.opacity_21 = "0%"; }, 2100);
                setTimeout(() => {this.spacenum_1 = true}, 2200);

            },
            animate1() {
                let parent = this 

                // Press Space Bar. 
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_0 = "100%"; }, 3000);

                // Text exchange 
                setTimeout(() => {parent.opacity_11 = "0%"; parent.opacity_12 = "100%"}, 0);
                setTimeout(() => {this.spacenum_2 = true}, 1000);

                this.opacity_0 = "0%"
                this.opacity_1 = "100%"
                this.opacity_2 = "100%"
                this.opacity_3 = "0%"
                this.opacity_4 = "0%"
                this.opacity_5 = "0%"
                this.opacity_6 = "0%"
                this.opacity_7 = "0%"
                this.opacity_8 = "0%"
                this.opacity_9 = "0%"
                this.opacity_10 = "0%"

                this.opacity_13 = "0%"
                this.opacity_14 = "0%"
                this.opacity_15 = "0%"
                this.opacity_16 = "0%"
                this.opacity_17 = "0%"
                this.opacity_18 = "0%"
                this.opacity_19 = "0%"
                this.opacity_20 = "100%"
                this.opacity_21 = "0%"
            },
            animate2() {
                let parent = this 
                // Press Space Bar. 
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_0 = "100%"; }, 3000);

                // Text exchange 
                setTimeout(() => {parent.opacity_12 = "0%"; parent.opacity_13 = "100%"}, 0);

                // Choice and Smile
                setTimeout(() => {parent.opacity_3 = "100%"; }, 1000);
                setTimeout(() => {parent.opacity_4 = "100%"; }, 1500);

                setTimeout(() => {this.spacenum_3 = true}, 1600);
                
            },
            animate3() {
                let parent = this 
                // Press Space Bar. 
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_0 = "100%"; }, 3000);
                setTimeout(() => {this.spacenum_4 = true}, 1600);

                // Text exchange 
                setTimeout(() => {parent.opacity_13 = "0%"; parent.opacity_14 = "100%"}, 0);

                // Kill barrier, avatar, choice and smile
                setTimeout(() => {parent.opacity_20 = "0%"; parent.opacity_2 = "0%"; parent.opacity_3 = "0%"; parent.opacity_4 = "0%"}, 0);

                // Barrier, Avatar, Choice, and Smile
                setTimeout(() => {parent.opacity_18 = "100%"; }, 0);
                setTimeout(() => {parent.opacity_5 = "100%"; }, 0);
                setTimeout(() => {parent.opacity_9 = "100%"; }, 1000);
                setTimeout(() => {parent.opacity_7 = "100%"; }, 1500);
            },
            animate4() {
                let parent = this 
                // Press Space Bar. 
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);

                // Text exchange 
                setTimeout(() => {parent.opacity_14 = "0%"; parent.opacity_15 = "100%"}, 0);

                // Kill barrier, avatar, choice and smile
                setTimeout(() => {parent.opacity_18 = "0%"; parent.opacity_5 = "0%"; parent.opacity_9 = "0%"; parent.opacity_7 = "0%"}, 0);

                // Barrier, Avatar, Choice, and Smile
                setTimeout(() => {parent.opacity_16 = "100%"; }, 0);
                setTimeout(() => {parent.opacity_8 = "100%"; }, 0);
                setTimeout(() => {parent.opacity_9 = "100%"; }, 1000);
                setTimeout(() => {parent.opacity_10 = "100%"; }, 1500);

                //Disables BACK NEXT buttons until animation finishes at 6.0 seconds.
                // setTimeout(() => {parent.finish = false}, 4000);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // This changes the button to green!
                setTimeout(() => {parent.finish = false; parent.ButtonColor = "success";}, 4000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 4500);
                setTimeout(() => {parent.ButtonColor = "success";}, 5000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 8500);
                setTimeout(() => {parent.ButtonColor = "success";}, 9000);
            },
        },
    }
</script>

<style scoped>
</style>