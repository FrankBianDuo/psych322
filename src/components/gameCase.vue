
<template>
  <v-stage :config="configKonva">
    <v-layer>
      <v-circle :config="configCircle"></v-circle>
      <v-circle :config="configCircleEyeLeft"></v-circle>
      <v-circle :config="configCircleEyeRight"></v-circle>
      <v-circle :config="configCircleEyeLeftPupil"></v-circle>
      <v-circle :config="configCircleEyeRightPupil"></v-circle>
    </v-layer>
  </v-stage>
</template>

<script>
export default {
  name: 'gameCase',
  data() {
    return {
      configKonva: {
        width: 300,
        height: 300
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 35,
        fill: "red",
        stroke: "black",
        strokeWidth: 4
      },
      configCircleEyeLeft: {
        x: 87,
        y: 90,
        radius: 10,
        fill: "white",
        stroke: "black",
        strokeWidth: 2
      },
      configCircleEyeRight: {
        x: 113,
        y: 90,
        radius: 10,
        fill: "white",
        stroke: "black",
        strokeWidth: 2
      },
      configCircleEyeLeftPupil: {
        x: 92,
        y: 92,
        radius: 4,
        fill: "black",
        stroke: "black",
        strokeWidth: 2
      },
      configCircleEyeRightPupil: {
        x: 118,
        y: 92,
        radius: 4,
        fill: "black",
        stroke: "black",
        strokeWidth: 2
      }
    };
  }
};

</script>