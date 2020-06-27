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
              <!-- SQUARES AND NUMS -->
               <img @click="this.event_1" :src="require(`../../assets/tutorials/Squares and Numbers/Square ${this.color_1} ${this.num_1}.png`)" v-bind:style="{ maxWidth: '20%', height: 'auto', marginTop: this.square_top, marginLeft: this.square_left, transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
               <img @click="this.event_2" :src="require(`../../assets/tutorials/Squares and Numbers/Square ${this.color_2} ${this.num_2}.png`)" v-bind:style="{ maxWidth: '20%', height: 'auto', marginTop: this.square_top, marginLeft: this.square_right, transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
               <img @click="this.event_3" 
               :src="require(`../../assets/tutorials/Squares and Numbers/Square ${this.color_3} ${this.num_3}.png`)" 
               v-bind:style="{ maxWidth: '20%', height: 'auto', marginTop: this.square_bot, 
               marginLeft: this.square_left, transform: 'translate(-50%, 0)', 
               position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>
               <img @click="this.event_4" :src="require(`../../assets/tutorials/Squares and Numbers/Square ${this.color_4} ${this.num_4}.png`)" v-bind:style="{ maxWidth: '20%', height: 'auto', marginTop: this.square_bot, marginLeft: this.square_right, transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>

               <!-- TEXT -->
               <img :src="require(`../../assets/tutorials/How Many/${this.center_text}.png`)" v-bind:style="{ maxWidth: '20%', height: 'auto', marginTop: '10%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>

               <!-- CENTER STUFF -->
               <img :src="require(`../../assets/tutorials/Center Stuff/${this.center_img}.png`)" v-bind:style="{ maxWidth: '20%', height: 'auto', marginTop: '20%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/>

            </div>
              
      </b-container>
        <b-button @click="this.reset_animation_back" variant="outline-primary" size="lg">Back</b-button>
        <b-button @click="this.reset_animation_next" style="float: right;" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Tutorial49',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "49",
                square_left: "-22%",
                square_right: "22%",
                square_top: "2%",
                square_bot: "25%",
                center_text: "Think They Get",
                center_img: 'Selfish Give 3',
                color_1: 'Blank',
                color_2: 'Blank',
                color_3: 'Blank',
                color_4: 'Blank',
                num_1: '1',
                num_2: '2',
                num_3: '4',
                num_4: '3',
                // 1 2
                // 3 4 
                right_ans: 3,
                mutex: false,
                lock: true,
                ans_received: null,
                ans_lock: true,
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

                this.ans_lock = false;
            },
            event_1() {
                if (this.ans_lock) {
                    return
                }
                this.ans_lock = true
                this.ans_received = 1
                if (this.right_ans == 1) {
                    this.color_1 = 'Green'
                }
                else {
                    this.color_1 = 'Red'
                }
                setTimeout(() => this.reveal(), 500);
            },
            event_2() {
                if (this.ans_lock) {
                    return
                }
                this.ans_lock = true
                this.ans_received = 2
                if (this.right_ans == 2) {
                    this.color_2 = 'Green'
                }
                else {
                    this.color_2 = 'Red'
                }
                setTimeout(() => this.reveal(), 500);
            },
            event_3() {
                if (this.ans_lock) {
                    return
                }
                this.ans_lock = true
                this.ans_received = 3
                if (this.right_ans == 3) {
                    this.color_3 = 'Green'
                }
                else {
                    this.color_3 = 'Red'
                }
                setTimeout(() => this.reveal(), 500);
            },
            event_4() {
                if (this.ans_lock) {
                    return
                }
                this.ans_lock = true
                this.ans_received = 4
                if (this.right_ans == 4) {
                    this.color_4 = 'Green'
                }
                else {
                    this.color_4 = 'Red'
                }
                setTimeout(() => this.reveal(), 500);
            },
            reveal() {
                if (this.ans_received == this.right_ans) {
                    return
                }
                if (this.right_ans == 1) {
                    this.color_1 = "Green"
                }
                if (this.right_ans == 2) {
                    this.color_2 = "Green"
                }
                if (this.right_ans == 3) {
                    this.color_3 = "Green"
                }
                if (this.right_ans == 4) {
                    this.color_4 = "Green"
                }
            }
            
        },
    }
</script>


<style scoped>
</style>