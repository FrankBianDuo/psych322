<template>
    <b-modal 
      id="modal-center-Basics01" 
      size="xl"
      centered title="Instruction Page 1 of 14"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              
               <!-- Major Text -->
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/mspeak01a.png')" v-bind:style="{ opacity: this.opacity_mspeak01a, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/mspeak01b.png')" v-bind:style="{ opacity: this.opacity_mspeak01b, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/mspeak01c.png')" v-bind:style="{ opacity: this.opacity_mspeak01c, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/mspeak01d.png')" v-bind:style="{ opacity: this.opacity_mspeak01d, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/mpress01a.png')" v-bind:style="{ opacity: this.opacity_mpress01a, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/mresp01a.png')" v-bind:style="{ opacity: this.opacity_mresp01a, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/mresp01b.png')" v-bind:style="{ opacity: this.opacity_mresp01b, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               
               <!-- Minor Text -->
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/thismeet1.png')" v-bind:style="{ opacity: this.opacity_thismeet1, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/thismeet2.png')" v-bind:style="{ opacity: this.opacity_thismeet2, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/thisyou.png')" v-bind:style="{ opacity: this.opacity_thisyou, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/thispredup.png')" v-bind:style="{ opacity: this.opacity_thispredup, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/thispreddn.png')" v-bind:style="{ opacity: this.opacity_thispreddn, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/thisselectup.png')" v-bind:style="{ opacity: this.opacity_thisselectup, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/thisselectdn.png')" v-bind:style="{ opacity: this.opacity_thisselectdn, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Machine Speak/count12.04.png')" v-bind:style="{ opacity: this.opacity_count0103, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               
               <!-- Initial Machines -->
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeMeet1a.png')" v-bind:style="{ opacity: this.opacity_ThreeMeet1a, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeMeet1b.png')" v-bind:style="{ opacity: this.opacity_ThreeMeet1b, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeMeet1c.png')" v-bind:style="{ opacity: this.opacity_ThreeMeet1c, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ch1c.png')" v-bind:style="{ opacity: this.opacity_ch1c, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ch2c.png')" v-bind:style="{ opacity: this.opacity_ch2c, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ch3c.png')" v-bind:style="{ opacity: this.opacity_ch3c, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ch4c.png')" v-bind:style="{ opacity: this.opacity_ch4c, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ch5c.png')" v-bind:style="{ opacity: this.opacity_ch5c, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/MeetMachines/ch6c.png')" v-bind:style="{ opacity: this.opacity_ch6c, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               
               <!-- Dots -->
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspup1.png')" v-bind:style="{ opacity: this.opacity_dotsup1, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspup3.png')" v-bind:style="{ opacity: this.opacity_dotsup3, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspup5.png')" v-bind:style="{ opacity: this.opacity_dotsup5, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspdn1.png')" v-bind:style="{ opacity: this.opacity_dotsdn1, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspdn3.png')" v-bind:style="{ opacity: this.opacity_dotsdn3, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspdn5.png')" v-bind:style="{ opacity: this.opacity_dotsdn5, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspsafe2.png')" v-bind:style="{ opacity: this.opacity_dotssafe2, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspsafe3.png')" v-bind:style="{ opacity: this.opacity_dotssafe3, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Dots/dotspsafe4.png')" v-bind:style="{ opacity: this.opacity_dotssafe4, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>

               <!-- Background -->
               <img :src="require('../../assets/Instructions/Machines/box1.png')" v-bind:style="{ opacity: this.opacity_box1, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/box2.png')" v-bind:style="{ opacity: this.opacity_box2, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/you1.png')" v-bind:style="{ opacity: this.opacity_you1, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/you2.png')" v-bind:style="{ opacity: this.opacity_you2, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/arms1.png')" v-bind:style="{ opacity: this.opacity_arms1, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/arms2.png')" v-bind:style="{ opacity: this.opacity_arms2, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/options1.png')" v-bind:style="{ opacity: this.opacity_options1, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/options2.png')" v-bind:style="{ opacity: this.opacity_options2, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/az.png')" v-bind:style="{ opacity: this.opacity_az, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/jk.png')" v-bind:style="{ opacity: this.opacity_jk, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/pred1.png')" v-bind:style="{ opacity: this.opacity_pred1, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/pred2.png')" v-bind:style="{ opacity: this.opacity_pred2, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/controlgive.png')" v-bind:style="{ opacity: this.opacity_controlgive, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/controlkeep.png')" v-bind:style="{ opacity: this.opacity_controlkeep, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/mchoice1.png')" v-bind:style="{ opacity: this.opacity_mchoice1, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/mchoice2.png')" v-bind:style="{ opacity: this.opacity_mchoice2, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/mchoice3.png')" v-bind:style="{ opacity: this.opacity_mchoice3, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/mchoice4.png')" v-bind:style="{ opacity: this.opacity_mchoice4, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Bodies/machine01a.png')" v-bind:style="{ opacity: this.opacity_machine01a, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
               <img :src="require('../../assets/Instructions/Machines/Bodies/machine01b.png')" v-bind:style="{ opacity: this.opacity_machine01b, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"/>
            </div>

            <div>
                <b-button :variant="sbc" size='lg' v-bind:style="{ height: 'auto', marginTop: '52.75%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_presskey, transition: 'opacity 0.5s'}" >Press {{press}}.</b-button>
            </div>

      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="hold" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" :variant="nbc" :disabled="finish || hold" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Basics01',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "13",
                skey: false,
                block_listeners: true,
                sbc: "primary",
                nbc: "outline-primary",
                press: "space bar",
                keyflow1: false,
                keyflow2: false,
                keyflow3: false,
                keyflow4: false,
                keyflow5: false,
                keyflowAZ: false,
                keyflowJK: false,

                opacity_presskey: '0%',
                opacity_machine01a: '0%',
                opacity_machine01b: '0%',
                opacity_box1: '0%',
                opacity_box2: '0%',
                opacity_you1: '0%',
                opacity_you2: '0%',
                opacity_arms1: '0%',
                opacity_arms2: '0%',
                opacity_options1: '0%',
                opacity_options2: '0%',
                opacity_az: '0%',
                opacity_jk: '0%',
                opacity_pred1: '0%',
                opacity_pred2: '0%',
                opacity_controlgive: '0%',
                opacity_controlkeep: '0%',
                opacity_mchoice1: '0%',
                opacity_mchoice2: '0%',
                opacity_mchoice3: '0%',
                opacity_mchoice4: '0%',

                opacity_dotsup1: '0%',
                opacity_dotsup3: '0%',
                opacity_dotsup5: '0%',
                opacity_dotsdn1: '0%',
                opacity_dotsdn3: '0%',
                opacity_dotsdn5: '0%',
                opacity_dotssafe2: '0%',
                opacity_dotssafe3: '0%',
                opacity_dotssafe4: '0%',
              
                opacity_ThreeMeet1a: '100%',
                opacity_ThreeMeet1b: '0%',
                opacity_ThreeMeet1c: '0%',
                opacity_ch1c: '0%',
                opacity_ch2c: '0%',
                opacity_ch3c: '0%',
                opacity_ch4c: '0%',
                opacity_ch5c: '0%',
                opacity_ch6c: '0%',
               
                opacity_mspeak01a: '0%',
                opacity_mspeak01b: '0%',
                opacity_mspeak01c: '0%',
                opacity_mspeak01d: '0%',
                opacity_mpress01a: '0%',
                opacity_mresp01a: '0%',
                opacity_mresp01b: '0%',
                opacity_thismeet1: '0%',
                opacity_thismeet2: '0%',
                opacity_thisyou: '0%',
                opacity_thispredup: '0%',
                opacity_thispreddn: '0%',
                opacity_thisselectup: '0%',
                opacity_thisselectdn: '0%',
                opacity_count0103: '0%',
                
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
                    parent.keyflow1 = false
                    parent.animate1()
                } else if (parent.keyflow2 == true && event.keyCode == 32) {
                    // Spacebar 2
                    parent.keyflow2 = false
                    parent.animate2()
                } else if (parent.keyflow3 == true && event.keyCode == 32) {
                    // Spacebar 2
                    parent.keyflow3 = false
                    parent.animate3()
                } else if (parent.keyflow4 == true && event.keyCode == 32) {
                    // Spacebar 2
                    parent.keyflow4 = false
                    parent.animate4()
                } else if (parent.keyflow5 == true && event.keyCode == 32) {
                    // Spacebar 2
                    parent.keyflow4 = false
                    parent.animate5()
                } else if (parent.keyflowAZ == true && event.keyCode == 65) {
                    // Predict A
                    parent.keyflowAZ = false
                    parent.animateA()
                } else if (parent.keyflowAZ == true && event.keyCode == 90) {
                    // Predict Z
                    parent.keyflowAZ = false
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
            // console.log('Modal is about to be shown', bvEvent, modalId)
            if (modalId != "modal-center-Basics01") {
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
                this.$bvModal.show("modal-center-ExperTutor") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-Basics02")
            },
            resetAnimation() {
                this.$bvModal.hide('modal-center-Basics01')

                this.opacity_presskey = "0%"
                this.opacity_machine01a = "0%"
                this.opacity_machine01b = "0%"
                this.opacity_box1 = "0%"
                this.opacity_box2 = "0%"
                this.opacity_you1 = "0%"
                this.opacity_you2 = "0%"
                this.opacity_arms1 = "0%"
                this.opacity_arms2 = "0%"
                this.opacity_options1 = "0%"
                this.opacity_options2 = "0%"
                this.opacity_az = "0%"
                this.opacity_jk = "0%"
                this.opacity_pred1 = "0%"
                this.opacity_pred2 = "0%"
                this.opacity_controlgive = "0%"
                this.opacity_controlkeep = "0%"
                this.opacity_mchoice1 = "0%"
                this.opacity_mchoice2 = "0%"
                this.opacity_mchoice3 = "0%"
                this.opacity_mchoice4 = "0%"

                this.opacity_dotsup1 = "0%"
                this.opacity_dotsup3 = "0%"
                this.opacity_dotsup5 = "0%"
                this.opacity_dotsdn1 = "0%"
                this.opacity_dotsdn3 = "0%"
                this.opacity_dotsdn5 = "0%"
                this.opacity_dotssafe2 = "0%"
                this.opacity_dotssafe3 = "0%"
                this.opacity_dotssafe4 = "0%"
              
                this.opacity_ThreeMeet1a = "100%"
                this.opacity_ThreeMeet1b = "0%"
                this.opacity_ThreeMeet1c = "0%"
                this.opacity_ch1c = "0%"
                this.opacity_ch2c = "0%"
                this.opacity_ch3c = "0%"
                this.opacity_ch4c = "0%"
                this.opacity_ch5c = "0%"
                this.opacity_ch6c = "0%"
               
                this.opacity_mspeak01a = "0%"
                this.opacity_mspeak01b = "0%"
                this.opacity_mspeak01c = "0%"
                this.opacity_mspeak01d = "0%"
                this.opacity_mpress01a = "0%"
                this.opacity_mresp01a = "0%"
                this.opacity_mresp01b = "0%"
                this.opacity_thismeet1 = "0%"
                this.opacity_thismeet2 = "0%"
                this.opacity_thisyou = "0%"
                this.opacity_thispredup = "0%"
                this.opacity_thispreddn = "0%"
                this.opacity_thisselectup = "0%"
                this.opacity_thisselectdn = "0%"
                this.opacity_count0103 = "0%"

                this.keyflow1 = false
                this.keyflow2 = false
                this.keyflow3 = false
                this.keyflow4 = false
                this.keyflow5 = false
                this.keyflowAZ = false
                this.keyflowJK = false
                this.skey = false

                this.nbc = "outline-primary"
                this.sbc = "outline-secondary"
                this.press = "space bar"
                this.mutex = false
                this.finish = false
                this.hold = true
            },
            animate0() {
                let parent = this 
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // Press Space Bar. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_presskey = "0%"; }, 0);
                setTimeout(() => {this.keyflow1 = true; this.press = "space bar"; parent.opacity_presskey = "100%"; }, 1000);
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 1500);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_presskey = "100%"; }, 2000); 
            },
            animate1() {
                let parent = this 
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // Machine Rotation 
                setTimeout(() => {parent.opacity_ThreeMeet1a = "100%"; parent.opacity_ThreeMeet1b = "0%"; parent.opacity_ch3c = "0%"}, 0);
                setTimeout(() => {parent.opacity_ch1c = "100%"}, 1000);
                
                // Text swap
                setTimeout(() => {parent.opacity_mspeak01a = "100%"}, 1500);
                setTimeout(() => {parent.opacity_mspeak01b = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01c = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01d = "0%"}, 0);
                setTimeout(() => {parent.opacity_mpress01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mresp01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mresp01b = "0%"}, 0);
                setTimeout(() => {parent.opacity_thismeet1 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thismeet2 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispredup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispreddn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectdn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisyou = "0%"}, 0);
                setTimeout(() => {parent.opacity_count0103 = "0%"}, 0);

                // Press Space Bar. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_presskey = "0%"; }, 0);
                setTimeout(() => {this.keyflow2 = true; this.press = "space bar"; parent.opacity_presskey = "100%"; }, 3000);
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 3500);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_presskey = "100%"; }, 4000); 
            },
            animate2() {
                let parent = this 
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // Machine Rotation 
                setTimeout(() => {parent.opacity_ThreeMeet1b = "100%"; parent.opacity_ThreeMeet1a = "0%"; parent.opacity_ch1c = "0%"}, 0);
                setTimeout(() => {parent.opacity_ch4c = "100%"}, 1000);

                // Text swap
                setTimeout(() => {parent.opacity_mspeak01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01b = "100%"}, 1500);
                setTimeout(() => {parent.opacity_mspeak01c = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01d = "0%"}, 0);
                setTimeout(() => {parent.opacity_mpress01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mresp01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mresp01b = "0%"}, 0);
                setTimeout(() => {parent.opacity_thismeet1 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thismeet2 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispredup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispreddn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectdn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisyou = "0%"}, 0);
                setTimeout(() => {parent.opacity_count0103 = "0%"}, 0);

                // Press Space Bar. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_presskey = "0%"; }, 0);
                setTimeout(() => {this.keyflow3 = true; this.press = "space bar"; parent.opacity_presskey = "100%"; }, 3000);
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 3500);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_presskey = "100%"; }, 4000); 
            },
            animate3() {
                let parent = this 
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // Machine Rotation 
                setTimeout(() => {parent.opacity_ThreeMeet1c = "100%"; parent.opacity_ThreeMeet1b = "0%"; parent.opacity_ch4c = "0%"}, 0);
                setTimeout(() => {parent.opacity_ch5c = "100%"}, 1000);

                // Text swap
                setTimeout(() => {parent.opacity_mspeak01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01b = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01c = "100%"}, 1500);
                setTimeout(() => {parent.opacity_mspeak01d = "0%"}, 0);
                setTimeout(() => {parent.opacity_mpress01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mresp01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mresp01b = "0%"}, 0);
                setTimeout(() => {parent.opacity_thismeet1 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thismeet2 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispredup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispreddn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectdn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisyou = "0%"}, 0);
                setTimeout(() => {parent.opacity_count0103 = "0%"}, 0);

                // Press Space Bar. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_presskey = "0%"; }, 0);
                setTimeout(() => {this.keyflow4 = true; this.press = "space bar"; parent.opacity_presskey = "100%"; }, 3000);
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 3500);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_presskey = "100%"; }, 4000); 
            },
            animate4() {
                let parent = this 
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 0);
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 2000);

                // Machine Rotation 
                setTimeout(() => {parent.opacity_ThreeMeet1a = "0%"; parent.opacity_ThreeMeet1b = "0%"; parent.opacity_ThreeMeet1c = "0%"}, 0);
                setTimeout(() => {parent.opacity_ch1c = "0%"; parent.opacity_ch4c = "0%"; parent.opacity_ch5c = "0%"; }, 0);

                // Introducing the Meetings 
                setTimeout(() => {parent.opacity_box1 = "100%"}, 500);
                setTimeout(() => {parent.opacity_box2 = "100%"}, 2500);
                setTimeout(() => {parent.opacity_thismeet1 = "100%"}, 1000);
                setTimeout(() => {parent.opacity_thismeet2 = "100%"}, 3000);
                setTimeout(() => {parent.opacity_machine01a = "100%"}, 4000);
                setTimeout(() => {parent.opacity_arms1 = "100%"}, 4000);
                setTimeout(() => {parent.opacity_options1 = "100%"}, 4000);
                setTimeout(() => {parent.opacity_you1 = "100%"}, 5000);
                setTimeout(() => {parent.opacity_thisyou = "100%"}, 5500);

                // Text swap
                setTimeout(() => {parent.opacity_mspeak01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01b = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01c = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01d = "0%"}, 0);
                setTimeout(() => {parent.opacity_mpress01a = "100%"}, 6500);
                setTimeout(() => {parent.opacity_mresp01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mresp01b = "0%"}, 0);
                setTimeout(() => {parent.opacity_thismeet1 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thismeet2 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispredup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispreddn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectdn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisyou = "0%"}, 0);
                setTimeout(() => {parent.opacity_count0103 = "0%"}, 0);

                // Press Space Bar. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_presskey = "0%"; }, 0);
                setTimeout(() => {this.keyflow5 = true; this.press = "space bar"; parent.opacity_presskey = "100%"; }, 7000);
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 7500);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_presskey = "100%"; }, 8000); 
            },
            animate5() {
                let parent = this 
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 

                // Machine Rotation 
                setTimeout(() => {parent.opacity_ThreeMeet1c = "0%"}, 0);
                setTimeout(() => {parent.opacity_ch5c = "0%"}, 0);

                // Meeting 1 Flashing Prior Selections 
                setTimeout(() => {parent.opacity_mchoice2 = "100%"}, 1000); 
                setTimeout(() => {parent.opacity_mchoice2 = "0%"}, 1100);
                setTimeout(() => {parent.opacity_mchoice1 = "100%"}, 1200);
                setTimeout(() => {parent.opacity_mchoice1 = "0%"}, 1300);
                setTimeout(() => {parent.opacity_mchoice1 = "100%"}, 1400);
                setTimeout(() => {parent.opacity_mchoice1 = "0%"}, 1500);
                setTimeout(() => {parent.opacity_mchoice1 = "100%"}, 1600);
                setTimeout(() => {parent.opacity_mchoice1 = "0%"}, 1700);
                setTimeout(() => {parent.opacity_mchoice1 = "100%"}, 1800);
                setTimeout(() => {parent.opacity_mchoice1 = "0%"}, 1900);
                setTimeout(() => {parent.opacity_mchoice2 = "100%"}, 2000);
                setTimeout(() => {parent.opacity_mchoice2 = "0%"}, 2100);
                setTimeout(() => {parent.opacity_mchoice1 = "100%"}, 2200);
                setTimeout(() => {parent.opacity_mchoice1 = "0%"}, 2300);
                setTimeout(() => {parent.opacity_mchoice1 = "100%"}, 2400);
                setTimeout(() => {parent.opacity_mchoice1 = "0%"}, 2500);
                setTimeout(() => {parent.opacity_mchoice1 = "100%"}, 2600);
                setTimeout(() => {parent.opacity_mchoice1 = "0%"}, 2700);
                setTimeout(() => {parent.opacity_mchoice1 = "100%"}, 2800);
                setTimeout(() => {parent.opacity_mchoice1 = "0%"}, 2900);
                setTimeout(() => {parent.opacity_mchoice2 = "100%"}, 3000);
                setTimeout(() => {parent.opacity_mchoice2 = "0%"}, 3100);
                setTimeout(() => {parent.opacity_mchoice1 = "100%"}, 3200);
                setTimeout(() => {parent.opacity_mchoice1 = "0%"}, 3300);
                setTimeout(() => {parent.opacity_mchoice1 = "100%"}, 3400);
                setTimeout(() => {parent.opacity_mchoice1 = "0%"}, 3500);
                setTimeout(() => {parent.opacity_mchoice2 = "100%"}, 3600);
                setTimeout(() => {parent.opacity_mchoice2 = "0%"}, 3700);
                setTimeout(() => {parent.opacity_mchoice1 = "100%"}, 3800);
                setTimeout(() => {parent.opacity_mchoice1 = "0%"}, 3900);
                setTimeout(() => {parent.opacity_mchoice1 = "100%"}, 4000);
                setTimeout(() => {parent.opacity_mchoice1 = "0%"}, 4100);
                setTimeout(() => {parent.opacity_count0103 = "100%"}, 4300);

                // Introducing the Meetings 
                setTimeout(() => {parent.opacity_thisyou = "0%"}, 4800);
                setTimeout(() => {parent.opacity_machine01b = "100%"}, 4800);
                setTimeout(() => {parent.opacity_options2 = "100%"}, 4800);
                setTimeout(() => {parent.opacity_arms2 = "100%"}, 4800);
                setTimeout(() => {parent.opacity_you2 = "100%"}, 4800);

                // Text swap
                setTimeout(() => {parent.opacity_mspeak01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01b = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01c = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01d = "100%"}, 5500);
                setTimeout(() => {parent.opacity_mpress01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mresp01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mresp01b = "0%"}, 0);
                setTimeout(() => {parent.opacity_thismeet1 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thismeet2 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispredup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispreddn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectdn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisyou = "0%"}, 0);
                setTimeout(() => {parent.opacity_count0103 = "0%"}, 0);

                // Press A or Z. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_presskey = "0%"; }, 0);
                setTimeout(() => {this.keyflowAZ = true; this.press = "A or Z"; parent.opacity_az = "100%"; parent.opacity_presskey = "100%"; }, 10000);
                setTimeout(() => {parent.opacity_az = "0%"; parent.opacity_presskey = "0%"; }, 10500);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_az = "100%"; parent.opacity_presskey = "100%"; }, 11000);
            },
            animateA() {
                let parent = this 
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 0);
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 1500);
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 3000);

                // Prediction Feedback Up 
                setTimeout(() => {parent.opacity_az = "0%"}, 0);
                setTimeout(() => {parent.opacity_pred1 = "100%"; parent.opacity_pred2 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispredup = "100%"; parent.opacity_thispreddn = "0%"}, 500);
                setTimeout(() => {parent.opacity_mchoice3 = "100%"}, 1500);
                setTimeout(() => {parent.opacity_thisselectup = "100%"}, 2000);

                // Text swap
                setTimeout(() => {parent.opacity_mspeak01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01b = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01c = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01d = "0%"}, 0);
                setTimeout(() => {parent.opacity_mpress01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mresp01a = "100%"}, 3500);
                setTimeout(() => {parent.opacity_mresp01b = "0%"}, 0);
                setTimeout(() => {parent.opacity_thismeet1 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thismeet2 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispredup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispreddn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectdn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisyou = "0%"}, 0);
                setTimeout(() => {parent.opacity_count0103 = "0%"}, 0);

                // This changes the button to green!
                setTimeout(() => {parent.finish = false; parent.nbc = "success"}, 6000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 6500);
                setTimeout(() => {parent.nbc = "success";}, 7000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 8500);
                setTimeout(() => {parent.nbc = "success";}, 9000);
            },
            animateZ() {
                let parent = this 
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 0);
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 1500);
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 3000);

                // Prediction Feedback Up 
                setTimeout(() => {parent.opacity_az = "0%"}, 0);
                setTimeout(() => {parent.opacity_pred1 = "0%"; parent.opacity_pred2 = "100%"}, 0);
                setTimeout(() => {parent.opacity_thispredup = "0%"; parent.opacity_thispreddn = "100%"}, 500);
                setTimeout(() => {parent.opacity_mchoice3 = "100%"}, 1500);
                setTimeout(() => {parent.opacity_thisselectup = "100%"}, 2000);

                // Text swap
                setTimeout(() => {parent.opacity_mspeak01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01b = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01c = "0%"}, 0);
                setTimeout(() => {parent.opacity_mspeak01d = "0%"}, 0);
                setTimeout(() => {parent.opacity_mpress01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mresp01a = "0%"}, 0);
                setTimeout(() => {parent.opacity_mresp01b = "100%"}, 3500);
                setTimeout(() => {parent.opacity_thismeet1 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thismeet2 = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispredup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thispreddn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectup = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisselectdn = "0%"}, 0);
                setTimeout(() => {parent.opacity_thisyou = "0%"}, 0);
                setTimeout(() => {parent.opacity_count0103 = "0%"}, 0);

                // This changes the button to green!
                setTimeout(() => {parent.finish = false; parent.nbc = "success"}, 6000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 6500);
                setTimeout(() => {parent.nbc = "success";}, 7000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 8500);
                setTimeout(() => {parent.nbc = "success";}, 9000);
            },
        },
    }
</script>

<style scoped>
</style>