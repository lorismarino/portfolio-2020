<template>
  <div class="lab">
    <img
      src="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
      alt="Pixabay picture"
    />
    <div class="lab__content">
      <div>
        <typography
          class="lab__thirdtitle"
          type="thirdtitle"
          color="gray"
          text="Personnal project"
        />
        <typography class="lab__title" type="subtitle" text="Tennis manager" />
        <p class="lab__resume">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet
          impedit dolorem, aperiam nemo laboriosam dolor eius placeat eum rem
          adipisci numquam atque ipsa quis, excepturi nam minus consequatur in?
        </p>
        <div class="lab__links">
          <Link class="lab__link" text="View demo" link="#" external arrow />
          <Link
            class="lab__link"
            text="View on github"
            link="#"
            external
            arrow
          />
        </div>
      </div>
      <div class="lab__tags">
        <p class="lab__tag">#VueJs</p>
        <p class="lab__tag">#NuxtJs</p>
        <p class="lab__tag">#Scss</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lab {
  height: 100%;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
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
