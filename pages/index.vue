<template>
  <main class="mainContainer">
    <div v-show="isLoading" class="tetrominosOverlay" :class="{ fadeout: !isLoading }">
      <div class="tetrominos" :class="{ fadeout: !isLoading }">
        <div class="tetromino box1"></div>
        <div class="tetromino box2"></div>
        <div class="tetromino box3"></div>
        <div class="tetromino box4"></div>
      </div>
    </div>
    <div :class="{ hide: isLoading, fadein: !isLoading }">
      <!-- <top-mv ref="mv" /> -->
      <top-mv-static />
      <top-about />
      <div class="mt-32 pb-12">
        <top-section
          type="left"
          textJp="部員"
          textEn="Members"
          src="/members.jpg"
          link="members"
        />
        <top-section
          type="right"
          textJp="セッティング"
          textEn="Setting"
          src="/setting.jpg"
          link="setting"
        />
        <top-section
          type="left"
          textJp="展示"
          textEn="Gallery"
          src="/gallery.jpg"
          link="gallery"
        />
        <top-section
          type="right"
          textJp="お問い合わせ"
          textEn="Contact"
          src="/contact.jpg"
          link="contact"
        />
      </div>
    </div>
  </main>
</template>

<script>
import TopMv from "~/components/molecules/TopMv.vue";
import TopAbout from "~/components/molecules/TopAbout.vue";
import TopSection from "~/components/molecules/TopSection.vue";
import TopMvStatic from '../components/molecules/TopMvStatic.vue';

export default {
  components: {
    TopMv,
    TopAbout,
    TopSection,
    TopMvStatic,
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    // document.addEventListener("load", () => {
    //   this.isLoading = false;
    // });
    window.addEventListener('load', (event) => {
      console.log('ページが完全に読み込まれました');
      this.isLoading = false;
    });
  }
};
</script>

<style lang="scss">
.mainContainer {
  margin: 0 auto;
  /* min-height: 100vh; */
  text-align: center;
  font-family : YuMincho, 'Yu Mincho', serif;
  background-color: #000;
  color: #fff;
  padding: 0!important;
}


$w: 96px;
$h: 112px;
$xspace: $w/2;
$yspace: $h/4 - 1;
$speed: 1.5s;

.tetrominosOverlay {
  position: fixed;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}

.tetrominos {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-$h, -$w);
}

.tetromino {
  width: $w;
  height: $h;
  position: absolute;
  transition: all ease 0.3s;
  background: url('data:image/svg+xml;utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 684"%3E%3Cpath fill="%23010101" d="M305.7 0L0 170.9v342.3L305.7 684 612 513.2V170.9L305.7 0z"/%3E%3Cpath fill="%23fff" d="M305.7 80.1l-233.6 131 233.6 131 234.2-131-234.2-131"/%3E%3C/svg%3E')
    no-repeat top center;
}

.box1 {
  animation: tetromino1 $speed ease-out infinite;
}
.box2 {
  animation: tetromino2 $speed ease-out infinite;
}
.box3 {
  animation: tetromino3 $speed ease-out infinite;
  z-index: 2;
}
.box4 {
  animation: tetromino4 $speed ease-out infinite;
}

@keyframes tetromino1 {
  0%,
  40% {
    /* compose logo */ /* 1 on 3 */ /* L-shape */
    transform: translate(0, 0);
  }
  50% {
    /* pre-box */
    transform: translate($xspace, -$yspace);
  }
  60%,
  100% {
    /* box */ /* compose logo */
    transform: translate($xspace * 2, 0);
  }
}

@keyframes tetromino2 {
  0%,
  20% {
    /* compose logo */ /* 1 on 3 */
    transform: translate($xspace * 2, 0px);
  }
  40%,
  100% {
    /* L-shape */ /* box */ /* compose logo */
    transform: translate($xspace * 3, $yspace);
  }
}

@keyframes tetromino3 {
  0% {
    /* compose logo */
    transform: translate($xspace * 3, $yspace);
  }
  20%,
  60% {
    /* 1 on 3 */ /* L-shape */ /* box */
    transform: translate($xspace * 2, $yspace * 2);
  }
  90%,
  100% {
    /* compose logo */
    transform: translate($xspace, $yspace);
  }
}

@keyframes tetromino4 {
  0%,
  60% {
    /* compose logo */ /* 1 on 3 */ /* L-shape */ /* box */
    transform: translate($xspace, $yspace);
  }
  90%,
  100% {
    /* compose logo */
    transform: translate(0, 0);
  }
}



.hide {
  visibility: hidden;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fadein {
  animation: fadein 3s ease 0s 1 forwards;
}

.fadeout {
  animation: fadeout 3s ease 0s 1 forwards;
}
</style>
