<template>
    <b-modal 
      :id="this.page_id" 
      size="xl"
      centered 
      :title="this.center_title"
      v-model="show"
      :hide-footer="true"
      :no-close-on-backdrop="false"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <div style="text-align: center;">
               <img :src="require('../../assets/tutorials/Page11.png')" v-bind:style="{ maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial11',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "11",
            }
        },
        computed: {
            page_id() {
                return "modal-center-instruction" + this.page_num
            },
            center_title() {
                return "Instructions page " + this.page_num
            },
            self_modal() {
                return "modal-center-instruction" + this.page_num 
            },
            back_modal() {
                return "modal-center-instruction" + ((Number(this.page_num) - 1).toString())
            },
            next_modal() {
                return "modal-center-instruction" + ((Number(this.page_num) + 1).toString())
            }
        },
        methods: {
            reset_animation_back() {
                this.$bvModal.hide("modal-center-instruction" + this.page_num)
                this.$bvModal.show("modal-center-instruction" + ((Number(this.page_num) - 1).toString()))
            },
            reset_animation_next() {
                this.$bvModal.hide("modal-center-instruction" + this.page_num)
                this.$bvModal.show("modal-center-instruction" + ((Number(this.page_num) + 1).toString()))
            },
        },
    }
</script>


<style scoped>
</style>