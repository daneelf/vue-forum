<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <!-- <div class="profile-card">
          <p class="text-center">
            <img :src="user.avatar" :alt="user.name" class="avatar-xlarge" />
          </p>

          <h1 class="title">{{ user.username }}</h1>

          <p class="text-lead">{{ user.name }}</p>

          <p class="text-justify">{{ user.bio || "No bio specified" }}</p>

          <span class="online">{{ user.username }} is online</span>

          <div class="stats">
            <span>{{ userPostsCount || 0 }} posts</span>
            <span>{{ userThreadsCount || 0 }} threads</span>
          </div>

          <hr />

          <p v-if="user.website" class="text-large text-center">
            <i class="fa fa-globe"></i> <a :href="user.website">batman.com</a>
          </p>
        </div> -->
        <UserProfileCard v-if="!edit" :user="user" />
        <UserProfileEditor v-if="edit" :user="user" />
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead">{{ user.username }}'s recent activity </span>
          <a href="#">See only started threads?</a>
        </div>

        <hr />

        <PostList :posts="user.posts" />
      </div>
    </div>
  </div>
</template>

<script>
import { PostList, UserProfileCard, UserProfileEditor } from "@/components";
import { mapGetters } from "vuex";

export default {
  components: {
    PostList,
    UserProfileCard,
    UserProfileEditor,
  },
  props: {
    edit: { type: Boolean, default: false },
  },
  computed: {
    ...mapGetters({ user: "authUser" }),
  },
};
</script>

<style></style>
