<template>
  <div>
    <power
      number="123"
      class="mb-4"
    />
    <weight-saving
      number="83"
      class="mb-4"
    />
    <traction-control
      number="0"
      class="mb-4"
    />
    <tire
      front="コンフォートハード"
      rear="コンフォートハード"
      class="mb-4"
    />
    <brake
      balance="3"
      class="mb-4"
    />
    <suspension
      class="mb-4"
    />
    <down-force
      front="325"
      rear="730"
      class="mb-4"
    />
    <lsd
      :initial-torque="{ front: '-', rear: '20' }"
      :when-acceleration="{ front: '-', rear: '30' }"
      :when-deceleration="{ front: '-', rear: '15' }"
      class="mb-4"
    />
  <transmission
    mostHighSpeed="310"
    first="2.976"
    second="2.173"
    third="1.739"
    fourth="1.451"
    fifth="1.237"
    sixth="1.092"
    seventh="0.953"
    finalGear="3.709"
    class="mb-4"
  />
  </div>
</template>

<script>
import Power from "~/components/molecules/setting/Power.vue";
import WeightSaving from "~/components/molecules/setting/WeightSaving.vue";
import TractionControl from "~/components/molecules/setting/TractionControl.vue";
import Tire from "~/components/molecules/setting/Tire.vue";
import Brake from "~/components/molecules/setting/Brake.vue";
import Suspension from "~/components/molecules/setting/Suspension.vue";
import DownForce from "~/components/molecules/setting/DownForce.vue";
import Lsd from "~/components/molecules/setting/Lsd.vue";
import Transmission from "~/components/molecules/setting/Transmission.vue";

export default {
  components: {
    Power,
    WeightSaving,
    TractionControl,
    Tire,
    Brake,
    Suspension,
    DownForce,
    Lsd,
    Transmission
  },
}
</script>