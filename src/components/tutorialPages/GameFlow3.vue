<template>
  <b-modal
    id="modal-center-GameFlow3"
    size="xl"
    centered
    title="Page x"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <img
          :src="require('../../assets/Instructions/Game Flow/GF01a.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GF01b.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GF02a.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GF01t.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GF02t.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GF03t.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GF04t.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFaz.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFjk.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFbarr1.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFbarr2.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFbarr3.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFcontrol.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFgk.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFkc.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFpredup.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFpreddn.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFeyeleft.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFeyeright.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFd1.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFd2.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFd2b.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFd3.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFd3b.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFd4.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_25, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFd4b.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_26, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GFd5.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_27, transition: 'opacity 0.0s' }"
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
  name: "GameFlow3",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      opacity_1: "100%",
      opacity_2: "0%",
      opacity_3: "0%",
      opacity_4: "0%",
      opacity_5: "0%",
      opacity_6: "0%",
      opacity_7: "0%",
      opacity_8: "0%",
      opacity_9: "0%",
      opacity_10: "0%",
      opacity_11: "0%",
      opacity_12: "0%",
      opacity_13: "0%",
      opacity_14: "0%",
      opacity_15: "0%",
      opacity_16: "0%",
      opacity_17: "0%",
      opacity_18: "0%",
      opacity_19: "0%",
      opacity_20: "0%",
      opacity_21: "0%",
      opacity_22: "0%",
      opacity_23: "0%",
      opacity_24: "0%",
      opacity_25: "0%",
      opacity_26: "0%",
      opacity_27: "0%",
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
      if (modalId != "modal-center-GameFlow3") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      setTimeout(() => this.animate(), 500);
    });
  },
  methods: {
    reset_animation_back() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-GameFlow4");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Knowledge2");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-GameFlow5");
      this.opacity_1 = "100%";
      this.opacity_2 = "0%";
      this.opacity_3 = "0%";
      this.opacity_4 = "0%";
      this.opacity_5 = "0%";
      this.opacity_6 = "0%";
      this.opacity_7 = "0%";
      this.opacity_8 = "0%";
      this.opacity_9 = "0%";
      this.opacity_10 = "0%";
      this.opacity_11 = "0%";
      this.opacity_12 = "0%";
      this.opacity_13 = "0%";
      this.opacity_14 = "0%";
      this.opacity_15 = "0%";
      this.opacity_16 = "0%";
      this.opacity_17 = "0%";
      this.opacity_18 = "0%";
      this.opacity_19 = "0%";
      this.opacity_20 = "0%";
      this.opacity_21 = "0%";
      this.opacity_22 = "0%";
      this.opacity_23 = "0%";
      this.opacity_24 = "0%";
      this.opacity_25 = "0%";
      this.opacity_26 = "0%";
      this.opacity_27 = "0%";
      this.locked = true;
      this.mutex = false;
      this.finishanimate = false;
    },
    animate() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_4 = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_1 = "0%";
        parent.opacity_2 = "100%";
      }, 2500);
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