<template>
  <component :is="tag" :class="type" :style="{ color: `var(--${color})` }">{{
    text
  }}</component>
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
  font-size: rem(52);
  font-weight: 500;
}

.subtitle {
  font-size: rem(36);
}

.thirdtitle {
  font-size: rem(14);
}
</style>
