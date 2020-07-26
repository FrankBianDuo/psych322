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
               <img :src="require(`../../assets/tutorials/Game Flow/Game Glow 01.png`)" v-bind:style="{ maxWidth: '30%', marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/Game Glow 02.png`)" v-bind:style="{ maxWidth: '30%', marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/Game Glow 03.png`)" v-bind:style="{ maxWidth: '30%', marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/Game Glow 04.png`)" v-bind:style="{ maxWidth: '30%', marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/Game Glow 05.png`)" v-bind:style="{ maxWidth: '30%', marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/Game Glow 06.png`)" v-bind:style="{ maxWidth: '30%', marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/Game Glow 07.png`)" v-bind:style="{ maxWidth: '30%', marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/Game Glow 08.png`)" v-bind:style="{ maxWidth: '30%', marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.5s' }"/>

               <!-- TEXT -->
               <img :src="require(`../../assets/tutorials/Game Flow/t1.png`)" v-bind:style="{ maxWidth: '40%', marginTop: '38%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_t1, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/t2.png`)" v-bind:style="{ maxWidth: '60%', marginTop: '5%',  height: 'auto', transform: 'translate(-60%, 0)', position: 'absolute', opacity: this.opacity_t2, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/t3.png`)" v-bind:style="{ maxWidth: '80%', marginTop: '3%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_t3, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/t4.png`)" v-bind:style="{ maxWidth: '80%', marginTop: '3%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_t4, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/t5.png`)" v-bind:style="{ maxWidth: '80%', marginTop: '3%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_t5, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/t6.png`)" v-bind:style="{ maxWidth: '80%', marginTop: '3%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_t6, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/t7.png`)" v-bind:style="{ maxWidth: '80%', marginTop: '2%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_t7, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Game Flow/t8.png`)" v-bind:style="{ maxWidth: '80%', marginTop: '3%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_t8, transition: 'opacity 0.5s' }"/>
               
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial30',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "30",
                block_listeners: false,
                space_listener: false,
                opacity_1: '100%',
                opacity_2: '0%',
                opacity_3: '0%',
                opacity_4: '0%',
                opacity_5: '0%',
                opacity_6: '0%',
                opacity_7: '0%',
                opacity_8: '0%',
                opacity_t1: '100%',
                opacity_t2: '0%',
                opacity_t3: '0%',
                opacity_t4: '0%',
                opacity_t5: '0%',
                opacity_t6: '0%',
                opacity_t7: '0%',
                opacity_t8: '0%',
                slideSpeed: 1000,
            }
        },
        created: function () {
            let parent = this
            window.addEventListener('keyup', function(event) {
                if (parent.show) {
                    if (parent.block_listeners == true) {
                        return;
                    } 
                    if (event.keyCode == 32) {
                        if (parent.space_listener == true) {
                            return;
                        } 
                        // Space
                        parent.space_listener = true
                        parent.block_listeners = true
                        parent.spaceEvent();
                    } else if (event.keyCode == 90) {
                        // Prediction Z
                        parent.block_listeners = true
                        parent.zEvent();
                    } else if (event.keyCode == 65) {
                        // Prediction A
                        parent.block_listeners = true
                        parent.aEvent();
                    }
                } 
            });
        },
        computed: {
            page_id() {
                return "modal-center-instruction" + this.page_num
            },
            center_title() {
                return "True or False Question " + this.page_num
            },
        },
        mounted() {
            // this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
            // // eslint-disable-next-line no-console
            // // console.log('Modal is about to be shown', bvEvent, modalId)
            // if (modalId != "modal-center-instruction" + this.page_num) {
            //     return;
            // }
            // if (this.mutex == true) {
            //     return
            // }
            // this.mutex = true;
            // })
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
            reset() {
                this.block_listeners = false
                this.space_listener = false
                this.opacity_1 = '100%'
                this.opacity_2 = '0%'
                this.opacity_3 = '0%'
                this.opacity_4 = '0%'
                this.opacity_5 = '0%'
                this.opacity_6 = '0%'
                this.opacity_7 = '0%'
                this.opacity_8 = '0%'
                this.opacity_t1 = '100%'
                this.opacity_t2 = '0%'
                this.opacity_t3 = '0%'
                this.opacity_t4 = '0%'
                this.opacity_t5 = '0%'
                this.opacity_t6 = '0%'
                this.opacity_t7 = '0%'
                this.opacity_t8 = '0%'
            },
            spaceEvent() {
                let parent = this
                this.opacity_1 = '0%'
                this.opacity_t1 = '0%'
                this.opacity_2 = '100%'
                setTimeout(() => {parent.opacity_2 = '0%'; parent.opacity_3 = '100%'}, 1500);
                setTimeout(() => {parent.opacity_t2 = '100%'}, 1500);
                setTimeout(() => {parent.followUp1()}, 2000);
            },
            followUp1() {
                let parent = this
                parent.opacity_t2 = '0%'
                parent.opacity_t3 = '100%'
                parent.opacity_3 = '0%'
                parent.opacity_4 = '100%'
                setTimeout(() => {parent.followUp2()}, this.slideSpeed);
            },
            followUp2() {
                // make it stop plz 
                let parent = this
                parent.opacity_t3 = '0%'
                parent.opacity_t4 = '100%'
                parent.opacity_4 = '0%'
                parent.opacity_3 = '100%'
                setTimeout(() => {parent.followUp3()}, this.slideSpeed);
            },
            followUp3() {
                let parent = this
                parent.opacity_t4 = '0%'
                parent.opacity_t5 = '100%'
                parent.opacity_3 = '0%'
                parent.opacity_5 = '100%'
                setTimeout(() => {parent.followUp4()}, this.slideSpeed);
            },
            followUp4() {
                let parent = this
                parent.opacity_t5 = '0%'
                parent.opacity_t6 = '100%'
                parent.opacity_5 = '0%'
                parent.opacity_6 = '100%'
                setTimeout(() => {parent.followUp5()}, this.slideSpeed);
            },
            followUp5() {
                let parent = this
                parent.opacity_t6 = '0%'
                parent.opacity_t7 = '100%'
                parent.block_listeners = false
                parent.space_listener = true
                // End of slides here
            },
            zEvent() {
                this.opacity_6 = '0%'
                this.opacity_8 = '100%'
                let parent = this
                setTimeout(() => {parent.end()}, this.slideSpeed);
            },
            aEvent() {
                this.opacity_6 = '0%'
                this.opacity_7 = '100%'
                let parent = this
                setTimeout(() => {parent.end()}, this.slideSpeed);
            },
            end() {
                this.opacity_7 = '0%'
                this.opacity_8 = '0%'
                this.opacity_6 = '100%'
                this.opacity_t7 = '0%'
                this.opacity_t8 = '100%'
            }
            
        },
    }
</script>


<style scoped>
</style>