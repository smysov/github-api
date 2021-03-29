<template>
  <header class="header">
    <div class="navbar">
      <div class="container">
        <div class="navbar__content">
          <span class="navbar__logo">Github Finder</span>
          <ul class="navbar__list">
            <li v-for="link of links" :key="link.name">
              <router-link class="navbar__link" :to="link.url">{{
                link.name
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'home',
          url: '/',
        },
        {
          name: 'about',
          url: '/about',
        },
      ],
    };
  },
};
</script>
