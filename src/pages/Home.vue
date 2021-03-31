<template>
  <div class="wrappre__content wrapper__content_fixed">
    <search />
    <users />
    <transition name="opacity">
      <modal :title="title" v-show="isShowModal">
        <div slot="validation" class="validation">
          <p class="validation__description">Please enter username</p>
          <button class="validation__button" @click="closeModal(false)">Okey</button>
        </div>
      </modal>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Users from '@/components/Users';
import Search from '@/components/Search';
import Modal from '@/components/Modal';

export default {
  name: 'Home',
  components: { Users, Search, Modal },
  data: () => ({
    title: "Search can't be empty!",
  }),
  mounted() {
    document.body.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.closeModal(false);
      }
    });
  },
  computed: {
    ...mapGetters({
      isShowModal: 'getIsShowModal',
    }),
  },
  methods: {
    ...mapActions({
      closeModal: 'changeIsShowModal',
    }),
  },
};
</script>

<style lang="scss">
.validation {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__description {
    font-size: 20px;

    @media (min-width: 480px) {
      font-size: 22px;
    }

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  &__button {
    width: initial;
    border: 2px solid #6d5dfc;
    background-color: #6d5dfc;
    color: #fff;
    padding: 5px 15px;
    border-radius: 0;
    transition: transform 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    &:hover {
      transform: scale(0.95);
    }
  }
}

.opacity-enter-active,
.opacity-leave-active {
  transition: transform 0.3s linear;
}
.opacity-enter,
.opacity-leave-to {
  transform: scale(1.1);
}
</style>
