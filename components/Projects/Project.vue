<template>
  <div class="project">
    <div class="project__number">{{ number }}</div>
    <grid>
      <Column laptop="6" class="project__left">
        <div>
          <img
            :src="`/projects/${project.mainImage}`"
            :alt="project.title"
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
              v-for="(image, index) in project.images"
              :key="index"
              :src="`/projects/${image}`"
              :alt="project.title"
            />
          </div>
        </div>
      </Column>
      <Column :cols="12" laptop="5" laptop-start="8">
        <div class="project__content">
          <div>
            <typography type="thirdtitle" color="gray" :text="project.type" />
            <typography
              class="project__title"
              type="subtitle"
              :text="project.title"
            />
            <p class="project__resume">
              {{ project.resume }}
            </p>
            <Link
              class="project__link"
              text="View this project"
              :link="project.link"
              external
              arrow
            />
          </div>
          <div class="project__tags">
            <p
              v-for="(tag, index) in project.tags"
              :key="index"
              class="project__tag"
            >
              #{{ tag }}
            </p>
          </div>
        </div>
      </Column>
    </grid>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
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
    z-index: 9;
    transform: translateX(-50%) translateY(-50%);
    display: none;

    @include laptop {
      display: block;
    }
  }

  &__left {
    position: relative;
    display: none;

    @include laptop {
      display: block;
    }
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include laptop {
      height: calc(100% - #{rem(40)});
      padding-top: rem(20);
    }
  }

  &__tags {
    display: flex;
    margin-left: -#{rem(20)};
    margin-top: rem(50);
  }

  &__tag {
    margin-left: rem(20);
    color: var(--gray);
    font-weight: 500;
  }
}
</style>
