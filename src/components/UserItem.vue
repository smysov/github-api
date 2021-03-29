<template>
  <li class="users__item">
    <div class="users__wrapper-avatar">
      <img class="users__avatar" :src="user.avatar_url" alt="Avatar" />
    </div>
    <h2 class="users__nickname"
      >Nickname: <span>{{ user.login }}</span></h2
    >
    <router-link class="users__info" :to="/user/ + user.login">Show more</router-link>
  </li>
</template>

<script>

export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  color: #848c94;
}
</style>
