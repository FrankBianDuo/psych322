<template>
    <b-modal 
      id="modal-center-Machines1" 
      size="xl"
      centered title="Instruction Page 1 of 23"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              
               <!-- Machines opacity 1-7 -->
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeMeet.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ch1.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ch2.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ch3.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ch4.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ch5.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ch6.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"/>

               <!-- Text opacity 8-13 -->
               <img :src="require('../../assets/Instructions/Machines/Machine Text/programtext1.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/programtext2.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/programtext3.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.2s' }"/>
               <!-- <img :src="require('../../assets/Instructions/Machines/Machine Text/space1.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.8s' }"/> -->
               <img :src="require('../../assets/Instructions/Machines/Machine Text/space2.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/space3.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.8s' }"/>

               <!-- Text opacity 14-23 -->
               <img :src="require('../../assets/Instructions/Machines/Machine Text/optionsrg.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 1.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext01a.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext01b.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext01c.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext01d.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext01e.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext02a.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext02b.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext02c.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Text/next1.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 0.2s' }"/>

               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeMachines.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeOptions.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_25, transition: 'opacity 0.2s' }"/>

               <!-- Counters -->
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/count1.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_26, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/count2.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_27, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/count3.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '6%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_28, transition: 'opacity 0.2s' }"/>

               <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext02d.png')" v-bind:style="{ maxWidth: '46%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_29, transition: 'opacity 0.2s' }"/>
            </div>

            <div>
                <b-button :variant="SpaceColor" size='lg' v-bind:style="{ height: 'auto', marginTop: '52.75%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.5s'}" >Press space bar.</b-button>
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="hold" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" :variant="ButtonColor" :disabled="finish || hold" size="lg">Next</b-button>
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
                ButtonColor: "outline-primary",
                SpaceColor: "outline-secondary",
                spacenum_1: true,
                spacenum_2: false,
                spacenum_3: false,
                spacenum_4: false,
                spacenum_5: false,
                spacenum_6: false,
                spacenum_7: false,
                spacenum_8: false,
                spacenum_9: false,
                spacenum_10: false,
                opacity_1: '0%',
                opacity_2: '0%',
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
                opacity_15: '100%',
                opacity_16: '0%',
                opacity_17: '0%',
                opacity_18: '0%',
                opacity_19: '0%',
                opacity_20: '0%',
                opacity_21: '0%',
                opacity_22: '0%',
                opacity_23: '0%',
                opacity_24: '100%',
                opacity_25: '0%',
                opacity_26: '0%',
                opacity_27: '0%',
                opacity_28: '0%',
                opacity_29: '0%',
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
                if (parent.spacenum_1 == true && parent.spacenum_2 == false && parent.spacenum_3 == false && parent.spacenum_4 == false && parent.spacenum_5 == false 
                && parent.spacenum_6 == false && parent.spacenum_7 == false && parent.spacenum_8 == false && parent.spacenum_9 == false && parent.spacenum_10 == false && event.keyCode == 32) {
                    // Spacebar 1
                    parent.spacenum_1 = false
                    parent.spacenum_2 = true
                    //parent.spacenum_3 = true
                    parent.animate1()
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == true && parent.spacenum_3 == false && parent.spacenum_4 == false && parent.spacenum_5 == false 
                && parent.spacenum_6 == false && parent.spacenum_7 == false && parent.spacenum_8 == false && parent.spacenum_9 == false && parent.spacenum_10 == false && event.keyCode == 32) {
                    // Spacebar 2
                    parent.spacenum_2 = false
                    parent.spacenum_3 = true
                    parent.animate2()
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == false && parent.spacenum_3 == true && parent.spacenum_4 == false && parent.spacenum_5 == false 
                && parent.spacenum_6 == false && parent.spacenum_7 == false && parent.spacenum_8 == false && parent.spacenum_9 == false && parent.spacenum_10 == false && event.keyCode == 32) {
                    // Spacebar 3
                    parent.spacenum_3 = false
                    parent.spacenum_4 = true
                    parent.animate3();
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == false && parent.spacenum_3 == false && parent.spacenum_4 == true && parent.spacenum_5 == false 
                && parent.spacenum_6 == false && parent.spacenum_7 == false && parent.spacenum_8 == false && parent.spacenum_9 == false && parent.spacenum_10 == false && event.keyCode == 32) {
                    // Spacebar 3
                    parent.spacenum_4 = false
                    parent.spacenum_5 = true
                    parent.animate4();
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == false && parent.spacenum_3 == false && parent.spacenum_4 == false && parent.spacenum_5 == true 
                && parent.spacenum_6 == false && parent.spacenum_7 == false && parent.spacenum_8 == false && parent.spacenum_9 == false && parent.spacenum_10 == false && event.keyCode == 32) {
                    // Spacebar 3
                    parent.spacenum_5 = false
                    parent.spacenum_6 = true
                    parent.animate5();
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == false && parent.spacenum_3 == false && parent.spacenum_4 == false && parent.spacenum_5 == false 
                && parent.spacenum_6 == true && parent.spacenum_7 == false && parent.spacenum_8 == false && parent.spacenum_9 == false && parent.spacenum_10 == false && event.keyCode == 32) {
                    // Spacebar 3
                    parent.spacenum_6 = false
                    parent.spacenum_7 = true
                    parent.animate6();
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == false && parent.spacenum_3 == false && parent.spacenum_4 == false && parent.spacenum_5 == false 
                && parent.spacenum_6 == false && parent.spacenum_7 == true && parent.spacenum_8 == false && parent.spacenum_9 == false && parent.spacenum_10 == false && event.keyCode == 32) {
                    // Spacebar 3
                    parent.spacenum_7 = false
                    parent.spacenum_8 = true
                    parent.animate7();
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == false && parent.spacenum_3 == false && parent.spacenum_4 == false && parent.spacenum_5 == false 
                && parent.spacenum_6 == false && parent.spacenum_7 == false && parent.spacenum_8 == true && parent.spacenum_9 == false && parent.spacenum_10 == false && event.keyCode == 32) {
                    // Spacebar 3
                    parent.spacenum_8 = false
                    parent.spacenum_9 = true
                    parent.animate8();
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == false && parent.spacenum_3 == false && parent.spacenum_4 == false && parent.spacenum_5 == false 
                && parent.spacenum_6 == false && parent.spacenum_7 == false && parent.spacenum_8 == false && parent.spacenum_9 == true && parent.spacenum_10 == false && event.keyCode == 32) {
                    // Spacebar 3
                    parent.spacenum_9 = false
                    parent.spacenum_10 = true
                    parent.animate9();
                } else if (parent.spacenum_1 == false && parent.spacenum_2 == false && parent.spacenum_3 == false && parent.spacenum_4 == false && parent.spacenum_5 == false 
                && parent.spacenum_6 == false && parent.spacenum_7 == false && parent.spacenum_8 == false && parent.spacenum_9 == false && parent.spacenum_10 == true && event.keyCode == 32) {
                    // Spacebar 3
                    parent.spacenum_10 = false
                    parent.spacenum_1 = true
                    parent.animate10();
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
            if (modalId != "modal-center-Machines1") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            this.block_listeners = false;
            // This prevents skipping through pages too quickly.
            setTimeout(() => this.hold = false, 1000);
            })
        },
        methods: {
            reset_animation_back() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-ExperTutor") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-Machines2")
            },

            resetAnimation() {
                this.$bvModal.hide('modal-center-Machines1')
                this.opacity_1 = "0%"
                this.opacity_2 = "0%"
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
                this.opacity_15 = "100%"
                this.opacity_16 = "0%"
                this.opacity_17 = "0%"
                this.opacity_18 = "0%"
                this.opacity_19 = "0%"
                this.opacity_20 = "0%"
                this.opacity_21 = "0%"
                this.opacity_22 = "0%"
                this.opacity_23 = "0%"
                this.opacity_24 = "100%"
                this.opacity_25 = "0%"
                this.opacity_26 = "0%"
                this.opacity_27 = "0%"
                this.opacity_28 = "0%"
                this.opacity_29 = "0%"

                this.ButtonColor = "outline-primary"
                this.SpaceColor = "outline-secondary"
                this.locked = true
                this.mutex = false
                this.finish = false
                this.hold = true
            },

            animate1() {
                let parent = this 
                setTimeout(() => {parent.opacity_15 = "0%"; parent.opacity_16 = "0%"; parent.opacity_17 = "0%"; parent.opacity_18 = "0%"; 
                parent.opacity_19 = "0%"; parent.opacity_20 = "0%"; parent.opacity_21 = "0%"; parent.opacity_22 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_15 = "0%"}, 0);
                setTimeout(() => {parent.opacity_16 = "100%"}, 0);
                setTimeout(() => {parent.opacity_11 = "0%"}, 0);
                setTimeout(() => {parent.opacity_11 = "100%"}, 3000);
                setTimeout(() => {parent.opacity_25 = "100%"}, 0);
                setTimeout(() => {parent.opacity_14 = "100%"}, 1000);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
            animate2() {
                let parent = this 
                setTimeout(() => {parent.opacity_16 = "0%"}, 0);
                setTimeout(() => {parent.opacity_17 = "100%"}, 0);
                setTimeout(() => {parent.opacity_11 = "0%"}, 0);
                setTimeout(() => {parent.opacity_11 = "100%"}, 3000);
                setTimeout(() => {parent.opacity_24 = "0%"; parent.opacity_25 = "0%"; parent.opacity_1 = "100%";}, 0);
                setTimeout(() => {parent.opacity_2 = "100%"}, 1000);
                setTimeout(() => {parent.opacity_4 = "100%"}, 2000);
                setTimeout(() => {parent.opacity_6 = "100%"}, 3000);
                setTimeout(() => {parent.opacity_14 = "0%"}, 4000);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                // This changes the button to info!
                // Actually, it used to but I've changed it back to a fainter color.
                setTimeout(() => {parent.SpaceColor = "outline-secondary";}, 2000);
            },
            animate3() {
                let parent = this 
                setTimeout(() => {parent.opacity_17 = "0%"}, 0);
                setTimeout(() => {parent.opacity_18 = "100%"}, 0);
                setTimeout(() => {parent.opacity_11 = "0%"}, 0);
                setTimeout(() => {parent.opacity_11 = "100%"}, 7000);
                setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_4 = "0%"; parent.opacity_6 = "0%";}, 0);
                setTimeout(() => {parent.opacity_3 = "100%"}, 1000); 
                setTimeout(() => {parent.opacity_3 = "0%"}, 1200);
                setTimeout(() => {parent.opacity_3 = "100%"}, 1400);
                setTimeout(() => {parent.opacity_3 = "0%"}, 1600);
                setTimeout(() => {parent.opacity_2 = "100%"}, 1800);
                setTimeout(() => {parent.opacity_2 = "0%"}, 2000);
                setTimeout(() => {parent.opacity_3 = "100%"}, 2200);
                setTimeout(() => {parent.opacity_3 = "0%"}, 2400);
                setTimeout(() => {parent.opacity_3 = "100%"}, 2600);
                setTimeout(() => {parent.opacity_3 = "0%"}, 2800);
                setTimeout(() => {parent.opacity_3 = "100%"}, 3000);
                setTimeout(() => {parent.opacity_3 = "0%"}, 3200);
                setTimeout(() => {parent.opacity_2 = "100%"}, 3400);
                setTimeout(() => {parent.opacity_2 = "0%"}, 3600);
                setTimeout(() => {parent.opacity_3 = "100%"}, 3800);
                setTimeout(() => {parent.opacity_3 = "0%"}, 4000);
                setTimeout(() => {parent.opacity_3 = "100%"}, 4200);
                setTimeout(() => {parent.opacity_3 = "0%"}, 4400);
                setTimeout(() => {parent.opacity_3 = "100%"}, 4600);
                setTimeout(() => {parent.opacity_3 = "0%"}, 4800);
                setTimeout(() => {parent.opacity_2 = "100%"}, 5000);
                setTimeout(() => {parent.opacity_2 = "0%"}, 5200);
                setTimeout(() => {parent.opacity_3 = "100%"}, 5400);
                setTimeout(() => {parent.opacity_3 = "0%"}, 5600);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
            animate4() {
                let parent = this 
                setTimeout(() => {parent.opacity_18 = "0%"}, 0);
                setTimeout(() => {parent.opacity_19 = "100%"}, 0);
                setTimeout(() => {parent.opacity_11 = "0%"}, 0);
                setTimeout(() => {parent.opacity_11 = "100%"}, 3000);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
            animate5() {
                let parent = this 
                // Options + space text vanish and program text appears
                setTimeout(() => {parent.opacity_11 = "0%"; parent.opacity_14 = "0%"; }, 0); 

                // Machine 1 
                setTimeout(() => {parent.opacity_17 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_3 = "100%"}, 0); 
                setTimeout(() => {parent.opacity_3 = "0%"}, 200);
                setTimeout(() => {parent.opacity_3 = "100%"}, 400);
                setTimeout(() => {parent.opacity_3 = "0%"}, 600);
                setTimeout(() => {parent.opacity_2 = "100%"}, 800);
                setTimeout(() => {parent.opacity_2 = "0%"}, 1000);
                setTimeout(() => {parent.opacity_3 = "100%"}, 1200);
                setTimeout(() => {parent.opacity_3 = "0%"}, 1400);
                setTimeout(() => {parent.opacity_3 = "100%"}, 1600);
                setTimeout(() => {parent.opacity_3 = "0%"}, 1800);
                setTimeout(() => {parent.opacity_3 = "100%"}, 2000);
                setTimeout(() => {parent.opacity_3 = "0%"}, 2200);
                setTimeout(() => {parent.opacity_2 = "100%"}, 2400);
                setTimeout(() => {parent.opacity_2 = "0%"}, 2600);
                setTimeout(() => {parent.opacity_3 = "100%"}, 2800);
                setTimeout(() => {parent.opacity_3 = "0%"}, 3000);
                setTimeout(() => {parent.opacity_3 = "100%"}, 3200);
                setTimeout(() => {parent.opacity_3 = "0%"}, 3400);
                setTimeout(() => {parent.opacity_3 = "100%"}, 3600);
                setTimeout(() => {parent.opacity_3 = "0%"}, 3800);
                setTimeout(() => {parent.opacity_2 = "100%"}, 4000);
                setTimeout(() => {parent.opacity_2 = "0%"}, 4200);
                setTimeout(() => {parent.opacity_3 = "100%"}, 4400);
                setTimeout(() => {parent.opacity_3 = "0%"}, 4600);
                setTimeout(() => {parent.opacity_8 = "100%"; }, 4800);
                setTimeout(() => {parent.opacity_11 = "100%"; }, 5000);
                setTimeout(() => {parent.opacity_26 = "100%"; }, 5200);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
            animate6() {
                let parent = this 
                // Machine 2 
                setTimeout(() => {parent.opacity_11 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_4 = "100%"}, 0); 
                setTimeout(() => {parent.opacity_4 = "0%"}, 200);
                setTimeout(() => {parent.opacity_5 = "100%"}, 400);
                setTimeout(() => {parent.opacity_5 = "0%"}, 600);
                setTimeout(() => {parent.opacity_4 = "100%"}, 800);
                setTimeout(() => {parent.opacity_4 = "0%"}, 1000);
                setTimeout(() => {parent.opacity_5 = "100%"}, 1200);
                setTimeout(() => {parent.opacity_5 = "0%"}, 1400);
                setTimeout(() => {parent.opacity_4 = "100%"}, 1600);
                setTimeout(() => {parent.opacity_4 = "0%"}, 1800);
                setTimeout(() => {parent.opacity_5 = "100%"}, 2000);
                setTimeout(() => {parent.opacity_5 = "0%"}, 2200);
                setTimeout(() => {parent.opacity_4 = "100%"}, 2400);
                setTimeout(() => {parent.opacity_4 = "0%"}, 2600);
                setTimeout(() => {parent.opacity_5 = "100%"}, 2800);
                setTimeout(() => {parent.opacity_5 = "0%"}, 3000);
                setTimeout(() => {parent.opacity_9 = "100%"; }, 3200);
                setTimeout(() => {parent.opacity_11 = "100%"; }, 3400);
                setTimeout(() => {parent.opacity_27 = "100%"; }, 3600);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
            animate7() {
                let parent = this 
                // Machine 3 
                setTimeout(() => {parent.opacity_11 = "0%"; }, 0);
                setTimeout(() => {parent.opacity_6 = "100%"}, 0); 
                setTimeout(() => {parent.opacity_6 = "0%"}, 200);
                setTimeout(() => {parent.opacity_6 = "100%"}, 400);
                setTimeout(() => {parent.opacity_6 = "0%"}, 600);
                setTimeout(() => {parent.opacity_6 = "100%"}, 800);
                setTimeout(() => {parent.opacity_6 = "0%"}, 1000);
                setTimeout(() => {parent.opacity_7 = "100%"}, 1200);
                setTimeout(() => {parent.opacity_7 = "0%"}, 1400);
                setTimeout(() => {parent.opacity_6 = "100%"}, 1600);
                setTimeout(() => {parent.opacity_6 = "0%"}, 1800);
                setTimeout(() => {parent.opacity_6 = "100%"}, 2000);
                setTimeout(() => {parent.opacity_6 = "0%"}, 2200);
                setTimeout(() => {parent.opacity_6 = "100%"}, 2400);
                setTimeout(() => {parent.opacity_6 = "0%"}, 2600);
                setTimeout(() => {parent.opacity_7 = "100%"}, 2800);
                setTimeout(() => {parent.opacity_7 = "0%"}, 3000);
                setTimeout(() => {parent.opacity_6 = "100%"}, 3200);
                setTimeout(() => {parent.opacity_6 = "0%"}, 3400);
                setTimeout(() => {parent.opacity_7 = "100%"}, 3600);
                setTimeout(() => {parent.opacity_7 = "0%"}, 3800);
                setTimeout(() => {parent.opacity_6 = "100%"}, 4000);
                setTimeout(() => {parent.opacity_6 = "0%"}, 4200);
                setTimeout(() => {parent.opacity_6 = "100%"}, 4400);
                setTimeout(() => {parent.opacity_6 = "0%"}, 4600);
                setTimeout(() => {parent.opacity_6 = "100%"}, 4800);
                setTimeout(() => {parent.opacity_6 = "0%"}, 5000);
                setTimeout(() => {parent.opacity_6 = "100%"}, 5200);
                setTimeout(() => {parent.opacity_6 = "0%"}, 5400);
                setTimeout(() => {parent.opacity_6 = "100%"}, 5600);
                setTimeout(() => {parent.opacity_6 = "0%"}, 5800);
                setTimeout(() => {parent.opacity_7 = "100%"}, 6000);
                setTimeout(() => {parent.opacity_7 = "0%"}, 6200);
                setTimeout(() => {parent.opacity_10 = "100%"; }, 6400);
                setTimeout(() => {parent.opacity_11 = "0%"}, 0);
                setTimeout(() => {parent.opacity_11 = "100%"}, 6600);
                setTimeout(() => {parent.opacity_28 = "100%"; }, 6800);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
            animate8() {
                let parent = this 
                setTimeout(() => {parent.opacity_19 = "0%"}, 0);
                setTimeout(() => {parent.opacity_20 = "100%"}, 0);
                setTimeout(() => {parent.opacity_11 = "0%"}, 0);
                setTimeout(() => {parent.opacity_11 = "100%"}, 3000);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
            animate9() {
                let parent = this 
                setTimeout(() => {parent.opacity_20 = "0%"}, 0);
                setTimeout(() => {parent.opacity_21 = "100%"}, 0);
                setTimeout(() => {parent.opacity_11 = "0%"}, 0);
                setTimeout(() => {parent.opacity_11 = "100%"}, 3000);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
            animate10() {
                let parent = this 
                setTimeout(() => {parent.opacity_21 = "0%"}, 0);
                setTimeout(() => {parent.opacity_22 = "100%"}, 0);
                setTimeout(() => {parent.opacity_11 = "0%"}, 0);
                
                // This changes the button to green!
                setTimeout(() => {parent.ButtonColor = "success";}, 3000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 3500);
                setTimeout(() => {parent.ButtonColor = "success";}, 4000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 8500);
                setTimeout(() => {parent.ButtonColor = "success";}, 9000);

                //Disables BACK NEXT buttons until animation finishes at 2 seconds.
                setTimeout(() => {parent.finish = false}, 2000);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
        },
    }
</script>

<style scoped>
</style>