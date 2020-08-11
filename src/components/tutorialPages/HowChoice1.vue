<template>
  <b-modal
    id="modal-center-HowChoice1"
    size="xl"
    centered
    title="Instruction Page 11 of 14"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <img
          :src="require('../../assets/Instructions/HowChoice/hc avatar 1.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 1.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc avatar 2.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 1.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc avatar 3.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 1.8s' }"
        />

        <img
          :src="require('../../assets/Instructions/HowChoice/hc onlytwo.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.6s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc small choice.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 2.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc small choice up.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.1s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc big choice.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 1.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc no talking.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.0s' }"
        />

        <img
          :src="require('../../assets/Instructions/HowChoice/hc dots b3.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 4.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc dots b5.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc dots up b1.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc dots dn b5.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc color dots1.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 2.5s' }"
        />

        <img
          :src="require('../../assets/Instructions/HowChoice/hc 01.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc 02.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc 03.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc 04.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc 05.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc 06.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc 07.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc 08.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.4s' }"
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
  name: "HowChoice1",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      skey: false,
      nbc: "outline-primary",
      opacity_0: "0%",
      opacity_1: "100%",
      opacity_2: "0%",
      opacity_3: "0%",
      opacity_4: "0%",
      opacity_5: "100%",
      opacity_6: "0%",
      opacity_7: "0%",
      opacity_8: "0%",
      opacity_9: "100%",
      opacity_10: "100%",
      opacity_11: "0%",
      opacity_12: "0%",
      opacity_13: "0%",
      opacity_14: "100%",
      opacity_15: "0%",
      opacity_16: "0%",
      opacity_17: "0%",
      opacity_18: "0%",
      opacity_19: "0%",
      opacity_20: "0%",
      opacity_21: "0%",
      opacity_22: "0%",
      keyflow1: false,
      keyflow2: false,
      keyflow3: false,
      keyflow4: false,
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
          event.keyCode == 32
        ) {
          // Spacebar 1
          parent.keyflow1 = false;
          parent.animate1();
        } else if (
          parent.keyflow1 == false &&
          parent.keyflow2 == true &&
          parent.keyflow3 == false &&
          parent.keyflow4 == false &&
          event.keyCode == 32
        ) {
          // Spacebar 2
          parent.keyflow2 = false;
          (parent.opacity_9 = "100%"), parent.animate2();
        } else if (
          parent.keyflow1 == false &&
          parent.keyflow2 == false &&
          parent.keyflow3 == true &&
          parent.keyflow4 == false &&
          event.keyCode == 32
        ) {
          // Spacebar 3
          parent.keyflow3 = false;
          parent.animate3();
        } else if (
          parent.keyflow1 == false &&
          parent.keyflow2 == false &&
          parent.keyflow3 == false &&
          parent.keyflow4 == true &&
          event.keyCode == 32
        ) {
          // Spacebar 3
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
      if (modalId != "modal-center-HowChoice1") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      setTimeout(() => this.animate0(), 0);
      // This prevents skipping through pages too quickly.
      setTimeout(() => (this.hold = false), 1000);
    });
  },
  methods: {
    reset_animation_back() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-HowChoice0");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-HowChoice6");
    },

    resetAnimation() {
      this.$bvModal.hide("modal-center-HowChoice1");
      this.opacity_0 = "0%";
      this.opacity_1 = "100%";
      this.opacity_2 = "0%";
      this.opacity_3 = "0%";
      this.opacity_4 = "0%";
      this.opacity_5 = "100%";
      this.opacity_6 = "0%";
      this.opacity_7 = "0%";
      this.opacity_8 = "0%";
      this.opacity_9 = "100%";
      this.opacity_10 = "100%";
      this.opacity_11 = "0%";
      this.opacity_12 = "0%";
      this.opacity_13 = "0%";
      this.opacity_14 = "100%";
      this.opacity_15 = "0%";
      this.opacity_16 = "0%";
      this.opacity_17 = "0%";
      this.opacity_18 = "0%";
      this.opacity_19 = "0%";
      this.opacity_20 = "0%";
      this.opacity_21 = "0%";
      this.opacity_22 = "0%";
      this.keyflow1 = false;
      this.keyflow2 = false;
      this.keyflow3 = false;
      this.keyflow4 = false;
      this.skey = false;
      this.mutex = false;
      this.finish = false;
      this.hold = true;
      this.nbc = "outline-primary";
    },
    animate0() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_4 = "100%";
      }, 1800);
      // setTimeout(() => {parent.opacity_0 = "100%"}, 4200);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow1 = true;
        parent.opacity_0 = "100%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 4500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 5000);

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
      }, 6500);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 7000);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 7500);

      setTimeout(() => {
        parent.opacity_14 = "0%";
        parent.opacity_15 = "0%";
        parent.opacity_16 = "0%";
        parent.opacity_17 = "0%";
        parent.opacity_18 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_4 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_14 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_15 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_15 = "0%";
        parent.opacity_16 = "100%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_9 = "0%";
      }, 4500);
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
      }, 5000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 5500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 6000);

      setTimeout(() => {
        parent.opacity_1 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_3 = "100%";
      }, 1600);
      setTimeout(() => {
        parent.opacity_4 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_6 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_14 = "0%";
        parent.opacity_15 = "0%";
        parent.opacity_16 = "0%";
        parent.opacity_17 = "100%";
        parent.opacity_18 = "0%";
      }, 0);
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
      }, 7000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 7500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 8000);

      setTimeout(() => {
        parent.opacity_5 = "0%";
        parent.opacity_6 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_14 = "0%";
        parent.opacity_15 = "0%";
        parent.opacity_16 = "0%";
        parent.opacity_17 = "0%";
        parent.opacity_18 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 5400);
      setTimeout(() => {
        parent.opacity_5 = "0%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_7 = "100%";
        parent.opacity_2 = "100%";
        parent.opacity_11 = "100%";
        parent.opacity_12 = "100%";
      }, 1400);
      setTimeout(() => {
        parent.opacity_13 = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_9 = "0%";
        parent.opacity_10 = "0%";
        parent.opacity_11 = "0%";
        parent.opacity_12 = "0%";
      }, 4800);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
    animate4() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_14 = "0%";
        parent.opacity_15 = "0%";
        parent.opacity_16 = "0%";
        parent.opacity_17 = "0%";
        parent.opacity_18 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_19 = "0%";
        parent.opacity_20 = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_20 = "0%";
        parent.opacity_21 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_8 = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_8 = "0%";
      }, 3200);
      setTimeout(() => {
        parent.opacity_8 = "100%";
      }, 3400);
      setTimeout(() => {
        parent.opacity_8 = "0%";
      }, 3600);
      setTimeout(() => {
        parent.opacity_8 = "100%";
      }, 3800);
      setTimeout(() => {
        parent.opacity_8 = "0%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_8 = "100%";
      }, 4200);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

      // This changes the button to green!
      setTimeout(() => {
        parent.finish = false;
        parent.nbc = "success";
      }, 5500);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 6000);
      setTimeout(() => {
        parent.nbc = "success";
      }, 6500);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 8500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 9000);
    },
  },
};
</script>


<style scoped>
</style>