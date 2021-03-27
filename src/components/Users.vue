<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Users</h1>
      <ul class="users">
        <user-item />
      </ul>
    </div>
  </section>
</template>

<script>
import userItem from '@/components/UserItem';

export default {
  name: 'Users',
  components: { userItem },
};
</script>

<style lang="scss">
.title {
  margin-bottom: 20px;
  text-transform: uppercase;
  font-style: italic;
  letter-spacing: 1.2px;
  color: #9e9e9e;
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
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);

    @media (min-width: 480px) {
      padding: 20px;
    }

    &:hover {
      transform: scale(1.01);
      box-shadow: 0 0 18px 1px rgb(215, 215, 0);
    }
  }

  &__wrapper-avatar {
    max-width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;

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
