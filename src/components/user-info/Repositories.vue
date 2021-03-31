<template>
  <div class="repositories">
    <div class="sort">
      <button class="sort__button" @click="sort('name')">Name</button>
      <button class="sort__button" @click="sort('forks_count')">Fork</button>
      <button class="sort__button" @click="sort('stargazers_count')">Stars</button>
    </div>
    <ul class="repositories__list">
      <repository-item
        v-for="repos of showLimitRepositories"
        :key="repos.id"
        :repositories="repos"
      />
    </ul>
    <button class="repositories__button-show" v-show="isShowButton" @click="showMore"
      >Show more</button
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RepositoryItem from '@/components/user-info/RepositoryItem';

export default {
  name: 'Repositories',
  components: { RepositoryItem },
  mounted() {
    this.$store.dispatch('setLimitInitial', 5);
  },
  methods: {
    ...mapActions({
      changeLimit: 'setLimit',
      sort: 'sort',
    }),
    showMore() {
      this.changeLimit(5);
    },
  },
  computed: {
    ...mapGetters({
      repositories: 'getRepositories',
      sortRepositories: 'getSortedRepositiries',
      limit: 'getLimit',
    }),
    showLimitRepositories() {
      return this.sortRepositories.slice(0, this.limit);
    },
    isShowButton() {
      return this.repositories.length > 5 && this.limit <= this.repositories.length;
    },
  },
};
</script>

<style lang="scss">
.repositories {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #c8d0e7;
    padding: 20px;
    width: 100%;
    background-color: #f1f1f1;
  }

  &__link {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    color: #6f59ff;
    transition: all 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335);

    @media (min-width: 480px) {
      font-size: 20px;
    }

    @media (min-width: 768px) {
      font-size: 22px;
    }

    &:hover {
      color: #412ebe;
    }
  }

  &__info-wrapper {
    display: flex;
    align-items: baseline;
    column-gap: 10px;
  }

  &__info {
    display: flex;
    align-items: baseline;
    font-size: 30px;
    font-weight: 600;
    column-gap: 5px;
  }

  &__icon {
    &_fork {
      width: 30px;
      height: 35px;
      align-self: end;
    }
    &_star {
      width: 35px;
      height: 35px;
      align-self: end;
    }
  }

  &__button-show {
    color: #e4ebf5;
    background-color: #6d5dfc;
    box-shadow: inset 0.2rem 0.2rem 1rem #8abdff, inset -0.2rem -0.2rem 1rem #5b0eeb,
      0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff;
    margin: 0 auto;

    &:hover {
      color: #fff;
    }

    &:active {
      box-shadow: inset 0.2rem 0.2rem 1rem #5b0eeb, inset -0.2rem -0.2rem 1rem #8abdff;
    }
  }
}

.sort {
  display: flex;
  justify-content: space-evenly;

  &__button {
    position: relative;
    font-size: 18px;
    text-transform: capitalize;
    text-align: left;
    background-color: transparent;
    padding: 0;
    max-width: 78px;

    @media (min-width: 480px) {
      font-size: 20px;
    }

    @media (min-width: 768px) {
      font-size: 22px;
      max-width: 90px;
    }

    &::before {
      position: absolute;
      content: '';
      top: 11px;
      right: 16px;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 8px solid black;

      @media (min-width: 480px) {
        top: 13px;
        right: 8px;
        border-left-width: 6px;
        border-right-width: 6px;
        border-to-width: 12px;
      }

      @media (min-width: 768px) {
        top: 14px;
        right: 4px;
        border-left-width: 8px;
        border-right-width: 8px;
        border-to-width: 14px;
      }
    }

    &::after {
      position: absolute;
      content: '';
      top: 0;
      right: 16px;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 8px solid black;

      @media (min-width: 480px) {
        top: 2px;
        right: 8px;
        border-left-width: 6px;
        border-right-width: 6px;
        border-to-width: 12px;
      }

      @media (min-width: 768px) {
        top: 2px;
        right: 4px;
        border-left-width: 8px;
        border-right-width: 8px;
        border-to-width: 14px;
      }
    }
  }
}
</style>
