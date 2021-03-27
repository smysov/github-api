<template>
  <section class="section">
    <div class="container">
      <div class="search">
        <input class="search__input" type="search" placeholder="Find user" />
        <button class="search__button" aria-label="search">Search</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'search',
};
</script>

<style lang="scss">
.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 25px;

  &__input {
    font-size: 18px;
    color: dimgray;
    padding: 10px 20px;
    border: 2px solid #d3d3d3;
    border-radius: 35px;
    outline: none;

    @media (min-width: 480px) {
      font-size: 20px;
      width: 340px;
    }

    @media (min-width: 480px) {
      width: 380px;
    }

    &:focus {
      border-color: #fc8c03;
    }

    &:hover {
      border-color: #ffbd6c;
    }

    &::placeholder {
      opacity: 0.35;
    }
  }
}
</style>
