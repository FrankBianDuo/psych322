<template>
  <b-modal
    id="modal-center-2"
    size="xl"
    centered
    title="Experiment 2"
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
      <b-row class="justify-content-center align-items-center my-1">
        <b-progress
          style="width: 100%;"
          :value="this.current_progress"
          :max="this.max_avatar"
          show-progress
          animated
        ></b-progress>
      </b-row>
      <b-row class="justify-content-center align-items-center my-1" :style="this.fade_style">
        <b-col class="justify-content-center align-items-center my-1">
          <b-row class="my-1">
            <img
              @click="upperLeft"
              :src="require(`../assets/block2materials/Template Upper Left ${this.whichPair(this.combinations[current_progress].target)}.png`)"
              style="position: relative; width: 100%; height: 100%; cursor: pointer;"
            />
          </b-row>
          <b-row>
            <img
              @click="lowerLeft"
              :src="require(`../assets/block2materials/Template Bottom Left ${this.whichPair(this.combinations[current_progress].target)}.png`)"
              style="position: relative; width: 100%; height: 100%; top: 10px; cursor: pointer;"
            />
          </b-row>
        </b-col>
        <b-col class="justify-content-center align-items-center my-1">
          <b-row class="justify-content-center align-items-center" :style="this.fade_style">
            <img
              :src="require(`../assets/block2materials/Animal Target 0${this.combinations[current_progress].target}.png`)"
              style="position: relative; width: 80%; height: 80%; top: 10px;"
            />
            <div style="position: absolute; top: 31%; left: 48%;">
              <h1
                :style="this.leftTextColor(this.combinations[current_progress].target)"
              >{{this.combinations[this.current_progress].p_p.a_first}}</h1>
            </div>
            <div style="position: absolute; top: 31%; right: 42%;">
              <h1
                :style="this.rightTextColor(this.combinations[current_progress].target)"
              >{{this.combinations[this.current_progress].p_p.p_first}}</h1>
            </div>
            <div style="position: absolute; top: 58%; left: 48%;">
              <h1
                :style="this.leftTextColor(this.combinations[current_progress].target)"
              >{{this.combinations[this.current_progress].p_p.a_second}}</h1>
            </div>
            <div style="position: absolute; top: 58%; right: 42%;">
              <h1
                :style="this.rightTextColor(this.combinations[current_progress].target)"
              >{{this.combinations[this.current_progress].p_p.p_second}}</h1>
            </div>
          </b-row>
        </b-col>
        <b-col class="justify-content-center align-items-center my-1">
          <b-row class="my-1" :style="this.fade_style">
            <img
              @click="upperRight"
              :src="require(`../assets/block2materials/Template Upper Right ${this.whichPair(this.combinations[current_progress].target)}.png`)"
              style="position: relative; width: 100%; height: 100%; cursor: pointer;"
            />
          </b-row>
          <b-row>
            <img
              @click="lowerRight"
              :src="require(`../assets/block2materials/Template Bottom Right ${this.whichPair(this.combinations[current_progress].target)}.png`)"
              style="position: relative; width: 100%; height: 100%; top: 10px; cursor: pointer;"
            />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
