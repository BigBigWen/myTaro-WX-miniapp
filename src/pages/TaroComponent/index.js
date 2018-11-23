import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtNoticebar,AtTimeline,AtAvatar,AtBadge,AtButton} from 'taro-ui'

import './index.less'

export default class NoticebarPage extends Taro.Component {
  config = {
    navigationBarTitleText: '部分组件展示'
  }

  constructor () {
    super(...arguments)
    this.state = {

    }
  }

  onGotoMore () {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) Taro.showModal({ content: '点击了更多!' })
    else if (Taro.getEnv() === Taro.ENV_TYPE.WEB) alert('您点击了更多!')
  }

  render () {
    return (
      <View className='page-taro-component'>
        <View className='doc-body'>
          {/* 跑马灯 */}
          <View className='panel'>
            <View className='panel__title'>跑马灯</View>
            <View className='panel__content'>
              <View className='bar-item'>
                <AtNoticebar marquee icon='volume-plus'>[带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]</AtNoticebar>
              </View>
            </View>
          </View>

          {/* 查看更多 */}
          <View className='panel'>
            <View className='panel__title'>查看更多</View>
            <View className='panel__content'>
              <View className='bar-item'>
                <AtNoticebar showMore single onGotoMore={this.onGotoMore.bind(this)}>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
            </View>
          </View>

          {/* 关闭按钮 */}
          <View className='panel'>
            <View className='panel__title'>关闭按钮</View>
            <View className='panel__content'>
              <View className='bar-item'>
                <AtNoticebar close single>这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
            </View>
          </View>
          {/*时间轴*/}
          <View className='panel'>
            <View className='panel__title'>时间轴</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtTimeline pending items={[{ title: '刷牙洗脸', content: ['大概8:00'], icon: 'check-circle' }, { title: '吃早餐', content: ['牛奶+面包', '餐后记得吃药'], icon: 'clock' }, { title: '上班', content: ['查看邮件', '画流程图', '记笔记'], icon: 'clock' }, { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }]}>
                </AtTimeline>
              </View>
            </View>
          </View>
           {/*头像*/}
           <View className='panel'>
            <View className='panel__title'>圆形头像（支持文本）</View>
            <View className='panel__content'>
              <View className='avatar'>
                <View className='subitem'>
                  <AtAvatar circle size='small' text='凹'></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar circle text='凸'></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar circle size='large' text='像'></AtAvatar>
                </View>
              </View>
            </View>
          </View>
           {/* 数字 */}
           <View className='panel'>
            <View className='panel__title'>数字</View>
            <View className='panel__content'>
              <View className='avatar'>
                <View className='subitem'>
                  <AtBadge value='10' maxValue='99'>
                    <AtButton size='small' circle>按钮</AtButton>
                  </AtBadge>
                </View>
                <View className='subitem'>
                  <AtBadge value='100' maxValue='99'>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>


        </View>
        {/* E Body */}
      </View>
    )
  }
}
