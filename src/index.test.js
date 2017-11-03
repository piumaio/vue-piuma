import { mount } from 'vue-test-utils'
import VuePiuma from './'
import { expect } from 'chai'

describe('Vue Piuma Component', () => {
  
  it('It works', () => {
    const wrapper = mount(VuePiuma, {
      propsData: {
        src: ''
      }
    })
    expect(wrapper.isVueInstance()).to.equal(true)
  })

  it('Should render correct src', () => {
    const imgUrl = 'https://assets.rbl.ms/4314213/980x.jpg'
    const wrapper = mount(VuePiuma, {
      propsData: {
        src: imgUrl
      }
    })
    expect(wrapper.vm.src).to.equal(imgUrl)
  })

  it('Should render correct parameters', () => {
    const parameters = [7, 7, 7]
    const piumaServer = 'https://vue-piuma.herokuapp.com/'
    const imgUrl = 'https://assets.rbl.ms/4314213/980x.jpg'
    const piumaUrl = piumaServer + '' + parameters[0] + '_' + parameters[1] + '_' + parameters[2] + '/' + imgUrl
    const wrapper = mount(VuePiuma, {
      propsData: {
        src: imgUrl,
        width: parameters[0],
        height: parameters[1],
        quality: parameters[2]
      }
    })
    console.log(wrapper.vm.html)
    expect(wrapper.html()).to.equal('<div><img src="' + piumaUrl + '"></div>')
  })

})