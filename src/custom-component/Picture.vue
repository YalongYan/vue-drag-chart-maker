<template>
    <div style="overflow: hidden">
        <div :style="{textAlign: element.header.textAlign, fontSize: element.header.fontSize}">
            {{element.header.value || ''}}
        </div>
        <img :src="propValue">
        {{element}}
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
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
}
</style>