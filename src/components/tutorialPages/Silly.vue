<template>
  <b-modal
    id="modal-center-Silly"
    size="xl"
    centered
    title="This is just silly!"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <img
          :src="require('../../assets/Instructions/Common Knowledge/ck 01.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 5.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Common Knowledge/ck 02.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 5.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Common Knowledge/ck 03.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 5.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Common Knowledge/ck 04.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 5.0s' }"
        />
      </div>
    </b-container>
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
  name: "Silly",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      opacity_1: "100%",
      opacity_2: "0%",
      opacity_3: "0%",
      opacity_4: "0%",
      mutex: false,
      finishanimate: false,
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
      if (modalId != "modal-center-Silly") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      setTimeout(() => this.animate(), 250);
      this.$bvModal.show("modal-center-Silly");
    });
  },
  methods: {
    reset_animation_back() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Foolish");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Trystuffout");
    },

    resetAnimation() {
      this.$bvModal.hide("modal-center-Silly");
      this.opacity_1 = "100%";
      this.opacity_2 = "0%";
      this.opacity_3 = "0%";
      this.opacity_4 = "0%";
      this.locked = true;
      this.mutex = false;
      this.finishanimate = false;
    },
    animate() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_1 = "0%";
        parent.opacity_2 = "100%";
      }, 250);
      setTimeout(() => {
        parent.opacity_2 = "0%";
        parent.opacity_3 = "100%";
      }, 3250);
      setTimeout(() => {
        parent.opacity_3 = "0%";
        parent.opacity_4 = "100%";
      }, 6250);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      // Disables BACK NEXT buttons until animation finishes at 1 seconds.
      setTimeout(() => {
        parent.finishanimate = false;
      }, 1000);
    },
  },
};
</script>


<style scoped>
</style>