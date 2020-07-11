<template>
    <b-modal 
      id="modal-center-Knowledge2" 
      size="xl"
      centered title="Instructions Page 17 of x"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              <img :src="require('../../assets/Instructions/They Dont Know/tdk 04.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/They Dont Know/tdk 07.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/They Dont Know/tdk 08.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/They Dont Know/tdk 03.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/They Dont Know/tdk pu.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.8s' }"/>
               <img :src="require('../../assets/Instructions/They Dont Know/tdk pd.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/They Dont Know/tdk gc.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/They Dont Know/tdk kc.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/They Dont Know/tdk az.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/They Dont Know/tdk jk.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.0s' }"/>
            </div>
              
      </b-container>
        <!-- <b-button @click="$bvModal.hide(`modal-center-Knowledge2`)" v-b-modal.modal-center-Knowledge1 variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="$bvModal.hide(`modal-center-Knowledge2`)" v-b-modal.modal-center-Knowledge3 style="float: right;" variant="outline-primary" size="lg">Next</b-button> -->
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="finishanimate" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" :disabled="finishanimate" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Knowledge2',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "11",
                opacity_1: '100%',
                opacity_2: '0%',
                opacity_3: '0%',
                opacity_4: '0%',
                opacity_5: '0%',
                opacity_6: '0%',
                opacity_7: '0%',
                opacity_8: '0%',
                opacity_9: '100%',
                opacity_10: '0%',
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
            if (modalId != "modal-center-Knowledge2") {
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
                this.$bvModal.show("modal-center-Control5") //this.$bvModal.show(previous page)
            },
            reset_animation_next() {
                //this.$bvModal.hide("modal-center-instruction" + this.page_num)
                this.resetAnimation()
                this.$bvModal.show("modal-center-Knowledge3")
            },
            resetAnimation() {
                this.$bvModal.hide('modal-center-Knowledge2')
                this.opacity_1 = "100%"
                this.opacity_2 = "0%"
                this.opacity_3 = "0%"
                this.opacity_4 = "0%"
                this.opacity_5 = "0%"
                this.opacity_6 = "0%"
                this.opacity_7 = "0%"
                this.opacity_8 = "0%"
                this.opacity_9 = "100%"
                this.opacity_10 = "0%"
                this.locked = true
                this.mutex = false
                this.finishanimate = false
            },
            animate() {
                let parent = this
                setTimeout(() => {parent.opacity_4 = "100%"}, 500);
                setTimeout(() => {parent.opacity_4 = "0%"}, 1000);
                setTimeout(() => {parent.opacity_5 = "100%"}, 1800);
                setTimeout(() => {parent.opacity_5 = "0%"; parent.opacity_6 = "100%" }, 2600);
                setTimeout(() => {parent.opacity_6 = "0%"; parent.opacity_7 = "100%" }, 3200);
                setTimeout(() => {parent.opacity_7 = "0%"; parent.opacity_8 = "100%" }, 4000);
                setTimeout(() => {parent.opacity_8 = "0%"}, 4800);
                setTimeout(() => {parent.opacity_1 = "0%"; parent.opacity_2 = "100%" }, 6600); 
                setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_3 = "100%" }, 7200);  
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_10 = "100%" }, 2600);
                setTimeout(() => {parent.opacity_10 = "0%"}, 4800);
                setTimeout(() => parent.mutex = false, 3600); 
                setTimeout(() => parent.locked = false, 3600); 
                // Disables BACK NEXT buttons until animation finishes at 8 seconds.
                setTimeout(() => {parent.finishanimate = false}, 8000);
            },
        },
    }
</script>


<style scoped>
</style>