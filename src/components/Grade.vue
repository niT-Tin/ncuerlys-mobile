<template>
<div>
  <!-- <router-link class="gto" to="/login">重新登录</router-link> -->
  <van-icon name="arrow-left" @click="back" size="30" class="gto" />
  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</div>
  
</template>

<script>
export default {
  name: 'hello',
  props: ["token", "userInfo"],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        let grade = [];
        grade.push(this.userInfo.racefir)
        grade.push(this.userInfo.racesec)
        grade.push(this.userInfo.racethr)
        grade.push(this.userInfo.racefou)
        grade.push(this.userInfo.racefif)
        grade.push(this.userInfo.racesix)
        grade.push(this.userInfo.fir)
        myChart.setOption({
            title: { text: '比赛总排名'+this.userInfo.ranks },
            tooltip: {},
            xAxis: {
                data: ["第一局","第二局","第三局","第四局","第五局","第六局"]
            },
            yAxis: {},
            series: [{
                name: 'Grade',
                type: 'bar',
                data: grade
            }]
        });
    },
    back: function(){
        this.$router.push({name: 'login'})    
    }
  }
}
</script>

<style>
  @import '../css/style3.css';
</style>