export default {
  name: "BlockTwo",
  components: {},
  data() {
    return {
      show: false,
      show_current: 1,
      b_show_2: true,
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
      ],
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "warning",
      footerTextVariant: "dark",
      colors: ["red", "yellow", "brown", "orange", "black"],
      scenarioColor: `height: 280px; backgroundColor: red;`,
      current_progress: 0,
      // How many games to run ----- 144
      max_avatar: 141,
      avatar_payoff: [
        {
          p_first: "3",
          a_first: "2",
          p_second: "1",
          a_second: "3",
        },
        {
          p_first: "3",
          a_first: "3",
          p_second: "1",
          a_second: "2",
        },
      ],
      prior_payoff: [
        // 3 3 1 1
        {
          a_first: "3",
          p_first: "3",
          a_second: "1",
          p_second: "1",
        },
        // 3 3 1 2
        {
          a_first: "3",
          p_first: "3",
          a_second: "1",
          p_second: "2",
        },
        // 3 3 2 1
        {
          a_first: "3",
          p_first: "2",
          a_second: "2",
          p_second: "1",
        },
        // 3 3 2 2
        {
          a_first: "3",
          p_first: "3",
          a_second: "2",
          p_second: "2",
        },
        // 1 3 3 1
        {
          a_first: "1",
          p_first: "3",
          a_second: "3",
          p_second: "1",
        },
        // 1 3 3 2
        {
          a_first: "1",
          p_first: "3",
          a_second: "3",
          p_second: "2",
        },
        // 2 3 3 1
        {
          a_first: "2",
          p_first: "3",
          a_second: "3",
          p_second: "1",
        },
        // 2 3 3 2
        {
          a_first: "2",
          p_first: "3",
          a_second: "3",
          p_second: "2",
        },
        // 8
        // 3 2 1 1
        {
          a_first: "3",
          p_first: "2",
          a_second: "1",
          p_second: "1",
        },
        // 2 3 1 1
        {
          a_first: "2",
          p_first: "3",
          a_second: "1",
          p_second: "1",
        },
        // 3 2 2 1
        {
          a_first: "3",
          p_first: "2",
          a_second: "2",
          p_second: "1",
        },
        // 2 3 1 2
        {
          a_first: "2",
          p_first: "3",
          a_second: "1",
          p_second: "2",
        },
        // 2 2 1 1
        {
          a_first: "2",
          p_first: "2",
          a_second: "1",
          p_second: "1",
        },
        // 1 2 3 1
        {
          a_first: "1",
          p_first: "2",
          a_second: "3",
          p_second: "1",
        },
        // 1 3 2 1
        {
          a_first: "1",
          p_first: "3",
          a_second: "2",
          p_second: "1",
        },
        // 1 3 2 2
        {
          a_first: "1",
          p_first: "3",
          a_second: "2",
          p_second: "2",
        },
        // 2 2 3 1
        {
          a_first: "2",
          p_first: "2",
          a_second: "3",
          p_second: "1",
        },
        // 1 2 2 1
        {
          a_first: "1",
          p_first: "2",
          a_second: "2",
          p_second: "1",
        },
        // 18
      ],
      combinations: [],
    };
  },
  beforeMount() {
    this.buildCombinations();
  },
  computed: {
    fade_style() {
      return `opacity: ${this.show_current}; transition: opacity 0.5s;`;
    },
  },
  methods: {
    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    buildCombinations() {
      var i, k;
      // iterate over all 8 animal targets
      for (i = 1; i < 9; i++) {
        // 8 * 18 = 144
        for (k = 0; k < this.prior_payoff.length; k++) {
          var new_comb = {
            p_p: this.prior_payoff[k],
            target: i,
            game_condition: 1 + k * 2,
            choice: null,
            avatar: null,
          };
          new_comb.avatar = Math.ceil(new_comb.target / 2);
          if (new_comb.target % 2 == 0) {
            new_comb.game_condition += 1;
          }
          this.combinations.push(new_comb);
        }
      }
      this.combinations = this.shuffle(this.combinations);
    },
    whichPair(target) {
      // Koala and Sloth
      if (target == 1 || target == 2) {
        return "Koala Sloth";
        // Pig and Koala
      } else if (target == 3 || target == 4) {
        return "Pig Koala";
        // Turtle and Pig
      } else if (target == 5 || target == 6) {
        return "Turtle Pig";
        // Sloth and Turtle
      } else if (target == 7 || target == 8) {
        return "Sloth Turtle";
      }
    },
    leftTextColor(target) {
      // Koala and Sloth
      if (target == 1 || target == 2) {
        return "position: absolute; color: #CAB08D";
        // Pig and Koala
      } else if (target == 3 || target == 4) {
        return "position: absolute; color: #FEA2CB;";
        // Turtle and Pig
      } else if (target == 5 || target == 6) {
        return "position: absolute; color: #6BDB4B";
        // Sloth and Turtle
      } else if (target == 7 || target == 8) {
        return "position: absolute; color: #824818";
      }
    },
    rightTextColor(target) {
      // Koala and Sloth
      if (target == 1 || target == 2) {
        return "position: absolute; color: #824818";
        // Pig and Koala
      } else if (target == 3 || target == 4) {
        return "position: absolute; color: #CAB08D";
        // Turtle and Pig
      } else if (target == 5 || target == 6) {
        return "position: absolute; color: #FEA2CB";
        // Sloth and Turtle
      } else if (target == 7 || target == 8) {
        return "position: absolute; color: #6BDB4B";
      }
    },
    upperLeft() {
      this.nextUp("1");
    },
    upperRight() {
      this.nextUp("2");
    },
    lowerLeft() {
      this.nextUp("3");
    },
    lowerRight() {
      this.nextUp("4");
    },
    nextUp(input) {
      this.combinations[this.current_progress].choice = input;
      this.show_current = 0;
      let parent = this;
      setTimeout(function () {
        parent.current_progress += 1;
        parent.$emit("blockTwoDone", parent.combinations);
        if (parent.current_progress == parent.max_avatar) {
          parent.show = false;
          alert("Block #3 finished");
          parent.b_show_3 = false;
        }
        parent.show_current = 1;
      }, 500);
    },
  },
};
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
  transition: background-color 0.3s;
}
</style>