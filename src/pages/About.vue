<template>
  <div class="wrapper__content wrapper__content_fixed">
    <section class="about">
      <div class="container">
        <h1 class="about__title">About This App</h1>
        <p class="about__description"
          >Application for searching and viewing information about GitHub users</p
        >
        <span class="about__version">version 1.0.0</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss">
.about {
  display: flex;
  justify-content: center;
  text-align: center;

  &__title {
    text-transform: uppercase;

    @media (min-width: 480px) {
      font-size: 26px;
    }

    @media (min-width: 768px) {
      font-size: 28px;
    }
  }

  &__description {
    font-size: 18px;

    @media (min-width: 480px) {
      font-size: 20px;
    }

    @media (min-width: 768px) {
      font-size: 22px;
    }
  }

  &__version {
    font-style: italic;

    @media (min-width: 480px) {
      font-size: 18px;
    }
  }
}
</style>
