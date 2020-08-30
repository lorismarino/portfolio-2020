<template>
  <div class="lab">
    <img :src="`/labs/${lab.image}`" :alt="lab.title" />
    <div class="lab__content">
      <div>
        <typography
          class="lab__thirdtitle"
          type="thirdtitle"
          color="gray"
          :text="lab.type"
        />
        <typography class="lab__title" type="subtitle" :text="lab.title" />
        <p class="lab__resume">
          {{ lab.resume }}
        </p>
        <div class="lab__links">
          <Link
            v-if="lab.demo"
            class="lab__link"
            text="View demo"
            :link="lab.demo"
            external
            arrow
            tab
          />
          <Link
            v-if="lab.github"
            class="lab__link"
            text="View on github"
            :link="lab.github"
            external
            arrow
            tab
          />
        </div>
      </div>
      <div class="lab__tags">
        <p v-for="(tag, index) in lab.tags" :key="index" class="lab__tag">
          #{{ tag }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lab: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.lab {
  height: 100%;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: rem(200);
    object-fit: cover;
  }

  &__thirdtitle {
    margin-top: rem(20);
  }

  &__title {
    margin-top: rem(20);
  }

  &__resume {
    margin-top: rem(20);
  }

  &__links {
    margin-top: rem(20);
  }

  &__link {
    &:not(:first-child) {
      margin-left: rem(20);
    }
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__tags {
    display: flex;
    margin-top: rem(50);
    margin-left: -#{rem(20)};
  }

  &__tag {
    margin-left: rem(20);
    color: var(--gray);
    font-weight: 500;
  }
}
</style>
