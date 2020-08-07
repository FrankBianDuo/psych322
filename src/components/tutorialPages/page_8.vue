<template>
    <b-modal 
      id="modal-center-instruction8" 
      size="xl"
      centered title="Instructions page 8"
      v-model="show"
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
          <div style="text-align: center;">
              <img :src="require('../../assets/tutorials/Equal Preferences.png')" v-bind:style="{ maxWidth: '40%', height: 'auto', transform: 'translate(-50%, 0)', marginLeft: this.first_left_margin, position: 'absolute', marginTop: '20%', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
               <img :src="require('../../assets/tutorials/Page8T.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', transform: 'translate(-50%, 0)', marginLeft: this.first_left_margin, position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
            </div>
              
      </b-container>
        <b-button @click="$bvModal.hide('modal-center-instruction8')" v-b-modal.modal-center-instruction7 variant="outline-primary" size="lg">Back</b-button>
        <b-button style="float: right;" @click="$bvModal.hide('modal-center-instruction8')" v-b-modal.modal-center-instruction9 variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial8',
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