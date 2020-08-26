<template>
  <div id="projects" class="projects">
    <container>
      <typography tag="h3" text="My projects" type="title" />
      <div class="projects__projects">
        <project class="projects__project" />
        <project class="projects__project" />
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  &__projects {
    margin-top: rem(100);
  }

  &__project {
    &:not(:first-child) {
      margin-top: rem(100);
    }
  }
}
</style>
