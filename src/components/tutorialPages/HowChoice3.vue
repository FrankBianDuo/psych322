<template>
    <b-modal 
      id="modal-center-HowChoice3" 
      size="xl"
      centered title="Instruction Page 18 of 23"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              <img :src="require('../../assets/Instructions/HowChoice/hc 04.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc avatar 3.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc small choice.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc dots b3.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc dots b5.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc small choice up.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.0s' }"/>
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="hold" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" :variant="ButtonColor" :disabled="finish || hold" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'HowChoice3',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "13",
                opacity_1: '100%',
                opacity_2: '100%',
                opacity_3: '100%',
                opacity_4: '100%',
                opacity_5: '100%',
                opacity_6: '0%',
                mutex: false,
                finish: true,
                hold: true,
                ButtonColor: "outline-primary",
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
            // console.log('Modal is about to be shown', bvEvent, modalId)
            if (modalId != "modal-center-HowChoice3") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            setTimeout(() => this.animate(), 250); 
            // This prevents skipping through pages too quickly.
            setTimeout(() => this.hold = false, 1000);
            })
        },
        methods: {
            reset_animation_back() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-HowChoice2") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-HowChoice4")
            },

            resetAnimation() {
                this.$bvModal.hide('modal-center-HowChoice3')
                this.opacity_1 = "100%"
                this.opacity_2 = "100%"
                this.opacity_3 = "100%"
                this.opacity_4 = "100%"
                this.opacity_5 = "100%"
                this.opacity_6 = "0%"
                this.mutex = false
                this.finish = false
                this.hold = true
                this.ButtonColor = "outline-primary"
            },
            animate() {
                let parent = this
                setTimeout(() => {parent.opacity_6 = "100%"}, 1800);   
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                // Disables BACK NEXT buttons until animation finishes at 1 seconds.
                setTimeout(() => {parent.finish = false}, 3000);

                // This changes the button to green!
                setTimeout(() => {parent.ButtonColor = "success";}, 5000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 5500);
                setTimeout(() => {parent.ButtonColor = "success";}, 6000);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 9500);
                setTimeout(() => {parent.ButtonColor = "success";}, 10000);
            },
        },
    }
</script>


<style scoped>
</style>