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
          <img :src="require('../../assets/Free Response/Happiness Question.png')" style="width: 60%; height: auto; transform: translate(-50%, 0%); margin-left: 50%;"/>
          <b-form>


            <b-form-group id="input-group-1" label="Which of these people best represents you?" label-for="input-1">
                <b-form-select
                id="input-1"
                v-model="form.avatars"
                :options="avatars"
                required
                ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-2" label="I have a lot of love in my life." label-for="input-2">
                <b-form-select
                id="input-2"
                v-model="form.loves"
                :options="loves"
                required
                ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-3" label="Year of birth (number only):" label-for="input-3">
                <b-form-input
                id="input-3"
                type='number'
                v-model="form.yob"
                required
                placeholder="Enter your year of birth here..."
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" label="Gender:" label-for="input-4">
                <b-form-select
                id="input-4"
                v-model="form.genders"
                :options="genders"
                required
                ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-5" label="How many years of school have you completed?" label-for="input-5">
                <b-form-input
                id="input-5"
                v-model="form.school"
                required
                placeholder="Enter here"
                ></b-form-input>
            </b-form-group>

            </b-form>
      </b-container>
        <b-button :disabled="block" variant="outline-primary" size="lg">Back</b-button>
        <b-button :disabled="block" style="float: right;" @click="this.go_to_next" variant="outline-primary" size="lg">Next</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: 'Survey1',
        props: ['windowsize'],
        components: {
        },
        data() {
            return {
                page_num: "1",
                form: {
                avatars: '',
                loves: '',
                genders: '',
                yob: '',
                school: '',
                },
                avatars: [{ text: 'Select One', value: null }, 'Very sad people', 'Sad people', 'Medium people', 'happy people', 'Very happy people'],
                loves: [{ text: 'Select One', value: null }, 'Strongly agree', 'Agree', 'Neutral', 'Disagree', 'Strongly disagree'],
                genders: [{ text: 'Select One', value: null }, 'Male', 'Female', 'Other'],
                    
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
                return !(this.form.avatars != '' && this.form.loves != '' && this.form.genders != '' && this.form.yob != '' && this.form.school != '')
            }
        },
        methods: {
            go_to_next() {
                this.$bvModal.hide("modal-center-survey" + this.page_num)
                this.$bvModal.show("modal-center-survey" + ((Number(this.page_num) + 1).toString()))
                this.$emit('Survey1Done', this.form)
            }
        },
    }
</script>


<style scoped>
</style>