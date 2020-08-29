<template>
  <div class="project">
    <div class="project__number">01</div>
    <grid>
      <Column laptop="6">
        <div class="project__left">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
            alt="Pixabay picture"
            @mouseover="isFocus = true"
            @mouseleave="isFocus = false"
          />
          <div
            class="project__images"
            :class="{ 'project__images--visible': isFocus }"
            @mouseover="isFocus = true"
            @mouseleave="isFocus = false"
          >
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
              alt="Pixabay picture"
            />
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
              alt="Pixabay picture"
            />
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
              alt="Pixabay picture"
            />
          </div>
        </div>
      </Column>
      <Column laptop="5" laptop-start="8">
        <div class="project__content">
          <div>
            <typography
              type="thirdtitle"
              color="gray"
              text="Personnal project"
            />
            <typography
              class="project__title"
              type="subtitle"
              text="Tennis manager"
            />
            <p class="project__resume">
              Tennis manager permet de mieux gérer vos parties de tennis gràace
              à un compteur intelligent
            </p>
            <Link
              class="project__link"
              text="View this project"
              link="#"
              external
              arrow
            />
          </div>
          <div class="project__tags">
            <p class="project__tag">#VueJs</p>
            <p class="project__tag">#NuxtJs</p>
            <p class="project__tag">#Scss</p>
          </div>
        </div>
      </Column>
    </grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFocus: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.project {
  position: relative;

  &__number {
    position: absolute;
    top: 0;
    left: 0;
    font-size: rem(60);
    color: var(--white);
    font-weight: 700;
    transform: translateX(-50%) translateY(-50%);
  }

  &__left {
    position: relative;
  }

  &__images {
    opacity: 0;
    transition: 0.3s ease-in-out;
    width: rem(500);
    position: absolute;
    z-index: 9;
    right: 0;
    top: 50%;
    transform: translateY(-20%) translateX(20%);
    pointer-events: none;

    &--visible {
      pointer-events: all;
      opacity: 1;
      transform: translateY(-50%) translateX(50%);
    }

    img {
      &:not(:first-child) {
        margin-top: rem(50);
      }
    }
  }

  img {
    width: 100%;
  }

  &__title {
    margin-top: rem(20);
  }

  &__resume {
    margin-top: rem(20);
  }

  &__link {
    margin-top: rem(20);
  }

  &__content {
    height: calc(100% - #{rem(40)});
    padding-top: rem(20);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__tags {
    display: flex;
    margin-left: -#{rem(20)};
  }

  &__tag {
    margin-left: rem(20);
    color: var(--gray);
    font-weight: 500;
  }
}
</style>
