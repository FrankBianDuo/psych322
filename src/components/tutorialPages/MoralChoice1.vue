<template>
    <b-modal 
      id="modal-center-MoralChoice1" 
      size="xl"
      centered title="Page x"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              <img :src="require('../../assets/Instructions/Moral Choice/Moral Choice 01.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Moral Choice/Moral Choice 02.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Moral Choice/Moral Choice 03.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Moral Choice/Moral Choice 04.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Moral Choice/Moral Choice 05.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Moral Choice/mcd dnlf 5a.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Moral Choice/mcd dnlf 5b.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Moral Choice/mcd dnrt 1a.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Moral Choice/mcd dnrt 1b.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Moral Choice/mcd uplf 3a.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Moral Choice/mcd uplf 3b.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Moral Choice/mcd uprt 5a.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Moral Choice/mcd uprt 5b.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.0s' }"/>
            </div>
              
      </b-container>
        <b-button @click="$bvModal.hide(`modal-center-MoralChoice1`)" v-b-modal.modal-center-PredPract2 variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="$bvModal.hide(`modal-center-MoralChoice1`)" v-b-modal.modal-center-MoralChoice2 style="float: right;" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'MoralChoice1',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "13",
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
                mutex: false,
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
            if (modalId != "modal-center-MoralChoice1") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            setTimeout(() => this.animate(), 1000); //2800 IN PRODUCTION
            })
        },
        methods: {
            resetAnimation() {
                this.$bvModal.hide('modal-center-MoralChoice1')
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
                this.locked = true
                this.mutex = false
            },
            animate() {
                let parent = this
                // Backgrounds appear and disappear
                setTimeout(() => {parent.opacity_1 = "0%"; parent.opacity_2 = "100%"; }, 1000);
                setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_3 = "100%"; }, 5000);
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_4 = "100%"; }, 9000);
                setTimeout(() => {parent.opacity_4 = "0%"; parent.opacity_5 = "100%"; }, 15000);
                // Dots for within self comparison 
                setTimeout(() => {parent.opacity_6 = "100%"; parent.opacity_10 = "100%"; }, 2500);
                setTimeout(() => {parent.opacity_7 = "100%"; parent.opacity_11 = "0%"; }, 3000);
                setTimeout(() => {parent.opacity_7 = "0%"; parent.opacity_11 = "100%"; }, 3200);
                setTimeout(() => {parent.opacity_7 = "100%"; parent.opacity_11 = "0%"; }, 3400);
                setTimeout(() => {parent.opacity_7 = "0%"; parent.opacity_11 = "100%"; }, 3600);
                setTimeout(() => {parent.opacity_7 = "100%"; parent.opacity_11 = "0%"; }, 3800);
                setTimeout(() => {parent.opacity_7 = "0%"; parent.opacity_11 = "100%"; }, 4000);
                setTimeout(() => {parent.opacity_7 = "0%"; parent.opacity_11 = "0%"; }, 4200);
                setTimeout(() => {parent.opacity_6 = "0%"; parent.opacity_10 = "0%"; }, 4500);
                // Dots for within other comparison
                setTimeout(() => {parent.opacity_8 = "100%"; parent.opacity_12 = "100%"; }, 6500);
                setTimeout(() => {parent.opacity_9 = "100%"; parent.opacity_13 = "0%"; }, 7000);
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_13 = "100%"; }, 7200);
                setTimeout(() => {parent.opacity_9 = "100%"; parent.opacity_13 = "0%"; }, 7400);
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_13 = "100%"; }, 7600);
                setTimeout(() => {parent.opacity_9 = "100%"; parent.opacity_13 = "0%"; }, 7800);
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_13 = "100%"; }, 8000);
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_13 = "0%"; }, 8200);
                setTimeout(() => {parent.opacity_8 = "0%"; parent.opacity_12 = "0%"; }, 8500);
                // Dots for between people comparison
                setTimeout(() => {parent.opacity_10 = "100%"; parent.opacity_12 = "100%"; }, 10500);
                setTimeout(() => {parent.opacity_11 = "100%"; parent.opacity_13 = "0%"; }, 11000);
                setTimeout(() => {parent.opacity_11 = "0%"; parent.opacity_13 = "100%"; }, 11200);
                setTimeout(() => {parent.opacity_11 = "100%"; parent.opacity_13 = "0%"; }, 11400);
                setTimeout(() => {parent.opacity_11 = "0%"; parent.opacity_13 = "100%"; }, 11600);
                setTimeout(() => {parent.opacity_11 = "100%"; parent.opacity_13 = "0%"; }, 11800);
                setTimeout(() => {parent.opacity_11 = "0%"; parent.opacity_13 = "100%"; }, 12000);
                setTimeout(() => {parent.opacity_11 = "0%"; parent.opacity_13 = "0%"; }, 12200);
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_12 = "0%"; }, 12500);
                // Dots for within other comparison
                setTimeout(() => {parent.opacity_6 = "100%"; parent.opacity_8 = "100%"; }, 13000);
                setTimeout(() => {parent.opacity_7 = "100%"; parent.opacity_9 = "0%"; }, 13200);
                setTimeout(() => {parent.opacity_7 = "0%"; parent.opacity_9 = "100%"; }, 13400);
                setTimeout(() => {parent.opacity_7 = "100%"; parent.opacity_9 = "0%"; }, 13600);
                setTimeout(() => {parent.opacity_7 = "0%"; parent.opacity_9 = "100%"; }, 13800);
                setTimeout(() => {parent.opacity_7 = "100%"; parent.opacity_9 = "0%"; }, 14000);
                setTimeout(() => {parent.opacity_7 = "0%"; parent.opacity_9 = "100%"; }, 14200);
                setTimeout(() => {parent.opacity_7 = "0%"; parent.opacity_9 = "0%"; }, 14400);
                setTimeout(() => {parent.opacity_6 = "0%"; parent.opacity_8 = "0%"; }, 14600);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
            },
        },
    }
</script>

<style scoped>
</style>