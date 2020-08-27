<template>
  <div class="skill">
    <grid>
      <Column laptop="2">
        <Typography text="Avril 2020" type="thirdtitle" color="gray" />
      </Column>
      <Column laptop="2">
        <Typography text="Akki" type="subtitle" />
      </Column>
      <Column laptop="8">
        <Typography text="front developer" type="thirdtitle" color="primary" />
        <p class="skill__resume">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
          corporis libero voluptas voluptates, sed cupiditate omnis ab iusto
          error impedit quod ipsum reprehenderit mollitia maxime necessitatibus
          facere recusandae laboriosam aut.
        </p>
      </Column>
    </grid>
  </div>
</template>

<style lang="scss" scoped>
.skill {
  &__resume {
    margin-top: rem(20);
  }
}
</style>
