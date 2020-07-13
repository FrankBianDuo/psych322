<template>
    <b-modal 
      id="modal-center-HowHappy1" 
      size="xl"
      centered title="Instruction Page 3 of 30"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              <!-- Avatar 1-9 opacity 1-9 -->
               <img :src="require('../../assets/Instructions/HowHappy/av1.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/av2.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/av3.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/av4.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/av5.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/av6.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/av7.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/av8.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/av9.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.3s' }"/>
               <!-- Boxes 1-9 opacity 10-18 -->
               <img :src="require('../../assets/Instructions/HowHappy/box1.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.4s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/box2.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.4s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/box3.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.4s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/box4.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.4s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/box5.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.4s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/box6.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.4s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/box7.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.4s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/box8.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.4s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/box9.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.4s' }"/>
               <!-- Choices 1-9 opacity 19-27 -->
               <img :src="require('../../assets/Instructions/HowHappy/choice1.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/choice2.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/choice3.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/choice4.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/choice5.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/choice6.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/choice7.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_25, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/choice8.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_26, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/choice9.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_27, transition: 'opacity 0.2s' }"/>
               <!-- Text 1-2 opacity 28-29 -->
               <img :src="require('../../assets/Instructions/HowHappy/text1a.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_28, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowHappy/text1b.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_29, transition: 'opacity 0.0s' }"/>
               <!-- <img :src="require('../../assets/Instructions/HowHappy/text1c.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_30, transition: 'opacity 0.0s' }"/> -->
               <!-- <img :src="require('../../assets/Instructions/HowHappy/past.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_31, transition: 'opacity 0.0s' }"/> -->
               <!-- <img :src="require('../../assets/Instructions/HowHappy/present.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_32, transition: 'opacity 0.0s' }"/> -->
               <!-- <img :src="require('../../assets/Instructions/HowHappy/future.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_33, transition: 'opacity 0.0s' }"/> -->
               <!-- <img :src="require('../../assets/Instructions/HowHappy/eyes1.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_34, transition: 'opacity 0.0s' }"/> -->
               <!-- <img :src="require('../../assets/Instructions/HowHappy/eyes2.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_35, transition: 'opacity 0.0s' }"/> -->
               <!-- <img :src="require('../../assets/Instructions/HowHappy/eyes3.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_36, transition: 'opacity 0.0s' }"/> -->
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="finishanimate" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" :disabled="finishanimate" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'HowHappy1',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "13",
                opacity_1: '100%',
                opacity_2: '0%',
                opacity_3: '0%',
                opacity_4: '00%',
                opacity_5: '0%',
                opacity_6: '0%',
                opacity_7: '0%',
                opacity_8: '0%',
                opacity_9: '0%',
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
                opacity_22: '0%',
                opacity_23: '0%',
                opacity_24: '0%',
                opacity_25: '0%',
                opacity_26: '0%',
                opacity_27: '0%',
                opacity_28: '0%',
                opacity_29: '100%',
                // opacity_30: '0%',
                // opacity_31: '0%',
                // opacity_32: '0%',
                // opacity_33: '0%',
                //opacity_34: '0%',
                //opacity_35: '0%',
                //opacity_36: '0%',
                mutex: false,
                finishanimate: true
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
            if (modalId != "modal-center-HowHappy1") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            setTimeout(() => this.animate(), 250); 
            })
        },
        methods: {
            reset_animation_back() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-WantMoreDots") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-HowHappy2")
            },

            resetAnimation() {
                this.$bvModal.hide('modal-center-HowHappy1')
                this.opacity_1 = "100%"
                this.opacity_2 = "0%"
                this.opacity_3 = "0%"
                this.opacity_4 = "0%"
                this.opacity_5 = "0%"
                this.opacity_6 = "0%"
                this.opacity_7 = "0%"
                this.opacity_8 = "0%"
                this.opacity_9 = "0%"
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
                this.opacity_22 = "0%"
                this.opacity_23 = "0%"
                this.opacity_24 = "0%"
                this.opacity_25 = "0%"
                this.opacity_26 = "0%"
                this.opacity_27 = "0%"
                this.opacity_28 = "0%"
                this.opacity_29 = "100%"
                //this.opacity_30 = "0%"
                //this.opacity_31 = "0%"
                //this.opacity_32 = "0%"
                //this.opacity_33 = "0%"
                //this.opacity_34 = "0%"
                //this.opacity_35 = "0%"
                //this.opacity_36 = "0%"
                this.locked = true
                this.mutex = false
                this.finishanimate = false
            },
            animate() {
                let parent = this
                //setTimeout(() => {parent.opacity_19 = "100%"}, 2200); 
                //setTimeout(() => {parent.opacity_2 = "100%"}, 3000); 
                //setTimeout(() => {parent.opacity_11 = "100%"}, 3200); 
                //setTimeout(() => {parent.opacity_28 = "0%"; parent.opacity_29 = "100%" }, 500);  

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                // Disables BACK NEXT buttons until animation finishes at 1 seconds.
                setTimeout(() => {parent.finishanimate = false}, 4000);
            },
        },
    }
</script>

<style scoped>
</style>