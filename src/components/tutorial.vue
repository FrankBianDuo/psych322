<template>
  <b-modal
    id="modal-center-instruction"
    size="xl"
    centered
    title="Tutorial"
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
    <b-container class="bv-example-row">
      <div style="width: 100%; height: 400px;" />
      <b-row align-h="between">
        <b-col cols="1">
          <b-button variant="outline-primary" size="lg">Back</b-button>
        </b-col>
        <b-col cols="2">
          <b-button variant="outline-primary" size="lg">Next</b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
export default {
  name: "Tutorial",
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