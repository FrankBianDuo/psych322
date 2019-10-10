
<template>
  <v-stage :config="configKonva">
    <v-layer>
      <v-circle :config="configCircle"></v-circle>
      <v-circle :config="configCircleEyeLeft"></v-circle>
      <v-circle :config="configCircleEyeRight"></v-circle>
      <v-circle :config="configCircleEyeLeftPupil"></v-circle>
      <v-circle :config="configCircleEyeRightPupil"></v-circle>
      <v-line :config="configArrowTop"></v-line>
      <v-line :config="configArrowBottom"></v-line>
      <v-line :config="configArrowTopLeft"></v-line>
      <v-line :config="configArrowTopRight"></v-line>
      <v-line :config="configArrowBottomLeft"></v-line>
      <v-line :config="configArrowBottomRight"></v-line>
      <v-text :config="configTextTop"></v-text>
      <v-text :config="configTextBottom"></v-text>
    </v-layer>
  </v-stage>
</template>

<script>
export default {
  name: 'gameCase',
  data() {
    return {
      configKonva: {
        width: 500,
        height: 300
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 35,
        fill: "blue",
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
      },
      configArrowTop: {
          points: [130, 70, 240, 13],
          stroke: 'black',
          strokeWidth: 4,
      },
      configArrowBottom: {
          points: [130, 130, 240, 187],
          stroke: 'black',
          strokeWidth: 4,
      },
      configArrowTopLeft: {
          points: [240, 13, 220, 13],
          stroke: 'black',
          strokeWidth: 3,
      },
      configArrowTopRight: {
          points: [240, 13, 230, 33],
          stroke: 'black',
          strokeWidth: 3,
      },
      configArrowBottomLeft: {
          points: [240, 187, 220, 187],
          stroke: 'black',
          strokeWidth: 3,
      },
      configArrowBottomRight: {
          points: [240, 187, 230, 167],
          stroke: 'black',
          strokeWidth: 3,
      },
      configTextTop: {
          x: 160,
          y: -20,
          text: "(   ,   )",
          fontSize: 50,
          fontFamily: 'Calibri',
          fill: 'black',
          width: 300,
          padding: 20,
          align: 'center'
      },
      configTextBottom: {
          x: 160,
          y: 140,
          text: "(   ,   )",
          fontSize: 50,
          fontFamily: 'Calibri',
          fill: 'black',
          width: 300,
          padding: 20,
          align: 'center'
      },
    };
  }
};

</script>