<template>
  <section class="labs">
    <container>
      <typography tag="h3" text="My labs" type="title" />
      <div class="labs__labs">
        <grid>
          <Column
            v-for="(lab, index) in labs"
            :key="index"
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
          title: 'Vue markdown',
          resume:
            'In order to discover vue, I tested the functionality by creating a markdown editor.',
          github: 'https://github.com/LorisMarino/Vue-markdown',
          tags: ['VueJs', 'markdown', 'Scss'],
          image: 'vue-markdown.png',
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
    margin-top: rem(100);
  }

  &__lab {
    &:not(:first-child) {
      margin-top: rem(100);
    }
  }
}
</style>
