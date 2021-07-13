import Vue from 'vue'

const components = [
    'Chart1',
    'Chart2',
    'Chart3',
    'Chart4',
    'Chart5',
    'Chart6',
    // 'Chart7',
    'Chart8',
    'Chart9',
    'Chart123',
    'Table',
    'BannerItem',
]

components.forEach(key => {
    Vue.component(key, () => import(`@/chartComponents/${key}`))
})