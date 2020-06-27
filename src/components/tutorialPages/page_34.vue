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
               <img :src="require(`../../assets/tutorials/You Don_t Know/YDK 1.png`)" v-bind:style="{ maxWidth: this.img_size, marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/You Don_t Know/YDK 2.png`)" v-bind:style="{ maxWidth: this.img_size, marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.5s' }"/>

               <!-- TEXT -->
               <img :src="require(`../../assets/tutorials/You Don_t Know/t2.png`)" v-bind:style="{ maxWidth: '80%', marginTop: '2%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_t1, transition: 'opacity 0.5s' }"/>
               
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial34',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                img_size: "70%",
                page_num: "34",
                block_listeners: false,
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
                mutex: false,
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
                this.$bvModal.show("modal-center-instruction" + ((Number(this.page_num) + 1).toString()))
            },
            animate() {
                this.opacity_1 = "0%"
                this.opacity_2 = "100%"
            }
        },
    }
</script>


<style scoped>
</style>