<template>
  <div class="wrappre__content wrapper__content_fixed">
    <search />
    <users />
  </div>
</template>

<script>
import users from '@/components/Users';
import search from '@/components/Search';

export default {
  name: 'Home',
  components: { users, search },
};
</script>
