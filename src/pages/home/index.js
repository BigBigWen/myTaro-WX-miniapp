import Taro, { Component } from '@tarojs/taro'
import { View, Text,LivePlayer  } from '@tarojs/components'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '视频耶'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>嘿!小主</Text>
          <Text>您当前所在位置: 视频页</Text>
          <LivePlayer 
            src='rtmp://rtmp.open.ys7.com/openlive/045c747d82474b2ea1fac3ff2dea4abd'
            // src="http://hls.open.ys7.com/openlive/46cab3f36e394f5c9b831dc7bb211dc6.hd.m3u8"
             mode='live' 
             autoplay 
             playsInline
              />
            <View>根据小程序官方文档,视频目前只支持flv, rtmp(ps:苹果手机不支持rtmp)</View>
      </View>
    )
  }
}

