<template>
    <div :style="{overflowY: 'auto', height: '100%'}">
        <div :style="{
            textAlign: propValueItem.header.textAlign,
            fontSize: propValueItem.header.fontSize, 
            marginBottom: '10px',
            color: 'gray',
        }">
            {{propValueItem.header.value}}
        </div>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column v-for="(item, index) in columnData" :key="index"
                :prop="item.prop"
                :label="item.label"
                width="180">
            </el-table-column>
           
            <!-- <el-table-column
                prop="address"
                label="地址">
            </el-table-column> -->
        </el-table>
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
            columnData: [],
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
            ],
        }
    },
    methods: {
        async initData() {
            const { dataType, requestUrl } = this.propValueItem
            if (dataType === '2') {
                const res = await axios.get(requestUrl)
                if (res.status === 200) {
                    const { columnData, tableDataList } = res.data
                    this.columnData = columnData
                    this.tableData = tableDataList
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

</style>
