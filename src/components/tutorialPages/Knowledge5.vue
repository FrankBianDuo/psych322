<template>
    <b-modal 
      id="modal-center-Knowledge5" 
      size="xl"
      centered title="Instructions Page 29 of 30"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              <img :src="require('../../assets/Instructions/They Dont Know/tdk 15.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/They Dont Know/tdk 16.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"/>
            </div>
              
      </b-container>
        <b-button @click="$bvModal.hide(`modal-center-Knowledge5`)" v-b-modal.modal-center-Knowledge4 variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="$bvModal.hide(`modal-center-Knowledge5`)" v-b-modal.modal-center-Knowledge6 style="float: right;" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Knowledge5',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "13",
                opacity_1: '100%',
                opacity_2: '0%',
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
            if (modalId != "modal-center-Knowledge5") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            setTimeout(() => this.animate(), 500); 
            })
        },
       methods: {
            reset_animation_back() {
                //this.$bvModal.hide("modal-center-instruction" + this.page_num)  // this.$bvModal.hide(this current page)
                this.resetAnimation()
                this.$bvModal.show("modal-center-Knowledge3") //this.$bvModal.show(previous page)
            },
            reset_animation_next() {
                //this.$bvModal.hide("modal-center-instruction" + this.page_num)
                this.resetAnimation()
                this.$bvModal.show("modal-center-Knowledge5")
            },
            resetAnimation() {
                this.$bvModal.hide('modal-center-Knowledge5')
                this.opacity_1 = "100%"
                this.opacity_2 = "0%"
                this.locked = true
                this.mutex = false
                this.finishanimate = false
            },
            animate() {
                let parent = this
                setTimeout(() => {parent.opacity_1 = "0%"; parent.opacity_2 = "100%" }, 1000); 
                setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_1 = "100%" }, 1200); 
                setTimeout(() => {parent.opacity_1 = "0%"; parent.opacity_2 = "100%" }, 1400); 
                setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_1 = "100%" }, 1600); 
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