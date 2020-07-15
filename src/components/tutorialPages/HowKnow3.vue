<template>
    <b-modal 
      id="modal-center-HowKnow3" 
      size="xl"
      centered title="Instruction Page 9 of 30"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              
               <!-- Boxes Arrows and Options opacity 1-6 -->
               <img :src="require('../../assets/Instructions/HowKnow/box1.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/box2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/arrows1.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/arrows2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/options1.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/options2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.2s' }"/>
               
               <!-- Choices and dots opacity 7-12 -->
               <img :src="require('../../assets/Instructions/HowKnow/kchoice2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/kchoice3.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/dots1.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/dots2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 1.5s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/dots3.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/dotsswitch.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 1.5s' }"/>

               <!-- Avatars and Smiles opacity 13-16 -->
               <img :src="require('../../assets/Instructions/HowKnow/avatar2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/avatar4.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/bsmile1.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/bfrown4.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.2s' }"/>
               
               <!-- Eyes opacity 17-18-->
               <img :src="require('../../assets/Instructions/HowKnow/eyes1.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/eyes2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.2s' }"/>

               <!-- Text 1-3 opacity 19-21 -->
               <img :src="require('../../assets/Instructions/HowKnow/text06.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/text07.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/text08.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.2s' }"/>
               
               <!-- Extras: Machine, Barrier, AZ, and predictions 22-26-->
               <img :src="require('../../assets/Instructions/HowKnow/machine3a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.6s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/barrier.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/az.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/pred1.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_25, transition: 'opacity 0.05s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/pred2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_26, transition: 'opacity 0.05s' }"/>

            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="finishanimate" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" :disabled="finishanimate" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'HowKnow3',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "13",
                block_listeners: true,
                opacity_1: '100%',
                opacity_2: '100%',
                opacity_3: '100%',
                opacity_4: '50%',
                opacity_5: '100%',
                opacity_6: '100%',
                opacity_7: '100%',
                opacity_8: '0%',
                opacity_9: '0%',
                opacity_10: '0%',
                opacity_11: '100%',
                opacity_12: '100%',
                opacity_13: '100%',
                opacity_14: '100%',
                opacity_15: '0%',
                opacity_16: '0%',
                opacity_17: '0%',
                opacity_18: '100%',
                opacity_19: '100%',
                opacity_20: '0%',
                opacity_21: '0%',
                opacity_22: '100%',
                opacity_23: '100%',
                opacity_24: '100%',
                opacity_25: '0%',
                opacity_26: '0%',
                // opacity_27: '0%',
                // opacity_28: '0%',
                // opacity_29: '0%',
                // opacity_30: '0%',

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
                if (event.keyCode == 65) {
                    // Prediction A
                    parent.animateA()
                    parent.animate()
                } else if (event.keyCode == 90) {
                    // Prediction Z
                    parent.animateZ()
                    parent.animate();
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
            if (modalId != "modal-center-HowKnow3") {
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
                this.$bvModal.show("modal-center-HowKnow2") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-HowKnow4")
            },

            resetAnimation() {
                this.$bvModal.hide('modal-center-HowKnow3')
                this.opacity_1 = "100%"
                this.opacity_2 = "100%"
                this.opacity_3 = "100%"
                this.opacity_4 = "50%"
                this.opacity_5 = "100%"
                this.opacity_6 = "100%"
                this.opacity_7 = "100%"
                this.opacity_8 = "0%"
                this.opacity_9 = "0%"
                this.opacity_10 = "0%"
                this.opacity_11 = "100%"
                this.opacity_12 = "100%"
                this.opacity_13 = "100%"
                this.opacity_14 = "100%"
                this.opacity_15 = "0%"
                this.opacity_16 = "0%"
                this.opacity_17 = "0%"
                this.opacity_18 = "100%"
                this.opacity_19 = "100%"
                this.opacity_20 = "0%"
                this.opacity_21 = "0%"
                this.opacity_22 = "100%"
                this.opacity_23 = "100%"
                this.opacity_24 = "100%"
                this.opacity_25 = "0%"
                this.opacity_26 = "0%"
                // this.opacity_27 = "0%"
                // this.opacity_28 = "0%"
                // this.opacity_29 = "0%"
                // this.opacity_30 = "0%"

                this.locked = true
                this.mutex = false
                this.finishanimate = false
            },

            animateA() {
                let parent = this 
                setTimeout(() => {parent.opacity_25 = "100%";}, 0); 
                setTimeout(() => {parent.opacity_25 = "0%";}, 1000);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },

            animateZ() {
                let parent = this 
                setTimeout(() => {parent.opacity_26 = "100%";}, 0); 
                setTimeout(() => {parent.opacity_26 = "0%";}, 1000);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },

            animate() {
                let parent = this 
 
                // Text swaps out
                setTimeout(() => {parent.opacity_19 = "0%"; parent.opacity_20 = "100%"; }, 4000);

                setTimeout(() => {parent.opacity_26 = "0%"; }, 1000);
                setTimeout(() => {parent.opacity_4 = "100%"; }, 1500);
                setTimeout(() => {parent.opacity_18 = "0%"; }, 2000);

                //Choose, barrier disappear, and sad face
                setTimeout(() => {parent.opacity_8 = "100%"; }, 3500);
                setTimeout(() => {parent.opacity_23 = "0%"; }, 4400);
                setTimeout(() => {parent.opacity_16 = "100%"; }, 4500);




                // Text swaps out
                setTimeout(() => {parent.opacity_20 = "0%"; parent.opacity_21 = "100%"; }, 5000);


                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                // Disables BACK NEXT buttons until animation finishes at 5.5 seconds.
                setTimeout(() => {parent.finishanimate = false}, 5500);
            },
        },
    }
</script>

<style scoped>
</style>