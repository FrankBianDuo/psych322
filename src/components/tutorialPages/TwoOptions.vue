<template>
  <b-modal
    id="modal-center-TwoOptions"
    size="xl"
    centered
    title="Page x"
    :hide-footer="true"
    :header-bg-variant="headerBgVariant"
    :header-text-variant="headerTextVariant"
    :body-bg-variant="bodyBgVariant"
    :body-text-variant="bodyTextVariant"
    :footer-bg-variant="footerBgVariant"
    :footer-text-variant="footerTextVariant"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <img
        :src="require('../../assets/Instructions/Single Slides/Only Two Options.png')"
        style="width: 90%; height: auto; transform: translate(-50%, 0); margin-left: 50%;"
      />
    </b-container>
    <b-button
      @click="$bvModal.hide('modal-center-TwoOptions')"
      v-b-modal.modal-center-MoralChoice2
      variant="outline-primary"
      size="lg"
    >Back</b-button>
    <b-button
      style="float: right;"
      @click="$bvModal.hide('modal-center-TwoOptions')"
      variant="outline-primary"
      size="lg"
      v-b-modal.modal-center-NoSharing
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "TwoOptions",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      show: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
</style>