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
        containerId: 'Chart1',
        label: '图片1', 
        propValue: require('@/assets/img/1.png'),
        requestUrl: 'http:yidian-inc.com/getList',
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Picture',
        containerId: 'Chart2',
        label: '图片2', 
        propValue: require('@/assets/img/10.png'),
        requestUrl: 'http:yidian-inc.com/getList',
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Picture',
        containerId: 'Chart3',
        label: '图片3', 
        propValue: require('@/assets/img/3.png'),
        requestUrl: 'http:yidian-inc.com/getList',
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Picture',
        containerId: 'Chart4',
        label: '图片4', 
        propValue: require('@/assets/img/4.png'),
        requestUrl: 'http:yidian-inc.com/getList',
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Picture',
        containerId: 'Chart5',
        label: '图片5', 
        propValue: require('@/assets/img/5.png'),
        requestUrl: 'http:yidian-inc.com/getList',
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Picture',
        containerId: 'Chart6',
        label: '图片6', 
        propValue: require('@/assets/img/6.gif'),
        requestUrl: 'http:yidian-inc.com/getList',
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    // {
    //     component: 'Picture',
    //     containerId: 'Chart7',
    //     label: '图片7', 
    //     propValue: require('@/assets/img/7.png'),
    //     requestUrl: 'http:yidian-inc.com/getList',
    //     style: {
    //         width: 300,
    //         height: 200,
    //         borderRadius: '',
    //     },
    // },
    {
        component: 'Picture',
        containerId: 'Chart8',
        label: '图片8', 
        propValue: require('@/assets/img/8.png'),
        requestUrl: 'http:yidian-inc.com/getList',
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Picture',
        containerId: 'Chart9',
        label: '图片9', 
        propValue: require('@/assets/img/9.png'),
        requestUrl: 'http:yidian-inc.com/getList',
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    // {
    //     component: 'Picture',
    //     containerId: 'Chart10',
    //     label: '图片10', 
    //     propValue: require('@/assets/img/2.gif'),
    //     requestUrl: 'http:yidian-inc.com/getList',
    //     style: {
    //         width: 300,
    //         height: 200,
    //         borderRadius: '',
    //     },
    // },
]

for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i]
    item.style = { ...commonStyle, ...item.style }
    list[i] = { ...commonAttr, ...item }
}
export default list