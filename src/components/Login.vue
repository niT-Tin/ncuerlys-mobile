<template>
  <div class="loginpane">
    <div class="title">保龄球比赛分数查询</div>
    <div class="flt">
      <div class="lgn">登录</div>
      <img src="static/PlayerLoginPage/u12.png" class="acpic" alt="" />
      <img src="static/PlayerLoginPage/u13.png" class="pdpic" alt="" />
      <van-field v-model="users1.account" class="ac" placeholder="请输入用户名" />
      <van-field
        v-model="users1.password"
        placeholder="请输入密码"
        type="password"
        class="pd"
      />
      <van-button class="lgnbtn" @click="toData" color="#e39600"
        >登录</van-button
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import { Dialog } from 'vant';
export default {
  data() {
    return {
      users1: {
        account: "",
        password: ""
      },
      instance: null
    };
  },
  methods: {
    toData: function() {
      let users = qs.stringify({
        account: this.users1.account,
        password: this.users1.password
      });
      console.log(users);
      this.instance.post("/login", users).then(res => {
        console.log(res)
        if (res.data.status == 200 && res.data.userInfo.roles == 'player') {
          console.log(res)
          this.$router.push({query:{token:res.data.token,userInfo:res.data.userInfo}, name: "pinfo"});
          // this.$router.push({name: 'info'});
        } else {
          Dialog.alert({
            title: "错误！",
            message: "账号或者密码错误",
            theme: "round-button"
          }).then(() => {
            // on close
          });
        }
      });
    }
  },
  created() {
    this.instance = axios.create({
      baseURL: "http://hk4top.top:80/flexq/api",
      timeout: 10000
    });
  }
};
</script>

<style>
@import "../css/style1.css";
</style>
