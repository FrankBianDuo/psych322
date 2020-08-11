<template>
  <b-modal
    :id="this.page_id"
    size="xl"
    centered
    :title="this.center_title"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <img
          :src="require('../../assets/tutorials/end/t2.png')"
          v-bind:style="{ maxWidth: '70%', height: 'auto', transform: 'translate(-50%, 0)', position: 'absolute', transition: 'opacity 0.5s' }"
        />
      </div>
    </b-container>
    <b-button @click="this.reset_animation_back" variant="outline-primary" size="lg">Back</b-button>
    <b-button
      @click="this.reset_animation_next"
      style="float: right;"
      variant="outline-primary"
      size="lg"
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "Tutorial71",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "71",
      opacity_1: "100%",
      opacity_2: "0%",
      opacity_3: "0%",
      mutex: false,
      speed: 1000,
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
      if (modalId != "modal-center-instruction" + this.page_num) {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      setTimeout(() => this.animate(), this.speed); //2800 IN PRODUCTION
    });
  },
  methods: {
    reset_animation_back() {
      this.$bvModal.hide("modal-center-instruction" + this.page_num);
      this.$bvModal.show(
        "modal-center-instruction" + (Number(this.page_num) - 1).toString()
      );
    },
    reset_animation_next() {
      this.$bvModal.hide("modal-center-instruction" + this.page_num);
      this.$bvModal.show(
        "modal-center-instruction" + (Number(this.page_num) + 1).toString()
      );
    },
    animate() {
      this.opacity_1 = "0%";
      this.opacity_2 = "100%";
      setTimeout(() => this.animate1(), this.speed);
    },
    animate1() {
      this.opacity_2 = "0%";
      this.opacity_3 = "100%";
      setTimeout(() => this.animate2(), this.speed);
    },
    animate2() {
      this.opacity_3 = "0%";
      this.opacity_1 = "100%";
      setTimeout(() => this.animate(), this.speed);
    },
  },
};
</script>


<style scoped>
</style>