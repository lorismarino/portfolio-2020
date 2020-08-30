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
            'I take care of integrating the models and doing front-end development with vue. I also sometimes work on projects with a backend.',
        },
        {
          date: 'December 2019 - Today',
          company: 'Freelance',
          job: 'front-end developer',
          resume: 'I became freelance to improve my experience.',
        },
        {
          date: 'June - November 2019',
          company: 'Akki',
          job: 'web integrator (intern)',
          resume:
            'I take care of integrating the models. I also sometimes work on projects with a backend.',
        },
        {
          date: 'July - August 2018',
          company: 'Benego',
          job: 'web integrator (intern)',
          resume:
            'I accompanied a startup in its launch by developing a platform for them to put in relation between sportsmen and associations.',
        },
        {
          date: 'July - August 2015-16-17',
          company: 'Superba',
          job: 'summer job',
          resume:
            'I worked during the summer assisting the arrival of goods and marketing.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.skills {
  margin-top: rem(100);
  padding: rem(50) 0;
  background-color: var(--black);

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
