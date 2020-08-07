<template>
    <b-modal 
      id="modal-center-instruction5" 
      size="xl"
      centered title="Instructions page 5"
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
          <b-row class="mt-5" >
              <p style="font-size: 30px; font-family: Calibri; margin-left: 17%; display:inline; text-align: center;">
                             This is common knowledge.
                </p>
                <img :src="require('../../assets/tutorials/Page_5_ori.png')" v-bind:style="{ maxWidth: '45%', height: 'auto', marginLeft: '24%', position: 'absolute', marginTop: '5%', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
                <img :src="require('../../assets/tutorials/Page_5_base.png')" v-bind:style="{ maxWidth: '45%', height: 'auto', marginLeft: '24%', position: 'absolute', marginTop: '5%', opacity: this.opacity_2, transition: 'opacity 0.5s' }"/>
                <img :src="require('../../assets/tutorials/Page_5_3.png')" v-bind:style="{ maxWidth: this.img_size, height: 'auto', marginLeft: '53.6%', marginTop: '7.6%', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.5s' }"/>
                <img :src="require('../../assets/tutorials/Page_5_3.png')" v-bind:style="{ maxWidth: this.img_size, height: 'auto', marginLeft: '27.7%', marginTop: '21.3%', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.5s' }"/>
                <img :src="require('../../assets/tutorials/Page_5_3.png')" v-bind:style="{ maxWidth: this.img_size, height: 'auto', marginLeft: '53.6%', marginTop: '35%', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.5s' }"/>
          </b-row>
      </b-container>
        <b-button @click="this.resetAnimation" v-b-modal.modal-center-instruction4 variant="outline-primary" :disabled="this.locked" size="lg">Back</b-button>
        <b-button style="float: right;" @click="this.resetAnimation" variant="outline-primary" :disabled="this.locked" size="lg" v-b-modal.modal-center-instruction6>Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial5',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                img_size: '10%',
                opacity_1: '100%',
                opacity_2: '0%',
                opacity_3: '0%',
                opacity_4: '0%',
                opacity_5: '0%',
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
                if (modalId != "modal-center-instruction5") {
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
                this.$bvModal.hide('modal-center-instruction5')
                this.opacity_1 = '100%'
                this.opacity_2 = '0%'
                this.opacity_3 = '0%'
                this.opacity_4 = '0%'
                this.opacity_5 = '0%'
                this.locked = true
            },
            animate() {
                let parent = this
                this.locked = true
                this.animate_1();
                setTimeout(() => { parent.animate_2() }, 1000);
                setTimeout(() => { parent.animate_3() }, 2000);
                setTimeout(() => { parent.animate_4() }, 3000);
            },
            animate_1() {
                this.opacity_1 = '0%';
                this.opacity_2 = '100%';
            },
            animate_2() {
                this.opacity_3 = '100%';
            },
            animate_3() {
                this.opacity_4 = '100%';
            },
            animate_4() {
                this.opacity_5 = '100%';
                this.locked = false
                this.mutex = false
            }
        },
    }
</script>


<style scoped>
</style>