<template>
    <div @dragstart="handleDragStart" class="component-list">
        <div style="text-align: center;
            width: 100%;
            border-bottom: 1px solid #d2cbcb;
            font-size: 14px;
            padding-bottom: 10px;"
        >
            组件列表
        </div>
        <div v-for="(item, index) in componentList" :key="index" class="list" draggable 
        :data-index="index">
        <!-- <component/> -->
        <img class="imgList" :src="item.propValue" :index="index">
        </div>
    </div>
</template>

<script>
import componentList from '@/custom-component/component-list'

export default {
    data() {
        return {
            componentList,
        }
    },
    methods: {
        handleDragStart(e) {
            e.dataTransfer.setData('index', e.target.getAttribute('index'))
        },
    },
}
</script>

<style lang="scss" scoped>
.component-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;

    .imgList {
        width: 100%;
        cursor: pointer;
    }

    .list {
        // width: 45%;
        // border: 1px solid #ddd;
        cursor: grab;
        margin-bottom: 10px;
        text-align: center;
        color: #333;
        padding: 2px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        border: 1px solid #ece6e6;

        &:active {
            cursor: grabbing;
        }

        .iconfont {
            margin-right: 4px;
            font-size: 20px;
        }

        .icon-wenben,
        .icon-tupian {
            font-size: 18px;
        }
    }
}
</style>