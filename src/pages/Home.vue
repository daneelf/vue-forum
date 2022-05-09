<template>
  <div class="col-full push-top">
    <h1>The Forum</h1>
    <div class="forum-list">
      <CategoriesList :categories="categories" />
    </div>
  </div>
</template>

<script>
import { CategoriesList } from "@/components";

export default {
  components: {
    CategoriesList,
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>
