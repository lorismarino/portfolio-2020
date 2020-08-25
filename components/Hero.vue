<template>
  <section class="hero" @mousemove="onMove">
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
            <svg
              :style="{
                transform: `translateX(${transform.x}px) translateY(${transform.y}px)`,
              }"
              class="hero__textTriangle"
              viewBox="0 0 308 298"
              fill="none"
            >
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

<script>
export default {
  data() {
    return {
      lastPosition: {
        x: 0,
        y: 0,
      },
      transform: {
        x: 0,
        y: 0,
      },
    }
  },

  methods: {
    onMove(event) {
      if (event.clientX > this.lastPosition.x + 40) {
        this.lastPosition.x = event.clientX
        this.transform.x -= 1
      } else if (event.clientX < this.lastPosition.x - 40) {
        this.lastPosition.x = event.clientX
        this.transform.x += 1
      }

      if (event.clientY > this.lastPosition.y + 40) {
        this.lastPosition.y = event.clientY
        this.transform.y -= 1
      } else if (event.clientY < this.lastPosition.y - 40) {
        this.lastPosition.y = event.clientY
        this.transform.y += 1
      }
    },
  },
}
</script>

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
      transition: transform 0.1s ease-in-out;
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
        transition: 0.2s ease-in-out;
      }

      &:hover {
        &::before {
          width: 80%;
          left: 10%;
          height: 70%;
          top: 50%;
          border-radius: 0;
        }
      }
    }
  }
}
</style>
