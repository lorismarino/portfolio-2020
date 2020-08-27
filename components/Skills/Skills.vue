<template>
  <div class="skills">
    <container>
      <typography tag="h3" text="My skills" type="title" />
      <div class="skills__skills">
        <skill class="skills__skill" />
        <skill class="skills__skill" />
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  margin-top: rem(100);

  &__skills {
    margin-top: rem(50);
  }

  &__skill {
    &:not(:first-child) {
      margin-top: rem(30);
      padding-top: rem(30);
      border-top: 1px solid rgba(#fff, 0.2);
    }
  }
}
</style>
