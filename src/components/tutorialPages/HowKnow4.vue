<template>
  <b-modal
    id="modal-center-HowKnow4"
    size="xl"
    centered
    title="Instruction Page 10 of 30"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <!-- Boxes Arrows and Options opacity 1-6 -->
        <img
          :src="require('../../assets/Instructions/HowKnow/box1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/box2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/machine1a.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/machine2a.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/options1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/options2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.2s' }"
        />

        <!-- Dots opacity 7-8 -->
        <!-- <img :src="require('../../assets/Instructions/HowKnow/kchoice3.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.2s' }"/>
        <img :src="require('../../assets/Instructions/HowKnow/kchoice4.png')" v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.2s' }"/>-->
        <img
          :src="require('../../assets/Instructions/HowKnow/dots2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/dotsswitch.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 1.5s' }"
        />

        <!-- Avatar and Smiles opacity 9-13 -->
        <img
          :src="require('../../assets/Instructions/HowKnow/avatar6.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/psmile1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/psmile2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/pfrown1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/pfrown2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.2s' }"
        />

        <!-- AZ and predictions 14-16-->
        <img
          :src="require('../../assets/Instructions/HowKnow/az.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/pred1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.05s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/pred2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.05s' }"
        />

        <!-- Text 1-3 opacity 17-18 -->
        <img
          :src="require('../../assets/Instructions/HowKnow/text09.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/text10.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.2s' }"
        />

        <!-- Machines opacity 19-24 -->
        <img
          :src="require('../../assets/Instructions/HowKnow/machine1b.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/machine1c.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/machine1d.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/machine2b.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/machine2c.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/machine2d.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 0.2s' }"
        />

        <!-- Past Choices opacity 25-28 -->
        <img
          :src="require('../../assets/Instructions/HowKnow/mchoice1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_25, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/mchoice2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_26, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/mchoice3.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_27, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowKnow/mchoice4.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_28, transition: 'opacity 0.0s' }"
        />

        <img
          :src="require('../../assets/Instructions/HowKnow/score93.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_29, transition: 'opacity 0.4s' }"
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
  name: "HowKnow4",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      block_listeners: true,
      opacity_1: "100%",
      opacity_2: "100%",
      opacity_3: "100%",
      opacity_4: "100%",
      opacity_5: "100%",
      opacity_6: "100%",
      opacity_7: "100%",
      opacity_8: "0%",
      opacity_9: "100%",
      opacity_10: "0%",
      opacity_11: "0%",
      opacity_12: "0%",
      opacity_13: "0%",
      opacity_14: "0%",
      opacity_15: "0%",
      opacity_16: "0%",
      opacity_17: "100%",
      opacity_18: "0%",
      opacity_19: "100%",
      opacity_20: "0%",
      opacity_21: "0%",
      opacity_22: "100%",
      opacity_23: "0%",
      opacity_24: "0%",
      opacity_25: "0%",
      opacity_26: "0%",
      opacity_27: "0%",
      opacity_28: "0%",
      opacity_29: "0%",

      mutex: false,
      finishanimate: true,
    };
  },
  // Keyboard listener
  created: function () {
    let parent = this;
    window.addEventListener("keyup", function (event) {
      // eslint-disable-next-line no-console
      if (parent.show) {
        if (parent.block_listeners == true) {
          return;
        }
        if (event.keyCode == 32) {
          // Spacebar
          parent.animate();
        } else if (event.keyCode == 65) {
          // Prediction A
          parent.animateA();
        } else if (event.keyCode == 90) {
          // Prediction Z
          parent.animateZ();
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
  mounted() {
    this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
      // eslint-disable-next-line no-console
      // console.log('Modal is about to be shown', bvEvent, modalId)
      if (modalId != "modal-center-HowKnow4") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      this.block_listeners = false;
      //setTimeout(() => this.animate(), 0);
    });
  },
  methods: {
    reset_animation_back() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-HowKnow3");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-HowKnow5");
    },

    resetAnimation() {
      this.$bvModal.hide("modal-center-HowKnow4");
      this.opacity_1 = "100%";
      this.opacity_2 = "100%";
      this.opacity_3 = "100%";
      this.opacity_4 = "100%";
      this.opacity_5 = "100%";
      this.opacity_6 = "100%";
      this.opacity_7 = "100%";
      this.opacity_8 = "0%";
      this.opacity_9 = "100%";
      this.opacity_10 = "0%";
      this.opacity_11 = "0%";
      this.opacity_12 = "0%";
      this.opacity_13 = "0%";
      this.opacity_14 = "0%";
      this.opacity_15 = "0%";
      this.opacity_16 = "0%";
      this.opacity_17 = "100%";
      this.opacity_18 = "0%";
      this.opacity_19 = "100%";
      this.opacity_20 = "0%";
      this.opacity_21 = "0%";
      this.opacity_22 = "100%";
      this.opacity_23 = "0%";
      this.opacity_24 = "0%";
      this.opacity_25 = "0%";
      this.opacity_26 = "0%";
      this.opacity_27 = "0%";
      this.opacity_28 = "0%";
      this.opacity_29 = "0%";

      this.locked = true;
      this.mutex = false;
      this.finishanimate = false;
    },

    animateA() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_15 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_15 = "0%";
      }, 1000);
      // Choice then facial expression
      setTimeout(() => {
        parent.opacity_27 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_11 = "100%";
      }, 2200);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },

    animateZ() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_16 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_16 = "0%";
      }, 1000);
      // Choice then facial expression
      setTimeout(() => {
        parent.opacity_27 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_11 = "100%";
      }, 2200);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },

    animate() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_25 = "100%";
      }, 500);
      setTimeout(() => {
        parent.opacity_25 = "0%";
      }, 600);
      setTimeout(() => {
        parent.opacity_25 = "100%";
      }, 700);
      setTimeout(() => {
        parent.opacity_25 = "0%";
      }, 800);
      setTimeout(() => {
        parent.opacity_26 = "100%";
      }, 900);
      setTimeout(() => {
        parent.opacity_26 = "0%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_25 = "100%";
      }, 1100);
      setTimeout(() => {
        parent.opacity_25 = "0%";
      }, 1200);
      setTimeout(() => {
        parent.opacity_25 = "100%";
      }, 1300);
      setTimeout(() => {
        parent.opacity_25 = "0%";
      }, 1400);
      setTimeout(() => {
        parent.opacity_25 = "100%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_25 = "0%";
      }, 1600);
      setTimeout(() => {
        parent.opacity_26 = "100%";
      }, 1700);
      setTimeout(() => {
        parent.opacity_26 = "0%";
      }, 1800);
      setTimeout(() => {
        parent.opacity_25 = "100%";
      }, 1900);
      setTimeout(() => {
        parent.opacity_25 = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_25 = "100%";
      }, 2100);
      setTimeout(() => {
        parent.opacity_25 = "0%";
      }, 2100);
      setTimeout(() => {
        parent.opacity_26 = "100%";
      }, 2200);
      setTimeout(() => {
        parent.opacity_26 = "0%";
      }, 2300);
      setTimeout(() => {
        parent.opacity_25 = "100%";
      }, 2400);
      setTimeout(() => {
        parent.opacity_25 = "0%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_25 = "100%";
      }, 2600);
      setTimeout(() => {
        parent.opacity_25 = "0%";
      }, 2700);

      // Score then AZ
      setTimeout(() => {
        parent.opacity_29 = "100%";
      }, 3700);
      setTimeout(() => {
        parent.opacity_14 = "100%";
      }, 4800);

      // Text swaps out
      //setTimeout(() => {parent.opacity_17 = "0%"; parent.opacity_18 = "100%"; }, 4000);

      //setTimeout(() => {parent.opacity_15 = "100%"}, 5500);

      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      // Disables BACK NEXT buttons until animation finishes at 5 seconds.
      setTimeout(() => {
        parent.finishanimate = false;
      }, 5000);
    },
  },
};
</script>

<style scoped>
</style>