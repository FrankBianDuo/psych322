<template>
    <b-modal 
      id="modal-center-MeetPeople" 
      size="xl"
      centered title="Instruction page 6 of 14"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
               <img :src="require('../../assets/Instructions/Ref Dependence/Cast of Characters 1.png')" v-bind:style="{ maxWidth: '78%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 5.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/Cast of Characters 2.png')" v-bind:style="{ maxWidth: '78%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 5.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/Cast of Characters 3.png')" v-bind:style="{ maxWidth: '78%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/Cast of Characters 4.png')" v-bind:style="{ maxWidth: '78%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.5s' }"/>
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
        name: 'MeetPeople',
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
                keyflowAZ: false,
                keyflowJK: false,
                opacity_presskey: '0%',
                opacity_1: '0%',
                opacity_2: '100%',
                opacity_3: '100%',
                opacity_4: '0%',
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
            if (modalId != "modal-center-MeetPeople") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            this.block_listeners = false;
            setTimeout(() => this.animate0(), 0); 
            setTimeout(() => this.hold = false, 1000);
            })
        },
        methods: {
            reset_animation_back() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-Basics05") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-WantMoreDots")
            },

            resetAnimation() {
                this.$bvModal.hide('modal-center-MeetPeople')
                this.nbc = "outline-primary"
                this.sbc = "outline-secondary"
                this.opacity_presskey = "0%"
                this.opacity_1 = "0%"
                this.opacity_2 = "100%"
                this.opacity_3 = "100%"
                this.opacity_4 = "0%"
                this.keyflow1 = false
                this.locked = true
                this.mutex = false
                this.finish = false
                this.hold = true
                
            },
            animate0() {
                let parent = this
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                setTimeout(() => {parent.opacity_2 = "0%"}, 2000); 
                setTimeout(() => {parent.opacity_1 = "100%"}, 3500); 

                // Press Space Bar. 
                setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_presskey = "0%"; }, 0);
                setTimeout(() => {this.keyflow1 = true; this.press = "space bar"; parent.opacity_presskey = "100%"; }, 7000);
                setTimeout(() => {parent.opacity_presskey = "0%"; }, 7500);
                setTimeout(() => {this.sbc = "primary"; parent.opacity_presskey = "100%"; }, 8000); 
            },
            animate1() {
                let parent = this 
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                setTimeout(() => {parent.opacity_presskey = "0%"}, 0);  

                setTimeout(() => {parent.opacity_3 = "0%"}, 0); 
                setTimeout(() => {parent.opacity_4 = "100%"}, 800); 

                // This changes the button to green!
                setTimeout(() => {parent.finish = false; parent.nbc = "success"}, 7000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 7500);
                setTimeout(() => {parent.nbc = "success";}, 8000);
                setTimeout(() => {parent.nbc = "outline-primary";}, 10500);
                setTimeout(() => {parent.nbc = "success";}, 11000);

            },
        },
    }
</script>


<style scoped>
</style>