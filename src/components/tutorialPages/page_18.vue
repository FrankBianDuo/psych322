<template>
    <b-modal 
      :id="this.page_id" 
      size="xl"
      centered 
      :title="this.center_title"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
               <img :src="require('../../assets/tutorials/Page18.png')" v-bind:style="{ maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
            </div>
              
      </b-container>
        <b-button @click="$bvModal.hide(`modal-center-instruction18`)" v-b-modal.modal-center-instruction17 variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="$bvModal.hide(`modal-center-instruction18`)" v-b-modal.modal-center-instruction19 style="float: right;" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial18',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "18",
            }
        },
        computed: {
            page_id() {
                return "modal-center-instruction" + this.page_num
            },
            center_title() {
                return "Instructions page " + this.page_num
            },
        },
        mounted() {
            this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
            // eslint-disable-next-line no-console
            // console.log('Modal is about to be shown', bvEvent, modalId)
            if (modalId != "modal-center-instruction" + this.page_num) {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            })
        },
        methods: {
            
        },
    }
</script>


<style scoped>
</style>