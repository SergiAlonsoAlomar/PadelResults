import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SplashScreen from "@/views/SplashScreen.vue";
import Login from "@/views/Login.vue";
import RegisterPage from '../views/RegisterPage.vue';
import ForgotPasswordPage from '../views/ForgotPasswordPage.vue';
import VerificationCodePage from '../views/VerificationCodePage.vue';
import ResetPasswordPage from '../views/ResetPasswordPage.vue';
import TournamentsPage from '../views/TournamentsPage.vue';
import RankingPage from '../views/RankingPage.vue';
import PredictPage from '../views/PredictPage.vue';
import NewsPage from '../views/NewsPage.vue';
import NewsDetailPage from '../views/NewsDetailPage.vue';
import TournamentDetailPage from '../views/TournamentDetailPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "SplashScreen",
    component: SplashScreen,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPasswordPage
  },
  {
    path: '/verification-code',
    name: 'VerificationCode',
    component: VerificationCodePage
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPasswordPage
  },
  {
    path: '/tournaments',
    name: 'Tournaments',
    component: TournamentsPage
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: RankingPage
  },
  {
    path: '/predict',
    name: 'Predict',
    component: PredictPage
  },
  {
    path: '/news',
    name: 'NewsPage',
    component: NewsPage
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: NewsDetailPage,
    props: true
  },
  {
    path: '/tournament/:id',
    name: 'TournamentResults',
    component: TournamentDetailPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router