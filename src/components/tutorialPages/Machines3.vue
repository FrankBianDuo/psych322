<template>
  <b-modal
    id="modal-center-Machines3"
    size="xl"
    centered
    title="Instruction Page 3 of 18"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <!-- Background items opacity 1-10 -->
        <img
          :src="require('../../assets/Instructions/Machines/box1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/box2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/arms1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/arms2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/options3.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/options4.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Bodies/machine12a.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Bodies/machine12b.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/you1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/you2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.8s' }"
        />

        <!-- opacity 11-17 -->
        <img
          :src="require('../../assets/Instructions/Machines/az.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/jk.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/pred1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/pred2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/controlgive.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/controlkeep.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/control1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.2s' }"
        />

        <!-- opacity 18-21 -->
        <img
          :src="require('../../assets/Instructions/Machines/mchoice5.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/mchoice6.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/mchoice7.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/mchoice8.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.0s' }"
        />

        <!-- opactiy 22-27 -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/meet1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/meet2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/thisisyou.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 3.0s' }"
        />
        <!-- <img :src="require('../../assets/Instructions/Machines/Machine Text/next2.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_0, transition: 'opacity 0.0s' }"/> -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext05a.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_26, transition: 'opacity 0.3s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext05b.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_27, transition: 'opacity 0.3s' }"
        />

        <!-- Counter -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/count04.08.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_28, transition: 'opacity 0.2s' }"
        />

        <!-- Feedback texts -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext05d.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_29, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext05c.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_30, transition: 'opacity 0.4s' }"
        />

        <!-- This redundancy places the machine bodies in front of the flashing arms -->
        <img
          :src="require('../../assets/Instructions/Machines/Bodies/machine12a.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Bodies/machine12b.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.8s' }"
        />

        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/point2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_39, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/point3.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_40, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/point4.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_41, transition: 'opacity 0.4s' }"
        />
      </div>

      <div>
        <b-button
          :variant="sbc"
          size="lg"
          v-bind:style="{ height: 'auto', marginTop: '52.75%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_0, transition: 'opacity 0.5s'}"
        >Press {{press}}.</b-button>
      </div>
    </b-container>
    <b-button
      @click="this.reset_animation_back"
      variant="outline-primary"
      :disabled="hold"
      size="lg"
    >Back</b-button>
    <b-button
      @click="this.reset_animation_next"
      style="float: right;"
      :variant="nbc"
      :disabled="finish || hold"
      size="lg"
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "Machines3",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      skey: false,
      block_listeners: true,
      nbc: "outline-primary",
      sbc: "outline-secondary",
      press: "space bar",
      opacity_1: "100%",
      opacity_2: "0%",
      opacity_3: "100%",
      opacity_4: "0%",
      opacity_5: "100%",
      opacity_6: "0%",
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
      opacity_17: "0%",
      opacity_18: "0%",
      opacity_19: "0%",
      opacity_20: "0%",
      opacity_21: "0%",
      opacity_22: "0%",
      opacity_23: "0%",
      opacity_24: "0%",
      opacity_0: "100%",
      opacity_26: "100%",
      opacity_27: "0%",
      opacity_28: "0%",
      opacity_29: "0%",
      opacity_30: "0%",
      opacity_39: "0%",
      opacity_40: "0%",
      opacity_41: "0%",
      opacity_42: "0%",

      keyflow1: false,
      keyflow2: false,

      mutex: false,
      finish: true,
      hold: true,
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
        if (parent.keyflow1 == true && event.keyCode == 32) {
          // Spacebar 1
          parent.keyflow1 = false;
          parent.animate1();
        } else if (parent.keyflow2 == true && event.keyCode == 65) {
          // Predict A
          parent.animateA();
        } else if (parent.keyflow2 == true && event.keyCode == 90) {
          // Predict Z
          parent.animateZ();
        } else if (event.keyCode == 192) {
          // Enable Secret Key
          parent.skey = true;
        } else if (parent.skey == true && event.keyCode == 49) {
          // Secret Key
          parent.finish = false;
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
      if (modalId != "modal-center-Machines3") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      this.block_listeners = false;
      setTimeout(() => this.animate0(), 0);
      // This prevents skipping through pages too quickly.
      setTimeout(() => (this.hold = false), 1000);
    });
  },
  methods: {
    reset_animation_back() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Machines2");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-MachinesP");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-Machines3");
      this.opacity_1 = "100%";
      this.opacity_2 = "0%";
      this.opacity_3 = "100%";
      this.opacity_4 = "0%";
      this.opacity_5 = "100%";
      this.opacity_6 = "0%";
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
      this.opacity_17 = "0%";
      this.opacity_18 = "0%";
      this.opacity_19 = "0%";
      this.opacity_20 = "0%";
      this.opacity_21 = "0%";
      this.opacity_22 = "0%";
      this.opacity_23 = "0%";
      this.opacity_24 = "0%";
      this.opacity_0 = "100%";
      this.opacity_26 = "100%";
      this.opacity_27 = "0%";
      this.opacity_28 = "0%";
      this.opacity_29 = "0%";
      this.opacity_30 = "0%";
      this.opacity_39 = "0%";
      this.opacity_40 = "0%";
      this.opacity_41 = "0%";
      this.opacity_42 = "0%";
      this.nbc = "outline-primary";
      this.sbc = "outline-secondary";
      this.press = "space bar";
      this.keyflow1 = false;
      this.keyflow2 = false;
      this.skey = false;
      this.mutex = false;
      this.finish = false;
      this.hold = true;
    },
    animate0() {
      let parent = this;

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow1 = true;
        parent.opacity_0 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 2500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 3000);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
    animate1() {
      let parent = this;

      // Meeting 1 Flashing Prior Selections
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 100);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 200);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 300);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 400);
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 500);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 600);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 700);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 900);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 1100);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 1200);
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 1300);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 1400);
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 1600);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 1700);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 1800);
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 1900);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 2100);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 2200);
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 2300);

      setTimeout(() => {
        parent.opacity_28 = "100%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_9 = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_2 = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_4 = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_8 = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_10 = "100%";
      }, 3000);

      // Press A or Z.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow2 = true;
        this.press = "A or Z";
        parent.opacity_0 = "100%";
        parent.opacity_11 = "100%";
      }, 6500);
      setTimeout(() => {
        parent.opacity_0 = "0%";
        parent.opacity_11 = "0%";
      }, 7000);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
        parent.opacity_11 = "100%";
      }, 7500);

      // Text swap
      setTimeout(() => {
        parent.opacity_26 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_27 = "100%";
      }, 4000);
    },
    animateA() {
      let parent = this;

      // Kill key reminder
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_11 = "0%";
      }, 0);

      // Prediction Feedback Up
      setTimeout(() => {
        parent.opacity_21 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_14 = "0%";
        parent.opacity_13 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_21 = "100%";
      }, 1100);
      setTimeout(() => {
        parent.opacity_39 = "0%";
        parent.opacity_40 = "0%";
        parent.opacity_41 = "0%";
        parent.opacity_42 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_39 = "100%";
      }, 1300);
      setTimeout(() => {
        parent.opacity_40 = "100%";
      }, 200);

      // This provides feedback about that prediction.
      setTimeout(() => {
        parent.opacity_27 = "0%";
        parent.opacity_30 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_29 = "100%";
      }, 1800);

      // This changes the button to green!
      setTimeout(() => {
        parent.finish = false;
        parent.nbc = "success";
      }, 4000);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 4500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 5000);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 8500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 9000);

      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
    animateZ() {
      let parent = this;

      // Kill key reminder
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_11 = "0%";
      }, 0);

      // Prediction Feedback Down
      setTimeout(() => {
        parent.opacity_21 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_13 = "0%";
        parent.opacity_14 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_21 = "100%";
      }, 1100);
      setTimeout(() => {
        parent.opacity_39 = "0%";
        parent.opacity_40 = "0%";
        parent.opacity_41 = "0%";
        parent.opacity_42 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_39 = "100%";
      }, 1300);
      setTimeout(() => {
        parent.opacity_41 = "100%";
      }, 200);

      // This provides feedback about that prediction.
      setTimeout(() => {
        parent.opacity_27 = "0%";
        parent.opacity_29 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_30 = "100%";
      }, 1800);

      // This changes the button to green!
      setTimeout(() => {
        parent.finish = false;
        parent.nbc = "success";
      }, 4000);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 4500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 5000);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 8500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 9000);

      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
  },
};
</script>

<style scoped>
</style>