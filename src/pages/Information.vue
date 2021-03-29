<template>
  <div class="wrapper__content wrapper__content_fixed">
    <section class="section information">
      <div class="container">
        <preloader v-if="preloader" />
        <ul class="user-info" v-else>
          <base-info :user="userInfo"/>
          <optional-info :user="userInfo"/>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import preloader from '@/components/Preloader';
import baseInfo from '@/components/user-info/BaseInfo';
import optionalInfo from '@/components/user-info/OptionalInfo';

export default {
  name: 'Information',
  components: { preloader, baseInfo, optionalInfo },
  mounted() {
    const { login } = this.$route.params;
    this.$store.dispatch('getUser', login);
  },
  computed: {
    ...mapGetters({
      userInfo: 'getUserInfo',
      preloader: 'getLoader',
    }),
  },
};
</script>

<style lang="scss" scoped>
.wrapper__content {
  min-height: 85vh;
}
</style>
