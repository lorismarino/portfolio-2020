<template>
  <section class="hero">
    <container fill>
      <grid fill align-content-laptop="center">
        <Column :laptop="4">
          <typography tag="h3" type="thirdtitle" text="About me" color="grey" />
        </Column>
        <Column :laptop="8">
          <div class="hero__text">
            <p>My name is <strong>Loris</strong></p>
            <p>
              I'm <strong>front-end developer</strong> from
              <strong>Paris</strong>
            </p>
            <p>
              I like <strong>integration</strong> and
              <strong>VueJs/NuxtJs</strong>
            </p>
            <svg class="hero__textTriangle" viewBox="0 0 308 298" fill="none">
              <path
                d="M1.53056 172.57L207.757 64.2129L198.484 296.989L1.53056 172.57Z"
              />
            </svg>
          </div>
        </Column>
      </grid>
      <div class="hero__discover">
        <button type="button">Discover my projects</button>
      </div>
    </container>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  height: 100%;

  &__text {
    font-size: rem(36);
    font-weight: 300;
    position: relative;

    &Triangle {
      position: absolute;
      bottom: 20%;
      right: 0;
      width: rem(300);
      height: rem(300);
      stroke: #e21a1a;
      opacity: 0.3;
    }

    strong {
      font-weight: 400;
      color: var(--primary);
    }
  }

  &__discover {
    position: absolute;
    right: 0;
    bottom: rem(100);
    left: 0;
    display: flex;
    justify-content: center;

    button {
      position: relative;
      z-index: 2;
      font-size: rem(18);

      &::before {
        content: '';
        width: rem(60);
        height: rem(60);
        border-radius: 100%;
        background-color: var(--primary);
        position: absolute;
        top: calc(50% - #{rem(30)});
        left: calc(50% - #{rem(30)});
        z-index: -1;
        transition: all 0.2s ease-in-out 0.1s;
      }

      &:hover {
        &::before {
          width: 120%;
          height: rem(30);
          border-radius: 0;
          top: calc(50% - #{rem(15)});
          left: -10%;
        }
      }
    }
  }
}
</style>
