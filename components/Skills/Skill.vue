<template>
  <div class="skill">
    <grid>
      <Column laptop="3">
        <Typography :text="skill.date" type="thirdtitle" color="gray" />
      </Column>
      <Column laptop="2">
        <Typography :text="skill.company" type="subtitle" />
      </Column>
      <Column laptop="7">
        <Typography :text="skill.job" type="thirdtitle" color="primary" />
        <p class="skill__resume">
          {{ skill.resume }}
        </p>
      </Column>
    </grid>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.skill {
  &__resume {
    margin-top: rem(20);
  }
}
</style>
