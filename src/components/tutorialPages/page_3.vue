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
      <b-container class="bv-example-row" :style="this.windowsize" >
            <b-row class="mt-5" >
                <p style="font-size: 30px; font-family: Calibri; transform: translate(-50%, 0); margin-left: 50%;">
                    Everyone always prefers more dots.
                </p>
                <!-- Container -->
                <img :src="require('../../assets/tutorials/Dot Holders Six.png')" style="width: 40%; height: 40%; transform: translate(-50%, 0); margin-left: 50%;"/>
          </b-row>
          <div style="position: absolute; margin-top: -50%; width: 100%;">
              <b-row style="margin-top: 12.1%;">
                  <img :src="require('../../assets/tutorials/Black 1.png')" 
                  v-bind:style="{ maxWidth: this.dot_size, height: 'auto', marginLeft: '29.5%' }" />
                <img :src="require('../../assets/tutorials/Black 3.png')" 
                  v-bind:style="{ maxWidth: this.dot_size, height: 'auto', marginLeft: '21.6%' }"/>
              </b-row>
              <b-row style="margin-top: 16.2%;" >
                   <img :src="require('../../assets/tutorials/Black 5.png')" v-bind:style="{ maxWidth: this.dot_size, height: 'auto', marginLeft: '29.5%'  }"/>
                <img :src="require('../../assets/tutorials/Black 3.png')" v-bind:style="{ maxWidth: this.dot_size, height: 'auto', marginLeft: '21.6%'  }"/>
              </b-row>
              <b-row style="margin-top: 16.2%;" >
                  <img :src="require('../../assets/tutorials/Black 1.png')" v-bind:style="{ maxWidth: this.dot_size, height: 'auto', marginLeft: '29.5%'  }" />
                <img :src="require('../../assets/tutorials/Black 5.png')" v-bind:style="{ maxWidth: this.dot_size, height: 'auto', marginLeft: '21.6%' }" />
              </b-row>
              <div>
                  <img @click="this.animate" :src="require('../../assets/tutorials/Flashy Avatar 0001.png')" v-bind:style="{ position: 'absolute', maxWidth: this.avatar_size, height: 'auto', marginTop: '-38%', opacity: this.show_avatar, transition: 'margin-left 0.5s', marginLeft: this.shift_right  }" />
                <img :src="require('../../assets/tutorials/Flashy Avatar 0002.png')" v-bind:style="{ position: 'absolute', maxWidth: this.avatar_size, height: 'auto', marginTop: '-20.5%',  marginLeft: this.shift_left, transition: 'margin-left 0.5s', transform: 'scaleX(-1)'  }" />
                <img :src="require('../../assets/tutorials/Flashy Avatar 0003.png')" v-bind:style="{ position: 'absolute', maxWidth: this.avatar_size, height: 'auto', marginTop: '-3%',  marginLeft: this.shift_right, transition: 'margin-left 0.5s',}" />

                <img :src="require('../../assets/tutorials/Frown 02.png')" v-bind:style="{ position: 'absolute', maxWidth: this.frown_size, height: 'auto', marginTop: '-35.5%',  marginLeft: this.end_right, transition: 'opacity 0.5s', opacity: this.frown_opacity,}" />
                <img :src="require('../../assets/tutorials/Frown 02.png')" v-bind:style="{ position: 'absolute', maxWidth: this.frown_size, height: 'auto', marginTop: '-17.5%',  marginLeft: this.end_left, transition: 'opacity 0.5s', opacity: this.frown_opacity}" />
                <img :src="require('../../assets/tutorials/Frown 11.png')" v-bind:style="{ position: 'absolute', maxWidth: this.frown_size, height: 'auto', marginTop: '-0.2%',  marginLeft: this.end_right, transition: 'opacity 0.5s', opacity: this.frown_opacity}" />
                
              </div>
                
          </div>
      </b-container>
      <b-button @click="$bvModal.hide('modal-center-instruction3')" v-b-modal.modal-center-instruction2 variant="outline-primary" size="lg" :disabled="this.locked">Back</b-button>
                
            <b-button style="float: right;" @click="$bvModal.hide('modal-center-instruction3')" variant="outline-primary" size="lg" v-b-modal.modal-center-instruction4 :disabled="this.locked">Next</b-button>
    </b-modal>
</template>

<script>

    export default {
        name: 'Tutorial3',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                dot_size: "7%",
                avatar_size: "5%",
                show_avatar: "100%",
                shift_left: "44.3%",
                end_left: "39%",
                end_right: "53%",
                shift_right: "44.3%",
                frown_size: '3%',
                frown_opacity: '0%',
                locked: true
            }
        },
        computed: {
        },
        mounted() {
            this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
            // eslint-disable-next-line no-console
            console.log('Modal is about to be shown', bvEvent, modalId)
            setTimeout(() => this.animate(), 1500);
            setTimeout(() => this.animate_frown(), 2200);
            })
        },
        methods: {
            animate(){
                this.shift_left = "38%"
                this.shift_right = "52%"
            },
            animate_frown(){
                this.frown_opacity = "100%"
                setTimeout(() => this.locked = false, 300);
                
            }
        },
    }
</script>


<style scoped>
</style>