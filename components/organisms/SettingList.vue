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
    />
  </div>
</template>

<script>
import Power from "~/components/molecules/setting/Power.vue";
import WeightSaving from "~/components/molecules/setting/WeightSaving.vue";
import TractionControl from "~/components/molecules/setting/TractionControl.vue";
import Tire from "~/components/molecules/setting/Tire.vue";
import Brake from "~/components/molecules/setting/Brake.vue";

export default {
  components: {
    Power,
    WeightSaving,
    TractionControl,
    Tire,
    Brake,
  },
}
</script>