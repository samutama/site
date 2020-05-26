<template>
  <div class="container">
    <div class="mv">
      <div class="mv__videoWrap">
        <video autoplay loop muted ref="mvVideo" class="mv__video" src="/samutama_mv.mp4"></video>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  methods: {
    handleResize() {
      this.backgroundMovie()
    },
    backgroundMovie() {
      // ここでブラウザの縦横のサイズを取得します。
      var windowSizeHeight = window.outerHeight;
      var windowSizeWidth = window.outerWidth;

      // メディアの縦横比に合わせて数値は変更して下さい。(メディアのサイズが width < heightの場合で書いています。逆の場合は演算子を逆にしてください。)
      var windowMovieSizeWidth = windowSizeHeight * 1.77777778;
      var windowMovieSizeHeight = windowSizeWidth / 1.77777778;
      var windowMovieSizeWidthLeftMargin = (windowMovieSizeWidth - windowSizeWidth) / 2;

      if (windowMovieSizeHeight < windowSizeHeight) {
        // 横幅のほうが大きくなってしまう場合にだけ反応するようにしています。
        this.$refs.mvVideo.style.left = -windowMovieSizeWidthLeftMargin + 'px';
      }
    },
  },
  mounted() {
    this.backgroundMovie()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.mv__videoWrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  opacity: .8;
}

.mv__video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: auto;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
}
</style>
