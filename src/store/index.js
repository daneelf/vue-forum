import { createStore } from 'vuex';
import sourceData from '@/data';

export default createStore({
  state: {
    ...sourceData,
    authId: 'jVa6Go6Nl1Urkag1R2p9CHTf4ny1',
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
    createPost({ commit, state }, post) {
      post.id = 'pst' + Math.random();
      post.userId = state.authId;
      post.publishedAt = Math.floor(Date.now() / 1000);
      commit('setPost', { post });
      commit('appendPostToThread', {
        postId: post.id,
        threadId: post.threadId,
      });
    },
    createThread({ commit, state, dispatch }, { text, title, forumId }) {
      const userId = state.authId;
      const id = 'thrd' + Math.random();
      const publishedAt = Math.floor(Date.now() / 1000);

      const thread = { forumId, title, publishedAt, userId, id };
      commit('setThread', { thread });
      commit('appendThreadToUser', { userId, threadId: id });
      commit('appendThreadToForum', { forumId, threadId: id });
      dispatch('createPost', { text, threadId: id });
    },
    updateUser({ commit }, user) {
      commit('setUser', { user, userId: user.id });
    },
  },
  mutations: {
    setPost(state, { post }) {
      state.posts.push(post); // set the post
    },
    setThread(state, { thread }) {
      state.threads.push(thread);
    },
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.threads.find((thread) => thread.id === threadId);
      thread.posts = thread.posts || [];
      thread.posts.push(postId);
    },
    appendThreadToForum(state, { forumId, threadId }) {
      const forum = state.forums.find((forum) => forum.id === forumId);
      forum.threads = forum.threads || [];
      forum.threads.push(threadId);
    },
    appendThreadToUser(state, { userId, threadId }) {
      const user = state.users.find((user) => user.id === userId);
      user.threads = user.threads || [];
      user.threads.push(threadId);
    },
    setUser(state, { user, userId }) {
      const userIndex = state.users.findIndex((user) => user.id === userId);
      state.users[userIndex] = user;
    },
  },
});
