<template>
    <b-modal 
      id="modal-center-Machines6" 
      size="xl"
      centered title="Instruction page 8 of 18"
      :hide-footer="true"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <img :src="require('../../assets/Instructions/Machines/keyhands2.png')" v-bind:style="{ maxWidth: '56%', height: 'auto', marginTop: '0%', marginLeft: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.4s' }"/>
      </b-container>
        <b-button @click="$bvModal.hide('modal-center-Machines6')" v-b-modal.modal-center-Machines7 variant="outline-primary" size="lg">Back</b-button>
        <b-button style="float: right;" @click="$bvModal.hide('modal-center-Machines6')" variant="success" size="lg" v-b-modal.modal-center-Practice01>Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Machines6',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                show: false,
            }
        },
        computed: {
        },
        methods: {
            
        },
    }
</script>


<style scoped>
</style>