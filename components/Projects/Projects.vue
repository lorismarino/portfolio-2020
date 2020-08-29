<template>
  <section id="projects" class="projects">
    <container>
      <typography tag="h3" text="My projects" type="title" />
      <div class="projects__projects">
        <project
          v-for="(project, index) in projects"
          :key="index"
          class="projects__project"
          :project="project"
          :number="`0${index + 1}`.slice(-2)"
        />
      </div>
    </container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          type: 'Personal project',
          title: 'Tennis manager',
          resume:
            'Tennis manager allows you to calculate points during a tennis game, it allowed me to test my knowledge of sight on the court.',
          link: 'https://tennis-manager.lorismarino.fr/',
          tags: ['VueJs', 'Scss'],
          mainImage: 'tennis-manager/home.png',
          images: [
            'tennis-manager/home.png',
            'tennis-manager/game.png',
            'tennis-manager/winner.png',
          ],
        },
      ],
    }
  },
}
</script>

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
