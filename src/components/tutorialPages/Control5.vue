<template>
    <b-modal 
      id="modal-center-Control5" 
      size="xl"
      centered title="Instructions Page 24 of 30"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
                <img :src="require('../../assets/Instructions/Game Flow/GF03a.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Game Flow/GF04t.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Game Flow/GF01b.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Game Flow/GFpredup.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Game Flow/GFjk.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Game Flow/GFgk.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 1.5s' }"/>
               <img :src="require('../../assets/Instructions/Game Flow/GFd3.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Game Flow/GFd1.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 1.5s' }"/>
               <img :src="require('../../assets/Instructions/Game Flow/GFd2b.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Game Flow/GFd3b.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Game Flow/GFd4b.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Game Flow/GFd5.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 1.5s' }"/>
               <img :src="require('../../assets/Instructions/Game Flow/GFkc.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.0s' }"/>
            </div>
              
      </b-container>
        <!-- <b-button @click="$bvModal.hide(`modal-center-CommKnow`)" v-b-modal.modal-center-WantMoreDots variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="$bvModal.hide(`modal-center-CommKnow`)" v-b-modal.modal-center-ConstantValue style="float: right;" variant="outline-primary" size="lg">Next</b-button>  -->
        <b-button @click="this.reset_animation_back" variant="outline-primary" :disabled="finishanimate" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" :disabled="finishanimate" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Control5',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "10",
                opacity_1: '100%',
                opacity_2: '100%',
                opacity_3: '0%',
                opacity_4: '0%',
                opacity_5: '100%',
                opacity_6: '100%',
                opacity_7: '0%',
                opacity_8: '100%',
                opacity_9: '0%',
                opacity_10: '100%',
                opacity_11: '0%',
                opacity_12: '100%',
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
            // console.log('Modal is about to be shown', bvEvent, modalId)
            if (modalId != "modal-center-Control5") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            setTimeout(() => this.animate(), 250); //2800 IN PRODUCTION
            })
        },
        methods: {
            reset_animation_back() {
                //this.$bvModal.hide("modal-center-instruction" + this.page_num)  // this.$bvModal.hide(this current page)
                this.resetAnimation()
                this.$bvModal.show("modal-center-Control4") //this.$bvModal.show(previous page)
            },
            reset_animation_next() {
                //this.$bvModal.hide("modal-center-instruction" + this.page_num)
                this.resetAnimation()
                this.$bvModal.show("modal-center-Knowledge2")
            },

            resetAnimation() {
                this.$bvModal.hide('modal-center-Control5')
                this.opacity_1 = "100%"
                this.opacity_2 = "100%"
                this.opacity_3 = "0%"
                this.opacity_4 = "0%"
                this.opacity_5 = "100%"
                this.opacity_6 = "100%"
                this.opacity_7 = "0%"
                this.opacity_8 = "100%"
                this.opacity_9 = "0%"
                this.opacity_10 = "100%"
                this.opacity_11 = "0%"
                this.opacity_12 = "100%"
                this.opacity_13 = "0%"
                this.locked = true
                this.mutex = false
                this.finishanimate = false
            },
                animate() {
                let parent = this
                setTimeout(() => {parent.opacity_5 = "0%"; parent.opacity_6 = "0%"; parent.opacity_8 = "0%"; parent.opacity_12 = "0%" }, 1000); 
                setTimeout(() => {parent.opacity_13 = "100%"}, 1500);
                setTimeout(() => {parent.opacity_7 = "100%"}, 1800);
                setTimeout(() => {parent.opacity_7 = "0%"}, 1900);
                //setTimeout(() => {parent.opacity_9 = "100%" }, 2100); 
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_10 = "100%" }, 2400);
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_11 = "100%" }, 2700);
                setTimeout(() => {parent.opacity_11 = "0%"; parent.opacity_10 = "100%" }, 3000);
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_9 = "100%" }, 3300);
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_10 = "100%" }, 3600);
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_11 = "100%" }, 3900);
                setTimeout(() => {parent.opacity_11 = "0%"; parent.opacity_10 = "100%" }, 4200);
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_9 = "100%" }, 4500);
                setTimeout(() => {parent.opacity_9 = "0%"; parent.opacity_10 = "100%" }, 4800);
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_11 = "100%" }, 5100);
                setTimeout(() => {parent.opacity_11 = "0%"; parent.opacity_10 = "100%" }, 5400);
                setTimeout(() => {parent.opacity_10 = "0%"; parent.opacity_9 = "100%" }, 5700);
                setTimeout(() => parent.mutex = false, 3600); //2800 IN PRODUCTION
                setTimeout(() => parent.locked = false, 3600); //2800 IN PRODUCTION
                // Disables BACK NEXT buttons until animation finishes at 6 seconds.
                setTimeout(() => {parent.finishanimate = false}, 6000);
            },
        },
    }
</script>


<style scoped>
</style>