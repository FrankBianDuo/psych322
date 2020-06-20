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
               <img :src="require(`../../assets/tutorials/You Don_t Know/YDK DD 1.png`)" v-bind:style="{ maxWidth: this.img_size, marginTop: '20%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/You Don_t Know/YDK DD 2.png`)" v-bind:style="{ maxWidth: this.img_size, marginTop: '20%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/You Don_t Know/YDK DD 3.png`)" v-bind:style="{ maxWidth: this.img_size, marginTop: '20%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/You Don_t Know/YDK DD 4.png`)" v-bind:style="{ maxWidth: this.img_size, marginTop: '20%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/You Don_t Know/YDK DD 5.png`)" v-bind:style="{ maxWidth: this.img_size, marginTop: '20%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/You Don_t Know/YDK DD 6.png`)" v-bind:style="{ maxWidth: this.img_size, marginTop: '20%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.5s' }"/>
               <img :src="require(`../../assets/tutorials/You Don_t Know/YDK DD 7.png`)" v-bind:style="{ maxWidth: this.img_size, marginTop: '20%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.5s' }"/>
               

               <!-- TEXT -->
               <img :src="require(`../../assets/tutorials/You Don_t Know/t3.png`)" v-bind:style="{ maxWidth: '80%', marginTop: '2%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_t1, transition: 'opacity 0.5s' }"/>
               
            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial35',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                img_size: "50%",
                page_num: "35",
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
                this.$bvModal.show("modal-center-instruction" + ((Number(this.page_num) - 1).toString()))
            },
            animate() {
                this.opacity_1 = "0%"
                this.opacity_2 = "100%"
                setTimeout(() => this.animate1(), this.slideSpeed);
            },
            animate1() {
                this.opacity_2 = "0%"
                this.opacity_3 = "100%"
                setTimeout(() => this.animate2(), this.slideSpeed);
            },
            animate2() {
                this.opacity_3 = "0%"
                this.opacity_4 = "100%"
                setTimeout(() => this.animate3(), this.slideSpeed);
            },
            animate3() {
                this.opacity_4 = "0%"
                this.opacity_5 = "100%"
                setTimeout(() => this.animate4(), this.slideSpeed);
            },
            animate4() {
                this.opacity_5 = "0%"
                this.opacity_6 = "100%"
                setTimeout(() => this.animate5(), this.slideSpeed);
            },
            animate5() {
                this.opacity_6 = "0%"
                this.opacity_7 = "100%"
            },
        },
    }
</script>


<style scoped>
</style>