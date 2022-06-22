<template>
  <div class="col-full push-top">
    <h1 class="text-3xl font-bold underline">The Forum</h1>

    <CategoriesList :categories="categories" />
  </div>
</template>

<script>
import { CategoriesList } from '@/components';

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
