<template>
  <div>
    <!-- <router-link class="ato" to="/login">重新登录</router-link> -->
    <van-icon name="arrow-left" @click="back" size="30" class="ato" />
    <div>
      <van-steps class="vs" v-for="item in activities" direction="vertical">
        <van-step>
          <h3>{{item.content}}</h3>
          <p>{{item.timestamp}}</p>
        </van-step>
      </van-steps>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      activities:[],
    }
  },
  props: ["token"],
  methods: {
    back: function(){
      this.$router.push({name: 'login'})
    }
  },
  created(){
    var instance = axios.create({
      baseURL: "http://hk4top.top:80/flexq/api",
      timeout: 10000,
      headers: {
        token: this.token,
      },
    });
    instance
      .get("http://hk4top.top:80/flexq/api/getarrangement")
      .then((result) => {
        // console.log(result.data.arrangementList);
        // let a = {};
        var i;
        for (i in result.data.arrangementList) {
          let a = {};
          a.content = result.data.arrangementList[i].schedule;
          a.timestamp =
            result.data.arrangementList[i].time;
          a.size = "medium";
          a.type = "primary";
          a.icon = "el-icon-more"
          this.activities.push(a);
        }
       this.activities =  this.activities.slice(0,5)
      });
      // console.log(this.activities);
  }
};
</script>

<style>
  @import '../css/style2.css';
</style>
