<template>
    <b-modal 
      id="modal-center-MeetPeople" 
      size="xl"
      centered title="Instruction Page 1 of 30"
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
          <img :src="require('../../assets/Instructions/Single Slides/Cast of Characters.png')" style="width: 90%; height: auto; transform: translate(-50%, 0); margin-left: 50%;"/>
      </b-container>
        <b-button @click="$bvModal.hide('modal-center-MeetPeople')" v-b-modal.modal-center-ExperTutorial variant="outline-primary" size="lg">Back</b-button>
        <b-button style="float: right;" @click="$bvModal.hide('modal-center-MeetPeople')" variant="outline-primary" size="lg" v-b-modal.modal-center-WantMoreDots>Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'MeetPeople',
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