<template>
  <b-modal
    id="modal-center-Machines1"
    size="xl"
    centered
    title="Instruction Page 1 of 18"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <!-- Machines opacity 1-7 -->
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeMeet2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 2.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ch1c.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ch2c.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ch3c.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ch4c.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ch5c.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ch6c.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"
        />

        <!-- Text opacity 8-13 -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/programtext1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/programtext2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/programtext3.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.2s' }"
        />
        <!-- <img :src="require('../../assets/Instructions/Machines/Machine Text/space1.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_0, transition: 'opacity 0.8s' }"/> -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/space2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/space3.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.8s' }"
        />

        <!-- Text opacity 14-23 -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/optionsrg.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 1.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext01a.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext01b.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext01c.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext01d.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext01e.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 1.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext01f.png')"
          v-bind:style="{ maxWidth: '60%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 1.0s' }"
        />
        <!-- <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext02b.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.2s' }"/> -->
        <!-- <img :src="require('../../assets/Instructions/Machines/Machine Text/mtext02c.png')" v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.2s' }"/> -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/next1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 0.2s' }"
        />

        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeMachines2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeMachines1a.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_30, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeOptions2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_25, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeOptions1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_31, transition: 'opacity 0.2s' }"
        />

        <!-- Counters -->
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/count1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_26, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/count2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_27, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/count3.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_28, transition: 'opacity 0.2s' }"
        />

        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext02d.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_29, transition: 'opacity 0.2s' }"
        />

        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeMeet1a.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_32, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeMeet1b.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_33, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/MeetMachines/ThreeMeet1c.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_34, transition: 'opacity 0.2s' }"
        />
      </div>

      <div>
        <b-button
          :variant="sbc"
          size="lg"
          v-bind:style="{ height: 'auto', marginTop: '52.75%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_0, transition: 'opacity 0.5s'}"
        >Press space bar.</b-button>
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
  name: "HowKnow2",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      skey: false,
      block_listeners: true,
      nbc: "outline-primary",
      sbc: "outline-secondary",
      keyflow1: false,
      keyflow2: false,
      keyflow3: false,
      keyflow4: false,
      keyflow5: false,
      keyflow6: false,
      keyflow7: false,
      keyflow8: false,
      keyflow9: false,
      keyflow10: false,
      opacity_1: "0%",
      opacity_2: "0%",
      opacity_3: "0%",
      opacity_4: "0%",
      opacity_5: "0%",
      opacity_6: "0%",
      opacity_7: "0%",
      opacity_8: "0%",
      opacity_9: "0%",
      opacity_10: "0%",
      opacity_0: "100%",
      opacity_12: "0%",
      opacity_13: "0%",
      opacity_14: "0%",
      opacity_15: "100%",
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
      opacity_28: "0%",
      opacity_29: "0%",
      opacity_30: "100%",
      opacity_31: "0%",
      opacity_32: "0%",
      opacity_33: "0%",
      opacity_34: "0%",
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
        if (
          parent.keyflow1 == true &&
          parent.keyflow2 == false &&
          parent.keyflow3 == false &&
          parent.keyflow4 == false &&
          parent.keyflow5 == false &&
          parent.keyflow6 == false &&
          parent.keyflow7 == false &&
          event.keyCode == 32
        ) {
          // Spacebar 1
          parent.keyflow1 = false;
          // parent.keyflow2 = true
          //parent.keyflow3 = true
          parent.animate1();
        } else if (
          parent.keyflow1 == false &&
          parent.keyflow2 == true &&
          parent.keyflow3 == false &&
          parent.keyflow4 == false &&
          parent.keyflow5 == false &&
          parent.keyflow6 == false &&
          parent.keyflow7 == false &&
          event.keyCode == 32
        ) {
          // Spacebar 2
          parent.keyflow2 = false;
          // parent.keyflow3 = true
          parent.animate2();
        } else if (
          parent.keyflow1 == false &&
          parent.keyflow2 == false &&
          parent.keyflow3 == true &&
          parent.keyflow4 == false &&
          parent.keyflow5 == false &&
          parent.keyflow6 == false &&
          parent.keyflow7 == false &&
          event.keyCode == 32
        ) {
          // Spacebar 3
          parent.keyflow3 = false;
          // parent.keyflow4 = true
          parent.animate3();
        } else if (
          parent.keyflow1 == false &&
          parent.keyflow2 == false &&
          parent.keyflow3 == false &&
          parent.keyflow4 == true &&
          parent.keyflow5 == false &&
          parent.keyflow6 == false &&
          parent.keyflow7 == false &&
          event.keyCode == 32
        ) {
          // Spacebar 3
          parent.keyflow4 = false;
          // parent.keyflow5 = true
          parent.animate4();
        } else if (
          parent.keyflow1 == false &&
          parent.keyflow2 == false &&
          parent.keyflow3 == false &&
          parent.keyflow4 == false &&
          parent.keyflow5 == true &&
          parent.keyflow6 == false &&
          parent.keyflow7 == false &&
          event.keyCode == 32
        ) {
          // Spacebar 3
          parent.keyflow5 = false;
          // parent.keyflow6 = true
          parent.animate5();
        } else if (
          parent.keyflow1 == false &&
          parent.keyflow2 == false &&
          parent.keyflow3 == false &&
          parent.keyflow4 == false &&
          parent.keyflow5 == false &&
          parent.keyflow6 == true &&
          parent.keyflow7 == false &&
          event.keyCode == 32
        ) {
          // Spacebar 3
          parent.keyflow6 = false;
          // parent.keyflow7 = true
          parent.animate6();
        } else if (
          parent.keyflow1 == false &&
          parent.keyflow2 == false &&
          parent.keyflow3 == false &&
          parent.keyflow4 == false &&
          parent.keyflow5 == false &&
          parent.keyflow6 == false &&
          parent.keyflow7 == true &&
          event.keyCode == 32
        ) {
          // Spacebar 3
          parent.keyflow7 = false;
          // parent.keyflow8 = true
          parent.animate7();
        } else if (
          parent.keyflow1 == false &&
          parent.keyflow2 == false &&
          parent.keyflow3 == false &&
          parent.keyflow4 == false &&
          parent.keyflow5 == false &&
          parent.keyflow6 == false &&
          parent.keyflow7 == false &&
          event.keyCode == 32
        ) {
          // Spacebar 3
          parent.keyflow8 = false;
          // parent.keyflow9 = true
          parent.animate8();
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
      if (modalId != "modal-center-Machines1") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      this.block_listeners = false;
      // This prevents skipping through pages too quickly.
      setTimeout(() => this.animate0(), 0);
      setTimeout(() => (this.hold = false), 1000);
    });
  },
  methods: {
    reset_animation_back() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-ExperTutor");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Machines2");
    },

    resetAnimation() {
      this.$bvModal.hide("modal-center-Machines1");
      this.opacity_1 = "0%";
      this.opacity_2 = "0%";
      this.opacity_3 = "0%";
      this.opacity_4 = "0%";
      this.opacity_5 = "0%";
      this.opacity_6 = "0%";
      this.opacity_7 = "0%";
      this.opacity_8 = "0%";
      this.opacity_9 = "0%";
      this.opacity_10 = "0%";
      this.opacity_0 = "100%";
      this.opacity_12 = "0%";
      this.opacity_13 = "0%";
      this.opacity_14 = "0%";
      this.opacity_15 = "100%";
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
      this.opacity_28 = "0%";
      this.opacity_29 = "0%";
      this.opacity_30 = "100%";
      this.opacity_31 = "0%";
      this.opacity_32 = "0%";
      this.opacity_33 = "0%";
      this.opacity_34 = "0%";

      this.keyflow1 = false;
      this.keyflow2 = false;
      this.keyflow3 = false;
      this.keyflow4 = false;
      this.keyflow5 = false;
      this.keyflow6 = false;
      this.keyflow7 = false;
      this.keyflow8 = false;

      this.nbc = "outline-primary";
      this.sbc = "outline-secondary";
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
      }, 1000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 1500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 2000);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
    animate1() {
      let parent = this;

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow2 = true;
        parent.opacity_0 = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 1500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 2000);

      setTimeout(() => {
        parent.opacity_15 = "0%";
        parent.opacity_16 = "0%";
        parent.opacity_17 = "0%";
        parent.opacity_18 = "0%";
        parent.opacity_19 = "0%";
        parent.opacity_20 = "0%";
        parent.opacity_21 = "0%";
        parent.opacity_22 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_15 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_16 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_32 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_14 = "100%";
      }, 1000);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
    animate2() {
      let parent = this;

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow3 = true;
        parent.opacity_0 = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 3500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 4000);

      setTimeout(() => {
        parent.opacity_16 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_17 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_2 = "100%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_14 = "0%";
      }, 3000);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
    animate3() {
      let parent = this;

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow4 = true;
        parent.opacity_0 = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 3500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 4000);

      setTimeout(() => {
        parent.opacity_30 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_2 = "0%";
        parent.opacity_4 = "0%";
        parent.opacity_6 = "0%";
      }, 0);

      setTimeout(() => {
        parent.opacity_17 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 0);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
    animate4() {
      let parent = this;
      // Options + space text vanish and program text appears
      setTimeout(() => {
        parent.opacity_14 = "0%";
      }, 0);

      // Text swap
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 0);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow5 = true;
        parent.opacity_0 = "100%";
      }, 5500);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 5000);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 6500);

      // Machine 1
      setTimeout(() => {
        parent.opacity_17 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_3 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_3 = "0%";
      }, 200);
      setTimeout(() => {
        parent.opacity_3 = "100%";
      }, 400);
      setTimeout(() => {
        parent.opacity_3 = "0%";
      }, 600);
      setTimeout(() => {
        parent.opacity_2 = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_2 = "0%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_3 = "100%";
      }, 1200);
      setTimeout(() => {
        parent.opacity_3 = "0%";
      }, 1400);
      setTimeout(() => {
        parent.opacity_3 = "100%";
      }, 1600);
      setTimeout(() => {
        parent.opacity_3 = "0%";
      }, 1800);
      setTimeout(() => {
        parent.opacity_3 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_3 = "0%";
      }, 2200);
      setTimeout(() => {
        parent.opacity_2 = "100%";
      }, 2400);
      setTimeout(() => {
        parent.opacity_2 = "0%";
      }, 2600);
      setTimeout(() => {
        parent.opacity_3 = "100%";
      }, 2800);
      setTimeout(() => {
        parent.opacity_3 = "0%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_3 = "100%";
      }, 3200);
      setTimeout(() => {
        parent.opacity_3 = "0%";
      }, 3400);
      setTimeout(() => {
        parent.opacity_3 = "100%";
      }, 3600);
      setTimeout(() => {
        parent.opacity_3 = "0%";
      }, 3800);
      setTimeout(() => {
        parent.opacity_2 = "100%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_2 = "0%";
      }, 4200);
      setTimeout(() => {
        parent.opacity_3 = "100%";
      }, 4400);
      setTimeout(() => {
        parent.opacity_3 = "0%";
      }, 4600);
      setTimeout(() => {
        parent.opacity_8 = "100%";
      }, 4800);
      setTimeout(() => {
        parent.opacity_26 = "100%";
      }, 5200);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
    animate5() {
      let parent = this;

      // Machine Program and Count swap
      setTimeout(() => {
        parent.opacity_26 = "0%";
        parent.opacity_8 = "0%";
        parent.opacity_32 = "0%";
        parent.opacity_33 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_27 = "100%";
        parent.opacity_9 = "100%";
      }, 3600);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow6 = true;
        parent.opacity_0 = "100%";
      }, 3500);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 4000);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 4500);

      // Machine 2
      setTimeout(() => {
        parent.opacity_4 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_4 = "0%";
      }, 200);
      setTimeout(() => {
        parent.opacity_5 = "100%";
      }, 400);
      setTimeout(() => {
        parent.opacity_5 = "0%";
      }, 600);
      setTimeout(() => {
        parent.opacity_4 = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_4 = "0%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_5 = "100%";
      }, 1200);
      setTimeout(() => {
        parent.opacity_5 = "0%";
      }, 1400);
      setTimeout(() => {
        parent.opacity_4 = "100%";
      }, 1600);
      setTimeout(() => {
        parent.opacity_4 = "0%";
      }, 1800);
      setTimeout(() => {
        parent.opacity_5 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_5 = "0%";
      }, 2200);
      setTimeout(() => {
        parent.opacity_4 = "100%";
      }, 2400);
      setTimeout(() => {
        parent.opacity_4 = "0%";
      }, 2600);
      setTimeout(() => {
        parent.opacity_5 = "100%";
      }, 2800);
      setTimeout(() => {
        parent.opacity_5 = "0%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_9 = "100%";
      }, 3200);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
    animate6() {
      let parent = this;

      // Machine Program and Count swap
      setTimeout(() => {
        parent.opacity_27 = "0%";
        parent.opacity_9 = "0%";
        parent.opacity_33 = "0%";
        parent.opacity_34 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_28 = "100%";
        parent.opacity_10 = "100%";
      }, 6800);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow7 = true;
        parent.opacity_0 = "100%";
      }, 7000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 7500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 8000);

      // Machine 3
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_6 = "0%";
      }, 200);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 400);
      setTimeout(() => {
        parent.opacity_6 = "0%";
      }, 600);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_6 = "0%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_7 = "100%";
      }, 1200);
      setTimeout(() => {
        parent.opacity_7 = "0%";
      }, 1400);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 1600);
      setTimeout(() => {
        parent.opacity_6 = "0%";
      }, 1800);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_6 = "0%";
      }, 2200);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 2400);
      setTimeout(() => {
        parent.opacity_6 = "0%";
      }, 2600);
      setTimeout(() => {
        parent.opacity_7 = "100%";
      }, 2800);
      setTimeout(() => {
        parent.opacity_7 = "0%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 3200);
      setTimeout(() => {
        parent.opacity_6 = "0%";
      }, 3400);
      setTimeout(() => {
        parent.opacity_7 = "100%";
      }, 3600);
      setTimeout(() => {
        parent.opacity_7 = "0%";
      }, 3800);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_6 = "0%";
      }, 4200);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 4400);
      setTimeout(() => {
        parent.opacity_6 = "0%";
      }, 4600);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 4800);
      setTimeout(() => {
        parent.opacity_6 = "0%";
      }, 5000);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 5200);
      setTimeout(() => {
        parent.opacity_6 = "0%";
      }, 5400);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 5600);
      setTimeout(() => {
        parent.opacity_6 = "0%";
      }, 5800);
      setTimeout(() => {
        parent.opacity_7 = "100%";
      }, 6000);
      setTimeout(() => {
        parent.opacity_7 = "0%";
      }, 6200);
      setTimeout(() => {
        parent.opacity_10 = "100%";
      }, 6400);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
    animate7() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_20 = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_28 = "100%";
        parent.opacity_10 = "0%";
      }, 0);

      // This changes the button to green!
      setTimeout(() => {
        parent.finish = false;
        parent.nbc = "success";
      }, 4500);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 5000);
      setTimeout(() => {
        parent.nbc = "success";
      }, 5500);
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