<template>
    <b-modal 
      id="modal-center-instruction3" 
      size="xl"
      centered title="Instructions page 3"
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
                  <img @click="this.animate" :src="require('../../assets/tutorials/Flashy Avatar 0001.png')" v-bind:style="{ position: 'absolute', maxWidth: this.avatar_size, height: 'auto', marginTop: '-38%', opacity: this.show_avatar, transition: 'margin-left 0.5s', marginLeft: this.shift_right1, transform: this.trans_1  }" />
                <img :src="require('../../assets/tutorials/Flashy Avatar 0002.png')" v-bind:style="{ position: 'absolute', maxWidth: this.avatar_size, height: 'auto', marginTop: '-20.5%',  marginLeft: this.shift_left, transition: 'margin-left 0.5s', transform: this.trans_2  }" />
                <img :src="require('../../assets/tutorials/Flashy Avatar 0003.png')" v-bind:style="{ position: 'absolute', maxWidth: this.avatar_size, height: 'auto', marginTop: '-3%',  marginLeft: this.shift_right2, transform: this.trans_3, transition: 'margin-left 0.5s',}" />
                <img :src="require('../../assets/tutorials/Frown 05.png')" v-bind:style="{ position: 'absolute', maxWidth: this.frown_size, height: 'auto', marginTop: '-35.5%',  marginLeft: this.end_right, transition: 'opacity 0.5s', opacity: this.frown_opacity_1,}" />
                <img :src="require('../../assets/tutorials/Frown 05.png')" v-bind:style="{ position: 'absolute', maxWidth: this.frown_size, height: 'auto', marginTop: '-17.5%',  marginLeft: this.end_left, transition: 'opacity 0.5s', opacity: this.frown_opacity_2}" />
                <img :src="require('../../assets/tutorials/Frown 11.png')" v-bind:style="{ position: 'absolute', maxWidth: this.frown_size, height: 'auto', marginTop: '-0.2%',  marginLeft: this.end_right, transition: 'opacity 0.5s', opacity: this.frown_opacity_3}" />
                
              </div>
                
          </div>
      </b-container>
      <b-button @click="this.resetAnimation" v-b-modal.modal-center-instruction2 variant="outline-primary" size="lg" :disabled="this.locked">Back</b-button>
                
            <b-button style="float: right;" @click="this.resetAnimation" variant="outline-primary" size="lg" v-b-modal.modal-center-instruction4 :disabled="this.locked">Next</b-button>
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
                shift_right1: "44.3%",
                shift_right2: "44.3%",

                end_left: "39%",
                end_right: "53%",
                frown_size: '3%',
                frown_opacity_1: '0%',
                frown_opacity_2: '0%',
                frown_opacity_3: '0%',
                trans_1: 'scaleX(-1)',
                trans_2: 'scaleX(-1)',
                trans_3: 'scaleX(-1)',
                locked: true,
                mutex: false
            }
        },
        computed: {
        },
        mounted() {
            this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
            // eslint-disable-next-line no-console
            // console.log('Modal is about to be shown', bvEvent, modalId)
            if (modalId != "modal-center-instruction3") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            setTimeout(() => this.animate(), 1500); //2800 IN PRODUCTION
            })
        },
        beforeDestroy() {
            
        },
        methods: {
            resetAnimation() {
                this.$bvModal.hide('modal-center-instruction3')
                this.locked = true
                this.shift_left = "44.3%"
                this.shift_right1 = "44.3%"
                this.shift_right2 = "44.3%"
                this.frown_opacity_1 = '0%'
                this.frown_opacity_2 = '0%'
                this.frown_opacity_3 = '0%'
                this.trans_1 = 'scaleX(-1)'
                this.trans_2 = 'scaleX(-1)'
                this.trans_3 = 'scaleX(-1)'
            },
            animate(){
                let parent = this
                this.animate_frown_1();
                setTimeout(() => { parent.animate_frown_2() }, 2000);
                setTimeout(() => { parent.animate_frown_3() }, 4000);

            },
            animate_frown_1(){
                this.trans_1 = 'scaleX(1)'
                setTimeout(() => this.trans_1 = 'scaleX(-1)', 200);
                setTimeout(() => this.trans_1 = 'scaleX(1)', 400);
                setTimeout(() => this.trans_1 = 'scaleX(-1)', 600);
                setTimeout(() => this.trans_1 = 'scaleX(1)', 800);
                setTimeout(() => this.shift_right1 = "52%", 1200);
                setTimeout(() => this.frown_opacity_1 = "100%", 1500);
            },
            animate_frown_2(){
                this.trans_2 = 'scaleX(1)'
                setTimeout(() => this.trans_2 = 'scaleX(-1)', 200);
                setTimeout(() => this.trans_2 = 'scaleX(1)', 400);
                setTimeout(() => this.trans_2 = 'scaleX(-1)', 600);
                setTimeout(() => this.shift_left = "38%", 1200);
                setTimeout(() => this.frown_opacity_2 = "100%", 1500);
            },
            animate_frown_3(){
                this.trans_3 = 'scaleX(1)'
                setTimeout(() => this.trans_3 = 'scaleX(-1)', 200);
                setTimeout(() => this.trans_3 = 'scaleX(1)', 400);
                setTimeout(() => this.trans_3 = 'scaleX(-1)', 600);
                setTimeout(() => this.trans_3 = 'scaleX(1)', 800);
                setTimeout(() => this.shift_right2 = "52%", 1200);
                setTimeout(() => this.frown_opacity_3 = "100%", 1500);
                setTimeout(() => this.locked = false, 1800);
                setTimeout(() => this.mutex = false, 1800);
            },
        },
    }
</script>


<style scoped>
</style>