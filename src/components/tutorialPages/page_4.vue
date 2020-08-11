<template>
  <b-modal
    id="modal-center-instruction4"
    size="xl"
    centered
    title="Instructions page 4"
    v-model="show"
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
    <b-container class="bv-example-row" :style="this.windowsize">
      <b-row class="mt-5">
        <p
          style="font-size: 30px; font-family: Calibri; margin-left: 17%; display:inline; text-align: center;"
        >Everyone knows that everyone always prefers more dots.</p>
        <!-- Container -->
      </b-row>
    </b-container>
    <b-button
      @click="$bvModal.hide('modal-center-instruction4')"
      v-b-modal.modal-center-instruction3
      variant="outline-primary"
      size="lg"
    >Back</b-button>

    <b-button
      style="float: right;"
      @click="$bvModal.hide('modal-center-instruction4')"
      variant="outline-primary"
      size="lg"
      v-b-modal.modal-center-instruction5
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "Tutorial4",
  props: ["windowsize"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>


<style scoped>
</style>