<template>
  <b-modal
    id="modal-center-GameFlow5"
    size="xl"
    centered
    title="Page x"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <img
          :src="require('../../assets/Instructions/Game Flow/Game Glow 05.png')"
          v-bind:style="{ maxWidth: '40%', height: 'auto', marginTop: '8%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/Game Glow 06.png')"
          v-bind:style="{ maxWidth: '40%', height: 'auto', marginTop: '8%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/Game Glow 07.png')"
          v-bind:style="{ maxWidth: '40%', height: 'auto', marginTop: '8%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/Game Glow 08.png')"
          v-bind:style="{ maxWidth: '40%', height: 'auto', marginTop: '8%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GGt06.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Game Flow/GGt07.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.0s' }"
        />
      </div>
    </b-container>
    <b-button
      @click="$bvModal.hide(`modal-center-GameFlow5`)"
      v-b-modal.modal-center-GameFlow4
      variant="outline-primary"
      size="lg"
    >Back</b-button>
    <b-button
      @click="$bvModal.hide(`modal-center-GameFlow5`)"
      v-b-modal.modal-center-Control1
      style="float: right;"
      variant="outline-primary"
      size="lg"
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "GameFlow5",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      opacity_1: "100%",
      opacity_2: "0%",
      opacity_3: "0%",
      opacity_4: "0%",
      opacity_5: "100%",
      opacity_6: "0%",
      mutex: false,
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
      if (modalId != "modal-center-GameFlow5") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      setTimeout(() => this.animate(), 500);
    });
  },
  methods: {
    resetAnimation() {
      this.$bvModal.hide("modal-center-GameFlow5");
      this.opacity_1 = "100%";
      this.opacity_2 = "0%";
      this.opacity_3 = "0%";
      this.opacity_4 = "0%";
      this.opacity_5 = "100%";
      this.opacity_6 = "0%";
      this.locked = true;
      this.mutex = false;
    },
    animate() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_1 = "0%";
        parent.opacity_2 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_1 = "100%";
        parent.opacity_2 = "0%";
      }, 2250);
      setTimeout(() => {
        parent.opacity_1 = "0%";
        parent.opacity_2 = "100%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_5 = "0%";
        parent.opacity_6 = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_2 = "0%";
        parent.opacity_3 = "100%";
      }, 5000);
      setTimeout(() => {
        parent.opacity_3 = "0%";
        parent.opacity_4 = "100%";
      }, 5250);
      setTimeout(() => {
        parent.opacity_3 = "100%";
        parent.opacity_4 = "0%";
      }, 5500);
      setTimeout(() => {
        parent.opacity_3 = "0%";
        parent.opacity_4 = "100%";
      }, 5750);
      setTimeout(() => {
        parent.opacity_3 = "100%";
        parent.opacity_4 = "0%";
      }, 6000);
      setTimeout(() => {
        parent.opacity_3 = "0%";
        parent.opacity_4 = "100%";
      }, 6250);
      setTimeout(() => {
        parent.opacity_3 = "100%";
        parent.opacity_4 = "0%";
      }, 6500);
      setTimeout(() => {
        parent.opacity_3 = "0%";
        parent.opacity_2 = "100%";
      }, 6750);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
  },
};
</script>

<style scoped>
</style>