import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import * as echarts from '../../ec-canvas/echarts'
import './index.less'
const option = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {
    renderMode: 'richText',
    confine: true,
    position: (point) => {
      return {
        left: point[0],
        top: point[1]
      };
    }
  },
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
}
export default class Index extends Component {
  chart = null
  config = {
    navigationBarTitleText: '图表页',
    backgroundColor: '#F1F2F6',
    backgroundTextStyle: 'light',
    usingComponents: {
      "ec-canvas": "../../ec-canvas/ec-canvas"
    }
  }

  componentWillMount () { }

  componentDidMount () { 
    const ecComponent = this.$scope.selectComponent('#mychart-dom-area');
    ecComponent.init((canvas, width, height) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      chart.setOption(option);
      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
    setInterval(() => {
      this.chart && this.chart.setOption({
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20].map(i => i + Math.floor(Math.random() * 10))
        }]
      })
    }, 5000);
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='page-tubiao-container'>
        <Text className='title'>嘿!小主 您当前所在位置: 图表页</Text>
        <View className='echarts' style={{height:'400px'}}>
          <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' ec={{}}></ec-canvas>
        </View>
      </View>
    )
  }
}


