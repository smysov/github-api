<template>
  <div class="preloader">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
};
</script>

<style lang="scss">
.preloader {
  position: absolute;
  top: -2%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  padding-top: 30px;
  transform: translateX(-50%);

  @media (min-width: 480px) {
    top: -1.5%;
  }

  @media (min-width: 768px) {
    top: -3%;
  }

  @media (min-width: 968px) {
    top: -5%;
  }
}
.loader {
  height: 40px;
  width: 40px;
  border: 5px solid rgba(26, 26, 233, 0.2);
  border-top: 5px solid #5252ff;
  border-radius: 50%;
  animation: rotate 1s infinite linear;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
