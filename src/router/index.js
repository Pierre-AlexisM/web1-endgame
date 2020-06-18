import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Intro from "../views/Intro.vue";
import map from "@/views/Map.vue";
import Chapitre from "@/views/Chapitre.vue";
import Article from "@/views/Article.vue";
import Article2 from "@/views/Article2.vue";
import Quizz from "@/views/Quizz.vue";
import VraiFaux from "@/components/VraiFaux.vue";
import Assos from "@/views/Assos.vue";

Vue.use(VueRouter);

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
// blabla
const routes = [{
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
    children: [{
        path: "article",
        name: "article",
        component: Article
      },
      {
        path: "/quizz/:number",
        name: "quizz",
        component: Quizz
      },
      {
        path: "/vraifaux/:number",
        name: "vraifaux",
        component: VraiFaux
      }
    ]
  },
  {
    path: "/chapitre/:number",
    name: "chapitre",
    component: Chapitre,
    children: [{
        path: "article2",
        name: "article2",
        component: Article2
      },
      {
        path: "/quizz/:number",
        name: "quizz",
        component: Quizz
      },
      {
        path: "/vraifaux/:number",
        name: "vraifaux",
        component: VraiFaux
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;