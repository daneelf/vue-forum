import { Home, ThreadShow, NotFound, Forum } from "@/pages";
import { Category } from "@/components";
import { createRouter, createWebHistory } from "vue-router";
import sourceData from "@/data.json";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/forum/:id", name: "Forum", component: Forum, props: true },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
    props: true,
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: ThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      // check if thread exists
      const threadExists = sourceData.threads.find(
        (thread) => thread.id === to.params.id
      );
      if (threadExists) {
        return next();
      } else {
        return next({
          name: "NotFound",
          // preserve current path and remove the first char to avoid the target URL starting with `//`
          params: { pathMatch: to.path.substring(1).split("/") },
          // preserve existing query and hash if any
          query: to.query,
          hash: to.hash,
        });
      }
    },
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
