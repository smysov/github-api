<template>
  <div class="wrapper__content wrapper__content_fixed">
    <section class="section information">
      <div class="container">
        <preloader v-if="preloader" />
        <template v-else>
          <div class="info-wrapper">
            <ul class="user-info">
              <base-info :user="userInfo" />
              <optional-info :user="userInfo" />
            </ul>
            <button @click="onShowRepos">Show repositories</button>
          </div>
          <transition name="opacity">
            <repositories v-show="isShowRepos" />
          </transition>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Preloader from '@/components/Preloader';
import BaseInfo from '@/components/user-info/BaseInfo';
import OptionalInfo from '@/components/user-info/OptionalInfo';
import Repositories from '@/components/user-info/Repositories';

export default {
  name: 'Information',
  components: {
    Preloader,
    BaseInfo,
    OptionalInfo,
    Repositories,
  },
  mounted() {
    const { login } = this.$route.params;
    this.$store.dispatch('getUser', login);
    this.$store.dispatch('setLimitInitial', 5);
    this.$store.dispatch('setRepositories', login);
  },
  computed: {
    ...mapGetters({
      userInfo: 'getUserInfo',
      preloader: 'getLoader',
      isShowRepos: 'getShowRepos',
      repositories: 'getRepositories',
    }),
  },
  methods: {
    ...mapActions(['setShowRepos', 'setRepositories']),
    onShowRepos() {
      this.setShowRepos();
    },
  },
};
</script>

<style lang="scss" scoped>
.info-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 40px;
}

button {
  margin: 0 auto;
  color: #e4ebf5;
  background-color: #6d5dfc;
  box-shadow: inset 0.2rem 0.2rem 1rem #8abdff, inset -0.2rem -0.2rem 1rem #5b0eeb,
    0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff;

  &:hover {
    color: #fff;
  }

  &:active {
    box-shadow: inset 0.2rem 0.2rem 1rem #5b0eeb, inset -0.2rem -0.2rem 1rem #8abdff;
  }
}

.opacity-enter-active,
.opacity-leave-active {
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.opacity-enter,
.opacity-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
