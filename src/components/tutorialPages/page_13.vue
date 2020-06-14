<template>
    <b-modal 
      :id="this.page_id" 
      size="xl"
      centered 
      :title="this.center_title"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
              <img :src="require('../../assets/tutorials/Evaporating Dots/Page13.png')" v-bind:style="{ maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/tutorials/Evaporating Dots/Evap Dots Q1.png')" v-bind:style="{ maxWidth: '70%', height: 'auto', marginTop: '15%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/tutorials/Evaporating Dots/Evap Dots Q2.png')" v-bind:style="{ maxWidth: '70%', height: 'auto', marginTop: '15%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/tutorials/Evaporating Dots/Evap Dots Q3.png')" v-bind:style="{ maxWidth: '70%', height: 'auto', marginTop: '15%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.5s' }"/>
            </div>
              
      </b-container>
        <b-button :disabled="true" variant="outline-primary" size="lg">Back</b-button>
        <b-button :disabled="true" style="float: right;" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial13',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "13",
                opacity_1: '100%',
                opacity_2: '0%',
                opacity_3: '0%',
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
            if (modalId != "modal-center-instruction13") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            setTimeout(() => this.animate(), 1500); //2800 IN PRODUCTION
            })
        },
        methods: {
            reset() {
                this.opacity_1 = "100%"
                this.opacity_2 = "0%"
                this.opacity_3 = "0%"
            },
            animate() {
                this.opacity_1 = "0%"
                this.opacity_2 = "100%"
                setTimeout(() => this.opacity_2 = "0%", 1500);
                setTimeout(() => this.opacity_3 = "100%", 1500);
            }
        },
    }
</script>


<style scoped>
</style>