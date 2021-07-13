<template>
    <div>
        <el-tabs class="tabaaa" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="常用指标" name="first">
                <div @dragstart="handleDragStart" class="component-list">
                    <!-- <div style="text-align: center;
                        width: 100%;
                        border-bottom: 1px solid #d2cbcb;
                        font-size: 14px;
                        padding-bottom: 10px;"
                    >
                        组件列表
                    </div> -->
                    <div v-for="(item, index) in componentList2" :key="index" class="list" draggable 
                    :data-index="index">
                    <div class="title">{{item.title}}</div>
                    <!-- <component/> -->
                    <img class="imgList" :src="item.propValue" :index="index">
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="组件列表" name="second">
                <div @dragstart="handleDragStart" class="component-list">
                    <!-- <div style="text-align: center;
                        width: 100%;
                        border-bottom: 1px solid #d2cbcb;
                        font-size: 14px;
                        padding-bottom: 10px;"
                    >
                        组件列表
                    </div> -->
                    <div v-for="(item, index) in componentList" :key="index" class="list" draggable 
                    :data-index="index">
                    <div class="title">{{item.title}}</div>
                    <!-- <component/> -->
                    <img class="imgList" :src="item.propValue" :index="index">
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
       
    </div>
</template>

<script>
import componentList from '@/custom-component/component-list'
import componentList2 from '@/custom-component/component-list2'

export default {
    data() {
        return {
            componentList,
            componentList2,
            activeName: 'second',
        }
    },
    methods: {
        handleDragStart(e) {
            e.dataTransfer.setData('index', e.target.getAttribute('index'))
        },
        handleClick(tab, event) {
            console.log(tab, event)
        },
    },
}
</script>

<style lang="scss">
.component-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;

    .imgList {
        width: 100%;
        cursor: pointer;
    }
    .title {
        font-size: 12px;
        margin-bottom: 2px;
    }

    .list {
        // width: 45%;
        // border: 1px solid #ddd;
        cursor: grab;
        margin-bottom: 10px;
        text-align: center;
        color: #333;
        padding: 2px 5px;
        // display: flex;
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
.tabaaa {
    .el-tabs__nav-prev, .el-tabs__nav-next{
        display: none;
    }
    .el-tabs__nav-wrap {
        padding: 0 4px;
    }
    .el-tabs__nav-scroll {
        padding-left: 8px;
    }
    #tab-first{
        padding-right: 4px;
    }
    #tab-second {
        padding-left: 5px;
    }
}

</style>