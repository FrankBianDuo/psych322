<template>
  <b-modal
    :id="this.page_id"
    size="xl"
    centered
    :title="this.center_title"
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
      <h3>
        In general, how did you feel about this experiment? Was there a part of the instructions that you found confusing? Did you experience any technical difficulties? Please state any
        comments, suggestion, or general reactions.
      </h3>
      <b-form-textarea
        style="transform: translate(0%, 20%);"
        id="textarea"
        v-model="text"
        placeholder="Please write 1 - 3 full sentences here."
        rows="5"
        max-rows="5"
      ></b-form-textarea>
    </b-container>
    <b-button variant="outline-primary" @click="this.go_to_back" size="lg">Back</b-button>
    <b-button
      style="float: right;"
      @click="this.go_to_next"
      variant="outline-primary"
      size="lg"
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "FR13",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      text: "",
    };
  },
  computed: {
    page_id() {
      return "modal-center-FR" + this.page_num;
    },
    center_title() {
      return "Free Response page " + this.page_num + " of 13";
    },
  },
  methods: {
    go_to_back() {
      this.$bvModal.hide("modal-center-FR" + this.page_num);
      this.$bvModal.show(
        "modal-center-FR" + (Number(this.page_num) - 1).toString()
      );
    },
    go_to_next() {
      this.$bvModal.hide("modal-center-FR" + this.page_num);
      this.$bvModal.show("modal-center-survey1");
      this.$emit("FR13Done", this.text);
    },
  },
};
</script>


<style scoped>
</style>