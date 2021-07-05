<template>
    <div class="bg" :style="{height: canvasStyleHeight}">
      <div v-for="(item, index) in localdData" :style="changeStyle(item.style)" :key="index" >
          <component :propValueItem="item" :is="item.containerId"/>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'componentData',
        ]),
        localdData() {
            console.log(JSON.parse(localStorage.getItem('canvasData')))
            return JSON.parse(localStorage.getItem('canvasData'))
        },
        canvasStyleHeight() {
            const canvasStyle = JSON.parse(localStorage.getItem('canvasStyle'))
            const { height } = canvasStyle
            return height + 'px'
        },
    },
    methods: {
        changeStyle(obj) {
            console.log(obj)
            const canvasStyle = JSON.parse(localStorage.getItem('canvasStyle'))
            let { width, height } = canvasStyle
            let w = obj.width / width * 100
            let h = obj.height / height * 100
            let t = obj.top / height * 100
            let l = obj.left / width * 100
            const newObj = {
                width: w + '%',
                height: h + '%',
                top: t + '%',
                left: l + '%',
                position: 'absolute',
            }
            // const newObj = {
            //     width: obj.width + 'px',
            //     height: obj.height + 'px',
            //     top: obj.top + 'px',
            //     left: obj.left + 'px',
            //     position: 'absolute',
            // }
            const result = { ...obj, ...newObj }
            return result
        },
    },
}
</script>

<style lang="scss" scoped>
.bg {
    width: 100%;
    height: 740px;
    position: relative;
}
</style>