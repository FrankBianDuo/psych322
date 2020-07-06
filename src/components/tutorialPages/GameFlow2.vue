<template>
    <b-modal 
      id="modal-center-GameFlow2" 
      size="xl"
      centered title="Page x"
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
          <img :src="require('../../assets/Instructions/Game Flow/Game Glow 04.png')" style="width: 40%; height: auto; transform: translate(-50%, 0); margin-left: 50%; margin-top: 8%;"/>
          <img :src="require('../../assets/Instructions/Game Flow/GGt04.png')" style="width: 90%; height: auto; transform: translate(-50%, 0); margin-left: 50%; margin-top: -50%"/>
      </b-container>
        <b-button @click="$bvModal.hide('modal-center-GameFlow2')" v-b-modal.modal-center-GameFlow1 variant="outline-primary" size="lg">Back</b-button>
        <b-button style="float: right;" @click="$bvModal.hide('modal-center-GameFlow2')" variant="outline-primary" size="lg" v-b-modal.modal-center-GameFlow3>Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'GameFlow2',
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