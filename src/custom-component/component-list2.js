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
        containerId: 'Chart123',
        title: '近10日dau', 
        propValue: require('@/assets/img/8.png'),
        requestUrl: 'http:yidian-inc.com/getList',
        dataType: '', // 1 json 2 接口
        dataSourceJson: '',
        header: {
            value: '近10日dau',
            textAlign: 'left',
            fontSize: '14px',
        },
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
