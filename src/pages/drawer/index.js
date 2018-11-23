import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtDrawer, AtButton } from 'taro-ui'

import './index.less'

export default class DrawerPage extends Taro.Component {
  config = {
    navigationBarTitleText: '抽屉'
  }
  constructor () {
    super(...arguments)
    this.state = {
      leftDrawerShow: false,
      rightDrawerShow: false,
    }
  }

  leftDrawerClick () {
    console.log('click====')
    this.setState({
      leftDrawerShow: !this.state.leftDrawerShow,
    })
  }

  rightDrawerClick () {
    this.setState({
      rightDrawerShow: !this.state.rightDrawerShow,
    })
  }

  onItemClick (index) {
    const ENV = Taro.getEnv()
    let content
    if (typeof index !== 'number') {
      content = ''
    } else {
      content = `你点击了第 ${+index + 1} 个项目`
    }
    if (ENV === 'WEAPP') content && Taro.showModal({ content, showCancel: false })
    else if (ENV === 'WEB') content && alert(content)
  }

  onClose () {
    this.setState({
      leftDrawerShow: false,
      rightDrawerShow: false,
    })
  }

  render () {
    return (
      <View className='page-drawer'>
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>左边滑出</View>
            <View className='panel__content no-padding'>
              <View className='example'>
                <AtButton onClick={this.leftDrawerClick.bind(this)}>显示 Drawer</AtButton>
                {this.state.leftDrawerShow && <AtDrawer show={this.state.leftDrawerShow} mask onItemClick={this.onItemClick.bind(this)} onClose={this.onClose.bind(this)} items={['菜单1', '菜单2']}>
                </AtDrawer>}
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>右边滑出</View>
            <View className='panel__content no-padding'>
              <View className='example'>
                <AtButton onClick={this.rightDrawerClick.bind(this)}>显示 Drawer</AtButton>
                {this.state.rightDrawerShow && <AtDrawer show={this.state.rightDrawerShow} right mask onItemClick={this.onItemClick.bind(this)} onClose={this.onClose.bind(this)} items={['菜单1', '菜单2']}>
                </AtDrawer>}
              </View>
            </View>
          </View>
        </View>

      </View>
    )
  }
}
