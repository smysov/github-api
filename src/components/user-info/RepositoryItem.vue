<template>
  <li class="repositories__item">
    <a class="repositories__link" :href="repositories.html_url" target="_blank">{{
      slicedName
    }}</a>
    <div class="repositories__info-wrapper">
      <div class="repositories__info">
        <img
          class="repositories__icon repositories__icon_fork"
          src="/images/fork.svg"
          alt="Forks count"
        />{{ repositories.forks_count }}<span class="repositories__quantity"></span>
      </div>
      <div class="repositories__info">
        <img
          class="repositories__icon repositories__icon_star"
          src="/images/star.svg"
          alt="Stars count"
        />{{ repositories.stargazers_count }}<div class="repositories__quantity"></div>
      </div>
    </div>
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
  computed: {
    slicedName() {
      return this.repositories.name.length > 10
        ? `${this.repositories.name.slice(0, 10)}...`
        : this.repositories.name;
    },
  },
};
</script>
