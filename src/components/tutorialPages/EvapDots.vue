<template>
    <b-modal 
      id="modal-center-EvapDots" 
      size="xl"
      centered title="Instruction page 7"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              <img :src="require('../../assets/Instructions/Evaporating Dots/Evap Dots Main 01.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Evaporating Dots/Evap Dots Main 02.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.15s' }"/>
               <img :src="require('../../assets/Instructions/Evaporating Dots/Evap Dots Main 03.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 4.0s' }"/>
               <img :src="require('../../assets/Instructions/Evaporating Dots/Evap Dots Main 04.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Evaporating Dots/Evap Dots Main 05.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.2s' }"/>
               <img :src="require('../../assets/Instructions/Evaporating Dots/Evap Dots Main 06.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.2s' }"/>
            </div>
              
      </b-container>
        <!-- <b-button @click="$bvModal.hide(`modal-center-EvapDots`)" v-b-modal.modal-center-NoSharing variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="$bvModal.hide(`modal-center-EvapDots`)" v-b-modal.modal-center-ActPass style="float: right;" variant="outline-primary" size="lg">Next</b-button> -->
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="finishanimate" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" :disabled="finishanimate" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'EvapDots',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "7",
                opacity_1: '100%',
                opacity_2: '0%',
                opacity_3: '100%',
                opacity_4: '0%',
                opacity_5: '0%',
                opacity_6: '0%',
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
            // console.log('Modal is about to be shown', bvEvent, modalId)
            if (modalId != "modal-center-EvapDots") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            setTimeout(() => this.animate(), 500); //2800 IN PRODUCTION
            })
        },
        methods: {
            reset_animation_back() {
                //this.$bvModal.hide("modal-center-instruction" + this.page_num)  // this.$bvModal.hide(this current page)
                this.resetAnimation()
                this.$bvModal.show("modal-center-ActPass") //this.$bvModal.show(previous page)
            },
            reset_animation_next() {
                //this.$bvModal.hide("modal-center-instruction" + this.page_num)
                this.resetAnimation()
                this.$bvModal.show("modal-center-TF110")
            },
            resetAnimation() {
                this.$bvModal.hide('modal-center-EvapDots')
                this.opacity_1 = "100%"
                this.opacity_2 = "0%"
                this.opacity_3 = "100%"
                this.opacity_4 = "0%"
                this.opacity_5 = "0%"
                this.opacity_6 = "0%"
                this.locked = true
                this.mutex = false
                this.finishanimate = false
            },
            animate() {
                let parent = this
                setTimeout(() => {parent.opacity_2 = "100%" }, 500); //2800 IN PRODUCTION
                setTimeout(() => {parent.opacity_3 = "0%"; }, 500); //2800 IN PRODUCTION
                setTimeout(() => {parent.opacity_4 = "100%"; }, 1000);
                setTimeout(() => {parent.opacity_5 = "100%"; }, 1500);
                setTimeout(() => {parent.opacity_6 = "100%"; }, 2000);
                setTimeout(() => parent.mutex = false, 3600); //2800 IN PRODUCTION
                setTimeout(() => parent.locked = false, 3600); //2800 IN PRODUCTION
                // Disables BACK NEXT buttons until animation finishes at 3 seconds.
                // The animation ends at 4.5 secons so we will see if this creates issues. 
                setTimeout(() => {parent.finishanimate = false}, 3000);
            },
        },
    }
</script>

<style scoped>
</style>