<template>
    <b-modal 
      id="modal-center-HowChoice6" 
      size="xl"
      centered title="Instruction Page 21 of 23"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              <!-- First page -->
              <img :src="require('../../assets/Instructions/HowChoice/hc 10.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc avatar 2.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 2.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc avatar 3.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc color dots.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc big choice.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc unknown.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 2.0s' }"/>

                <!-- Second page -->
               <img :src="require('../../assets/Instructions/HowChoice/hc 11.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc glowdots upgr.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc glowdots uppi.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc glowdots dngr.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc glowdots dnpi.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.3s' }"/>

                <!-- Third page -->
               <img :src="require('../../assets/Instructions/HowChoice/hc 13.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc you.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 2.0s' }"/> 
               <img :src="require('../../assets/Instructions/HowChoice/hc big choice.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc dots p1.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 2.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc dots p3.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 2.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc dots b5.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 2.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc dots b3.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 2.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc color dots.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 2.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc their dots.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 1.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc your dots.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 1.0s' }"/> 
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
        name: 'HowChoice6',
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

                opacity_0: '0%',
                opacity_1: '100%',
                opacity_2: '100%',
                opacity_3: '100%',
                opacity_4: '100%',
                opacity_5: '100%',
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
                opacity_20: '0%',
                opacity_21: '0%',

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
                if (parent.spacenum_1 == true && parent.spacenum_2 == false && event.keyCode == 32) {
                    // Spacebar 1
                    parent.spacenum_1 = false
                    parent.spacenum_2 = true
                    parent.animate1()
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == true && event.keyCode == 32) {
                    // Spacebar 2
                    parent.spacenum_2 = false
                    parent.spacenum_1 = true
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
            console.log('Modal is about to be shown', bvEvent, modalId)
            if (modalId != "modal-center-HowChoice6") {
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
                this.$bvModal.show("modal-center-HowChoice5") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-FlowKnow1")
            },

            resetAnimation() {
                this.$bvModal.hide('modal-center-HowChoice6')
                this.opacity_1 = "100%"
                this.opacity_2 = "100%"
                this.opacity_3 = "100%"
                this.opacity_4 = "100%"
                this.opacity_5 = "100%"
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
                this.opacity_20 = "0%"
                this.opacity_21 = "0%"
                this.ButtonColor = "outline-primary"
                this.SpaceColor = "outline-secondary"
                this.spacenum_1 = true
                this.spacenum_2 = false
                this.mutex = false
                this.finish = false
                this.hold = true
            },
            animate0() {
                let parent = this
                setTimeout(() => {parent.opacity_6 = "100%"}, 2000); 

                // Press Space Bar. 
                setTimeout(() => {parent.opacity_0 = "100%"; }, 3000);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                
            },
            animate1() {
                let parent = this

                // Press Space Bar. 
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_0 = "100%"; }, 3000);

                // Text exchange 
                setTimeout(() => {parent.opacity_1 = "0%"; parent.opacity_7 = "100%"}, 0); 

                // Within upper option comparison
                setTimeout(() => {parent.opacity_8 = "100%"; parent.opacity_9 = "0%"; }, 300);
                setTimeout(() => {parent.opacity_8 = "0%"; parent.opacity_9 = "100%"; }, 600);
                setTimeout(() => {parent.opacity_8 = "100%"; parent.opacity_9 = "0%"; }, 900);
                setTimeout(() => {parent.opacity_8 = "0%"; parent.opacity_9 = "100%"; }, 1200);
                setTimeout(() => {parent.opacity_8 = "100%"; parent.opacity_9 = "0%"; }, 1500);
                setTimeout(() => {parent.opacity_8 = "0%"; parent.opacity_9 = "100%"; }, 1800);
                setTimeout(() => {parent.opacity_8 = "0%"; parent.opacity_9 = "0%"; }, 2100);
                setTimeout(() => {parent.opacity_8 = "0%"; parent.opacity_9 = "0%"; }, 2400);

                // Within llower option comparison
                setTimeout(() => {parent.opacity_10 = "100%"; parent.opacity_11 = "0%"; }, 3000);
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_11 = "100%"; }, 3300);
                setTimeout(() => {parent.opacity_10 = "100%"; parent.opacity_11 = "0%"; }, 3600);
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_11 = "100%"; }, 3900);
                setTimeout(() => {parent.opacity_10 = "100%"; parent.opacity_11 = "0%"; }, 4200);
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_11 = "100%"; }, 4500);
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_11 = "0%"; }, 4800);
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_11 = "0%"; }, 5100);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                
            },
            animate2() {
                let parent = this

                // Kill Space Bar. 
                setTimeout(() => {parent.opacity_0 = "0%"; }, 0);

                // Text vanish replaced by their dots your dots
                setTimeout(() => {parent.opacity_7 = "0%";}, 0);
                setTimeout(() => {parent.opacity_20 = "100%"; parent.opacity_21 = "100%"}, 4250);

                setTimeout(() => {parent.opacity_2 = "0%";}, 250); 
                setTimeout(() => {parent.opacity_13 = "100%";}, 1750);

                
                setTimeout(() => {parent.opacity_15 = "100%"; parent.opacity_16 = "100%"}, 2250);
                setTimeout(() => {parent.opacity_17 = "0%"; parent.opacity_18 = "0%"}, 3250);
                

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                // Disables BACK NEXT buttons until animation finishes at 3 seconds.
                setTimeout(() => {parent.finish = false}, 3000);

                // This changes the button to green!
                setTimeout(() => {parent.ButtonColor = "success";}, 4000);
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