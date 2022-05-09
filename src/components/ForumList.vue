<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link
        v-if="categoryId"
        :to="{ name: 'Category', params: { id: categoryId } }"
        >{{ title }}</router-link
      >
      <span v-else>{{ title }}</span>
    </h2>
    <div
      class="forum-listing"
      v-for="forum in categoryForumsData"
      :key="forum.id"
    >
      <div class="forum-details">
        <router-link
          :to="{ name: 'Forum', params: { id: forum.id } }"
          class="forum-name"
          >{{ forum.name }}</router-link
        >

        <p class="forum-description">{{ forum.description }}</p>
      </div>

      <div class="threads-count">
        <p class="count text-lead">
          <span>{{ forum.threads?.length }}</span>
          {{ forumThreadWord(forum) }}
        </p>
      </div>

      <div class="last-thread"></div>
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
      default: "Forums",
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
          ? "threads"
          : "thread"
        : "no threads";
    },
  },
  computed: {
    categoryForumsData() {
      return this.forums.filter(
        (forum) => forum.categoryId === this.categoryId
      );
    },
  },
};
</script>

<style></style>
