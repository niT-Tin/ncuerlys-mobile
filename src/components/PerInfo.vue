<template>
  <div>
    <router-view :token="token" :userInfo="userInfo"/>
    <van-tabbar fixed v-model="active" route >
      <van-tabbar-item replace to="/info" icon="user-circle-o">个人信息</van-tabbar-item>
      <van-tabbar-item replace to="/arrangement" icon="records">赛程</van-tabbar-item>
      <van-tabbar-item replace to="/grade" icon="chart-trending-o">成绩</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
    return {
      userInfo: {},
      token: '',
      active: 0,
    };
  },
  created() {
    this.token = this.$route.query.token;
    this.userInfo = this.$route.query.userInfo;
  },
  mounted(){
    this.$router.push({name: 'info'});
  }
};
</script>

<style></style>
