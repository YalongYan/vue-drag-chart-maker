// 公共样式
export const commonStyle = {
    rotate: 0, 
    opacity: 1,
}

export const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
}

// 编辑器左侧组件列表
const list = [
    {
        component: 'Picture', 
        label: '图片1', 
        icon: 'tupian',
        propValue: require('@/assets/img/1.png'),
        requestUrl: 'xxx',
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Picture', 
        label: '图片2', 
        icon: 'tupian',
        propValue: require('@/assets/img/2.gif'),
        requestUrl: '',
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Picture', 
        label: '图片3', 
        icon: 'tupian',
        propValue: require('@/assets/img/3.png'),
        requestUrl: '',
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Picture', 
        label: '图片4', 
        icon: 'tupian',
        propValue: require('@/assets/img/4.png'),
        requestUrl: '',
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
]

for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i]
    item.style = { ...commonStyle, ...item.style }
    list[i] = { ...commonAttr, ...item }
}
export default list