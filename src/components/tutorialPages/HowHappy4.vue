<template>
  <b-modal
    id="modal-center-HowHappy4"
    size="xl"
    centered
    title="Instruction Page 6 of 30"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <!-- Avatar 1-3 opacity 1-3 -->
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/av1.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/av2.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.5s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/av3.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.5s' }"
        />

        <!-- Boxes 1-3 opacity 4-6 -->
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/box1.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.7s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/box2.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.7s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/box3.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.7s' }"
        />

        <!-- Choices 1-3 opacity 7-9 -->
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/choice1.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/choice2.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/choice3.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.0s' }"
        />

        <!-- Text 1-2 opacity 10-12 -->
        <img
          :src="require('../../assets/Instructions/HowHappy/text4a.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.0s' }"
        />
        <!-- <img :src="require('../../assets/Instructions/HowHappy/text3b.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.3s' }"/>
        <img :src="require('../../assets/Instructions/HowHappy/text3c.png')" v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.3s' }"/>-->

        <!-- Time 1-3 opacity 13-15 -->
        <img
          :src="require('../../assets/Instructions/HowHappy/time1.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/time2.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/time3.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.0s' }"
        />

        <!-- Eyes 1-3 opacity 16-18 -->
        <img
          :src="require('../../assets/Instructions/HowHappy/eyes1.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/eyes2.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/eyes3.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.0s' }"
        />

        <!-- Dots 1a+b - 3a+b opacity 19 - 24 -->
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/dots1a.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.1s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/dots1b.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.1s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/dots2a.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.1s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/dots2b.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.1s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/dots3a.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 0.1s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/dots3b.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 0.1s' }"
        />

        <!-- Smiles 1-3 opacity 25 - 27 -->
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/smiles1.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_25, transition: 'opacity 0.1s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/smiles2.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_26, transition: 'opacity 0.1s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/smiles3.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_27, transition: 'opacity 0.1s' }"
        />

        <!-- Dots 1a+b - 3a+b opacity 28 - 30 -->
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/dots1b.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_28, transition: 'opacity 3.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/dots2b.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_29, transition: 'opacity 3.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowHappy/Tripple/dots3b.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_30, transition: 'opacity 3.0s' }"
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
  name: "HowHappy4",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      opacity_1: "100%",
      opacity_2: "100%",
      opacity_3: "100%",
      opacity_4: "100%",
      opacity_5: "100%",
      opacity_6: "100%",
      opacity_7: "100%",
      opacity_8: "100%",
      opacity_9: "100%",
      opacity_10: "100%",
      opacity_11: "0%",
      opacity_12: "0%",
      opacity_13: "0%",
      opacity_14: "0%",
      opacity_15: "0%",
      opacity_16: "0%",
      opacity_17: "0%",
      opacity_18: "0%",
      opacity_19: "100%",
      opacity_20: "100%",
      opacity_21: "100%",
      opacity_22: "100%",
      opacity_23: "100%",
      opacity_24: "100%",
      opacity_25: "100%",
      opacity_26: "100%",
      opacity_27: "100%",
      opacity_28: "0%",
      opacity_29: "0%",
      opacity_30: "0%",

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
      if (modalId != "modal-center-HowHappy4") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      setTimeout(() => this.animate(), 250);
    });
  },
  methods: {
    reset_animation_back() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-HowHappy3");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-HowKnow1");
    },

    resetAnimation() {
      this.$bvModal.hide("modal-center-HowHappy4");
      this.opacity_1 = "100%";
      this.opacity_2 = "100%";
      this.opacity_3 = "100%";
      this.opacity_4 = "100%";
      this.opacity_5 = "100%";
      this.opacity_6 = "100%";
      this.opacity_7 = "100%";
      this.opacity_8 = "100%";
      this.opacity_9 = "100%";
      this.opacity_10 = "100%";
      this.opacity_11 = "0%";
      this.opacity_12 = "0%";
      this.opacity_13 = "0%";
      this.opacity_14 = "0%";
      this.opacity_15 = "0%";
      this.opacity_16 = "0%";
      this.opacity_17 = "0%";
      this.opacity_18 = "0%";
      this.opacity_19 = "100%";
      this.opacity_20 = "100%";
      this.opacity_21 = "100%";
      this.opacity_22 = "100%";
      this.opacity_23 = "100%";
      this.opacity_24 = "100%";
      this.opacity_25 = "100%";
      this.opacity_26 = "100%";
      this.opacity_27 = "100%";
      this.opacity_28 = "0%";
      this.opacity_29 = "0%";
      this.opacity_30 = "0%";

      this.locked = true;
      this.mutex = false;
      this.finishanimate = false;
    },
    animate() {
      let parent = this;
      //setTimeout(() => {parent.opacity_19 = "100%"}, 1800);
      setTimeout(() => {
        parent.opacity_4 = "0%";
        parent.opacity_5 = "0%";
        parent.opacity_6 = "0%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_16 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_16 = "0%";
        parent.opacity_17 = "100%";
      }, 2250);
      setTimeout(() => {
        parent.opacity_17 = "0%";
        parent.opacity_18 = "100%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_18 = "0%";
        parent.opacity_16 = "100%";
      }, 2750);
      setTimeout(() => {
        parent.opacity_16 = "0%";
        parent.opacity_17 = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_17 = "0%";
        parent.opacity_18 = "100%";
      }, 3250);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      // Disables BACK NEXT buttons until animation finishes at 1 seconds.
      setTimeout(() => {
        parent.finishanimate = false;
      }, 4000);
    },
  },
};
</script>

<style scoped>
</style>