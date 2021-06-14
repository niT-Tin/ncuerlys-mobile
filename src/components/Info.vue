<template>
  <div>
    <div>
      <!-- <router-link  class="ito" to="/login">重新登录</router-link> -->
      <van-icon name="arrow-left" @click="back" size="30" class="ito" />
      <van-collapse v-model="activeNames">
        <van-collapse-item title="姓名" name="1">{{userInfo.name}}</van-collapse-item>
        <van-collapse-item title="性别" name="2">
          <span v-if="userInfo.gender">男</span>
          <span v-else>女</span>
        </van-collapse-item>
        <!-- <van-collapse-item title="技术类型" name="3">内容</van-collapse-item> -->
        <van-collapse-item title="身份证" name="1">{{userInfo.idcard}}</van-collapse-item>
        <van-collapse-item title="居住地址" name="2">{{userInfo.address}}</van-collapse-item>
        <van-collapse-item title="学校/教练" name="3">
          <ul>
            <li>所属学校：{{userInfo.school}}</li><div></div>
            <li>所属教练：{{userInfo.coach}}</li><div></div>
          </ul>
        </van-collapse-item>
        <van-collapse-item title="监护人" name="1">
          <ul>
            <li>姓名：{{userInfo.guardian}}</li>
            <li>关系：{{userInfo.rela}}</li><div></div>
            <li>联系方式：{{userInfo.contact}}</li><div></div>
          </ul>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ["token", "userInfo"],
  data() {
    return {
      tt: "马老师",
      activeNames: [],
    };
  },
  methods:{
    back: function(){
      this.$router.push({name: 'login'});
    }
  },
  created(){
    // console.log(this.token)
    var instance = axios.create({
        baseURL: "http://hk4top.top:80/flexq/api",
        timeout: 10000,
        headers: {
          token: this.token,
        },
      });
    // console.log(this.userInfo)
  }
};
</script>

<style>
  @import '../css/style3.css';
</style>
