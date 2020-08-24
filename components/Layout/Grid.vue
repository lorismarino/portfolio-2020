<template>
  <div
    class="grid"
    :class="[
      fill ? 'grid--fill' : '',
      noGap ? 'grid--noGap' : '',
      justifyContent ? `grid--justify-content-${justifyContent}` : '',
      justifyContentTablet
        ? `grid--justify-content-${justifyContentTablet}--tablet`
        : '',
      justifyContentLaptop
        ? `grid--justify-content-${justifyContentLaptop}--laptop`
        : '',
      justifyContentDesktop
        ? `grid--justify-content-${justifyContentDesktop}--desktop`
        : '',
      justifyItems ? `grid--justify-items-${justifyItems}` : '',
      justifyItemsTablet
        ? `grid--justify-items-${justifyItemsTablet}--tablet`
        : '',
      justifyItemsLaptop
        ? `grid--justify-items-${justifyItemsLaptop}--laptop`
        : '',
      justifyItemsDesktop
        ? `grid--justify-items-${justifyItemsDesktop}--desktop`
        : '',
      alignContent ? `grid--align-content-${alignContent}` : '',
      alignContentTablet
        ? `grid--align-content-${alignContentTablet}--tablet`
        : '',
      alignContentLaptop
        ? `grid--align-content-${alignContentLaptop}--laptop`
        : '',
      alignContentDesktop
        ? `grid--align-content-${alignContentDesktop}--desktop`
        : '',
      alignItems ? `grid--align-items-${alignItems}` : '',
      alignItemsTablet ? `grid--align-items-${alignItemsTablet}--tablet` : '',
      alignItemsLaptop ? `grid--align-items-${alignItemsLaptop}--laptop` : '',
      alignItemsDesktop
        ? `grid--align-items-${alignItemsDesktop}--desktop`
        : '',
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    fill: {
      type: Boolean,
      default: false,
    },
    noGap: {
      type: Boolean,
      default: false,
    },
    justifyContent: {
      type: String,
      default: undefined,
    },
    justifyContentTablet: {
      type: String,
      default: undefined,
    },
    justifyContentLaptop: {
      type: String,
      default: undefined,
    },
    justifyContentDesktop: {
      type: String,
      default: undefined,
    },
    justifyItems: {
      type: String,
      default: undefined,
    },
    justifyItemsTablet: {
      type: String,
      default: undefined,
    },
    justifyItemsLaptop: {
      type: String,
      default: undefined,
    },
    justifyItemsDesktop: {
      type: String,
      default: undefined,
    },
    alignContent: {
      type: String,
      default: undefined,
    },
    alignContentTablet: {
      type: String,
      default: undefined,
    },
    alignContentLaptop: {
      type: String,
      default: undefined,
    },
    alignContentDesktop: {
      type: String,
      default: undefined,
    },
    alignItems: {
      type: String,
      default: undefined,
    },
    alignItemsTablet: {
      type: String,
      default: undefined,
    },
    alignItemsLaptop: {
      type: String,
      default: undefined,
    },
    alignItemsDesktop: {
      type: String,
      default: undefined,
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin grid($screen) {
  // justify-content
  .grid--justify-content-center#{$screen} {
    justify-content: center;
  }

  .grid--justify-content-start#{$screen} {
    justify-content: start;
  }

  .grid--justify-content-end#{$screen} {
    justify-content: end;
  }

  // justify-items
  .grid--justify-items-center#{$screen} {
    justify-items: center;
  }

  .grid--justify-items-start#{$screen} {
    justify-items: start;
  }

  .grid--justify-items-end#{$screen} {
    justify-items: end;
  }

  // align-content
  .grid--align-content-center#{$screen} {
    align-content: center;
  }

  .grid--align-content-start#{$screen} {
    align-content: start;
  }

  .grid--align-content-end#{$screen} {
    align-content: end;
  }

  // align-items
  .grid--align-items-center#{$screen} {
    align-items: center;
  }

  .grid--align-items-start#{$screen} {
    align-items: start;
  }

  .grid--align-items-end#{$screen} {
    align-items: end;
  }
}

@each $prefix, $width in $screens {
  @if ($prefix== '') {
    @include grid('');
  } @else {
    @media (min-width: $width) {
      @include grid($prefix);
    }
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  &:not(&--noGap) {
    grid-gap: rem(20);
  }

  &--fill {
    height: 100%;
  }
}
</style>
