<template>
  <div class="about md:mt-24">
    <h2 class="about__ttl">侍魂とは</h2>
    <p class="about__txt">
      Gran Turismo SPORTの<br class="md:hidden">ドリフトチームである<br>
      <br>
      ある陽気な4人の侍が<br class="md:hidden">意気投合し、結成<br class="md:hidden">
      <br>
      いつの間にか仲間は増え<br class="md:hidden">大きな集団となった<br>それは<br class="md:hidden">共に走り、思いやり<br class="md:hidden">高め合った結果に過ぎない<br>
      <br>
      国際的に広がる<br class="md:hidden">侍魂を<br class="md:hidden">とくとご覧あれ...<br>
    </p>
    <hr class="about__hr">
  </div>
</template>

<style >
.about {
  background-color: #1A2818;
  color: #fff;
  padding: 15vw 0 4vw;
  position: relative;
  overflow: hidden;
}

.about::after {
  position: absolute;
  content: '';
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background-color: #E92E3D;
  border: solid 4px #fff;
  top: 50%;
  right: -20%;
  opacity: .5;
}

.about__ttl {
  font-size: 6vw;
  font-weight: bold;
  margin-bottom: 4vw;
}

.about__txt {
  margin-bottom: 13vw;
}

.about__hr {
  border-top-width: 3px;
  border-color: #907b44;
}

@media screen and (min-width: 768px) {
  .about__ttl {
    font-size: 4rem;
  }
  .about__txt {
    font-size: 1.5rem;
  }
}
</style>