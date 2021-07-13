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
            <div class="ctn" v-for="(item, index) in dataList" :key="index">
                <div class="value">{{item.value}}</div>
                <div class="desc">{{item.desc}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

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
            dataList: [],
        }
    },
    methods: {
        async initData() {
            let { dataType, requestUrl } = this.propValueItem
            if (dataType === '2') {
                const res = await axios.get(requestUrl)
                if (res.status === 200) {
                    this.dataList = res.data
                }
            }
        },
    },
    mounted() {
        this.initData()
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
        text-align: center;
        margin: 55px 0;
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
        .desc {
            font-size: 14px;
            font-weight: 400;
            color: rgba(0,0,0,.45);
            line-height: 22px;
        }
        .value {
            font-size: 24px;
            font-weight: 600;
            color: rgba(0,0,0,.85);
            line-height: 38px;
        }
    }
}

</style>