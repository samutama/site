<template>
  <div class="mvStatic">
    <div class="mvStatic__imgWrap">
      <img src="/mv.jpg" class="mvStatic__img img-zoom" alt="mv">
    </div>
    <div class="mvStatic__ttlWrap">
      <h1 class="mvStatic__ttl">
        Samurai Tamashi
        <span class="mvStatic__ttlSpan">Official Site</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.mvStatic {
  position: relative;
  &__imgWrap {
    height: 100vh;
    overflow: hidden;
  }
  &__img {
    height: 100%;
    object-fit: cover;
  }
  &__ttlWrap {
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    margin: auto;
  }

  &__ttl {
    color: #fff;
    font-family: "Libre Baskerville", serif;
    font-size: 9vw;
    font-style: italic;
    font-weight: bold;
  }

  &__ttlSpan {
    font-family: "Raleway", sans-serif;
    font-size: 5vw;
    font-style: normal;
    font-weight: bold;
    display: block;
  }
}
</style>