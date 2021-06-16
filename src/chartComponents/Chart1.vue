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
import { Chart, registerAnimation } from '@antv/g2'

export default {
    props: {
        propValueItem: {
            type: Object,
            require: true,
        },
    },
    data() {
        return {
        }
    },
    methods: {
        drawChart() { 
            const that = this
            const data = [
                { type: '汽车', value: 34 },
                { type: '建材家居', value: 85 },
                { type: '住宿旅游', value: 103 },
                { type: '交通运输与仓储邮政', value: 142 },
                { type: '建筑房地产', value: 251 },
                { type: '教育', value: 367 },
                { type: 'IT 通讯电子', value: 491 },
                { type: '社会公共管理', value: 672 },
                { type: '医疗卫生', value: 868 },
                { type: '金融保险', value: 1234 },
            ]
            const chart = new Chart({
                container: this.propValueItem.containerId,
                // theme: 'dark', 
                theme: {
                    defaultColor: 'red',
                },
                autoFit: true,
                height: that.propValueItem.style.height,
            })
            chart.data(data)
            chart.scale({
                value: {
                    max: 1400,
                    min: 0,
                    alias: '销量（百万）',
                },
            })
            chart.axis('type', {
                title: null,
                tickLine: null,
                line: null,
            })

            chart.axis('value', {
                label: null,
                title: {
                    offset: 30,
                    style: {
                        fontSize: 12,
                        fontWeight: 300,
                    },
                },
            })
            chart.legend(false)
            chart.coordinate().transpose()
            chart.interval()
            .position('type*value')
            .size(26)
            .label('value', {
                style: {
                    fill: '#8d8d8d',
                },
                offset: 10,
            })
            chart.interaction('element-active')
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