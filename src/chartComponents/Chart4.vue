<template>
     <div>
        <div :style="{
            textAlign: propValueItem.header.textAlign,
            fontSize: propValueItem.header.fontSize, 
            marginBottom: '10px',
            color: 'gray',
        }">
            {{propValueItem.header.value}}
        </div>   
        <div :id="propValueItem.containerId"></div>
    </div>
</template>

<script>
import { Chart } from '@antv/g2'

export default {
    props: {
        propValueItem: {
            type: Object,
            require: true,
        },
    },
    data() {
        return {
            title: '地区货品跟进看板',
        }
    },
    methods: {
        drawChart() {
            const that = this
            const data = [
                { type: '未知', value: 654, percent: 0.02 },
                { type: '17 岁以下', value: 654, percent: 0.02 },
                { type: '18-24 岁', value: 4400, percent: 0.2 },
                { type: '25-29 岁', value: 5300, percent: 0.24 },
                { type: '30-39 岁', value: 6200, percent: 0.28 },
                { type: '40-49 岁', value: 3300, percent: 0.14 },
                { type: '50 岁以上', value: 1500, percent: 0.06 },
            ]

            const chart = new Chart({
                container: this.propValueItem.containerId,
                autoFit: true,
                height: that.propValueItem.style.height,
                padding: [50, 20, 50, 20],
            })
            chart.data(data)
            chart.scale('value', {
                alias: '销售额(万)',
            })

            chart.axis('type', {
                tickLine: {
                    alignTick: false,
                },
            })
            chart.axis('value', false)

            chart.tooltip({
                showMarkers: false,
            })
            chart.interval().position('type*value')
            chart.interaction('element-active')

            // 添加文本标注
            data.forEach((item) => {
                chart
                .annotation()
                .text({
                    position: [item.type, item.value],
                    content: item.value,
                    style: {
                        textAlign: 'center',
                    },
                    offsetY: -30,
                })
                .text({
                    position: [item.type, item.value],
                    content: (item.percent * 100).toFixed(0) + '%',
                    style: {
                        textAlign: 'center',
                    },
                    offsetY: -12,
                })
            })
            chart.render()
        },
    },
    mounted() {
        this.drawChart()
    },

}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
}
</style>