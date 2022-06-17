<template>
  <div class="p-0 bg-white mt-2">
    <h2 class="p-6 bg-cyan-900 w-full shadow-lg rounded-xl flex items-center">
      <router-link
        class="text-white hover:text-white"
        v-if="categoryId"
        :to="{ name: 'Category', params: { id: categoryId } }"
        >{{ title }}</router-link
      >
      <span v-else>{{ title }}</span>
    </h2>
    <div
      class="flex flex-wrap justify-between items-center py-7 pl-7 pr-2.5"
      v-for="forum in categoryForumsData"
      :key="forum.id"
    >
      <div class="basis-full sm:basis-1/2">
        <router-link :to="{ name: 'Forum', params: { id: forum.id } }" class="forum-name">{{
          forum.name
        }}</router-link>

        <p>{{ forum.description }}</p>
      </div>

      <div class="basis-1/6 font-thin">
        <p class="text-xl">
          <span>{{ forum.threads?.length }}</span>
          {{ forumThreadWord(forum) }}
        </p>
      </div>

      <div class="flex basis-2/6 justify-start align center"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryId: {
      required: false,
      type: String,
    },
    title: {
      type: String,
      default: 'Forums',
    },
  },
  data() {
    return {
      forums: this.$store.state.forums,
    };
  },
  methods: {
    forumThreadWord(forum) {
      return forum.threads?.length
        ? forum.threads?.length > 1
          ? 'threads'
          : 'thread'
        : 'no threads';
    },
  },
  computed: {
    categoryForumsData() {
      return this.forums.filter((forum) => forum.categoryId === this.categoryId);
    },
  },
};
</script>

<style></style>
