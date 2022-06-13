<template>
  <div>
    <div>
      <div
        v-for="thread in threads"
        :key="thread.id"
        class="p-4 mb-2 bg-white rounded-xl shadow flex justify-between space-x-4"
      >
        <div class="flex align-baseline gap-12">
          <div>
            <img class="avatar-medium mb-2" :src="userById(thread.userId).avatar" alt="" />
            <div>
              <p class="text-sm">
                <a href="#">{{ userById(thread.userId).name }}</a>
              </p>
              <p class="text-sm text-slate-400">
                <BaseDate :timestamp="thread.publishedAt" />
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-start">
            <p class="text-lg">
              <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">{{
                thread.title
              }}</router-link>
            </p>
            <p class="text-sm text-slate-400">
              By <a href="#">{{ userById(thread.userId).name }}</a
              >, <BaseDate :timestamp="thread.publishedAt" />.
            </p>
          </div>
        </div>
        <div class="self-end">
          <p class="text-slate-400">{{ thread.posts.length }} replies</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    threads: {
      type: Array,
      required: true,
    },
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId);
    },
    userById(userId) {
      return this.users.find((p) => p.id === userId);
    },
  },
};
</script>
