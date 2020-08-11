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
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <img
          :src="require(`../../assets/tutorials/Feedback/Feedback 1.png`)"
          v-bind:style="{ maxWidth: this.img_size, marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"
        />
        <img
          :src="require(`../../assets/tutorials/Feedback/Feedback 2.png`)"
          v-bind:style="{ maxWidth: this.img_size, marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.5s' }"
        />
        <img
          :src="require(`../../assets/tutorials/Feedback/Feedback 3.png`)"
          v-bind:style="{ maxWidth: this.img_size, marginTop: '15%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.5s' }"
        />

        <!-- TEXT -->
        <img
          :src="require(`../../assets/tutorials/Feedback/t32.png`)"
          v-bind:style="{ maxWidth: '80%', marginTop: '2%',  height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_t1, transition: 'opacity 0.5s' }"
        />
      </div>
    </b-container>
    <b-button @click="this.reset_animation_back" variant="outline-primary" size="lg">Back</b-button>
    <b-button
      @click="this.reset_animation_next"
      style="float: right;"
      variant="outline-primary"
      size="lg"
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "Tutorial32",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      img_size: "50%",
      page_num: "32",
      block_listeners: false,
      opacity_1: "100%",
      opacity_2: "0%",
      opacity_3: "0%",
      opacity_t1: "100%",
      slideSpeed: 1000,
    };
  },
  created: function () {
    let parent = this;
    window.addEventListener("keyup", function (event) {
      if (parent.show) {
        if (parent.block_listeners == true) {
          return;
        } else if (event.keyCode == 74) {
          // Prediction J
          parent.block_listeners = true;
          parent.jEvent();
        } else if (event.keyCode == 75) {
          // Prediction K
          parent.block_listeners = true;
          parent.kEvent();
        }
      }
    });
  },
  computed: {
    page_id() {
      return "modal-center-instruction" + this.page_num;
    },
    center_title() {
      return "Instructions page " + this.page_num;
    },
  },
  mounted() {},
  methods: {
    reset_animation_back() {
      this.$bvModal.hide("modal-center-instruction" + this.page_num);
      this.$bvModal.show(
        "modal-center-instruction" + (Number(this.page_num) - 1).toString()
      );
    },
    reset_animation_next() {
      this.$bvModal.hide("modal-center-instruction" + this.page_num);
      this.$bvModal.show(
        "modal-center-instruction" + (Number(this.page_num) + 1).toString()
      );
    },
    jEvent() {
      this.opacity_1 = "0%";
      this.opacity_2 = "100%";
      this.opacity_3 = "0%";
      setTimeout(() => (this.block_listeners = false), this.slideSpeed);
    },
    kEvent() {
      this.opacity_1 = "0%";
      this.opacity_3 = "100%";
      this.opacity_2 = "0%";
      setTimeout(() => (this.block_listeners = false), this.slideSpeed);
    },
  },
};
</script>


<style scoped>
</style>