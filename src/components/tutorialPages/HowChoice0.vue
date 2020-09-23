<template>
  <b-modal
    id="modal-center-HowChoice0"
    size="xl"
    centered
    title="Instruction Page 8 of 12"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <!-- Background opacity 1 -->
        <img
          :src="require('../../assets/Instructions/Ref Dependence/backgr2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/dots3.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_d3, transition: 'opacity 3.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/dots1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_d1, transition: 'opacity 3.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/dots5.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_d5, transition: 'opacity 3.2s' }"
        />
        <!-- Avatar choice smile opacity 2-10 -->
        <!-- Rename the avatars 1 and 3 to maintain logical sequence -->
        <img
          :src="require('../../assets/Instructions/Ref Dependence/refav3.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/refch1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/smile04b.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.2s' }"
        />

        <img
          :src="require('../../assets/Instructions/Ref Dependence/refav2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/refch2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/smile04b.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.2s' }"
        />

        <img
          :src="require('../../assets/Instructions/Ref Dependence/refav1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/refch3.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/smile04a.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.2s' }"
        />

        <!-- Text opacity 11-12 -->
        <img
          :src="require('../../assets/Instructions/Ref Dependence/reftext04a.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/reftext1a.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.2s' }"
        />

        <!-- Text opacity 16-21 -->
        <img
          :src="require('../../assets/Instructions/Ref Dependence/barr1a.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/barr1b.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/barr2a.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/barr2b.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/barr3a.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Ref Dependence/barr3b.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.0s' }"
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
  name: "HowChoice0",
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
      opacity_0: "0%",
      opacity_1: "100%",
      opacity_2: "100%",
      opacity_3: "0%",
      opacity_4: "0%",
      opacity_5: "0%",
      opacity_6: "0%",
      opacity_7: "0%",
      opacity_8: "0%",
      opacity_9: "0%",
      opacity_10: "0%",
      opacity_11: "100%",
      opacity_12: "0%",
      opacity_16: "0%",
      opacity_17: "0%",
      opacity_18: "0%",
      opacity_19: "0%",
      opacity_20: "100%",
      opacity_21: "0%",
      opacity_d3: '100%',
      opacity_d1: '100%',
      opacity_d5: '100%',
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
        } else if (parent.keyflow2 == true && event.keyCode == 32) {
          // Spacebar 2
          parent.keyflow2 = false;
          parent.animate2();
        } else if (parent.keyflow3 == true && event.keyCode == 32) {
          // Spacebar 3
          parent.keyflow3 = false;
          parent.animate3();
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
      if (modalId != "modal-center-HowChoice0") {
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
      this.$bvModal.show("modal-center-WantMoreDots");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-HowChoice1");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-HowChoice0");
      this.opacity_0 = "0%";
      this.opacity_1 = "100%";
      this.opacity_2 = "100%";
      this.opacity_3 = "0%";
      this.opacity_4 = "0%";
      this.opacity_5 = "0%";
      this.opacity_6 = "0%";
      this.opacity_7 = "0%";
      this.opacity_8 = "0%";
      this.opacity_9 = "0%";
      this.opacity_10 = "0%";
      this.opacity_11 = "100%";
      this.opacity_12 = "0%";
      this.opacity_16 = "0%";
      this.opacity_17 = "0%";
      this.opacity_18 = "0%";
      this.opacity_19 = "0%";
      this.opacity_20 = "100%";
      this.opacity_21 = "0%";
      this.opacity_d3 = "100%"
      this.opacity_d1 = "100%"
      this.opacity_d5 = "100%"
      this.nbc = "outline-primary";
      this.sbc = "outline-secondary";
      this.keyflow1 = false;
      this.keyflow2 = false;
      this.keyflow3 = false;
      this.keyflow4 = false;
      this.keyflow5 = false;
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
      }, 3000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 3500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 4000);

      // Flashing barrier
      setTimeout(() => {
        parent.opacity_21 = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_21 = "0%";
      }, 1100);
      setTimeout(() => {
        parent.opacity_21 = "100%";
      }, 1200);
      setTimeout(() => {
        parent.opacity_21 = "0%";
      }, 1300);
      setTimeout(() => {
        parent.opacity_21 = "100%";
      }, 1400);
      setTimeout(() => {
        parent.opacity_21 = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_21 = "100%";
      }, 1600);
      setTimeout(() => {
        parent.opacity_21 = "0%";
      }, 1700);
      setTimeout(() => {
        parent.opacity_21 = "100%";
      }, 1800);
      setTimeout(() => {
        parent.opacity_21 = "0%";
      }, 1900);
      setTimeout(() => {
        parent.opacity_21 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_21 = "0%";
      }, 2100);
      //setTimeout(() => {this.keyflow1 = true}, 2200);
    },
    animate1() {
      let parent = this;

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_0 = "0%";
      }, 0);
      
      // Text exchange
      setTimeout(() => {
        parent.opacity_11 = "0%";
        parent.opacity_12 = "100%";
      }, 0);

      // Choice and Smile
      setTimeout(() => {
        parent.opacity_3 = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_4 = "100%";
      }, 1500);

      // Dots Vanish
      setTimeout(() => {
        parent.opacity_d1 = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_d5 = "0%";
      }, 1500);

      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

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
    },
  },
};
</script>

<style scoped>
</style>