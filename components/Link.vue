<template>
  <div class="c-link">
    <component
      :is="external ? 'a' : 'nuxt-link'"
      :to="external ? null : link"
      :href="external ? link : null"
      :target="tab ? 'blank' : null"
    >
      {{ text }}
    </component>
    <div v-if="arrow" class="c-link__arrow">
      <fa icon="long-arrow-alt-right" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    external: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      required: true,
    },
    tab: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes link {
  70% {
    transform: translateX(5px);
  }

  to {
    transform: none;
  }
}

.c-link {
  display: inline-flex;
  align-items: center;
  color: var(--primary);

  &:hover {
    .c-link__arrow {
      animation: link 0.8s ease-in-out;
    }
  }

  &__arrow {
    margin-left: rem(15);
  }
}
</style>
