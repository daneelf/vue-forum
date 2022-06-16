<template>
  <header class="flex items-center p-6 h-20 bg-slate-900" id="header">
    <router-link :to="{ name: 'Home' }" class="w-16">
      <img class="max-w-full" src="../assets/svg/Vue.js_Logo_2.svg" />
    </router-link>

    <div class="btn-hamburger w-7 h-7 ml-5 relative lg:hidden">
      <!-- use .btn-humburger-active to open the menu -->
      <div class="top-2 w-7 h-1 absolute rounded-full bg-white"></div>
      <div class="top-4 w-7 h-1 absolute rounded-full bg-white"></div>
      <div class="bottom-6 w-7 h-1 absolute rounded-full bg-white"></div>
    </div>

    <!-- use .navbar-open to open nav -->
    <nav class="w-full flex flex-row-reverse justify-between">
      <ul class="flex items-center justify-start">
        <li class="ml-auto">
          <router-link :to="{ name: 'Profile' }" class="flex items-center text-white">
            <div class="w-9 m-2">
              <img
                class="rounded-full max-w-full"
                :src="authUser.avatar"
                :alt="`${authUser.name}`"
              />
            </div>
            <span>
              {{ authUser.name }}
            </span>
          </router-link>

          <!-- dropdown menu -->
          <!-- add class "active-drop" to show the dropdown -->
          <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item">
                <a href="profile.html">View profile</a>
              </li>
              <li class="dropdown-menu-item"><a href="#">Log out</a></li>
            </ul>
          </div>
        </li>
      </ul>
      <!-- <ul>
        <li class="navbar-item">
          <a href="index.html">Home</a>
        </li>
        <li class="navbar-item">
          <a href="category.html">Category</a>
        </li>
        <li class="navbar-item">
          <a href="forum.html">Forum</a>
        </li>
        <li class="navbar-item">
          <a href="thread.html">Thread</a>
        </li>
       // Show these option only on mobile
        <li class="navbar-item mobile-only">
          <a href="profile.html">My Profile</a>
        </li>
        <li class="navbar-item mobile-only">
          <a href="#">Logout</a>
        </li>
      </ul> -->
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['authUser']),
  },
};
</script>

<style scoped></style>
