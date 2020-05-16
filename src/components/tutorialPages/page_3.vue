<template>
    <b-modal 
      id="modal-center-instruction3" 
      size="xl"
      centered title="Tutorial#3"
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
      <b-container class="bv-example-row" >
          <div style="width: 100%; height: 400px;"/>
          <b-row align-h="between">
                <b-col>
                    <b-button @click="$bvModal.hide('modal-center-instruction3')" v-b-modal.modal-center-instruction2 variant="outline-primary" size="lg">Back</b-button>
                </b-col>
                <b-col>
                    <b-button style="float: right;" @click="$bvModal.hide('modal-center-instruction3')" variant="outline-primary" size="lg" v-b-modal.modal-center-instruction4>Next</b-button>
                </b-col>
          </b-row>
      </b-container>
    </b-modal>
</template>

<script>

    export default {
        name: 'Tutorial3',
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