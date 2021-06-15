<template>
    <div class="bg">
      <div v-for="(item, index) in localdData" :key="index" class="list" draggable :data-index="index">
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
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
.bg {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>