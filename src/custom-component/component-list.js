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
        title: '10日内访问量', 
        propValue: require('@/assets/img/1.png'),
        requestUrl: 'http:yidian-inc.com/getList',
        header: {
            value: '我是标题',
            textAlign: 'left',
            fontSize: '14px',
        },
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Picture', 
        containerId: 'Table',
        title: '10日内访问量', 
        propValue: require('@/assets/img/table.png'),
        requestUrl: 'http:yidian-inc.com/getList',
        header: {
            value: '我是标题',
            textAlign: 'left',
            fontSize: '14px',
        },
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Picture', 
        containerId: 'BannerItem',
        title: '10日内访问量', 
        propValue: require('@/assets/img/bannerItem.png'),
        requestUrl: 'http:yidian-inc.com/getList',
        header: {
            value: '我是标题',
            textAlign: 'left',
            fontSize: '14px',
        },
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Picture',
        containerId: 'Chart2',
        title: '10日内访问量2', 
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
        title: '10日内访问量3', 
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
        title: '10日内访问量4', 
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
        title: '10日内访问量5', 
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
        title: '10日内访问量6', 
        propValue: require('@/assets/img/6.gif'),
        requestUrl: 'http:yidian-inc.com/getList',
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Picture',
        containerId: 'Chart8',
        title: '10日内访问量8', 
        propValue: require('@/assets/img/8.png'),
        requestUrl: 'http:yidian-inc.com/getList',
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
