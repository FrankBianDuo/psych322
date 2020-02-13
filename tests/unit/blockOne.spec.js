import { mount } from "@vue/test-utils"
import blockOne from "@/components/blockOne.vue"
import MainPage from "@/components/MainPage.vue"
import chalk from "chalk"

const TRIALS_NUM = 10

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Participant Default Behaviors', () => {
  it('Predict And Trust Dynamically', async () => {
    // Silence console warnings 
    const originalError = console.error;
    console.error = jest.fn();

    const wrapper = mount(blockOne, {
      // make sure you use attachToDocument: true when working with window and DOM-Events.
      attachToDocument: true
    })

    // Open up the modal window
    wrapper.setData({ show: true })
    for (var i = 0; i < TRIALS_NUM; i++) {
      expect(wrapper.vm.show).toBe(true)

      expect(wrapper.vm.free_space).toBe(true)
      wrapper.trigger('keyup.space')
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.free_space).toBe(false)
      await timeout(2250)
      
      expect(wrapper.vm.block_listeners).toBe(false)

      var pred_keycode = 0
      var trust_keycode = 0
      if (Number(wrapper.vm.combinations[i].trial_id) <= 54) {
        pred_keycode = 65
        trust_keycode = 74
      } else if (Number(wrapper.vm.combinations[i].trial_id) <= 108 && Number(wrapper.vm.combinations[i].trial_id) > 54) {
        pred_keycode = 65
        trust_keycode = 75
      } else if (Number(wrapper.vm.combinations[i].trial_id) <= 163 && Number(wrapper.vm.combinations[i].trial_id) > 108) {
        pred_keycode = 90
        trust_keycode = 74
      } else {
        pred_keycode = 90
        trust_keycode = 75
      }
      wrapper.trigger('keyup', {
        keyCode: pred_keycode
      })
      await wrapper.vm.$nextTick()
      await timeout(300)

      wrapper.trigger('keyup', {
        keyCode: trust_keycode
      })
      await wrapper.vm.$nextTick()
      await timeout(1500)
      var progress = (i + 1) / 216
      // eslint-disable-next-line no-console
      console.log(chalk.yellowBright(Math.round(progress * 10000) / 100 + '% trials tested'));


      expect(wrapper.vm.combinations[i].trust).toBe(trust_keycode == 74 ? 1 : 0)
      expect(wrapper.vm.combinations[i].prediction).toBe(pred_keycode == 65 ? 1 : 0)
      if ((wrapper.vm.combinations[i].trust == 1) == (trust_keycode == 74)) {
        // eslint-disable-next-line no-console
        console.log(chalk.green('Trial ' + i + ' TRUST PASSED'));
      } else {
        // eslint-disable-next-line no-console
        console.log(chalk.red('Trial ' + i + ' TRUST FAILED'));
      }
      if ((wrapper.vm.combinations[i].prediction == 1) == (pred_keycode == 65)) {
        // eslint-disable-next-line no-console
        console.log(chalk.green('Trial ' + i + ' PREDICTION PASSED'));
      } else {
        // eslint-disable-next-line no-console
        console.log(chalk.red('Trial ' + i + ' TRUST FAILED'));
      }
    }
    // eslint-disable-next-line no-console
    console.log(chalk.green('---------------------MOCK RESULTS VALIDATION---------------------'));
    let mock_results = wrapper.vm.combinations
    const main_wrapper = mount(MainPage, {
      // make sure you use attachToDocument: true when working with window and DOM-Events.
      attachToDocument: true
    })
    let mock_outputs = main_wrapper.vm.processOneResults(mock_results)

    for (var k = 0; k < 216; k++) {
      if (mock_outputs[k]['Prediction'] == null && mock_outputs[k]['Trust_dist'] == null) {
        // eslint-disable-next-line no-console
        console.log(chalk.blue('Result row ' + k + ' data not recorded, skipping validation'));
        continue;
      }
      let result_prediction = mock_outputs[k]['Prediction']
      let result_trust = mock_outputs[k]['Trust_dist']
      let validated = true;
      let expecting_prediction = 0;
      let expecting_trust = 0;
      if (Number(mock_outputs[k]['Trial_Number']) <= 54) {
        validated = (result_prediction == '1' && result_trust == '1') ? true : false
        expecting_prediction = 1;
        expecting_trust = 1;
      } else if (Number(mock_outputs[k]['Trial_Number']) <= 108 && Number(mock_outputs[k]['Trial_Number']) > 54) {
        validated = (result_prediction == '1' && result_trust == '0') ? true : false
        expecting_prediction = 1;
        expecting_trust = 0;
      } else if (Number(mock_outputs[k]['Trial_Number']) <= 163 && Number(mock_outputs[k]['Trial_Number']) > 108) {
        validated = (result_prediction == '0' && result_trust == '1') ? true : false
        expecting_prediction = 0;
        expecting_trust = 1;
      } else {
        validated = (result_prediction == '0' && result_trust == '0') ? true : false
        expecting_prediction = 0;
        expecting_trust = 0;
      }

      if (validated) {
        // eslint-disable-next-line no-console
        console.log(chalk.green('Result row ' + k + ' validated'));
      } else {
        // eslint-disable-next-line no-console
        console.log(chalk.red('Result row ' + k + ' not validated'));
        console.log(chalk.red('Prediction : Expecting ' + expecting_prediction + ' ; Received ' + result_prediction));
        console.log(chalk.red('Trust : Expecting ' + expecting_trust + ' ; Received ' + result_trust));
      }
    }

    // Silence
    console.error = originalError;
  })
})