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
      <b-container class="align-bottom" :style="this.windowsize"  >
          <b-form>
            <b-form-group id="input-group-2" label="In US dollars, how much money do you typically make per day?" label-for="input-2">
                <b-form-select
                id="input-8"
                v-model="form.money"
                :options="money"
                required
                ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-3" label="How likely do you believe in the existence of God, Gods, or something
divine?" label-for="input-3">
                <b-form-select
                id="input-3"
                v-model="form.divine"
                :options="divine"
                required
                placeholder="Enter here"
                ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-4" label="In general, how do you describe your political views?" label-for="input-4">
                <b-form-select
                id="input-4"
                v-model="form.political"
                :options="political"
                required
                ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-5" label="Most people probably view me as…" label-for="input-5">
                <b-form-select
                id="input-5"
                v-model="form.view"
                :options="view"
                required
                placeholder="Enter here"
                ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-6" label="Do you spend more time interacting with people that…" label-for="input-6">
                <b-form-select
                id="input-6"
                v-model="form.interact"
                :options="interact"
                required
                ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-7" label="Scientific research is very important and good psychological research
            depends on high quality data from honest and attentive participants.
            Should we use your data? Your answer will not affect your payment." label-for="input-7">
                <b-form-select
                id="input-7"
                v-model="form.agree"
                :options="agree"
                required
                ></b-form-select>
            </b-form-group>

            </b-form>
      </b-container>
        <b-button variant="outline-primary" @click="this.go_to_back" size="lg">Back</b-button>
        <b-button style="float: right;" @click="this.go_to_next" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Survey3',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "3",
                form: {
                money: '',
                divine: '',
                political: '',
                view: '',
                interact: '',
                agree: '',
                },
                money: [{ text: 'Select One', value: null }, '$0-$4', '$4-$16', '$16-$64', 'More than $64'],
                divine: [{ text: 'Select One', value: null }, 'Very unlikely', 'Unlikely', 'Moderate', 'Likely', 'Very likely'],
                political: [{ text: 'Select One', value: null }, 'Very conservative', 'Conservative', 'Moderate', 'Liberal', 'Very liberal', 'Libertarian', 'Non-political', 'Other'],
                view: [{ text: 'Select One', value: null }, 'Very attractive', 'Attractive', 'Medium', 'Unattractive', 'Very unattractive'],
                interact: [{ text: 'Select One', value: null }, 'Have power over you', 'You have power over'],
                agree: [{ text: 'Select One', value: null }, 'Yes, include my data', 'No, exclude my data'],
                    
            }
        },
        computed: {
            page_id() {
                return "modal-center-survey" + this.page_num
            },
            center_title() {
                return "Survey page " + this.page_num + " of 5"
            },
            block() {
                return !(this.form.money != '' && this.form.divine != '' && this.form.political != '' && this.form.view != '' && this.form.interact != '' && this.form.agree != '')
            }
        },
        methods: {
            go_to_next() {
                this.$bvModal.hide("modal-center-survey" + this.page_num)
                this.$bvModal.show("modal-center-survey" + ((Number(this.page_num) + 1).toString()))
                this.$emit('Survey3Done', this.form)
            },
            go_to_back() {
                this.$bvModal.hide("modal-center-survey" + this.page_num)
                this.$bvModal.show("modal-center-survey" + ((Number(this.page_num) - 1).toString()))
                this.$emit('Survey3Done', this.form)
            }
        },
    }
</script>


<style scoped>
</style>