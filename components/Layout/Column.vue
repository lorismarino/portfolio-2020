<template>
  <div
    class="col"
    :class="[
      cols ? `col-${cols}` : '',
      tablet ? `col--tablet-${tablet}` : '',
      laptop ? `col--laptop-${laptop}` : '',
      desktop ? `col--desktop-${desktop}` : '',
      laptopStart ? `col--laptop-start-${laptopStart}` : '',
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
      default: undefined,
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
    laptopStart: {
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

  @for $j from 2 through 11 {
    .col#{$screen}-start-#{$j} {
      grid-column-start: #{$j};
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
