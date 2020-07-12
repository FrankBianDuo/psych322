<template>
    <b-modal 
      id="modal-center-Knowledge6" 
      size="xl"
      centered title="Instructions Page 21 of x"
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
          <img :src="require('../../assets/Instructions/They Dont Know/tdk 18.png')" style="width: 60%; height: auto; transform: translate(-50%, 0); margin-left: 50%;"/>
      </b-container>
        <b-button @click="$bvModal.hide('modal-center-Knowledge6')" v-b-modal.modal-center-Knowledge5 variant="outline-primary" size="lg">Back</b-button>
        <b-button style="float: right;" @click="$bvModal.hide('modal-center-Knowledge6')" variant="outline-primary" size="lg" v-b-modal.modal-center-Cursor2>Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Knowledge6',
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