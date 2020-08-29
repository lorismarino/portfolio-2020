<template>
  <section class="labs">
    <container>
      <typography tag="h3" text="My labs" type="title" />
      <div class="labs__labs">
        <grid>
          <Column laptop="4">
            <lab class="labs__lab" />
          </Column>
          <Column laptop="4">
            <lab class="labs__lab" />
          </Column>
        </grid>
      </div>
    </container>
  </section>
</template>

<style lang="scss" scoped>
.labs {
  margin-top: rem(100);

  &__labs {
    margin-top: rem(100);
  }

  &__lab {
    &:not(:first-child) {
      margin-top: rem(100);
    }
  }
}
</style>
