<template>
  <b-modal
    id="modal-center-FlowKnow1"
    size="xl"
    centered
    title="Instruction Page 13 of 14"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <!-- opacity 1-5 -->
        <img
          :src="require('../../assets/Instructions/FlowKnow/FKmeet1.01a.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/FKmeet2.01a.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.5s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/GFcontrolb.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.5s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/GFeyeleft.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.5s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/GFaz.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_az, transition: 'opacity 0.0s' }"
        />

        <!-- opacity 6-10 -->
        <img
          :src="require('../../assets/Instructions/FlowKnow/GFjk.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_jk, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/GFpredup.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/GFpreddn.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/GFgk.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/GFkc.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.2s' }"
        />

        <!-- opacity 11-16 -->
        <img
          :src="require('../../assets/Instructions/FlowKnow/FKchoice2.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/GF01c.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/fk text 01a.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/fk text 02a.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/fk text 03a.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/fk text 04a.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.2s' }"
        />

        <!-- opacity 17-19 -->
        <img
          :src="require('../../assets/Instructions/FlowKnow/GFd2b.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/GFd2.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/GF01c.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.0s' }"
        />

        <img
          :src="require('../../assets/Instructions/FlowKnow/yougot1.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_31, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/yougot2.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_32, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/yougot3.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_33, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/yougot4.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_34, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/FlowKnow/yougot5.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_35, transition: 'opacity 0.2s' }"
        />

        <img
          :src="require('../../assets/Instructions/FlowKnow/GFbarr1.png')"
          v-bind:style="{ maxWidth: '64%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.5s' }"
        />
      </div>

      <div>
        <b-button
          :variant="sbc"
          size="lg"
          v-bind:style="{ height: 'auto', marginTop: '52.75%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_presskey, transition: 'opacity 0.5s'}"
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
  name: "FlowKnow1",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      skey: false,
      block_listeners: true,
      sbc: "outline-secondary",
      nbc: "outline-primary",
      press: "space bar",
      opacity_1: "100%",
      opacity_2: "0%",
      opacity_3: "0%",
      opacity_4: "0%",
      opacity_az: "0%",
      opacity_jk: "0%",
      opacity_7: "0%",
      opacity_8: "0%",
      opacity_9: "0%",
      opacity_10: "0%",
      opacity_11: "0%",
      opacity_12: "0%",
      opacity_13: "100%",
      opacity_14: "0%",
      opacity_15: "0%",
      opacity_16: "0%",
      opacity_presskey: "0%",
      opacity_17: "0%",
      opacity_18: "0%",
      opacity_19: "0%",

      opacity_21: "0%",

      opacity_31: "0%",
      opacity_32: "0%",
      opacity_33: "0%",
      opacity_34: "0%",
      opacity_35: "0%",
      keyflow1: false,
      keyflow2: false,
      keyflowAZ: false,
      keyflowJK: false,
      mutex: false,
      finish: true,

      // Experimental variable to prevent rapid page hopping
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
        } else if (parent.keyflowAZ == true && event.keyCode == 65) {
          // Predict A
          parent.keyflowAZ = false;
          parent.animateA();
        } else if (parent.keyflowAZ == true && event.keyCode == 90) {
          // Predict Z
          parent.keyflowAZ = false;
          parent.animateZ();
        } else if (parent.keyflowJK == true && event.keyCode == 74) {
          // Give Control
          parent.keyflowJK = false;
          parent.animateJ();
        } else if (parent.keyflowJK == true && event.keyCode == 75) {
          // Keep Control
          parent.keyflowJK = false;
          parent.animateK();
        } else if (parent.keyflow2 == true && event.keyCode == 32) {
          // Spacebar 2
          parent.keyflow2 = false;
          parent.animate2();
        } else if (parent.keyflow3 == true && event.keyCode == 32) {
          // Spacebar 3
          parent.keyflow3 = false;
          parent.animate3();
        } else if (parent.keyflow4 == true && event.keyCode == 32) {
          // Spacebar 4
          parent.keyflow4 = false;
          parent.animate4();
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
      if (modalId != "modal-center-FlowKnow1") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      this.block_listeners = false;
      setTimeout(() => this.animate0(), 0);

      // This is an experiment at preventing skipping through pages too quickly.
      setTimeout(() => (this.hold = false), 500);
    });
  },
  methods: {
    reset_animation_back() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-HowChoice6");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-FlowKnow2");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-FlowKnow1");
      this.opacity_1 = "100%";
      this.opacity_2 = "0%";
      this.opacity_3 = "0%";
      this.opacity_4 = "0%";
      this.opacity_az = "0%";
      this.opacity_jk = "0%";
      this.opacity_7 = "0%";
      this.opacity_8 = "0%";
      this.opacity_9 = "0%";
      this.opacity_10 = "0%";
      this.opacity_11 = "0%";
      this.opacity_12 = "0%";
      this.opacity_13 = "100%";
      this.opacity_14 = "0%";
      this.opacity_15 = "0%";
      this.opacity_16 = "0%";
      this.opacity_presskey = "0%";
      this.opacity_17 = "0%";
      this.opacity_18 = "0%";
      this.opacity_19 = "0%";
      this.opacity_21 = "0%";
      this.opacity_31 = "0%";
      this.opacity_32 = "0%";
      this.opacity_33 = "0%";
      this.opacity_34 = "0%";
      this.opacity_35 = "0%";

      this.nbc = "outline-primary";
      this.sbc = "outline-secondary";
      this.press = "space bar";
      this.keyflow1 = false;
      this.keyflow2 = false;
      this.keyflow3 = false;
      this.keyflow4 = false;
      this.keyflowAZ = false;
      this.keyflowJK = false;
      this.skey = false;
      this.locked = true;
      this.mutex = false;
      this.finish = false;

      // Experimental hold variable to prevent rapid page hopping
      this.hold = true;
    },
    animate0() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow1 = true;
        parent.opacity_presskey = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 3500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 4000);
    },
    animate1() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

      // Text swap
      setTimeout(() => {
        parent.opacity_13 = "0%";
        parent.opacity_14 = "0%";
      }, 0);

      // Meeting 2 appears.
      setTimeout(() => {
        parent.opacity_11 = "100%";
      }, 500);
      setTimeout(() => {
        parent.opacity_2 = "100%";
      }, 1200);
      setTimeout(() => {
        parent.opacity_3 = "100%";
      }, 1200);
      setTimeout(() => {
        parent.opacity_21 = "100%";
      }, 1200);

      // Flashes AZ to grap attention
      setTimeout(() => {
        parent.opacity_az = "100%";
      }, 1600);
      setTimeout(() => {
        parent.opacity_az = "0%";
      }, 1800);
      setTimeout(() => {
        parent.opacity_az = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_az = "0%";
      }, 2200);
      setTimeout(() => {
        parent.opacity_az = "100%";
      }, 2400);

      // Press A or Z.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflowAZ = true;
        this.press = "A or Z";
        parent.opacity_az = "100%";
        parent.opacity_presskey = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_az = "0%";
        parent.opacity_presskey = "0%";
      }, 3500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_az = "100%";
        parent.opacity_presskey = "100%";
      }, 4000);
    },
    animateA() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

      // Kill key reminder
      setTimeout(() => {
        parent.opacity_presskey = "0%";
        parent.opacity_az = "0%";
        parent.opacity_jk = "0%";
      }, 0);

      // Prediction Feedback Up
      setTimeout(() => {
        parent.opacity_az = "0%";
        parent.opacity_jk = "0%";
        parent.opacity_8 = "0%";
        parent.opacity_presskey = "0%";
        parent.opacity_7 = "100%";
        parent.opacity_14 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_jk = "100%";
        parent.opacity_17 = "100%";
      }, 1000);

      // Flashing safe dots
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 1200);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 1400);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 1600);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 1800);

      // Press J or K.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflowJK = true;
        this.press = "J or K";
        parent.opacity_jk = "100%";
        parent.opacity_presskey = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_jk = "0%";
        parent.opacity_presskey = "0%";
      }, 500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_jk = "100%";
        parent.opacity_presskey = "100%";
      }, 1000);
    },
    animateZ() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

      // Kill key reminder
      setTimeout(() => {
        parent.opacity_presskey = "0%";
        parent.opacity_az = "0%";
        parent.opacity_jk = "0%";
      }, 0);

      // Prediction Feedback Down
      setTimeout(() => {
        parent.opacity_az = "0%";
        parent.opacity_jk = "0%";
        parent.opacity_7 = "0%";
        parent.opacity_presskey = "0%";
        parent.opacity_8 = "100%";
        parent.opacity_14 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_jk = "100%";
        parent.opacity_17 = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_15 = "100%";
      }, 2000);

      // Flashing safe dots
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 1200);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 1400);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 1600);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 1800);

      // Press J or K.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflowJK = true;
        this.press = "J or K";
        parent.opacity_jk = "100%";
        parent.opacity_presskey = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_jk = "0%";
        parent.opacity_presskey = "0%";
      }, 500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_jk = "100%";
        parent.opacity_presskey = "100%";
      }, 1000);
    },
    animateJ() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

      // Kill key reminder
      setTimeout(() => {
        parent.opacity_presskey = "0%";
        parent.opacity_az = "0%";
        parent.opacity_jk = "0%";
      }, 0);

      // Control Feedback Give
      setTimeout(() => {
        parent.opacity_10 = "0%";
        parent.opacity_19 = "0%";
        parent.opacity_9 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_3 = "0%";
        parent.opacity_7 = "0%";
        parent.opacity_8 = "0%";
        parent.opacity_9 = "0%";
        parent.opacity_10 = "0%";
        parent.opacity_17 = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_21 = "0%";
      }, 3500);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 5000);

      // You Got x dots
      setTimeout(() => {
        parent.opacity_35 = "100%";
      }, 5500);
      setTimeout(() => {
        parent.opacity_31 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_32 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_33 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_34 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_35 = "0%";
      }, 0);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow2 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 6000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 6500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 7000);
    },
    animateK() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

      // Kill key reminder
      setTimeout(() => {
        parent.opacity_presskey = "0%";
        parent.opacity_az = "0%";
        parent.opacity_jk = "0%";
      }, 0);

      // Control Feedback Give
      setTimeout(() => {
        parent.opacity_9 = "0%";
        parent.opacity_19 = "0%";
        parent.opacity_10 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_3 = "0%";
        parent.opacity_7 = "0%";
        parent.opacity_8 = "0%";
        parent.opacity_9 = "0%";
        parent.opacity_10 = "0%";
        parent.opacity_17 = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_21 = "0%";
      }, 3500);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 5000);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

      // You Got x dots
      setTimeout(() => {
        parent.opacity_32 = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_31 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_32 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_33 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_34 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_35 = "0%";
      }, 0);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow2 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 6000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 6500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 7000);
    },
    animate2() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 4000);

      // Text Swap
      setTimeout(() => {
        parent.opacity_13 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_14 = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_15 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_16 = "0%";
      }, 0);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow3 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 6000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 6500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 7000);
    },
    animate3() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 4000);

      // Text Swap
      setTimeout(() => {
        parent.opacity_13 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_14 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_15 = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_16 = "0%";
      }, 0);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow4 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 6000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 6500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 7000);
    },
    animate4() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 4000);

      // Text Swap
      setTimeout(() => {
        parent.opacity_13 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_14 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_15 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_16 = "100%";
      }, 800);

      // This changes the button to green!
      setTimeout(() => {
        parent.finish = false;
        parent.nbc = "success";
      }, 7000);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 7500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 8000);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 11500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 12000);
    },
  },
};
</script>

<style scoped>
</style>