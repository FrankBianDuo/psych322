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
               <img :src="require('../../assets/tutorials/Page9.png')" v-bind:style="{ maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_base, transition: this.transpeed }"/>

               <!-- Prediction (Looking away phase) -->
               <img :src="require(`../../assets/tutorials/Prediction Practice/PP Black Left ${this.sequence[this.iter]}.png`)" v-bind:style="{ maxWidth: '40%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', marginTop: '5%', opacity: this.opacity_1, transition: this.transpeed }"/>
               <img :src="require(`../../assets/tutorials/Prediction Practice/PP Pred Down ${this.sequence[this.iter]}.png`)" v-bind:style="{ maxWidth: '40%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', marginTop: '5%', opacity: this.opacity_down, transition: this.transpeed }"/>
               <img :src="require(`../../assets/tutorials/Prediction Practice/PP Pred Up ${this.sequence[this.iter]}.png`)" v-bind:style="{ maxWidth: '40%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', marginTop: '5%', opacity: this.opacity_up, transition: this.transpeed }"/>

               <!-- Avatar Choice (Looking at dots phase) -->
               <img :src="require(`../../assets/tutorials/Prediction Practice/PP Black Right ${this.sequence[this.iter]}.png`)" v-bind:style="{ maxWidth: '40%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', marginTop: '5%', opacity: this.opacity_4, transition: this.transpeed }"/>
               <img :src="require(`../../assets/tutorials/Prediction Practice/PP Choice ${this.sequence[this.iter]}.png`)" v-bind:style="{ maxWidth: '40%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', marginTop: '5%', opacity: this.opacity_5, transition: this.transpeed }"/>

            </div>
              
      </b-container>
        <b-button :disabled="true" variant="outline-primary" size="lg">Back</b-button>
        <b-button :disabled="true" style="float: right;" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial9',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                show: false,
                page_num: "9",
                block_listeners: false,
                sequence: ['1', '2', '3', '4'],
                iter: 0,
                opacity_base: '100%',
                opacity_1: '0%',
                opacity_down: '0%',
                opacity_up: '0%',
                opacity_4: '0%',
                opacity_5: '0%',
                transpeed: 'opacity 0.8s',
            }
        },
        created: function () {
            let parent = this
            window.addEventListener('keyup', function(event) {
            // eslint-disable-next-line no-console
            if (parent.show) {
                if (parent.block_listeners == true) {
                    return;
                } 
                if (parent.iter >= 4) {
                    return;
                }
                if (event.keyCode == 65) {
                    // Prediction A
                    parent.block_listeners = true
                    parent.predict('A');
                } else if (event.keyCode == 90) {
                    // Prediction Z
                    parent.block_listeners = true
                    parent.predict('Z');
                }
            } 
            });
        },
        computed: {
            page_id() {
                return "modal-center-instruction" + this.page_num
            },
            center_title() {
                return "Instructions page " + this.page_num
            },
        },
        methods: {
            reset() {
                this.opacity_base = '100%'
                this.opacity_1 = '0%'
                this.opacity_down = '0%'
                this.opacity_up = '0%'
                this.opacity_4 = '0%'
                this.opacity_5 = '0%'
            },
            // Animate() {
                
            // },
            predict(key) {
                let parent = this
                if (this.iter == 0) {
                    this.opacity_base = "0%"
                }
                if (key == 'A') {
                    this.opacity_up = "100%"
                }
                else {
                    this.opacity_down = "100%"
                }
                setTimeout(() => { parent.animate_1() }, 2000);
                setTimeout(() => { parent.animate_2() }, 4000);
                setTimeout(() => { parent.animate_reset() }, 6000);
                setTimeout(() => { parent.block_listeners = false }, 7000);
                return "Instructions page " + this.page_num
            },
            animate_1() {
                this.opacity_down = "0%"
                this.opacity_up = "0%"
                this.opacity_4 = "100%"
            },
            animate_2() {
                this.opacity_4 = "0%"
                this.opacity_5 = "100%"
            },
            animate_reset() {
                this.opacity_5 = "0%"
                this.opacity_1 = "100%"
                this.iter += 1
            }
        },
    }
</script>


<style scoped>
</style>