<template>
  <component
    :is="tag"
    :class="type"
    :style="{ color: color ? `var(--${color})` : '' }"
    >{{ text }}</component
  >
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'p',
    },
    type: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: undefined,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-size: rem(36);
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  width: rem(300);

  @include laptop {
    font-size: rem(52);
  }
}

.subtitle {
  font-size: rem(30);
  line-height: 1;
}

.thirdtitle {
  font-size: rem(14);
}
</style>
