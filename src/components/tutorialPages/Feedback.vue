<template>
  <b-modal
    id="modal-center-Feedback"
    size="xl"
    centered
    title="Feedback"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <img
          :src="require('../../assets/Instructions/Feedback/Feedback 1.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Feedback/Feedback 2.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Feedback/Feedback 3.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"
        />
      </div>
    </b-container>
    <!-- <b-button @click="$bvModal.hide(`modal-center-Feedback`)" v-b-modal.modal-center-Control3 variant="outline-primary" size="lg">Back</b-button>
    <b-button @click="$bvModal.hide(`modal-center-Feedback`)" v-b-modal.modal-center-Knowledge1 style="float: right;" variant="outline-primary" size="lg">Next</b-button>-->
    <b-button
      @click="this.reset_animation_back"
      variant="outline-primary"
      :disabled="finishanimate"
      size="lg"
    >Back</b-button>
    <b-button
      @click="this.reset_animation_next"
      style="float: right;"
      variant="outline-primary"
      :disabled="finishanimate"
      size="lg"
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "Feedback",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      opacity_1: "100%",
      opacity_2: "0%",
      opacity_3: "0%",
      mutex: false,
      finishanimate: true,
    };
  },
  computed: {
    page_id() {
      return "modal-center-instruction" + this.page_num;
    },
    center_title() {
      return "Instructions page " + this.page_num;
    },
  },
  mounted() {
    this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
      // eslint-disable-next-line no-console
      // console.log('Modal is about to be shown', bvEvent, modalId)
      if (modalId != "modal-center-Feedback") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      setTimeout(() => this.animate(), 300);
    });
  },
  methods: {
    reset_animation_back() {
      //this.$bvModal.hide("modal-center-instruction" + this.page_num)  // this.$bvModal.hide(this current page)
      this.resetAnimation();
      this.$bvModal.show("modal-center-Control3"); //this.$bvModal.show(previous page)
    },
    reset_animation_next() {
      //this.$bvModal.hide("modal-center-instruction" + this.page_num)
      this.resetAnimation();
      this.$bvModal.show("modal-center-Knowledge1");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-Feedback");
      this.opacity_1 = "100%";
      this.opacity_2 = "0%";
      this.opacity_3 = "0%";
      this.locked = true;
      this.mutex = false;
      this.finishanimate = false;
    },
    animate() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_1 = "0%";
        parent.opacity_2 = "100%";
      }, 300);
      setTimeout(() => {
        parent.opacity_2 = "0%";
        parent.opacity_3 = "100%";
      }, 400);
      setTimeout(() => {
        parent.opacity_3 = "0%";
        parent.opacity_2 = "100%";
      }, 500);
      setTimeout(() => {
        parent.opacity_2 = "0%";
        parent.opacity_3 = "100%";
      }, 600);
      setTimeout(() => {
        parent.opacity_3 = "0%";
        parent.opacity_2 = "100%";
      }, 700);
      setTimeout(() => {
        parent.opacity_2 = "0%";
        parent.opacity_3 = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_3 = "0%";
        parent.opacity_2 = "100%";
      }, 900);
      setTimeout(() => {
        parent.opacity_2 = "0%";
        parent.opacity_3 = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_3 = "0%";
        parent.opacity_2 = "100%";
      }, 1100);
      setTimeout(() => {
        parent.opacity_2 = "0%";
        parent.opacity_1 = "100%";
      }, 1200);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      // Disables BACK NEXT buttons until animation finishes at 1.8 seconds.
      setTimeout(() => {
        parent.finishanimate = false;
      }, 1800);
    },
  },
};
</script>


<style scoped>
</style>