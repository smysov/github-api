<template>
  <li class="repositories__item">
    <a class="repositories__link" :href="repositories.html_url" target="_blank">{{
      repositories.name
    }}</a>
  </li>
</template>

<script>
export default {
  name: 'RepositoryItem',
  props: {
    repositories: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
