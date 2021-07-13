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
import axios from 'axios'
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
        async drawChart() {
            const that = this
            const { dataType, requestUrl } = this.propValueItem
            let listData = []
            if (dataType === '2') {
                const res = await axios.get(requestUrl)
                if (res.status === 200) {
                    listData = res.data
                }
            }
            const data = listData
            const chart = new Chart({
                container: this.propValueItem.containerId,
                autoFit: true,
                height: that.propValueItem.style.height,
            })

            chart.data(data)
            chart.scale({
                month: {
                    range: [0, 1],
                },
                temperature: {
                    nice: true,
                },
            })

            chart.tooltip({
                showCrosshairs: true,
                shared: true,
            })

            chart.axis('temperature', {
                label: {
                    formatter: (val) => val + ' °C',
                },
            })

            chart
            .line()
            .position('month*temperature')
            .color('city')
            .shape('smooth')

            chart
            .point()
            .position('month*temperature')
            .color('city')
            .shape('circle')

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