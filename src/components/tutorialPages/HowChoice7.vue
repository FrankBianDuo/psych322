<template>
    <b-modal 
      id="modal-center-HowChoice7" 
      size="xl"
      centered title="Instruction Page 19 of 30"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              <img :src="require('../../assets/Instructions/HowChoice/hc 11.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc avatar 2.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc avatar 3.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc color dots.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc big choice.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc glowdots upgr.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc glowdots uppi.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc glowdots dngr.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.3s' }"/>
               <img :src="require('../../assets/Instructions/HowChoice/hc glowdots dnpi.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.3s' }"/>
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="finishanimate" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" :disabled="finishanimate" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'HowChoice7',
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
                opacity_7: '0%',
                opacity_8: '0%',
                opacity_9: '0%',
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
            if (modalId != "modal-center-HowChoice7") {
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
                this.$bvModal.show("modal-center-HowChoice6") 
            },
            reset_animation_next() {
                this.resetAnimation()
                this.$bvModal.show("modal-center-HowChoice8")
            },

            resetAnimation() {
                this.$bvModal.hide('modal-center-HowChoice7')
                this.opacity_1 = "100%"
                this.opacity_2 = "100%"
                this.opacity_3 = "100%"
                this.opacity_4 = "100%"
                this.opacity_5 = "100%"
                this.opacity_6 = "0%"
                this.opacity_7 = "0%"
                this.opacity_8 = "0%"
                this.opacity_9 = "0%"
                this.locked = true
                this.mutex = false
                this.finishanimate = false
            },
            animate() {
                let parent = this
                // Within upper option comparison
                setTimeout(() => {parent.opacity_6 = "100%"; parent.opacity_7 = "0%"; }, 300);
                setTimeout(() => {parent.opacity_6 = "0%"; parent.opacity_7 = "100%"; }, 600);
                setTimeout(() => {parent.opacity_6 = "100%"; parent.opacity_7 = "0%"; }, 900);
                setTimeout(() => {parent.opacity_6 = "0%"; parent.opacity_7 = "100%"; }, 1200);
                setTimeout(() => {parent.opacity_6 = "100%"; parent.opacity_7 = "0%"; }, 1500);
                setTimeout(() => {parent.opacity_6 = "0%"; parent.opacity_7 = "100%"; }, 1800);
                setTimeout(() => {parent.opacity_6 = "0%"; parent.opacity_7 = "0%"; }, 2100);
                setTimeout(() => {parent.opacity_6 = "0%"; parent.opacity_7 = "0%"; }, 2400);

                // Within llower option comparison
                setTimeout(() => {parent.opacity_8 = "100%"; parent.opacity_9 = "0%"; }, 3000);
                setTimeout(() => {parent.opacity_8 = "0%"; parent.opacity_9 = "100%"; }, 3300);
                setTimeout(() => {parent.opacity_8 = "100%"; parent.opacity_9 = "0%"; }, 3600);
                setTimeout(() => {parent.opacity_8 = "0%"; parent.opacity_9 = "100%"; }, 3900);
                setTimeout(() => {parent.opacity_8 = "100%"; parent.opacity_9 = "0%"; }, 4200);
                setTimeout(() => {parent.opacity_8 = "0%"; parent.opacity_9 = "100%"; }, 4500);
                setTimeout(() => {parent.opacity_8 = "0%"; parent.opacity_9 = "0%"; }, 4800);
                setTimeout(() => {parent.opacity_8 = "0%"; parent.opacity_9 = "0%"; }, 5100);
                // setTimeout(() => {parent.opacity_6 = "100%"}, 1800); 
                // setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_3 = "100%" }, 1000);  
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                // Disables BACK NEXT buttons until animation finishes at 1 seconds.
                setTimeout(() => {parent.finishanimate = false}, 3000);
            },
        },
    }
</script>


<style scoped>
</style>