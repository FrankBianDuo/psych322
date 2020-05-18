<template>
    <b-modal 
      id="modal-center-instruction2" 
      size="xl"
      centered title="Tutorial#2"
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
      <b-container class="bv-example-row" :style="this.windowsize" >
          <b-row class="mt-5" >
                <p style="font-size: 30px; font-family: Calibri;" class="text-center mx-5 px-5">You are about to meet a random sequence of 216 unique avatars.
                Treat each avatar like a real person you are meeting for the first time
                where you both expect to continue encountering each other. </p>
                <img :src="require('../../assets/tutorials/Avatars.png')" style="width: 70%; height: 70%; transform: translate(-50%, 0); margin-left: 50%;"/>
          </b-row>
      </b-container>
       <b-button @click="$bvModal.hide('modal-center-instruction2')" v-b-modal.modal-center-instruction1 variant="outline-primary" size="lg">Back</b-button>
        <b-button style="float: right;" @click="$bvModal.hide('modal-center-instruction2')" variant="outline-primary" size="lg" v-b-modal.modal-center-instruction3>Next</b-button>
    </b-modal>
</template>

<script>

    export default {
        name: 'Tutorial2',
        props: ['windowsize'],
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