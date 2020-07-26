<template>
    <b-modal 
      id="modal-center-instruction6" 
      size="xl"
      centered title="Instructions page 6"
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
              <p style="font-size: 30px; font-family: Calibri; margin-left: 3%; display:inline; text-align: center;">
                    Peoples’ happiness or sadness depends only on how many dots they
                        just received compared to how many dots they could have received
                        regardless of how many dots they already have. Dots do not grow or
                        diminish in value over time.
                </p>
                <img :src="require('../../assets/tutorials/Ref Dep Neutral 1.png')" v-bind:style="{ maxWidth: this.img_size, height: 'auto', marginLeft: this.first_left_margin, position: 'absolute', marginTop: this.top_size, opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
                <img :src="require('../../assets/tutorials/Ref Dep Neutral 2.png')" v-bind:style="{ maxWidth: this.img_size, height: 'auto', marginLeft: this.second_left_margin, position: 'absolute', marginTop: this.top_size, opacity: this.opacity_2, transition: 'opacity 0.5s' }"/>
                <img :src="require('../../assets/tutorials/Ref Dep Neutral 3.png')" v-bind:style="{ maxWidth: this.img_size, height: 'auto', marginLeft: this.third_left_margin, position: 'absolute', marginTop: this.top_size, opacity: this.opacity_3, transition: 'opacity 0.5s' }"/>
                <img :src="require('../../assets/tutorials/Ref Dep Down 1.png')" v-bind:style="{ maxWidth: this.img_size, height: 'auto', marginLeft: this.first_left_margin, position: 'absolute', marginTop: this.top_size, opacity: this.opacity_4, transition: 'opacity 0.5s' }"/>
                <img :src="require('../../assets/tutorials/Ref Dep Up 2.png')" v-bind:style="{ maxWidth: this.img_size, height: 'auto', marginLeft: this.second_left_margin, position: 'absolute', marginTop: this.top_size, opacity: this.opacity_5, transition: 'opacity 0.5s' }"/>
                <img :src="require('../../assets/tutorials/Ref Dep Down 3.png')" v-bind:style="{ maxWidth: this.img_size, height: 'auto', marginLeft: third_left_margin, position: 'absolute', marginTop: this.top_size, opacity: this.opacity_6, transition: 'opacity 0.5s' }"/>
                
          </b-row>
      </b-container>
        <b-button @click="this.resetAnimation" :disabled="this.locked" v-b-modal.modal-center-instruction5 variant="outline-primary" size="lg">Back</b-button>
        <b-button style="float: right;" :disabled="this.locked" @click="this.resetAnimation" variant="outline-primary" size="lg" v-b-modal.modal-center-instruction7>Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial6',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                first_left_margin: '7%',
                second_left_margin: '35%',
                third_left_margin: '63%',
                img_size: '27%',
                top_size: '20%',
                opacity_1: '100%',
                opacity_2: '100%',
                opacity_3: '100%',
                opacity_4: '0%',
                opacity_5: '0%',
                opacity_6: '0%',
                locked: true,
                mutex: false,
            }
        },
        computed: {
        },
        mounted() {
            this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
                // eslint-disable-next-line no-console
                // console.log('Modal is about to be shown', bvEvent, modalId)
                if (modalId != "modal-center-instruction6") {
                    return;
                }
                if (this.mutex == true) {
                    return
                }
                this.mutex = true;
                setTimeout(() => this.animate(), 1500); //2800 IN PRODUCTION
                
            })
        },
        methods: {
            resetAnimation() {
                this.$bvModal.hide('modal-center-instruction6')
                this.opacity_1 = '100%'
                this.opacity_2 = '100%'
                this.opacity_3 = '100%'
                this.opacity_4 = '0%'
                this.opacity_5 = '0%'
                this.opacity_6 = '0%'
                this.locked = true
            },
            animate() {
                let parent = this
                setTimeout(() => {parent.opacity_1 = "0%"; parent.opacity_4 = "100%" }, 1500); //2800 IN PRODUCTION
                setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_5 = "100%" }, 2500); //2800 IN PRODUCTION
                setTimeout(() => {parent.opacity_3 = "0%"; parent.opacity_6 = "100%" }, 3500); //2800 IN PRODUCTION
                setTimeout(() => parent.mutex = false, 3600); //2800 IN PRODUCTION
                setTimeout(() => parent.locked = false, 3600); //2800 IN PRODUCTION
            },
        },
    }
</script>


<style scoped>
</style>