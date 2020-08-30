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
            'Tennis manager allows you to calculate points during a tennis game, it allowed me to test my knowledge of vue on the ground.',
          link: 'https://tennis-manager.lorismarino.fr/',
          tags: ['VueJs', 'Scss'],
          mainImage: 'tennis-manager/home.png',
          images: [
            'tennis-manager/home.png',
            'tennis-manager/game.png',
            'tennis-manager/winner.png',
          ],
        },
        {
          type: 'School project',
          title: 'Motion portfolio',
          resume: 'I realized during 2 days, a motion presenting me.',
          link: 'https://files.lorismarino.fr/motion-portfolio.mp4',
          tags: ['motion', 'after-effect'],
          mainImage: 'motion-portfolio.png',
        },
        {
          type: 'School project',
          title: 'Pokedex',
          resume:
            'The pokedex is based on a pokemon database in order to reference them.',
          link: 'https://pokedex.lorismarino.fr',
          tags: ['php', 'slim 3', 'mvc'],
          mainImage: 'pokedex/home.png',
          images: [
            'pokedex/home.png',
            'pokedex/pokemon.png',
            'pokedex/search.png',
          ],
        },
        {
          type: 'School project',
          title: 'Lameteo',
          resume:
            'Lameteo gives you the weather forecast in France because at the api openweathermap.',
          link: 'https://lameteo.lorismarino.fr',
          tags: ['php', 'api'],
          mainImage: 'lameteo/home.png',
          images: [
            'lameteo/home.png',
            'lameteo/search.png',
            'lameteo/weather.png',
          ],
        },
        {
          type: 'School project',
          title: 'Player',
          resume:
            'The player allows you to listen to a playlist with various settings and watch the clips.',
          link: 'https://player.lorismarino.fr',
          tags: ['js', 'Scss', 'audio', 'video'],
          mainImage: 'player/home.png',
          images: ['player/home.png', 'player/audio.png', 'player/video.png'],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.projects {
  padding: rem(50) 0;
  background-color: var(--black);

  &__projects {
    margin-top: rem(50);

    @include laptop {
      margin-top: rem(100);
    }
  }

  &__project {
    &:not(:first-child) {
      margin-top: rem(50);
      padding-top: rem(50);
      border-top: 1px solid rgba(#fff, 0.2);

      @include laptop {
        padding-top: 0;
        margin-top: rem(100);
        border-top: none;
      }
    }
  }
}
</style>
