<template>
    <b-modal 
      id="modal-center-ReferenceDependence" 
      size="xl"
      centered title="Instruction page 4"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              <img :src="require('../../assets/Instructions/Ref Dependence/refdep main.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refdepglow 01.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refdepsmile 01.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refdepglow 02.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refdepsmile 02.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refdepglow 03.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refdepsmile 03.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refdepglow 04.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refdepsmile 04.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refdepglow 05.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refdepsmile 05.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refdepglow 06.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Ref Dependence/refdepsmile 06.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.0s' }"/>
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="finishanimate" size="lg">Back</b-button> 
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" :disabled="finishanimate" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'ReferenceDependence',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "4",
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
            console.log('Modal is about to be shown', bvEvent, modalId)
            if (modalId != "modal-center-ReferenceDependence") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            setTimeout(() => this.animate(), 300); 
            })
        },
  methods: {
            reset_animation_back() {
                //this.$bvModal.hide("modal-center-instruction" + this.page_num)  // this.$bvModal.hide(this current page)
                this.resetAnimation()
                this.$bvModal.show("modal-center-CommKnow") //this.$bvModal.show(previous page)
            },
            reset_animation_next() {
                //this.$bvModal.hide("modal-center-instruction" + this.page_num)
                this.resetAnimation()
                this.$bvModal.show("modal-center-MoralChoice1")
            },
            resetAnimation() {
                this.$bvModal.hide('modal-center-ReferenceDependence')
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
                this.finishanimate = false
            },
            animate() {
                let parent = this
                // glow appears: up 1
                setTimeout(() => {parent.opacity_2 = "100%" }, 300);
                // sad face appears
                setTimeout(() => {parent.opacity_3 = "100%" }, 400);
                // glow replaces: dn 3
                setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_4 = "100%" }, 1000);
                // happy face replaces
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_5 = "100%" }, 1100);
                // glow appears: up 5
                setTimeout(() => {parent.opacity_6 = "100%" }, 1700);
                // happy face appears 
                setTimeout(() => {parent.opacity_9 = "100%" }, 1800);
                // glow replaces: dn 3
                setTimeout(() => {parent.opacity_6 = "0%"; parent.opacity_8 = "100%" }, 2400);
                // sad face replaces
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_7 = "100%" }, 2500);
                // glow appears: up 1
                setTimeout(() => {parent.opacity_10 = "100%" }, 3100);
                // sad face appears 
                setTimeout(() => {parent.opacity_11 = "100%" }, 3200);
                // glow replaces: dn 5
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_12 = "100%" }, 3800);
                // happy face replaces
                setTimeout(() => {parent.opacity_11 = "0%"; parent.opacity_13 = "100%" }, 3900); 
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                // Disables BACK NEXT buttons until animation finishes at 4 seconds.
                setTimeout(() => {parent.finishanimate = false}, 4000);
            },
        },
    }
</script>


<style scoped>
</style>