<template>
    <div class="bg">
     sssss
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
        changeStyle(obj) {
            const newObj = {
                width: obj.width + 'px',
                height: obj.height + 'px',
                top: obj.top + 'px',
                left: obj.left + 'px',
                position: 'absolute',
            }
            const result = { ...obj, ...newObj }
            return result
        },
    },
}
</script>

<style lang="scss" scoped>
// .bg {
//     width: 100%;
//     height: 740px;
//     position: relative;
// }
</style>