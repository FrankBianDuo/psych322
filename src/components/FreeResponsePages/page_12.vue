<template>
    <b-modal 
      id="modal-center-FR1" 
      size="xl"
      centered title="Free Response 1"
      v-model="show"
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
          <b-row class="mt-5" >
             
          </b-row>
      </b-container>
        <b-button variant="outline-primary" size="lg">Back</b-button>
        <b-button style="float: right;" @click="$bvModal.hide('modal-center-FR1')" variant="outline-primary" size="lg" v-b-modal.modal-center-FR2>Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'FR1',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                show: true,
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