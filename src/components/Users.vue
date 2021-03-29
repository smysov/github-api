<template>
  <section class="section result">
    <div class="container">
      <div class="users-wrapper">
        <preloader v-show="preloader" />
        <template v-if="users">
          <h1 class="title">Result</h1>
          <ul class="users">
            <user-item v-for="user of showLimitUsers" :key="user.id" :user="user" />
          </ul>
          <button class="users__button-show" v-show="isShowButton" @click="showMore"
            >Show more</button
          >
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import userItem from '@/components/UserItem';
import preloader from '@/components/Preloader';

export default {
  name: 'Users',
  components: { userItem, preloader },
  methods: {
    ...mapActions({
      changeLimit: 'setLimit',
    }),
    showMore() {
      this.changeLimit(12);
    },
  },
  computed: {
    ...mapGetters({
      users: 'getUsers',
      limit: 'getLimit',
      preloader: 'getLoader',
    }),
    showLimitUsers() {
      return this.users.slice(0, this.limit);
    },
    isShowButton() {
      return this.users.length > 12 && this.limit <= this.users.length;
    },
  },
};
</script>

<style lang="scss">
.result {
  position: relative;
  padding-top: 40px;
}
.users-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  position: relative;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 2.5px;
  color: #e0e0e0;
  align-self: flex-start;
}

.users {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
  margin-bottom: 30px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
    padding: 10px;
    background-color: #e4ebf5;
    margin: 0 auto;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
    width: 250px;

    @media (min-width: 480px) {
      padding: 20px;
    }

    &:hover {
      transform: scale(1.01);
      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.6);
    }
  }

  &__wrapper-avatar {
    max-width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #9fa9c5;

    @media (min-width: 480px) {
      max-width: 120px;
      height: 120px;
    }

    @media (min-width: 768px) {
      max-width: 150px;
      height: 150px;
    }
  }

  &__nickname {
    font-size: 16px;
    margin-bottom: auto;
  }

  &__info {
    color: #8d84d8;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    border: 2px solid #8d84d8;
    padding: 5px 10px;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    cursor: pointer;

    &:hover {
      color: #5b0eeb;
      border-color: #5b0eeb;
    }
  }

  &__button-show {
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
}
</style>
