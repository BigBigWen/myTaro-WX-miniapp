import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image } from '@tarojs/components'
import './index.less'
import image from '../../images/2018030914145277811.jpg'
const list = [
  {name:'图表',des:'echarts,图表',toLink:'/pages/bar/index',class:'tubiao'},
  {name:'组件',des:'Taro,组件,示例',toLink:'/pages/TaroComponent/index',class:'happy'},
  {name:'端能力',des:'上传,下载,打电话,蓝牙等',toLink:'/pages/duan/index',class:'shenqi'},
  {name:'监控',des:'监控,实时',toLink:'/pages/home/index',class:'jiankong'},
  {name:'抽屉',des:'抽开,关上,乐趣',toLink:'/pages/drawer/index',class:'drawer'},
  {name:'表单',des:'输入框,单选框,下拉框,多选框',toLink:'/pages/form/index',class:'form'},
]
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  toHome = ()=>{
    Taro.navigateTo({ url: '/pages/home/index'})
  }
  toEcharts = ()=>{
    Taro.navigateTo({ url: '/pages/bar/index'})
  }
  onToLink = (url)=>{
    console.log(url,'url')
    Taro.navigateTo({url})
  }
  render () {
    return (
      <View className='page-menu-container'>
      <Image
        className='image'
        src={image}
      />
        <Text className='text-title'>嗨,欢迎进入BigWen的乐园</Text>
        {
          list.map(a=><View key={a.name} className='list-item-container' onClick={this.onToLink.bind(this,a.toLink)}>
          <View className={`item-image item-${a.class}`} />
          <View className='item-text-container'>
            <Text className='title'>{a.name}</Text>
            <Text className='des'>{a.des}</Text>
          </View>
          <View className='item-click'  />
          </View>)
        }
      </View>
    )
  }
}

