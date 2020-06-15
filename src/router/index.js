import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Intro from "../views/Intro.vue";
import map from "@/views/Map.vue";
import Chapitre from "@/views/Chapitre.vue";
// import Chapitre1 from "@/views/Chapitre1.vue";
// import Chapitre2 from "@/views/Chapitre2.vue";
// import Chapitre3 from "@/views/Chapitre3.vue";
// import Chapitre4 from "@/views/Chapitre4.vue";
// import Chapitre5 from "@/views/Chapitre5.vue";
// import Chapitre6 from "@/views/Chapitre6.vue";
// import ArticlePicture1 from "@/views/ArticlePicture1.vue";
// import ArticlePicture2 from "@/views/ArticlePicture2.vue";
// import ArticlePicture4 from "@/views/ArticlePicture4.vue";
// import ArticlePicture5 from "@/views/ArticlePicture5.vue";
// import Quizz1 from "@/views/Quizz1.vue";
// import Quizz2 from "@/views/Quizz2.vue";
// import Quizz3 from "@/views/Quizz3.vue";
// import Quizz4 from "@/views/Quizz4.vue";
// import Quizz5 from "@/views/Quizz5.vue";
import Assos from "@/views/Assos.vue";
// import Chapter from "@/views/Chapter.vue";

Vue.use(VueRouter);

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
// blabla
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/intro",
    name: "Intro",
    component: Intro,
  },
  {
    path: "/map",
    name: "map",
    component: map,
  },
  {
    path: "/assos",
    name: "Assos",
    component: Assos,
  },
  {
    path: "/chapitre/:number",
    name: "chapitre",
    component: Chapitre,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
