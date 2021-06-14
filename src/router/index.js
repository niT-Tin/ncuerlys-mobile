import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: login => require(["@/components/Login"], login)
    },
    {
      path: "/test",
      name: "test",
      component: tt => require(["@/components/Test"], tt)
    },
    {
      path: "/login",
      name: "login1",
      component: login => require(["@/components/Login"], login)
    },
    {
      path: "/pinfo",
      name: "pinfo",
      component: info => require(["@/components/PerInfo"], info),
      children: [
        {
          path: "/info",
          name: 'info',
          component: info1 => require(["@/components/Info"], info1)
        },
        {
          path: "/arrangement",
          name: 'arrangement',
          component: arge => require(["@/components/Arrangement"], arge)
        },
        {
          path: "/grade",
          name:'grade',
          component: gd => require(["@/components/Grade"], gd)
        }
      ]
    }
  ]
});
