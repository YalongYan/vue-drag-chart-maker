<template>
    <!-- <div :style="{overflow: hidden, background: localdData ? 'white' : ''}"> -->
    <div :style="{overflow: 'hidden', background: 'white'}">
        <div :style="{textAlign: element.header.textAlign, fontSize: element.header.fontSize }">
            {{element.header.value || ''}}
        </div>
        <!-- <div :style="{textAlign: element.header.textAlign, fontSize: element.header.fontSize}">
            {{element.header.value || ''}}
        </div> -->
        <img :src="propValue" v-if="localdData">
        <img class="imgCtn" :src="propValue" v-else>
    </div>
</template>

<script>
export default {
    props: {
        propValue: {
            type: String,
            require: true,
        },
        element: {
            type: Object,
            require: true,
        },
    },
    computed: {
        localdData() {
            return this.element.containerId === 'BannerItem' || this.element.containerId === 'Table'
        },
    },
}
</script>

<style lang="scss" scoped>
.imgCtn {
    width: 100%;
    height: 100%;
}
</style>