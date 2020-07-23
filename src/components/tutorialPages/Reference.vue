<template>
    <b-modal 
      id="modal-center-Reference" 
      size="xl"
      centered title="Instruction Page 14 of 23"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              
               <!-- Background + choices opacity 1-7 -->
               <img :src="require('../../assets/Instructions/Ref Dependence/backgr1.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/ch1.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/ch2.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/ch3.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/ch4.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/ch5.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/ch6.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.2s' }"/>

               <!-- Smiles opacity 8-19 -->
               <img :src="require('../../assets/Instructions/Ref Dependence/smile01a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile01b.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile01c.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile01d.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile02a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile02b.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile02c.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile02d.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile03a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile03b.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile03c.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile03d.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.2s' }"/>
               
               <!-- Text opacity 20-22 -->
               <img :src="require('../../assets/Instructions/Ref Dependence/reftext01a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/reftext02a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/reftext03a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.2s' }"/>
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
        name: 'Reference',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "13",
                block_listeners: true,
                ButtonColor: "outline-primary",
                SpaceColor: "outline-secondary",
                spacenum_1: true,
                spacenum_2: false,
                spacenum_3: false,
                opacity_0: '0%',
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
                opacity_13: '0%',
                opacity_14: '0%',
                opacity_15: '0%',
                opacity_16: '0%',
                opacity_17: '0%',
                opacity_18: '0%',
                opacity_19: '0%',
                opacity_20: '100%',
                opacity_21: '0%',
                opacity_22: '0%',
                opacity_23: '0%',
                // opacity_24: '0%',
                // opacity_25: '0%',
                // opacity_26: '0%',
                // opacity_27: '0%',
                // opacity_28: '0%',
                // opacity_29: '0%',
                // opacity_30: '0%',

                mutex: false,
                finish: true,

                // Experimental variable to prevent rapid page hopping
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
                if (parent.spacenum_1 == true && parent.spacenum_2 == false && parent.spacenum_3 == false && event.keyCode == 32) {
                    // Spacebar 1
                    parent.spacenum_1 = false
                    parent.spacenum_2 = true
                    //parent.spacenum_3 = true
                    parent.animate1()
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == true && parent.spacenum_3 == false && event.keyCode == 32) {
                    // Spacebar 2
                    parent.spacenum_2 = false
                    parent.spacenum_3 = true
                    parent.animate2()
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == false && parent.spacenum_3 == true && event.keyCode == 32) {
                    // Spacebar 2
                    parent.spacenum_3 = false
                    parent.spacenum_1 = true
                    parent.animate3()
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
            if (modalId != "modal-center-Reference") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            this.block_listeners = false;
            setTimeout(() => this.animate0(), 500); 

            // This is an experiment at preventing skipping through pages too quickly.
            setTimeout(() => this.hold = false, 500);
            })
        },
        methods: {
            reset_animation_back() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-CommKnow") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-HowChoice0")
            },
            resetAnimation() {
                this.$bvModal.hide('modal-center-Reference')
                this.opacity_0 = "0%"
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
                this.opacity_13 = "0%"
                this.opacity_14 = "0%"
                this.opacity_15 = "0%"
                this.opacity_16 = "0%"
                this.opacity_17 = "0%"
                this.opacity_18 = "0%"
                this.opacity_19 = "0%"
                this.opacity_20 = "100%"
                this.opacity_21 = "0%"
                this.opacity_22 = "0%"
                this.opacity_23 = "0%"
                // this.opacity_24 = "0%"
                // this.opacity_25 = "0%"
                // this.opacity_26 = "0%"
                // this.opacity_27 = "0%"
                // this.opacity_28 = "0%"
                // this.opacity_29 = "0%"
                // this.opacity_30 = "0%"
                this.ButtonColor = "outline-primary"
                this.SpaceColor = "outline-secondary"
                this.spacenum_1 = true
                this.spacenum_2 = false
                this.spacenum_3 = false
                this.locked = true
                this.mutex = false

                // This prevents leaving page prematurely.  When revisiting the page
                // finish no longer prevents you but hold keeps you for .5 seconds. 
                this.finish = false
                this.hold = true
            },
            animate0() {
                let parent = this 
                // Press Space Bar. 
                setTimeout(() => {parent.opacity_0 = "100%"; }, 3000);

                // Text exchange 
                setTimeout(() => {parent.opacity_21 = "0%"; parent.opacity_22 = "0%"}, 0);
                setTimeout(() => {parent.opacity_20 = "100%"; }, 0);
                
            },
            animate1() {
                let parent = this 

                // Press Space Bar. 
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_0 = "100%"; }, 3000);

                // Choice to smile set 1:
                setTimeout(() => {parent.opacity_2 = "100%"; parent.opacity_3 = "0%"}, 500);
                setTimeout(() => {parent.opacity_10 = "100%"; parent.opacity_9 = "0%"}, 1500);
                setTimeout(() => {parent.opacity_3 = "100%"; parent.opacity_2 = "0%"}, 2000);
                setTimeout(() => {parent.opacity_9 = "100%"; parent.opacity_10 = "0%"}, 2500);

                // Choice to smile set 2:
                setTimeout(() => {parent.opacity_4 = "100%"; parent.opacity_5 = "0%"}, 3500);
                setTimeout(() => {parent.opacity_13 = "100%"; parent.opacity_14 = "0%"}, 4000);
                setTimeout(() => {parent.opacity_5 = "100%"; parent.opacity_4 = "0%"}, 4500);
                setTimeout(() => {parent.opacity_14 = "100%"; parent.opacity_13 = "0%"}, 5000);

                // Choice to smile set 3:
                setTimeout(() => {parent.opacity_6 = "100%"; parent.opacity_7 = "0%"}, 6000);
                setTimeout(() => {parent.opacity_16 = "100%"; parent.opacity_19 = "0%"}, 6500);
                setTimeout(() => {parent.opacity_7 = "100%"; parent.opacity_6 = "0%"}, 7000);
                setTimeout(() => {parent.opacity_19 = "100%"; parent.opacity_16 = "0%"}, 7500);

                // Text exchange 
                setTimeout(() => {parent.opacity_20 = "0%"; parent.opacity_22 = "0%"}, 0);
                setTimeout(() => {parent.opacity_20 = "0%"; parent.opacity_22 = "0%"}, 8000);
                setTimeout(() => {parent.opacity_21 = "100%"; }, 8000);
                
            },
            animate2() {
                let parent = this 

                // Press Space Bar. 
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);
                // setTimeout(() => {parent.opacity_0 = "100%"; }, 3000);

                // Text exchange 
                setTimeout(() => {parent.opacity_20 = "0%"; parent.opacity_21 = "0%"}, 0);
                setTimeout(() => {parent.opacity_22 = "100%"; }, 0);
                
                //Disables BACK NEXT buttons until animation finishes at 6.0 seconds.
                setTimeout(() => {parent.finish = false}, 6000);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // This changes the button to green!
                setTimeout(() => {parent.ButtonColor = "success";}, 4000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 4500);
                setTimeout(() => {parent.ButtonColor = "success";}, 5000);
            },
            animate3() {
                let parent = this 

                // Press Space Bar. 
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);
                // setTimeout(() => {parent.opacity_0 = "100%"; }, 3000);

                // Kill all choices and smiles
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
                this.opacity_17 = "0%"
                this.opacity_18 = "0%"
                this.opacity_19 = "0%"

                // Choice to smile set 1:
                setTimeout(() => {parent.opacity_3 = "100%"; parent.opacity_2 = "0%"}, 500);
                setTimeout(() => {parent.opacity_9 = "100%"; parent.opacity_10 = "0%"}, 1500);
                setTimeout(() => {parent.opacity_2 = "100%"; parent.opacity_3 = "0%"}, 2000);
                setTimeout(() => {parent.opacity_10 = "100%"; parent.opacity_9 = "0%"}, 2500);

                // Choice to smile set 2:
                setTimeout(() => {parent.opacity_5 = "100%"; parent.opacity_4 = "0%"}, 3500);
                setTimeout(() => {parent.opacity_14 = "100%"; parent.opacity_13 = "0%"}, 4000);
                setTimeout(() => {parent.opacity_4 = "100%"; parent.opacity_5 = "0%"}, 4500);
                setTimeout(() => {parent.opacity_13 = "100%"; parent.opacity_14 = "0%"}, 5000);

                // Choice to smile set 3:
                setTimeout(() => {parent.opacity_7 = "100%"; parent.opacity_6 = "0%"}, 6000);
                setTimeout(() => {parent.opacity_19 = "100%"; parent.opacity_16 = "0%"}, 6500);
                setTimeout(() => {parent.opacity_6 = "100%"; parent.opacity_7 = "0%"}, 7000);
                setTimeout(() => {parent.opacity_16 = "100%"; parent.opacity_19 = "0%"}, 7500);

                // Text exchange 
                setTimeout(() => {parent.opacity_21 = "0%"; parent.opacity_22 = "0%"}, 0);
                setTimeout(() => {parent.opacity_20 = "100%"; }, 8000);
            },
        },
    }
</script>

<style scoped>
</style>