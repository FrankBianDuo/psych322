<template>
  <b-modal
    id="modal-center-HowChoice8"
    size="xl"
    centered
    title="Instruction Page 20 of 30"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <!-- <img :src="require('../../assets/Instructions/HowChoice/hc 12.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"/> -->
        <img
          :src="require('../../assets/Instructions/HowChoice/hc 13.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.5s' }"
        />
        <!-- <img :src="require('../../assets/Instructions/HowChoice/hc 14.png')" v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.5s' }"/> -->
        <img
          :src="require('../../assets/Instructions/HowChoice/hc you.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 2.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc avatar 2.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 1.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc avatar 3.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc big choice.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc dots p1.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc dots p3.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc dots b5.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc dots b3.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc color dots.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 2.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc their dots.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 1.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc your dots.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 1.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc az.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc pred up.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/HowChoice/hc pred dn.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.0s' }"
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
  name: "HowChoice8",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      opacity_1: "0%",
      opacity_2: "0%",
      opacity_3: "0%",
      opacity_4: "0%",
      opacity_5: "100%",
      opacity_6: "100%",
      opacity_7: "100%",
      opacity_8: "100%",
      opacity_9: "100%",
      opacity_10: "100%",
      opacity_11: "100%",
      opacity_12: "100%",
      opacity_13: "0%",
      opacity_14: "0%",
      opacity_15: "0%",
      opacity_16: "0%",
      opacity_17: "0%",
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
      if (modalId != "modal-center-HowChoice8") {
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
      this.$bvModal.show("modal-center-HowChoice7");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-HowChoice9");
    },

    resetAnimation() {
      this.$bvModal.hide("modal-center-HowChoice8");
      this.opacity_1 = "0%";
      this.opacity_2 = "0%";
      this.opacity_3 = "0%";
      this.opacity_4 = "0%";
      this.opacity_5 = "100%";
      this.opacity_6 = "100%";
      this.opacity_7 = "100%";
      this.opacity_8 = "100%";
      this.opacity_9 = "100%";
      this.opacity_10 = "100%";
      this.opacity_11 = "100%";
      this.opacity_12 = "0%";
      this.opacity_13 = "0%";
      this.opacity_14 = "0%";
      this.opacity_15 = "0%";
      this.opacity_16 = "0%";
      this.opacity_17 = "0%";
      this.locked = true;
      this.mutex = false;
      this.finishanimate = false;
    },
    animate() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_12 = "0%";
        parent.opacity_5 = "0%";
      }, 250);
      setTimeout(() => {
        parent.opacity_4 = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_13 = "100%";
        parent.opacity_14 = "100%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_1 = "100%";
      }, 2750);
      //setTimeout(() => {parent.opacity_13 = "0%"; parent.opacity_14 = "0%"}, 3250);
      setTimeout(() => {
        parent.opacity_1 = "0%";
        parent.opacity_2 = "100%";
      }, 3750);
      setTimeout(() => {
        parent.opacity_15 = "100%";
      }, 4000);
      // setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_3 = "100%"}, 9500);
      // setTimeout(() => {parent.opacity_16 = "100%"}, 7500);
      //setTimeout(() => {parent.opacity_2 = "0%"; parent.opacity_3 = "100%" }, 1000);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      // Disables BACK NEXT buttons until animation finishes at 1 seconds.
      setTimeout(() => {
        parent.finishanimate = false;
      }, 4500);
    },
  },
};
</script>

<style scoped>
</style>