import { createStore } from "vuex";
import sourceData from "@/data";

export default createStore({
  state: {
    ...sourceData,
    authId: "jVa6Go6Nl1Urkag1R2p9CHTf4ny1",
  },
  getters: {
    authUser: (state) => {
      const user = state.users.find((user) => user.id === state.authId);
      if (!user) return null;
      return {
        ...user,
        get posts() {
          return state.posts.filter((post) => post.userId === user.id);
        },
        get postsCount() {
          return this.posts.length;
        },
        get threads() {
          return state.threads.filter((thread) => thread.userId === user.id);
        },
        get threadsCount() {
          return this.threads.length;
        },
      };
    },
  },
  actions: {
    createPost(context, post) {
      post.id = "ggqq" + Math.random();
      context.commit("setPost", { post });
      context.commit("appendPostToThread", {
        postId: post.id,
        threadId: post.threadId,
      });
    },
    updateUser({ commit }, user) {
      commit("setUser", { user, userId: user.id });
    },
  },
  mutations: {
    setPost(state, { post }) {
      state.posts.push(post); // set the post
    },
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.threads.find((thread) => thread.id === threadId);
      thread.posts.push(postId); // append post to thread
    },
    setUser(state, { user, userId }) {
      const userIndex = state.users.findIndex((user) => user.id === userId);
      state.users[userIndex] = user;
    },
  },
});
