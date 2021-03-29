<template>
  <section class="section">
    <div class="container">
      <form class="search" @submit.prevent="onSearch(search)">
        <input
          type="text"
          class="search__input"
          placeholder="Find user..."
          v-model="search"
        />
        <button class="search__button" aria-label="search">
          Search
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Search',
  data: () => ({
    search: '',
  }),
  methods: {
    ...mapActions(['setSearch', 'getUsers']),
    onSearch(value) {
      if (!value) {
        return;
      }
      this.setSearch(value);
      this.getUsers();
      this.search = '';
    },
  },
};
</script>

<style lang="scss">
.search {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 25px;
  max-width: 280px;
  margin: 0 auto;

  &::before {
    position: absolute;
    content: '';
    top: 13px;
    left: 26px;
    border: 2px solid #9baacf;
    border-radius: 50%;
    width: 16px;
    height: 16px;
  }

  &::after {
    position: absolute;
    content: '';
    top: 25px;
    left: 43px;
    background-color: #9baacf;
    width: 2px;
    height: 12px;
    transform: rotate(-45deg);
  }

  &__input {
    border: none;
    border-radius: 1rem;
    font-size: 18px;
    padding: 15px 10px 15px 60px;
    box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #fff;
    background: none;
    color: #9baacf;

    &:focus {
      outline: none;
      box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff;
    }

    &::placeholder {
      color: #bec8e4;
    }
  }

  &__button {
    box-shadow: 0.8rem 0.8rem 1.4rem #bac2d8, -0.2rem -0.2rem 1.8rem #fff;
    color: #8792af;
    background: none;

    &:hover {
      color: #6d5dfc;
    }

    &:active {
      box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #fff;
    }
  }
}
</style>
