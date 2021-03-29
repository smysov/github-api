<template>
  <div class="wrappre__content wrapper__content_fixed">
    <search />
    <users />
  </div>
</template>

<script>
import Users from '@/components/Users';
import Search from '@/components/Search';

export default {
  name: 'Home',
  components: { Users, Search },
};
</script>
