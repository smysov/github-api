<template>
  <div class="modal" @click="closeModal(false)">
    <div class="modal__content" @click.stop="">
      <div class="modal__header">
        <h2 class="modal__title">{{ title }}</h2>
      </div>

      <div class="modal__body">
        <slot name="validation"></slot>
        <slot name="error"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      closeModal: 'changeIsShowModal',
    }),
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: #d3d9ee;
    z-index: 102;

    @media (min-width: 480px) {
      padding: 15px;
    }

    @media (min-width: 480px) {
      padding: 20px;
    }
  }

  &__title {
    font-size: 20px;
    letter-spacing: 1.1px;
    text-transform: uppercase;
    @media (min-width: 480px) {
      font-size: 22px;
    }

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
}
</style>
