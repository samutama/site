<template>
  <div class="mv">
    <div class="mv__videoWrap">
      <video
        autoplay
        loop
        muted
        playsinline
        preload="auto"
        ref="mvVideo"
        class="mv__video"
        src="/gts_a1.mp4"
      ></video>
    </div>
    <div class="mv__ttlWrap">
      <h1 class="ttlWrap__txt">
        Samurai Tamashi
        <span class="txt__span">Official Site</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleResize() {
      this.backgroundMovie();
    },
    backgroundMovie() {
      // ここでブラウザの縦横のサイズを取得します。
      var windowSizeHeight = window.outerHeight;
      var windowSizeWidth = window.outerWidth;

      // メディアの縦横比に合わせて数値は変更して下さい。(メディアのサイズが width < heightの場合で書いています。逆の場合は演算子を逆にしてください。)
      var windowMovieSizeWidth = windowSizeHeight * 1.777;
      var windowMovieSizeHeight = windowSizeWidth / 1.777;
      var windowMovieSizeWidthLeftMargin =
        (windowMovieSizeWidth - windowSizeWidth) / 1.5;

      if (windowMovieSizeHeight < windowSizeHeight) {
        // 横幅のほうが大きくなってしまう場合にだけ反応するようにしています。
        this.$refs.mvVideo.style.left = -windowMovieSizeWidthLeftMargin + "px";
      }
    },
    // 親からインプット要素をフォーカスするために使われる
    focus: function () {
      return this.$refs.mvVideo
      // console.log(this.$refs.mvVideo);
      
    }
  },
  mounted() {
    this.backgroundMovie();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style>
.mv {
  position: relative;
}

.mv__videoWrap {
  position: relative;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  overflow: hidden;
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
  min-height: 140vh;
  max-width: none;
}

.mv__ttlWrap {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
}

.ttlWrap__txt {
  color: #fff;
  font-family: "Libre Baskerville", serif;
  font-size: 9vw;
  font-style: italic;
  font-weight: bold;
}

.txt__span {
  font-family: "Raleway", sans-serif;
  font-size: 5vw;
  font-style: normal;
  font-weight: bold;
  display: block;
}
</style>
