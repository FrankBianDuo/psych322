<template>
    <b-modal 
      id="modal-center-instruction1b" 
      size="xl"
      centered title="Instructions page 1b"
      :hide-footer="true"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <img :src="require('../../assets/tutorials/Single Slides/Experiment Info.png')" style="width: 110%; height: auto; transform: translate(-50%, 0); margin-left: 50%;"/>
      </b-container>
        <b-button variant="outline-primary" @click="$bvModal.hide('modal-center-instruction1b')" v-b-modal.modal-center-instruction1 size="lg">Back</b-button> 
        <b-button style="float: right;" @click="$bvModal.hide('modal-center-instruction1b')" variant="outline-primary" size="lg" v-b-modal.modal-center-instruction2>Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial1b',
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