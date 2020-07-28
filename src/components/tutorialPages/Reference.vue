<template>
    <b-modal 
      id="modal-center-Reference" 
      size="xl"
      centered title="Instruction Page 13 of 18"
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
               <img :src="require('../../assets/Instructions/Ref Dependence/smile03d.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile03b.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile03c.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/smile03a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.2s' }"/>
               
               <!-- Text opacity 20-22 -->
               <img :src="require('../../assets/Instructions/Ref Dependence/reftext01a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 1.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/reftext02a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 1.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/reftext03a.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 1.0s' }"/>
            </div>
              
            <div>
                <b-button :variant="sbc" size='lg' v-bind:style="{ height: 'auto', marginTop: '52.75%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_0, transition: 'opacity 0.5s'}" >Press space bar.</b-button>
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="hold" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" :variant="nbc" :disabled="finish || hold" size="lg">Next</b-button>
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
                nbc: "outline-primary",
                sbc: "outline-secondary",
                keyflow1: false,
                keyflow2: false,
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
                    //parent.keyflow3 = true
                    parent.animate1()
                } else if (parent.keyflow1 == false && parent.keyflow2 == true && event.keyCode == 32) {
                    // Spacebar 2
                    parent.keyflow2 = false
                    parent.animate2()
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
            setTimeout(() => this.hold = false, 1000);
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
                this.nbc = "outline-primary"
                this.sbc = "outline-secondary"
                this.keyflow1 = false
                this.keyflow2 = false
                // this.keyflow3 = false
                this.locked = true
                this.mutex = false

                this.mutex = false
                this.finish = false
                this.hold = true
            },
            animate0() {
                let parent = this 
                // Press Space Bar.
                setTimeout(() => {this.keyflow1 = true; parent.opacity_0 = "100%"; }, 2500);
                setTimeout(() => {parent.opacity_0 = "0%"; }, 3000);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_0 = "100%"; }, 3500);

                // Text exchange 
                setTimeout(() => {parent.opacity_21 = "0%"; parent.opacity_22 = "0%"}, 0);
                setTimeout(() => {parent.opacity_20 = "100%"; }, 0);
            },
            animate1() {
                let parent = this 

                // Press Space Bar. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {this.keyflow2 = true; parent.opacity_0 = "100%"; }, 9000);
                setTimeout(() => {parent.opacity_0 = "0%"; }, 9500);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_0 = "100%"; }, 10000);

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
                setTimeout(() => {parent.opacity_20 = "0%"; }, 8000);
                setTimeout(() => {parent.opacity_21 = "100%"; }, 8800);
                
            },
            animate2() {
                let parent = this 

                // Press Space Bar. 
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);

                // Text exchange 
                setTimeout(() => {parent.opacity_20 = "0%"; parent.opacity_21 = "0%"}, 0);
                setTimeout(() => {parent.opacity_22 = "100%"; }, 800);
                
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // This changes the button to green!
                setTimeout(() => {parent.finish = false; parent.nbc = "success";}, 4000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 4500);
                setTimeout(() => {parent.nbc = "success";}, 5000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 8500);
                setTimeout(() => {parent.nbc = "success";}, 9000);
            },
        },
    }
</script>

<style scoped>
</style>