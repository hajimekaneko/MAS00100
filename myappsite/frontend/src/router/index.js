import Vue from 'vue'
import VueRouter from "vue-router";
import routes from './routes'
import { authorizeToken } from './guards'

Vue.use(VueRouter);

// ルータインスタンスを作成
const router = new VueRouter({
    mode: "history",
    routes
  });
  

router.beforeEach(authorizeToken);

export default router
