<template>
    <b-modal 
      id="modal-center-0" 
      size="xl"
      centered title="Tutorial"
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
      <b-container class="bv-example-row" >
          <div style="width: 100%; height: 400px;"/>
          <b-row align-h="between">
                <b-col cols="1">
                    <b-button variant="outline-primary" size="lg">Back</b-button>
                </b-col>
                <b-col cols="2">
                    <b-button variant="outline-primary" size="lg">Continue</b-button>
                </b-col>
          </b-row>
      </b-container>
    </b-modal>
</template>

<script>

    export default {
        name: 'Tutorial',
        components: {
        },
        data() {
            return {
            show: false,
            show_current: 1,
            b_show_2: true,
            variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
            headerBgVariant: 'dark',
            headerTextVariant: 'light',
            bodyBgVariant: 'light',
            bodyTextVariant: 'dark',
            footerBgVariant: 'warning',
            footerTextVariant: 'dark',
            colors:['red', 'yellow', 'brown', 'orange', 'black'],
            scenarioColor: `height: 280px; backgroundColor: red;`,
            }
        },
        beforeMount() {
        },
        computed: {
            fade_style() {
            return `opacity: ${this.show_current}; transition: opacity 0.5s;`
            },
        },
        methods: {
            
        },
    }
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.b-col {
  transition: background-color .3s;
}
</style>