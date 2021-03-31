<template>
  <header class="header">
    <div class="navbar">
      <div class="container">
        <div class="navbar__content">
          <div class="navbar__logo-wrapper">
            <img class="navbar__icon" src="/images/github.svg" alt="logo" />
            <span class="navbar__logo">Github Finder</span>
          </div>
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
  name: 'HeaderMain',
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
