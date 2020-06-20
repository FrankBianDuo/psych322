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
               <img :src="require(`../../assets/tutorials/Control/Control Tree 1.png`)" v-bind:style="{ maxWidth: '50%', marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Control/Control Tree 2.png`)" v-bind:style="{ maxWidth: '50%', marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Control/Control Tree 3.png`)" v-bind:style="{ maxWidth: '50%', marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Control/Control Tree 4.png`)" v-bind:style="{ maxWidth: '50%', marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Control/Control Tree 5.png`)" v-bind:style="{ maxWidth: '50%', marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.5s' }"/>

               <!-- TEXT -->
               <img :src="require(`../../assets/tutorials/Control/t1.png`)" v-bind:style="{ maxWidth: '80%', marginTop: '3%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_t1, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Control/t2.png`)" v-bind:style="{ maxWidth: '80%', marginTop: '3%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_t2, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/Control/t3.png`)" v-bind:style="{ maxWidth: '80%', marginTop: '3%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_t3, transition: 'opacity 0.5s' }"/>
               
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial31',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "31",
                block_listeners: false,
                space_listener: false,
                opacity_1: '100%',
                opacity_2: '0%',
                opacity_3: '0%',
                opacity_4: '0%',
                opacity_5: '0%',
                opacity_6: '0%',
                opacity_7: '0%',
                opacity_8: '100%',
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
            console.log('Modal is about to be shown', bvEvent, modalId)
            if (modalId != "modal-center-instruction" + this.page_num) {
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
            reset_animation_back() {
                this.$bvModal.hide("modal-center-instruction" + this.page_num)
                this.$bvModal.show("modal-center-instruction" + ((Number(this.page_num) - 1).toString()))
            },
            reset_animation_next() {
                this.$bvModal.hide("modal-center-instruction" + this.page_num)
                this.$bvModal.show("modal-center-instruction" + ((Number(this.page_num) - 1).toString()))
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
            animate() {
                this.opacity_1 = "0%"
                this.opacity_t1 = "0%"
                this.opacity_2 = "100%"
                this.opacity_t2 = "100%"
                setTimeout(() => {this.followUp1()}, this.slideSpeed);
            },
            followUp1() {
                let parent = this
                parent.opacity_t2 = '0%'
                parent.opacity_2 = '0%'
                parent.opacity_3 = '100%'
                parent.opacity_t3 = '100%'
                setTimeout(() => {parent.loop1()}, this.slideSpeed);
            },
            loop1() {
                this.opacity_3 = '0%'
                this.opacity_4 = '100%'
                setTimeout(() => {this.loop2()}, this.slideSpeed);
            },
            loop2() {
                this.opacity_4 = '0%'
                this.opacity_5 = '100%'
                setTimeout(() => {this.loop3()}, this.slideSpeed);
            },
            loop3() {
                this.opacity_5 = '0%'
                this.opacity_3 = '100%'
                setTimeout(() => {this.loop1()}, this.slideSpeed);
            },
        },
    }
</script>


<style scoped>
</style>