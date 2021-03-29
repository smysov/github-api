<template>
  <li class="user-info__item">
    <div class="user-info__basic">
      <div class="user-info__image">
        <img class="user-info__avatar" :src="user.avatar_url" alt="Avatar" />
      </div>
      <h2 class="user-info__title">
        Name:
        <span class="user-info__description">{{ user.name || 'Unknown' }}</span>
      </h2>
      <p class="user-info__title">
        Location:
        <span class="user-info__description">{{ user.location || 'Unknown' }}</span>
      </p>
    </div>
    <div class="user-info__optional">
      <a class="user-info__link" :href="user.html_url" target="_blank">Visit Github Profile</a>
      <p class="user-info__title">
        Username:
        <span class="user-info__description">{{ user.login }}</span>
      </p>
      <p class="user-info__title">
        Company:
        <span class="user-info__description">{{ user.company || 'Unknown' }}</span>
      </p>
    </div>
  </li>
</template>
<script>
export default {
  name: 'BaseInfo',
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss">
.user-info {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #c8d0e7;
    padding: 10px;
    row-gap: 10px;

    @media (min-width: 480px) {
      padding: 20px;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
  }

  &__basic {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
  }

  &__optional {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
  }

  &__image {
    max-width: 250px;
    max-height: 250px;
    border-radius: 100%;
    overflow: hidden;
    border: 5px solid #b9bfcf;

    @media (min-width: 480px) {
      max-width: 300px;
      max-height: 300px;
    }
  }

  &__link {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.2px;
    background-color: #6d5dfc;
    padding: 8px 20px;
    text-transform: uppercase;
    color: #fff;
    border: 2px solid transparent;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    @media (min-width: 480px) {
      font-size: 16px;
      padding: 10px 20px;
    }

    &:hover {
      background-color: transparent;
      color: #6d5dfc;
      border-color: #6d5dfc;
    }
  }

  &__title {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 1.3px;

    @media (min-width: 480px) {
      font-size: 18px;
    }
  }

  &__description {
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0;
    background-color: #bdc9ec;
    padding: 5px;

    @media (min-width: 480px) {
      font-size: 18px;
    }
  }
}
</style>
