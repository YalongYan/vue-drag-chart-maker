<template>
    <div :style="{
        height: '100%'
    }">
        <div :style="{
            textAlign: propValueItem.header.textAlign,
            fontSize: propValueItem.header.fontSize, 
            marginBottom: '10px',
            color: 'gray',
        }">
            {{propValueItem.header.value}}
        </div>
        <!-- <div :id="propValueItem.containerId"> -->
        <div class="constainer">
            <div class="ctn">
                <h3 class="title">户数</h3>
                <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
                    <img :src="learnMore" class="learnMoreImg"/>
                </el-tooltip>
                <div class="detail">1212</div>
                <div class="percent">
                    <div class="percentItem">日环比: <span class="chart add">0.21%</span></div>
                    <div class="percentItem">周同比: <span class="chart reduce">0.21%</span></div>
                </div>
            </div>
            <div class="ctn">
                <h3 class="title">户数</h3>
                <img :src="learnMore" class="learnMoreImg"/>
                <div class="detail">1212</div>
                <div class="percent">
                    <div class="percentItem">日环比: <span class="chart add">0.21%</span></div>
                    <div class="percentItem">周同比: <span class="chart reduce">0.21%</span></div>
                </div>
            </div>
            <div class="ctn">
                <h3 class="title">户数</h3>
                <img :src="learnMore" class="learnMoreImg"/>
                <div class="detail">1212</div>
                <div class="percent">
                    <div class="percentItem">日环比: <span class="chart add">0.21%</span></div>
                    <div class="percentItem">周同比: <span class="chart reduce">0.21%</span></div>
                </div>
            </div>
        </div>
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
            learnMore: require('@/assets/img/learnMore.png'),
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
        // this.drawChart()
    },

}
</script>

<style lang="scss" scoped>
.learnMoreImg {
    width: 30px;
}
.constainer {
    height: calc(100% - 30px);
    border: 1px solid #ece6e6;
    border-radius: 3px;
    display: flex;
    &::after {
        content: '';
        display: block;
        clear: both;
    }
    .ctn {
        position: relative;
        flex: 1;
        padding: 0 20px;
        &::after {
            content: "";
            width: 1px;
            height: 74%;
            background: #f3f2f2;
            position: absolute;
            right: 0;
            top: 13%;
        }
        &:last-of-type {
            &::after {
                display: none;
            }
        }
        .title {
            margin: 0;
            padding: 10px;
            font-weight: normal;
        }
        .learnMoreImg {
            position: absolute;
            right: 10px;
            top: 9px;
            cursor: pointer;
        }
        .detail {
            text-align: center;
            font-size: 20px;
        }
        .percent {
            font-size: 12px;
            padding-left: 20px;
            line-height: 20px;
            margin-bottom: 10px;
            margin-top: 5px;
            .percentItem {
            
            }
            .chart {
            position: relative;
                padding-left: 20px;
            }
            .add {
                &::before {
                        content: "";
                        width: 0;
                        height: 0;
                        border-left: 4px solid transparent;
                        border-right: 4px solid transparent;
                        border-bottom: 7px solid #1882ef;
                        position: absolute;
                        left: 5px;
                        top: 5px;
                }
            }
            .reduce {
                &::before {
                    content: "";
                    width: 0;
                    height: 0;
                    border-left: 4px solid transparent;
                    border-right: 4px solid transparent;
                    border-top: 7px solid red;
                    position: absolute;
                    left: 5px;
                    top: 5px;
                }
            }
        }
    }
}

</style>