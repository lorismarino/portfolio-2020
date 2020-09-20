<template>
  <div class="internship">
    <container>
      <p>
        I am looking for an <span>internship</span> for the
        <span>year 2021</span>
      </p>
      <p>
        Contact me on
        <span><a href="mailto:loris.mro@gmail.com">email</a></span> or
        <span
          ><a href="https://www.linkedin.com/in/loris-marino-4108871a8/"
            >LinkedIn</a
          ></span
        >
      </p>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.internship {
  margin-top: rem(100);
  padding-bottom: rem(100);
  text-align: center;

  p {
    font-size: rem(30);
    font-weight: 500;

    span {
      color: var(--primary);
    }
  }
}
</style>
