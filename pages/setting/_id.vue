<template>
  <no-ssr>
    <div class="container">
      <contents-layout
        type="full"
        textJp="セッティング詳細"
        textEn="SettingDetail"
        src="/setting.jpg"
      >
        <div class="flex justify-center flex-wrap bg-khaki rounded-lg pt-4 pb-4">
          <p class="pb-4 px-4 w-full text-left">パワーレベル</p>
          <div>
            <apexchart type="radialBar" :options="chartOptions" :series="series"></apexchart>
          </div>
        </div>
      </contents-layout>
    </div>
  </no-ssr>
</template>

<script>
import ContentsLayout from "~/components/template/ContentsLayout.vue";
import members from "@/assets/json/members.json";

export default {
  components: {
    ContentsLayout,
  },
  data() {
    return {
      series: [125],
      chartOptions: {
        chart: {
          type: 'radialBar',
          offsetY: -20,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: '97%',
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#999',
                opacity: 1,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: '22px',
                color: '#fff',
              },
            }
          }
        },
        grid: {
          padding: {
            top: -10
          },
        },
        fill: {
          colors: ['#cddc39'],
          type: 'gradient',
          gradient: {
            shade: 'light',
            shadeIntensity: 0.2,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          },
        },
        labels: ['Average Results'],
      },
    }
  }
}
</script>