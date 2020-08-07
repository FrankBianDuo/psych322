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
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
      :hide-header-close="true"
    >
      <b-container class="align-bottom" :style="this.windowsize"  >
          <b-form>
            <b-form-group id="input-group-1" label="How many older brother(s) do you have?" label-for="input-1">
                <b-form-input
                id="input-1"
                v-model="form.older_bro"
                required
                placeholder="Enter here"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="How many older sister(s) do you have?" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.older_sis"
                required
                placeholder="Enter here"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="How many younger brother(s) do you have?" label-for="input-3">
                <b-form-input
                id="input-3"
                v-model="form.younger_bro"
                required
                placeholder="Enter here"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" label="How many younger sister(s) do you have?" label-for="input-4">
                <b-form-input
                id="input-4"
                v-model="form.younger_sis"
                required
                placeholder="Enter here"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-5" label="Please list the order of countries you have lived in for a year or more, the number
of years you lived there, and if this was in a rural, suburban, or urban area.  Example: Vietnam,24,Rural,Singapore,1,Urban,USA,2,Suburban" label-for="input-5">
                <b-form-input
                id="input-5"
                v-model="form.countries"
                required
                placeholder="Enter here"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-6" label="Is English your native language?" label-for="input-6">
                <b-form-select
                id="input-6"
                v-model="form.english"
                :options="english"
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
        name: 'Survey2',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "2",
                form: {
                older_bro: '',
                older_sis: '',
                younger_bro: '',
                younger_sis: '',
                countries: '',
                english: '',
                },
                avatars: [{ text: 'Select One', value: null }, 'Very sad avatar', 'Sad avatar', 'Medium avatar', 'Very happy avatar', 'happy avatar'],
                loves: [{ text: 'Select One', value: null }, 'Strongly agree', 'Agree', 'Neutral', 'Disagree', 'Strongly disagree'],
                genders: [{ text: 'Select One', value: null }, 'Male', 'Female', 'Other'],
                english: [{ text: 'Select One', value: null }, 'Yes', 'No'],
                money: [{ text: 'Select One', value: null }, '$0-$4', '$4-$16', '$16-$64', 'More than $64'],
                    
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
                return !(this.form.older_bro != '' && this.form.older_sis != '' && this.form.younger_bro != '' && this.form.younger_sis != '' && this.form.countries != '' && this.form.english != '')
            }
        },
        methods: {
            go_to_next() {
                this.$bvModal.hide("modal-center-survey" + this.page_num)
                this.$bvModal.show("modal-center-survey" + ((Number(this.page_num) + 1).toString()))
                this.$emit('Survey2Done', this.form)
            },
            go_to_back() {
                this.$bvModal.hide("modal-center-survey" + this.page_num)
                this.$bvModal.show("modal-center-survey" + ((Number(this.page_num) - 1).toString()))
                this.$emit('Survey2Done', this.form)
            }
        },
    }
</script>


<style scoped>
</style>