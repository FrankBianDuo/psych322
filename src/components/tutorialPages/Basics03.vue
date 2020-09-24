<template>
  <b-modal
    id="modal-center-Basics03"
    size="xl"
    centered
    title="Instruction Page 3 of 12"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <!-- Major Text -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/mspeak03a.png')"
          v-bind:style="{ opacity: this.opacity_mspeak03a, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/mpress03a.png')"
          v-bind:style="{ opacity: this.opacity_mpress03a, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/mresp03a.png')"
          v-bind:style="{ opacity: this.opacity_mresp03a, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/mresp03b.png')"
          v-bind:style="{ opacity: this.opacity_mresp03b, transition: 'opacity 0.5s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />

        <!-- Dots -->
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspup1.png')"
          v-bind:style="{ opacity: this.opacity_dotsup1, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspup3.png')"
          v-bind:style="{ opacity: this.opacity_dotsup3, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspup5.png')"
          v-bind:style="{ opacity: this.opacity_dotsup5, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspdn1.png')"
          v-bind:style="{ opacity: this.opacity_dotsdn1, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspdn3.png')"
          v-bind:style="{ opacity: this.opacity_dotsdn3, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspdn5.png')"
          v-bind:style="{ opacity: this.opacity_dotsdn5, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspsafe2.png')"
          v-bind:style="{ opacity: this.opacity_dotssafe2, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspsafe3.png')"
          v-bind:style="{ opacity: this.opacity_dotssafe3, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspsafe4.png')"
          v-bind:style="{ opacity: this.opacity_dotssafe4, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />

        <!-- Background -->
        <img
          :src="require('../../assets/Instructions/Machines/box1.png')"
          v-bind:style="{ opacity: this.opacity_box1, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/box2.png')"
          v-bind:style="{ opacity: this.opacity_box2, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/you1.png')"
          v-bind:style="{ opacity: this.opacity_you1, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/you2.png')"
          v-bind:style="{ opacity: this.opacity_you2, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/arms1.png')"
          v-bind:style="{ opacity: this.opacity_arms1, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/arms2.png')"
          v-bind:style="{ opacity: this.opacity_arms2, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/options3.png')"
          v-bind:style="{ opacity: this.opacity_options1, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/options4.png')"
          v-bind:style="{ opacity: this.opacity_options2, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/pred1.png')"
          v-bind:style="{ opacity: this.opacity_pred1, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/pred2.png')"
          v-bind:style="{ opacity: this.opacity_pred2, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/controlgive.png')"
          v-bind:style="{ opacity: this.opacity_controlgive, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/controlkeep.png')"
          v-bind:style="{ opacity: this.opacity_controlkeep, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/control1.png')"
          v-bind:style="{ opacity: this.opacity_control1, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/mchoice5.png')"
          v-bind:style="{ opacity: this.opacity_mchoice1, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/mchoice6.png')"
          v-bind:style="{ opacity: this.opacity_mchoice2, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/mchoice7.png')"
          v-bind:style="{ opacity: this.opacity_mchoice3, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/mchoice8.png')"
          v-bind:style="{ opacity: this.opacity_mchoice4, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Bodies/machine06a.png')"
          v-bind:style="{ opacity: this.opacity_machine01a, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Bodies/machine06b.png')"
          v-bind:style="{ opacity: this.opacity_machine01b, transition: 'opacity 0.8s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/az.png')"
          v-bind:style="{ opacity: this.opacity_az, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/jk.png')"
          v-bind:style="{ opacity: this.opacity_jk, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />

        <!-- Minor Text -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/thismeet1.png')"
          v-bind:style="{ opacity: this.opacity_thismeet1, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/thismeet2.png')"
          v-bind:style="{ opacity: this.opacity_thismeet2, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/thisyou.png')"
          v-bind:style="{ opacity: this.opacity_thisyou, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/thispredup.png')"
          v-bind:style="{ opacity: this.opacity_thispredup, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/thispreddn.png')"
          v-bind:style="{ opacity: this.opacity_thispreddn, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/thisselectup.png')"
          v-bind:style="{ opacity: this.opacity_thisselectup, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/thisselectdn.png')"
          v-bind:style="{ opacity: this.opacity_thisselectdn, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/thiskeep.png')"
          v-bind:style="{ opacity: this.opacity_thiskeep, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/count06.04.png')"
          v-bind:style="{ opacity: this.opacity_count0103, transition: 'opacity 0.2s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/yougot1.png')"
          v-bind:style="{ opacity: this.opacity_yougot1, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/yougot2.png')"
          v-bind:style="{ opacity: this.opacity_yougot2, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/yougot3.png')"
          v-bind:style="{ opacity: this.opacity_yougot3, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/yougot4.png')"
          v-bind:style="{ opacity: this.opacity_yougot4, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Speak/yougot5.png')"
          v-bind:style="{ opacity: this.opacity_yougot5, transition: 'opacity 0.0s', maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
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
  name: "Basics03",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      skey: false,
      block_listeners: true,
      sbc: "primary",
      nbc: "outline-primary",
      press: "space bar",
      keyflow1: false,
      keyflow2: false,
      keyflowAZ: false,
      keyflowJK: false,

      opacity_presskey: "0%",
      opacity_machine01a: "100%",
      opacity_machine01b: "0%",
      opacity_box1: "100%",
      opacity_box2: "0%",
      opacity_you1: "100%",
      opacity_you2: "0%",
      opacity_arms1: "100%",
      opacity_arms2: "0%",
      opacity_options1: "100%",
      opacity_options2: "0%",
      opacity_az: "0%",
      opacity_jk: "0%",
      opacity_pred1: "0%",
      opacity_pred2: "0%",
      opacity_controlgive: "0%",
      opacity_controlkeep: "0%",
      opacity_control1: "0%",
      opacity_mchoice1: "0%",
      opacity_mchoice2: "0%",
      opacity_mchoice3: "0%",
      opacity_mchoice4: "0%",

      opacity_dotsup1: "0%",
      opacity_dotsup3: "0%",
      opacity_dotsup5: "0%",
      opacity_dotsdn1: "0%",
      opacity_dotsdn3: "0%",
      opacity_dotsdn5: "0%",
      opacity_dotssafe2: "0%",
      opacity_dotssafe3: "0%",
      opacity_dotssafe4: "0%",

      opacity_mspeak03a: "0%",
      opacity_mpress03a: "100%",
      opacity_mresp03a: "0%",
      opacity_mresp03b: "0%",
      opacity_thismeet1: "0%",
      opacity_thismeet2: "0%",
      opacity_thisyou: "0%",
      opacity_thispredup: "0%",
      opacity_thispreddn: "0%",
      opacity_thisselectup: "0%",
      opacity_thisselectdn: "0%",
      opacity_thiskeep: "0%",
      opacity_count0103: "0%",
      opacity_yougot1: "0%",
      opacity_yougot2: "0%",
      opacity_yougot3: "0%",
      opacity_yougot4: "0%",
      opacity_yougot5: "0%",

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
      if (modalId != "modal-center-Basics03") {
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
      this.$bvModal.show("modal-center-Basics02");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Basics04");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-Basics03");

      this.opacity_presskey = "0%";
      this.opacity_machine01a = "100%";
      this.opacity_machine01b = "0%";
      this.opacity_box1 = "100%";
      this.opacity_box2 = "0%";
      this.opacity_you1 = "100%";
      this.opacity_you2 = "0%";
      this.opacity_arms1 = "100%";
      this.opacity_arms2 = "0%";
      this.opacity_options1 = "100%";
      this.opacity_options2 = "0%";
      this.opacity_az = "0%";
      this.opacity_jk = "0%";
      this.opacity_pred1 = "0%";
      this.opacity_pred2 = "0%";
      this.opacity_controlgive = "0%";
      this.opacity_controlkeep = "0%";
      this.opacity_control1 = "0%";
      this.opacity_mchoice1 = "0%";
      this.opacity_mchoice2 = "0%";
      this.opacity_mchoice3 = "0%";
      this.opacity_mchoice4 = "0%";

      this.opacity_dotsup1 = "0%";
      this.opacity_dotsup3 = "0%";
      this.opacity_dotsup5 = "0%";
      this.opacity_dotsdn1 = "0%";
      this.opacity_dotsdn3 = "0%";
      this.opacity_dotsdn5 = "0%";
      this.opacity_dotssafe2 = "0%";
      this.opacity_dotssafe3 = "0%";
      this.opacity_dotssafe4 = "0%";

      this.opacity_mspeak03a = "0%";
      this.opacity_mpress03a = "100%";
      this.opacity_mresp03a = "0%";
      this.opacity_mresp03b = "0%";
      this.opacity_thismeet1 = "0%";
      this.opacity_thismeet2 = "0%";
      this.opacity_thisyou = "0%";
      this.opacity_thispredup = "0%";
      this.opacity_thispreddn = "0%";
      this.opacity_thisselectup = "0%";
      this.opacity_thisselectdn = "0%";
      this.opacity_thiskeep = "0%";
      this.opacity_count0103 = "0%";
      this.opacity_yougot1 = "0%";
      this.opacity_yougot2 = "0%";
      this.opacity_yougot3 = "0%";
      this.opacity_yougot4 = "0%";
      this.opacity_yougot5 = "0%";

      this.keyflow1 = false;
      this.keyflow2 = false;
      this.keyflowAZ = false;
      this.keyflowJK = false;
      this.skey = false;

      this.nbc = "outline-primary";
      this.sbc = "outline-secondary";
      this.press = "space bar";
      this.mutex = false;
      this.finish = false;
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
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 1500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 2000);
    },
    animate1() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 3000);

      // Meeting 1 Flashing Prior Selections
      setTimeout(() => {
        parent.opacity_mchoice1 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mchoice1 = "0%";
      }, 100);
      setTimeout(() => {
        parent.opacity_mchoice2 = "100%";
      }, 200);
      setTimeout(() => {
        parent.opacity_mchoice2 = "0%";
      }, 300);
      setTimeout(() => {
        parent.opacity_mchoice1 = "100%";
      }, 400);
      setTimeout(() => {
        parent.opacity_mchoice1 = "0%";
      }, 500);
      setTimeout(() => {
        parent.opacity_mchoice2 = "100%";
      }, 600);
      setTimeout(() => {
        parent.opacity_mchoice2 = "0%";
      }, 700);
      setTimeout(() => {
        parent.opacity_mchoice1 = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_mchoice1 = "0%";
      }, 900);
      setTimeout(() => {
        parent.opacity_mchoice2 = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_mchoice2 = "0%";
      }, 1100);
      setTimeout(() => {
        parent.opacity_mchoice1 = "100%";
      }, 1200);
      setTimeout(() => {
        parent.opacity_mchoice1 = "0%";
      }, 1300);
      setTimeout(() => {
        parent.opacity_mchoice1 = "100%";
      }, 1400);
      setTimeout(() => {
        parent.opacity_mchoice1 = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_mchoice2 = "100%";
      }, 1600);
      setTimeout(() => {
        parent.opacity_mchoice2 = "0%";
      }, 1700);
      setTimeout(() => {
        parent.opacity_mchoice1 = "100%";
      }, 1800);
      setTimeout(() => {
        parent.opacity_mchoice1 = "0%";
      }, 1900);
      setTimeout(() => {
        parent.opacity_count0103 = "100%";
      }, 2100);

      // Enter Meeting 2
      setTimeout(() => {
        parent.opacity_box2 = "100%";
      }, 2300);
      setTimeout(() => {
        parent.opacity_arms2 = "100%";
      }, 2300);
      setTimeout(() => {
        parent.opacity_you2 = "100%";
      }, 2300);
      setTimeout(() => {
        parent.opacity_machine01b = "100%";
      }, 2300);
      setTimeout(() => {
        parent.opacity_control1 = "100%";
      }, 2300);
      setTimeout(() => {
        parent.opacity_options2 = "100%";
      }, 2300);
      setTimeout(() => {
        parent.opacity_dotsup5 = "100%";
        parent.opacity_dotsdn1 = "100%";
      }, 2300);

      // Text swap
      setTimeout(() => {
        parent.opacity_mspeak03a = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mpress03a = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mresp03a = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mresp03b = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thismeet1 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thismeet2 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thispredup = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thispreddn = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thisselectup = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thisselectdn = "0%";
      }, 0);

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
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 3000);

      // Prediction Feedback Up
      setTimeout(() => {
        parent.opacity_dotssafe2 = "100%";
        parent.opacity_jk = "100%";
        parent.opacity_az = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_pred1 = "100%";
        parent.opacity_pred2 = "0%";
      }, 0);

      // Text swap
      setTimeout(() => {
        parent.opacity_mspeak03a = "100%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_mpress03a = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mresp03a = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mresp03b = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thismeet1 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thismeet2 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thispredup = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thispreddn = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thisselectup = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thisselectdn = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thiskeep = "100%";
      }, 1500);

      // Press J or K.
      setTimeout(() => {
        parent.opacity_jk = "0%";
      }, 4500);
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflowJK = true;
        this.press = "J or K";
        parent.opacity_jk = "100%";
        parent.opacity_presskey = "100%";
      }, 5000);
      setTimeout(() => {
        parent.opacity_jk = "0%";
        parent.opacity_presskey = "0%";
      }, 5500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_jk = "100%";
        parent.opacity_presskey = "100%";
      }, 6000);
    },
    animateZ() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 3000);

      // Prediction Feedback Up
      setTimeout(() => {
        parent.opacity_dotssafe2 = "100%";
        parent.opacity_jk = "100%";
        parent.opacity_az = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_pred1 = "0%";
        parent.opacity_pred2 = "100%";
      }, 0);

      // Text swap
      setTimeout(() => {
        parent.opacity_mspeak03a = "100%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_mpress03a = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mresp03a = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mresp03b = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thismeet1 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thismeet2 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thispredup = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thispreddn = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thisselectup = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thisselectdn = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thiskeep = "100%";
      }, 1500);

      // Press J or K.
      setTimeout(() => {
        parent.opacity_jk = "0%";
      }, 4500);
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflowJK = true;
        this.press = "J or K";
        parent.opacity_jk = "100%";
        parent.opacity_presskey = "100%";
      }, 5000);
      setTimeout(() => {
        parent.opacity_jk = "0%";
        parent.opacity_presskey = "0%";
      }, 5500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_jk = "100%";
        parent.opacity_presskey = "100%";
      }, 6000);
    },
    animateJ() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 3000);

      // Control Feedback Give
      setTimeout(() => {
        parent.opacity_jk = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_controlgive = "100%";
        parent.opacity_controlkeep = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mchoice3 = "100%";
        parent.opacity_mchoice4 = "0%";
      }, 500);
      setTimeout(() => {
        parent.opacity_yougot5 = "100%";
      }, 700);

      // Text swap
      setTimeout(() => {
        parent.opacity_mspeak03a = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mpress03a = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mresp03a = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_mresp03b = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thismeet1 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thismeet2 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thispredup = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thispreddn = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thisselectup = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thisselectdn = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thiskeep = "0%";
      }, 0);

      // Press Space Bar.
      // setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_presskey = "0%"; }, 0);
      // setTimeout(() => {this.keyflow2 = true; this.press = "space bar"; parent.opacity_presskey = "100%"; }, 1000);
      // setTimeout(() => {parent.opacity_presskey = "0%"; }, 1500);
      // setTimeout(() => {this.sbc = "primary"; parent.opacity_presskey = "100%"; }, 2000);

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
      }, 10500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 11000);
    },
    animateK() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 3000);

      // Control Feedback Keep
      setTimeout(() => {
        parent.opacity_jk = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_controlgive = "0%";
        parent.opacity_controlkeep = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mchoice3 = "100%";
        parent.opacity_mchoice4 = "0%";
      }, 500);
      setTimeout(() => {
        parent.opacity_yougot2 = "100%";
      }, 700);

      // Text swap
      setTimeout(() => {
        parent.opacity_mspeak03a = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mpress03a = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mresp03a = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_mresp03b = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_thismeet1 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thismeet2 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thispredup = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thispreddn = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thisselectup = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thisselectdn = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_thiskeep = "0%";
      }, 0);

      // Press Space Bar.
      // setTimeout(() => {this.sbc = "outline-secondary"; parent.opacity_presskey = "0%"; }, 0);
      // setTimeout(() => {this.keyflow2 = true; this.press = "space bar"; parent.opacity_presskey = "100%"; }, 1000);
      // setTimeout(() => {parent.opacity_presskey = "0%"; }, 1500);
      // setTimeout(() => {this.sbc = "primary"; parent.opacity_presskey = "100%"; }, 2000);

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
      }, 10500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 11000);
    },
    // animate2() {
    //     let parent = this
    //     setTimeout(() => parent.mutex = false, 3600);
    //     setTimeout(() => parent.locked = false, 3600);
    //     setTimeout(() => {parent.opacity_presskey = "0%"; }, 0);
    //     setTimeout(() => {parent.opacity_presskey = "0%"; }, 1500);
    //     setTimeout(() => {parent.opacity_presskey = "0%"; }, 3000);
    //     setTimeout(() => {parent.opacity_mchoice4 = "0%"}, 0);

    //     // Text swap
    //     setTimeout(() => {parent.opacity_mspeak02a = "0%"}, 0);
    //     setTimeout(() => {parent.opacity_mspeak02b = "100%"}, 2000);
    //     setTimeout(() => {parent.opacity_mpress02a = "0%"}, 0);
    //     setTimeout(() => {parent.opacity_mresp02a = "0%"}, 0);
    //     setTimeout(() => {parent.opacity_mresp02b = "0%"}, 0);
    //     setTimeout(() => {parent.opacity_thismeet1 = "0%"}, 0);
    //     setTimeout(() => {parent.opacity_thismeet2 = "0%"}, 0);
    //     setTimeout(() => {parent.opacity_thispredup = "0%"}, 0);
    //     setTimeout(() => {parent.opacity_thispreddn = "0%"}, 0);
    //     setTimeout(() => {parent.opacity_thisselectup = "0%"}, 0);
    //     setTimeout(() => {parent.opacity_thisselectdn = "0%"}, 0);
    //     setTimeout(() => {parent.opacity_thisyou = "0%"}, 0);

    //     // This changes the button to green!
    //     setTimeout(() => {parent.finish = false; parent.nbc = "success"}, 7000);
    //     setTimeout(() => {parent.nbc = "outline-primary";}, 7500);
    //     setTimeout(() => {parent.nbc = "success";}, 8000);
    //     setTimeout(() => {parent.nbc = "outline-primary";}, 10500);
    //     setTimeout(() => {parent.nbc = "success";}, 11000);
    // },
  },
};
</script>

<style scoped>
</style>