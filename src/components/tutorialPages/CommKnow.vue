<template>
  <b-modal
    id="modal-center-CommKnow"
    size="xl"
    centered
    title="Instruction page 8 of 14"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <img
          :src="require('../../assets/Instructions/Common Knowledge/ck 01.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.3s' }"
        />
        <img
          :src="require('../../assets/Instructions/Common Knowledge/ck 02.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.3s' }"
        />
        <img
          :src="require('../../assets/Instructions/Common Knowledge/ck 03.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.3s' }"
        />
        <img
          :src="require('../../assets/Instructions/Common Knowledge/ck 04.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.3s' }"
        />
        <img
          :src="require('../../assets/Instructions/Common Knowledge/ck 05.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.3s' }"
        />
        <img
          :src="require('../../assets/Instructions/Common Knowledge/ck 06.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.3s' }"
        />
        <img
          :src="require('../../assets/Instructions/Common Knowledge/ck 07.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.3s' }"
        />
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
      :variant="ButtonColor"
      :disabled="finish || hold"
      size="lg"
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "CommKnow",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      ButtonColor: "outline-primary",
      SpaceColor: "outline-secondary",
      opacity_1: "100%",
      opacity_2: "0%",
      opacity_3: "0%",
      opacity_4: "0%",
      opacity_5: "0%",
      opacity_6: "0%",
      opacity_7: "0%",
      mutex: false,
      finish: true,
      hold: true,
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
      if (modalId != "modal-center-CommKnow") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      setTimeout(() => this.animate(), 0);
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
      this.$bvModal.show("modal-center-Reference");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-CommKnow");
      this.opacity_1 = "100%";
      this.opacity_2 = "0%";
      this.opacity_3 = "0%";
      this.opacity_4 = "0%";
      this.opacity_5 = "0%";
      this.opacity_6 = "0%";
      this.opacity_7 = "0%";
      this.locked = true;
      this.mutex = false;
      this.finish = false;
      this.hold = true;
      this.ButtonColor = "outline-primary";
      this.SpaceColor = "outline-secondary";
    },
    animate() {
      let parent = this;
      //this.$bvModal.hide('modal-center-WantMoreDots')
      setTimeout(() => {
        parent.opacity_1 = "0%";
        parent.opacity_2 = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_2 = "0%";
        parent.opacity_3 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_3 = "0%";
        parent.opacity_4 = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_7 = "0%";
        parent.opacity_5 = "100%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_5 = "0%";
        parent.opacity_6 = "100%";
      }, 5000);
      setTimeout(() => {
        parent.opacity_6 = "0%";
        parent.opacity_7 = "100%";
      }, 6000);

      // This changes the button to green!
      setTimeout(() => {
        parent.ButtonColor = "success";
      }, 8000);
      setTimeout(() => {
        parent.ButtonColor = "outline-primary";
      }, 8500);
      setTimeout(() => {
        parent.ButtonColor = "success";
      }, 8000);
      setTimeout(() => {
        parent.ButtonColor = "outline-primary";
      }, 11500);
      setTimeout(() => {
        parent.ButtonColor = "success";
      }, 12000);

      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      // Disables BACK NEXT buttons until animation finishes at 1 seconds.
      setTimeout(() => {
        parent.finish = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
</style>