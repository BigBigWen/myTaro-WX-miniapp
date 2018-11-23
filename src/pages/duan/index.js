import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button, Image } from '@tarojs/components'
import './index.less'
export default class Index extends Component {
  chart = null
  config = {
    navigationBarTitleText: '端能力页',
    backgroundColor: '#fcc',
    backgroundTextStyle: 'light',
  }

  componentWillMount () { }

  componentDidMount () { 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  phoneCall=()=>{
    Taro.makePhoneCall({phoneNumber:'18848980105'}).then(()=>{
      console.log('打电话了')
    })
  }
  onChooseImage=()=>{
    Taro.chooseImage().then(()=>{
      console.log('onChooseImage')
    })
  }
  onScanCode=()=>{
    Taro.scanCode()
  }
  setScreenBrightness=()=>{
    Taro.setScreenBrightness({value:0.1})
  }
  setHightScreen=()=>{
    Taro.setScreenBrightness({value:1})
  }
  vibrateLong=()=>{
    Taro.vibrateLong()
  }
  phoneContact=()=>{
    Taro.addPhoneContact({
      nickName:'极熵vip通道',
      firstName:'极熵客服',
      mobilePhoneNumber:'666',
      lastName:'极熵'
    })
  }
  playAudio=()=>{
    Taro.playBackgroundAudio({
      dataUrl:'http://ra01.sycdn.kuwo.cn/resource/n3/32/56/3260586875.mp3'
    })
  }
  render () {
    return (
      <View className='page-tubiao-container'>
        <Text className='title'>嘿!小主 您当前所在位置: 端能力页</Text>
        <View className='phone-container item-container' onClick={this.phoneCall.bind(this)}>
          <Text className='text'>点击电话按钮,给我们的客服小哥哥打个电话吧</Text>
          <View className='image' ></View>
        </View>
        <View className='image-container item-container' onClick={this.onChooseImage.bind(this)}>
          <Text className='text'>来选一张自己中意的照片吧</Text>
          <View className='img' ></View>
        </View>
        <View className='code-container item-container' onClick={this.onScanCode.bind(this)}>
          <Text className='text'>接着再试试扫二维码吧</Text>
          <View className='code' ></View>
        </View>
        <View className='screen-container item-container' onClick={this.setScreenBrightness.bind(this)}>
          <Text className='text'>点一下有彩蛋哦</Text>
          <View className='screen' ></View>
        </View>
        <View className='screen-container item-container'  onClick={this.setHightScreen.bind(this)}>
          <Text className='text'>点一下扔掉彩蛋哦</Text>
          <View className='screen'></View>
        </View>
        <View className='vibrateLong-container item-container' onClick={this.vibrateLong.bind(this)}>
          <Text className='text'>觉得无聊就点我吧</Text>
          <View className='vibrateLong' ></View>
        </View>
        <View className='phoneContact-container item-container' onClick={this.phoneContact.bind(this)}>
          <Text className='text'>往通讯录添加一个好友试试吧</Text>
          <View className='phoneContact' ></View>
        </View>
        <View className='nfc-container item-container' onClick={this.playAudio.bind(this)}>
          <Text className='text'>放首背景音乐休闲一下吧</Text>
          <View className='nfc' ></View>
        </View>
      </View>
    )
  }
}


