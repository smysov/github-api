<template>
  <li class="user-info__item">
    <div class="user-info__badges">
      <div class="user-info__badge user-info__badge_followers"
        >Followers: {{ user.followers }}</div
      >
      <div class="user-info__badge user-info__badge_following"
        >Following: {{ user.following }}</div
      >
      <div class="user-info__badge user-info__badge_repositories"
        >Repositories: {{ user.public_repos }}</div
      >
      <div class="user-info__badge user-info__badge_gists"
        >Gists: {{ user.public_gists }}</div
      >
    </div>
  </li>
</template>

<script>
export default {
  name: 'OptionalInfo',
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  &__badges {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
    padding: 10px;

    @media (min-width: 480px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 8px;
    }
  }

  &__badge {
    font-size: 18px;
    padding: 8px 20px;
    border-radius: 5px;

    @media (min-width: 480px) {
      font-size: 20px;
    }

    @media (min-width: 768px) {
      font-size: 22px;
    }

    &_followers {
      background-color: #2d832d;
    }

    &_following {
      background-color: #698ab3;
    }

    &_repositories {
      background-color: #aeb369;
    }

    &_gists {
      background-color: #bbbbbb;
    }
  }
}
</style>
