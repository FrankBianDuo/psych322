<template>
    <b-modal 
      id="modal-center-Control3" 
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
              <img :src="require('../../assets/Instructions/Control Trees/Control Trees 03.png')" v-bind:style="{ maxWidth: '70%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Control Trees/Control Trees 04.png')" v-bind:style="{ maxWidth: '70%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Control Trees/Control Trees 05.png')" v-bind:style="{ maxWidth: '70%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Control Trees/Control Trees 06.png')" v-bind:style="{ maxWidth: '70%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.0s' }"/>
            </div>
              
      </b-container>
        <!-- <b-button @click="$bvModal.hide(`modal-center-Control3`)" v-b-modal.modal-center-Control2 variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="$bvModal.hide(`modal-center-Control3`)" v-b-modal.modal-center-Feedback style="float: right;" variant="outline-primary" size="lg">Next</b-button> -->
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="finishanimate" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" :disabled="finishanimate" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Control3',
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
            if (modalId != "modal-center-Control3") {
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
                this.$bvModal.show("modal-center-Control2") //this.$bvModal.show(previous page)
            },
            reset_animation_next() {
                //this.$bvModal.hide("modal-center-instruction" + this.page_num)
                this.resetAnimation()
                this.$bvModal.show("modal-center-Feedback")
            },
            resetAnimation() {
                this.$bvModal.hide('modal-center-Control3')
                this.opacity_1 = "100%"
                this.opacity_2 = "0%"
                this.opacity_3 = "0%"
                this.opacity_4 = "0%"
                this.locked = true
                this.mutex = false
                this.finishanimate = false
            },
            animate() {
                let parent = this
                setTimeout(() => {parent.opacity_2 = "100%" }, 300);
                setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_3 = "100%" }, 600);
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_4 = "100%" }, 900);
                setTimeout(() => {parent.opacity_4 = "0%"; parent.opacity_3 = "100%" }, 1200);
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_2 = "100%" }, 1500);
                setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_3 = "100%" }, 1800);
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_4 = "100%" }, 2100);
                setTimeout(() => {parent.opacity_4 = "0%"; parent.opacity_3 = "100%" }, 2400);
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_2 = "100%" }, 2700);
                setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_3 = "100%" }, 3000);
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_4 = "100%" }, 3300);
                setTimeout(() => {parent.opacity_4 = "0%"; parent.opacity_3 = "100%" }, 3600);

                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                // Disables BACK NEXT buttons until animation finishes at 3.6 seconds.
                setTimeout(() => {parent.finishanimate = false}, 3600);
            },
        },
    }
</script>


<style scoped>
</style>