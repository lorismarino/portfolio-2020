<template>
  <div
    class="col"
    :class="[
      cols ? `col--${cols}` : '',
      tablet ? `col--tablet-${tablet}` : '',
      laptop ? `col--laptop-${laptop}` : '',
      desktop ? `col--desktop-${desktop}` : '',
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    cols: {
      type: [String, Number],
      default: 12,
    },
    tablet: {
      type: [String, Number],
      default: undefined,
    },
    laptop: {
      type: [String, Number],
      default: undefined,
    },
    desktop: {
      type: [String, Number],
      default: undefined,
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin columns($screen) {
  @for $i from 1 through 12 {
    .col#{$screen}-#{$i} {
      grid-column-end: span #{$i};
    }
  }
}

@each $prefix, $width in $screens {
  @if ($prefix== '') {
    @include columns('');
  } @else {
    @media (min-width: $width) {
      @include columns($prefix);
    }
  }
}
</style>
