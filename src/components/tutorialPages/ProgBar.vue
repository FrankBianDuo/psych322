<template>
    <b-modal 
      id="modal-center-ProgBar" 
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
              <img :src="require('../../assets/Instructions/Text Only Pages/BB 01.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Text Only Pages/BB 02.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"/>
               <img :src="require('../../assets/Instructions/Text Only Pages/BB 03.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"/>
            </div>
              
      </b-container>
        <b-button @click="$bvModal.hide(`modal-center-ProgBar`)" v-b-modal.modal-center-EndTF2 variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="$bvModal.hide(`modal-center-ProgBar`)" v-b-modal.modal-center-EndInstr style="float: right;" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'ProgBar',
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
            if (modalId != "modal-center-ProgBar") {
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
            resetAnimation() {
                this.$bvModal.hide('modal-center-ProgBar')
                this.opacity_1 = "100%"
                this.opacity_2 = "0%"
                this.opacity_3 = "0%"
                this.locked = true
                this.mutex = false
            },
            animate() {
                let parent = this
                setTimeout(() => {parent.opacity_1 = "0%"; parent.opacity_2 = "100%" }, 500); //2800 IN PRODUCTION
                setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_3 = "100%" }, 1500); //2800 IN PRODUCTION
                setTimeout(() => parent.mutex = false, 3600); //2800 IN PRODUCTION
                setTimeout(() => parent.locked = false, 3600); //2800 IN PRODUCTION
            },
        },
    }
</script>


<style scoped>
</style>