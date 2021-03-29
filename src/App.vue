<template>
  <div class="wrapper">
    <header-main />
    <router-view />
  </div>
</template>

<script>
import headerMain from './components/HeaderMain';

export default {
  name: 'App',
  components: { headerMain },
};
</script>
