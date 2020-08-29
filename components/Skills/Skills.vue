<template>
  <section class="skills">
    <container>
      <typography tag="h3" text="My skills" type="title" />
      <div class="skills__skills">
        <skill
          v-for="(skill, index) in skills"
          :key="index"
          class="skills__skill"
          :skill="skill"
        />
      </div>
    </container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          date: 'June - December 2020',
          company: 'Akki',
          job: 'front-end developer (intern)',
          resume:
            'I take care of integrating the models and doing front-end development with vuej. I also sometimes work on projects with a backend.',
        },
      ],
    }
  },
}
</script>

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
