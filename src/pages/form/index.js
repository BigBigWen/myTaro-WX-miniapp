import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCheckbox,AtInput, AtForm ,Image,AtRate,AtSwitch} from 'taro-ui'
import verificationCode from '../../images/verification_code.png'

import './index.less'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      checkedList1: ['list1'],
      checkboxOption1: [
        { value: 'list1', label: '苹果' },
        { value: 'list2', label: '桃子' },
        { value: 'list3', label: '葡萄' }
      ],
      value1:'',
      value14: '',
      value15: '',
      disabled: false,
      second: 60,
      rateValue1: 3,
    }
  }
  handleChange (value) {
    this.setState({
      checkedList1: value
    })
  }
  sendCode () {
    if (this.state.disabled) return
    this.setState({
      disabled: true
    })
    // 倒计时
    const timer = setInterval(() => {
      if (this.state.second > 0) {
        this.setState({
          second: this.state.second - 1
        })
      } else {
        this.setState({
          second: 60,
          disabled: false
        })
        clearInterval(timer)
      }
    }, 1000)
  }
  showTipText () {
    return this.state.disabled ? `${this.state.second}s后重试` : '发送验证码'
  }
  handleInput (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }
  handleClick () {
    Taro.showToast({
      title: '已发送验证码',
      icon: 'success',
      duration: 2000
    })
  }


  

  render () {
    const{rateValue1}=this.state
    return (
      <View className='page-form'>

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>复选框</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <View className='checkbox-container'>
                  <AtCheckbox
                    options={this.state.checkboxOption1}
                    selectedList={this.state.checkedList1}
                    onChange={this.handleChange.bind(this)}
                  />
                </View>
              </View>
            </View>
          </View>
          {/* input */}
          <View className='panel'>
            <View className='panel__title'>输入框</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtForm>
                  <AtInput name='value1' title='请输入:' type='text' placeholder='标准五个字' value={this.state.value1} onChange={this.handleInput.bind(this, 'value1')} />
                  <AtInput title='验证码' type='text' maxlength='4' clear placeholder='验证码' value={this.state.value14} onChange={this.handleInput.bind(this, 'value14')}>
                    <Image src={verificationCode} />
                  </AtInput>
                  <AtSwitch title='开关:' checked />
                  <AtInput border={false} type='phone' clear placeholder='请输入手机号码' value={this.state.value15} onChange={this.handleInput.bind(this, 'value15')}>
                    <View
                      style={{
                        'color': this.state.disabled ? '#FF4949' : '',
                        'fontSize': '12px',
                        'width': '90px'
                      }}
                      onClick={this.sendCode.bind(this)}
                    >
                      {this.showTipText()}
                    </View>
                  </AtInput>
                </AtForm>
              </View>
            </View>
          </View>
          {/* 评分 */}
          <View className='panel'>
            <View className='panel__title'>评分 小星星</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtRate value={rateValue1} onChange={this.handleInput.bind(this, 'rateValue1')} />
              </View>
            </View>
          </View>



        </View>
        {/* E Body */}
      </View>
    )
  }
}
