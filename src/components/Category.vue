<template>
  <div class="col-full push-top">
    <h1>{{ category.name }}</h1>
    <ForumList
      :key="category.id"
      :forums="getForumsForCategory(category)"
      :title="category.name"
      :category-id="category.id"
    />
  </div>
</template>

<script>
import ForumList from './ForumList.vue';

export default {
  components: {
    ForumList,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    category() {
      return this.$store.state.categories.find(
        (category) => category.id === this.id
      );
    },
  },
  methods: {
    getForumsForCategory(category) {
      return this.$store.state.forums.filter(
        (forum) => forum.categoryId === category.id
      );
    },
  },
};
</script>

<style scoped></style>
