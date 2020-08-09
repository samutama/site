<template>
  <div class="about">
    <h2 class="about__ttl">侍魂とは</h2>
    <p class="about__txt">
      Gran Turismo SPORTの<br>
      ドリフトチームである<br>
      <br>
      ある陽気な4人の侍が<br>
      意気投合し、結成<br>
      <br>
      いつの間にか仲間は増え<br>
      大きな集団となった<br>
      それは<br>
      共に走り、思いやり<br>
      高め合った結果に過ぎない<br>
      <br>
      国際的に広がる<br>
      侍魂を<br>
      とくとご覧あれ...<br>
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
</style>