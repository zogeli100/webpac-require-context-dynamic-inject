<template>
  <div class="default-screen">该页面有个大gif</div>
</template>

<script>
export default {
  name: "schoolCockpit",
  components: {},
  data() {
    return {
      title: document.title,
    };
  },
  computed: {},
  mounted() {
    // this.getFiancoPassRate();
    // this.getSchFiancoPassRateRanking();
    // this.getEachGradeFiftyMeterCondition();
    // this.getLongRunCondition();
    // this.getEachPeriodFiancoCondition();
    // this.getBoyGirlBMICondition();
    // this.getEachAgeAverageHeight();
    // this.getPrimarySkippingRopeCondition();
    // const that = this;
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.default-screen {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1920px;
  min-height: 1080px;
  height: 100%;
  background: url(../assets/bigTree.gif) center center no-repeat;
  background-color: #010e25;
  background-size: contain;
  box-sizing: border-box;
}
</style>
