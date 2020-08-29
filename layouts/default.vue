<template>
  <div class="app">
    <Header />
    <Nuxt />
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Poppins', sans-serif;
  font-size: rem(14);
  line-height: 1.5;
  color: var(--white);
  background-color: var(--black);

  ::selection {
    color: var(--white);
    background-color: var(--primary);
  }
}

html,
body,
#__nuxt,
#__layout,
.app {
  height: 100%;
  scroll-behavior: smooth;
}
</style>
