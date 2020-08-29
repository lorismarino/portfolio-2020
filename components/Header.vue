<template>
  <header class="header">
    <container>
      <div class="header__container">
        <img class="header__logo" src="/logo.svg" alt="logo Loris Marino" />
        <div class="header__socials">
          <a class="header__social" href="https://github.com/lorismarino">
            <fa :icon="['fab', 'github-square']" />
          </a>
          <a
            class="header__social"
            href="https://www.linkedin.com/in/loris-marino-4108871a8/"
          >
            <fa :icon="['fab', 'linkedin']" />
          </a>
          <a class="header__social" href="mailto:loris.mro@gmail.com">
            <fa icon="envelope-square" />
          </a>
        </div>
      </div>
    </container>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  right: 0;
  left: 0;
  top: rem(20);
  z-index: 9;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    width: rem(40);
  }

  &__socials {
    display: flex;
  }

  &__social {
    font-size: rem(20);
    transition: 0.2s ease-in-out;

    &:not(:first-child) {
      margin-left: rem(20);
    }

    &:hover {
      color: var(--primary);
    }
  }
}
</style>
