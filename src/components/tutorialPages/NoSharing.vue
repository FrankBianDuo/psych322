<template>
  <b-modal
    id="modal-center-NoSharing"
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
    <div>
      <h1>{{greeting}}</h1>
    </div>

    <!-- <div id="root">
          Sign Up
          <br>
          <input v-model="email">
          <br>
          <button onclick="alert('signed up')"
          v-bind:disabled="email.length < 2">
          Submit
          </button>
    </div>-->

    <b-container class="align-bottom" :style="this.windowsize">
      <!-- <img :src="require('../../assets/Instructions/Single Slides/Their Dots Your Dots.png')" style="width: 90%; height: auto; transform: translate(-50%, 0); margin-left: 50%;"/> -->
    </b-container>
    <b-button
      @click="$bvModal.hide('modal-center-NoSharing')"
      v-b-modal.modal-center-TwoOptions
      variant="outline-primary"
      size="lg"
    >Back</b-button>
    <b-button
      style="float: right;"
      @click="$bvModal.hide('modal-center-NoSharing')"
      variant="outline-primary"
      size="lg"
      v-b-modal.modal-center-EvapDots
    >Next</b-button>
  </b-modal>
</template>

<script>
// new Vue({
//     el: '#root',
//     data: {
//         greeting: 'Hello Dog'
//     }
// })

export default {
  name: "NoSharing",
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