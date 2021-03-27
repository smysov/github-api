<template>
  <section class="section">
    <div class="container">
      <h1 class="title" v-if="users">Result</h1>
      <ul class="users">
        <user-item v-for="user in users" :key="user.id" :user="user" />
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import userItem from '@/components/UserItem';

export default {
  name: 'Users',
  components: { userItem },
  computed: {
    ...mapGetters({
      users: 'getUsers',
    }),
  },
};
</script>

<style lang="scss">
.title {
  position: relative;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 2.5px;
  color: #e0e0e0;

  &::before,
  &::after {
    position: absolute;
    height: 12px;
    content: '';
    top: 0px;
    height: 12px;
  }

  &::before {
    left: 85px;
    border: 2px solid #e0e0e0;
    border-radius: 50%;
    width: 12px;
  }

  &::after {
    top: 8px;
    left: 98px;
    background-color: #e0e0e0;
    width: 2px;
    transform: rotate(-45deg);
  }
}

.users {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
    padding: 10px;
    background-color: #fff;
    margin: 0 auto;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
    width: 250px;

    @media (min-width: 480px) {
      padding: 20px;
    }

    &:hover {
      transform: scale(1.01);
      box-shadow: 0 0 15px 1px rgb(215, 215, 0);
    }
  }

  &__wrapper-avatar {
    max-width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid gold;

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
  }

  &__info {
    color: gold;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    border: 2px solid gold;
    padding: 5px 10px;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    cursor: pointer;

    &:hover {
      color: orange;
      border-color: orange;
    }
  }
}
</style>
