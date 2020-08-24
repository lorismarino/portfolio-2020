<template>
  <div
    class="container"
    :class="[fluid ? 'container--fluid' : '', fill ? 'container--fill' : '']"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 #{rem(20)};

  &:not(&--fluid) {
    @include tablet {
      width: $tablet-width;
      margin: 0 auto;
    }

    @include laptop {
      width: $laptop-width;
      margin: 0 auto;
    }

    @include desktop {
      width: $desktop-width;
    }
  }

  &--fill {
    height: 100%;
  }
}
</style>
