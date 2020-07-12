<template>
    <b-modal 
      id="modal-center-BotStopper" 
      size="xl"
      centered title="CAPTCHA"
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
      <b-container class="align-bottom" :style="this.windowsize"  >
          <img :src="require('../../assets/Instructions/Bot_Stoppers/Bot Stopper 1.png')" style="width: 70%; height: auto; transform: translate(-50%, 0); margin-left: 50%;"/>
          <b-form>
              <b-form-group id="input-group-1" label="What do you see?" label-for="input-1">
                <b-form-input
                id="input-1"
                v-model="captcha"
                required
                placeholder="Enter the CAPTCHA here..."
                ></b-form-input>
            </b-form-group>
          </b-form>
          <!-- <b-button :v-if="!check_dev" variant="outline-primary" size="lg">Unlock</b-button> -->
      </b-container>
        <b-button :disabled="!check_robot" variant="outline-primary" size="lg">Back</b-button>
        <b-button :disabled="!check_robot" style="float: right;" @click="$bvModal.hide('modal-center-BotStopper')" variant="outline-primary" size="lg" v-b-modal.modal-center-Consent>Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'BotStopper',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                show: false,
                captcha: "",
            }
        },
        computed: {
            check_robot() {
                return this.captcha == "73?q5&"
            },
            check_dev() {
                return this.captcha == "m3M3"
            }
        },
        methods: {
            
        },
    }
</script>


<style scoped>
</style>