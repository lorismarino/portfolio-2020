<template>
  <section class="labs">
    <container>
      <typography tag="h3" text="My labs" type="title" />
      <div class="labs__labs">
        <grid>
          <Column
            v-for="(lab, index) in labs"
            :key="index"
            cols="12"
            laptop="4"
            class="labs__lab"
          >
            <lab class="labs__lab" :lab="lab" />
          </Column>
        </grid>
      </div>
    </container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      labs: [
        {
          type: 'Personal project',
          title: 'Lork',
          resume: 'Sets of components for use in projects.',
          github: 'https://github.com/LorisMarino/lork',
          tags: ['Scss', 'ES6'],
          image: 'lork.jpg',
        },
        {
          type: 'Personal project',
          title: 'Vue markdown',
          resume:
            'In order to discover vue, I tested the functionality by creating a markdown editor.',
          demo: 'https://vue-markdown.lorismarino.fr',
          github: 'https://github.com/LorisMarino/Vue-markdown',
          tags: ['VueJs', 'markdown', 'Scss'],
          image: 'vue-markdown.png',
        },
        {
          type: 'School project',
          title: 'Slots machines',
          resume: 'I developed a 3d css and js slot machine for 7 days.',
          demo: 'https://slots-machines.lorismarino.fr/',
          tags: ['css 3D', 'Scss', 'Js'],
          image: 'slots-machines.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.labs {
  margin-top: rem(100);

  &__labs {
    margin-top: rem(50);
  }
}
</style>
