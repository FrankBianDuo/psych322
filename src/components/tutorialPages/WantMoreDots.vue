<template>
    <b-modal 
      id="modal-center-WantMoreDots" 
      size="xl"
      centered title="Instruction Page 11 of 18"
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
                <img :src="require('../../assets/Instructions/Want More Dots/Dot Holder Six Correct Numbers.png')" style="width: 40%; height: 40%; transform: translate(-50%, 0); margin-left: 50%;"/>
          </b-row>
          <div style="position: absolute; margin-top: -50%; width: 100%;">

 

              <div>
                  <img @click="this.animate" :src="require('../../assets/Instructions/Want More Dots/Want More/Want Av Sight 01.png')" v-bind:style="{ position: 'absolute', maxWidth: '8%', height: 'auto', marginTop: '8.85%', opacity: this.show_avatar, transition: 'margin-left 0.5s', marginLeft: this.shift_right1,}" />
                <img :src="require('../../assets/Instructions/Want More Dots/Want More/Want Av Sight 02.png')" v-bind:style="{ position: 'absolute', maxWidth: '8%', height: 'auto', marginTop: '26.3%',  marginLeft: this.shift_left, transition: 'margin-left 0.5s',}" />
                <img :src="require('../../assets/Instructions/Want More Dots/Want More/Want Av Sight 03.png')" v-bind:style="{ position: 'absolute', maxWidth: '8%', height: 'auto', marginTop: '43.7%',  marginLeft: this.shift_right2, transition: 'margin-left 0.5s',}" />
                <img :src="require('../../assets/Instructions/Want More Dots/Want More/Want Smile Sm.png')" v-bind:style="{ position: 'absolute', maxWidth: '8%', height: 'auto', marginTop: '8.85%',  marginLeft: this.end_right, transition: 'opacity 0.5s', opacity: this.frown_opacity_1,}" />
                <img :src="require('../../assets/Instructions/Want More Dots/Want More/Want Smile Sm.png')" v-bind:style="{ position: 'absolute', maxWidth: '8%', height: 'auto', marginTop: '26.3%',  marginLeft: this.end_left, transition: 'opacity 0.5s', opacity: this.frown_opacity_2}" />
                <img :src="require('../../assets/Instructions/Want More Dots/Want More/Want Smile Big.png')" v-bind:style="{ position: 'absolute', maxWidth: '8%', height: 'auto', marginTop: '43.66%',  marginLeft: this.end_right, transition: 'opacity 0.5s', opacity: this.frown_opacity_3}" />
                <!-- These eyes flip and occlude the avatars normal eyes -->
                <img :src="require('../../assets/Instructions/Want More Dots/Want More/Eyes 90.png')" v-bind:style="{ position: 'absolute', maxWidth: '8%', height: 'auto', marginTop: '8.85%', opacity: this.show_avatar, transition: 'margin-left 0.5s', marginLeft: this.shift_right1, transform: this.trans_1  }" />
                <img :src="require('../../assets/Instructions/Want More Dots/Want More/Eyes 180.png')" v-bind:style="{ position: 'absolute', maxWidth: '8%', height: 'auto', marginTop: '26.3%',  marginLeft: this.shift_left, transition: 'margin-left 0.5s', transform: this.trans_2  }" />
                <img :src="require('../../assets/Instructions/Want More Dots/Want More/Eyes 90.png')" v-bind:style="{ position: 'absolute', maxWidth: '8%', height: 'auto', marginTop: '43.7%',  marginLeft: this.shift_right2, transform: this.trans_3, transition: 'margin-left 0.5s',}" />

              </div>
                
          </div>
      </b-container>
        <b-button @click="this.resetAnimation" v-b-modal.modal-center-WantMoreDots variant="outline-primary" size="lg" :disabled="hold">Back</b-button>   
        <b-button style="float: right;" @click="this.resetAnimation" :variant="ButtonColor" size="lg" v-b-modal.modal-center-CommKnow :disabled="hold">Next</b-button>
    </b-modal>
</template>

<script>

    export default {
        name: 'WantMoreDots',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                ButtonColor: "outline-primary",
                SpaceColor: "outline-secondary",
                dot_size: "7%",
                avatar_size: "5%",
                show_avatar: "100%",
                shift_left: "43.3%",
                shift_right1: "43.3%",
                shift_right2: "43.3%",

                end_left: "36%",
                end_right: "50.6%",
                frown_size: '3%',
                frown_opacity_1: '0%',
                frown_opacity_2: '0%',
                frown_opacity_3: '0%',
                trans_1: 'scaleX(-1)',
                trans_2: 'scaleX(-1)',
                trans_3: 'scaleX(-1)',
                locked: true,
                mutex: false,
                hold: true
            }
        },
        computed: {
        },
        mounted() {
            this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
            // eslint-disable-next-line no-console
            // console.log('Modal is about to be shown', bvEvent, modalId)
            if (modalId != "modal-center-WantMoreDots") {
                return;
            }
            if (this.mutex == true) {
                return
            }
            this.mutex = true;
            setTimeout(() => this.animate(), 1500); 
            // This prevents skipping through pages too quickly.
            setTimeout(() => this.hold = false, 1000);
            })
        },
        beforeDestroy() {
            
        },
        methods: {
            resetAnimation() {
                this.$bvModal.hide('modal-center-WantMoreDots')
                this.locked = true
                this.hold = true
                this.shift_left = "43.3%"
                this.shift_right1 = "43.3%"
                this.shift_right2 = "43.3%"
                this.frown_opacity_1 = '0%'
                this.frown_opacity_2 = '0%'
                this.frown_opacity_3 = '0%'
                this.trans_1 = 'scaleX(-1)'
                this.trans_2 = 'scaleX(-1)'
                this.trans_3 = 'scaleX(-1)'
                this.ButtonColor = "outline-primary"
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
                setTimeout(() => this.shift_right1 = "50.6%", 1200);
                setTimeout(() => this.frown_opacity_1 = "100%", 1500);
            },
            animate_frown_2(){
                this.trans_2 = 'scaleX(1)'
                setTimeout(() => this.trans_2 = 'scaleX(-1)', 200);
                setTimeout(() => this.trans_2 = 'scaleX(1)', 400);
                setTimeout(() => this.trans_2 = 'scaleX(-1)', 600);
                setTimeout(() => this.trans_2 = 'scaleX(1)', 800);
                setTimeout(() => this.shift_left = "36%", 1200);
                setTimeout(() => this.frown_opacity_2 = "100%", 1500);
            },
            animate_frown_3(){
                this.trans_3 = 'scaleX(1)'
                setTimeout(() => this.trans_3 = 'scaleX(-1)', 200);
                setTimeout(() => this.trans_3 = 'scaleX(1)', 400);
                setTimeout(() => this.trans_3 = 'scaleX(-1)', 600);
                setTimeout(() => this.trans_3 = 'scaleX(1)', 800);
                setTimeout(() => this.shift_right2 = "50.6%", 1200);
                setTimeout(() => this.frown_opacity_3 = "100%", 1500);
                setTimeout(() => this.locked = false, 1800);
                setTimeout(() => this.mutex = false, 1800);

                setTimeout(() => this.hold = false, 1000);

                // This changes the button to green!
                setTimeout(() => {parent.ButtonColor = "success";}, 3500);
                setTimeout(() => {parent.ButtonColor = "outline-primary";}, 4000);
                setTimeout(() => {parent.ButtonColor = "success";}, 4500);
            },
        },
    }
</script>


<style scoped>
</style>