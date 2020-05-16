<template>
    <b-modal 
      id="modal-center-instruction1" 
      size="xl"
      centered title="Experiment Tutorial"
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
      <b-container class="align-bottom" style="height: 600px;" >
          <b-row>
                <p style="font-size: 24px;">Please read and fill out the consent form. Please do not select
                the “refresh” button. This experiment should last about an hour.
                This tutorial will only allow you to progress to the experiment
                once you correctly answer every comprehension question because
                it is essential that you understand the task. You may use the
                arrow keys or the “BACK” and “NEXT” buttons to move forwards
                and backwards through the tutorial as needed. Experimenters
                are nearby to help but protocol prevents them from answering
                some questions. </p>
          </b-row>
      </b-container>
        <b-button variant="outline-primary" size="lg">Back</b-button>
        <b-button style="float: right;" @click="$bvModal.hide('modal-center-instruction1')" variant="outline-primary" size="lg" v-b-modal.modal-center-instruction2>Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial1',
        components: {
        },
        data() {
            return {}
        },
        computed: {
        },
        methods: {
            
        },
    }
</script>


<style scoped>
</style>