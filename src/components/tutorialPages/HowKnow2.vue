<template>
    <b-modal 
      id="modal-center-HowKnow2" 
      size="xl"
      centered title="Instruction Page 8 of 30"
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
               <img :src="require('../../assets/Instructions/HowKnow/dotsswitch.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 2.5s' }"/>

               <!-- Avatars and Smiles opacity 13-16 -->
               <img :src="require('../../assets/Instructions/HowKnow/avatar2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/avatar4.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/bsmile1.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/bfrown4.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.2s' }"/>
               
               <!-- Eyes opacity 17-18-->
               <img :src="require('../../assets/Instructions/HowKnow/eyes1.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/eyes2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.2s' }"/>

               <!-- Text 1-3 opacity 19-20 -->
               <img :src="require('../../assets/Instructions/HowKnow/text04.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/text05.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.2s' }"/>
               <!-- <img :src="require('../../assets/Instructions/HowKnow/text03.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.2s' }"/> -->
               
               <!-- Extras: Machine, Barrier, and AZ 21-23-->
               <img :src="require('../../assets/Instructions/HowKnow/machine3a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.6s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/barrier.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowKnow/az.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 0.2s' }"/>

               <!-- Extra dots that appear and disappear faster -->
               <img :src="require('../../assets/Instructions/HowKnow/dots2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 0.0s' }"/>
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="finishanimate" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" :disabled="finishanimate" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'HowKnow2',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "13",
                block_listeners: true,
                opacity_1: '100%',
                opacity_2: '0%',
                opacity_3: '100%',
                opacity_4: '0%',
                opacity_5: '100%',
                opacity_6: '0%',
                opacity_7: '0%',
                opacity_8: '0%',
                opacity_9: '0%',
                opacity_10: '0%',
                opacity_11: '100%',
                opacity_12: '0%',
                opacity_13: '100%',
                opacity_14: '0%',
                opacity_15: '0%',
                opacity_16: '0%',
                opacity_17: '0%',
                opacity_18: '0%',
                opacity_19: '100%',
                opacity_20: '0%',
                opacity_21: '0%',
                opacity_22: '0%',
                opacity_23: '0%',
                opacity_24: '0%',
                // opacity_25: '0%',
                // opacity_26: '0%',
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
                if (event.keyCode == 32) {
                    // Spacebar
                    parent.animate()
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
            if (modalId != "modal-center-HowKnow2") {
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
                this.$bvModal.show("modal-center-HowKnow1") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-HowKnow3")
            },

            resetAnimation() {
                this.$bvModal.hide('modal-center-HowKnow2')
                this.opacity_1 = "100%"
                this.opacity_2 = "0%"
                this.opacity_3 = "100%"
                this.opacity_4 = "0%"
                this.opacity_5 = "100%"
                this.opacity_6 = "0%"
                this.opacity_7 = "0%"
                this.opacity_8 = "0%"
                this.opacity_9 = "0%"
                this.opacity_10 = "0%"
                this.opacity_11 = "100%"
                this.opacity_12 = "0%"
                this.opacity_13 = "100%"
                this.opacity_14 = "0%"
                this.opacity_15 = "0%"
                this.opacity_16 = "0%"
                this.opacity_17 = "0%"
                this.opacity_18 = "0%"
                this.opacity_19 = "100%"
                this.opacity_20 = "0%"
                this.opacity_21 = "0%"
                this.opacity_22 = "0%"
                this.opacity_23 = "0%"
                this.opacity_24 = "0%"
                // this.opacity_25 = "0%"
                // this.opacity_26 = "0%"
                // this.opacity_27 = "0%"
                // this.opacity_28 = "0%"
                // this.opacity_29 = "0%"
                // this.opacity_30 = "0%"

                this.locked = true
                this.mutex = false
                this.finishanimate = false
            },
            animate() {
                let parent = this 
                setTimeout(() => {parent.opacity_7 = "100%"; }, 0);  
                setTimeout(() => {parent.opacity_2 = "100%"; parent.opacity_4 = "100%"; parent.opacity_6 = "100%"; 
                parent.opacity_10 = "100%"; parent.opacity_14 = "100%"; parent.opacity_24 = "100%"; parent.opacity_10 = "100%";}, 1500); 
                setTimeout(() => {parent.opacity_22 = "100%"; parent.opacity_4 = "50%"}, 2000); 
                setTimeout(() => {parent.opacity_18 = "100%"; }, 2000);
                setTimeout(() => {parent.opacity_21 = "100%"; }, 2500);

                // Text swaps out
                setTimeout(() => {parent.opacity_19 = "0%"; parent.opacity_20 = "100%"; }, 6000); 
                setTimeout(() => {parent.opacity_24 = "0%";}, 2500);
                setTimeout(() => {parent.opacity_10 = "0%";}, 3500);
                setTimeout(() => {parent.opacity_12 = "100%";}, 4500);
  


                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                // Disables BACK NEXT buttons until animation finishes at 6 seconds.
                setTimeout(() => {parent.finishanimate = false}, 6000);
            },
        },
    }
</script>

<style scoped>
</style>