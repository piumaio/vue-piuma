import { shallowMount } from '@vue/test-utils'
import Piuma from '@/Piuma.vue'

describe('ImagePlaceholder.vue', () => {
  it('renders the correct url for an image', () => {
    (Piuma as any).serverUrl = "https://loremflickr.com/"
    const wrapper = shallowMount(Piuma, {
      propsData: { width: 500, height: 200, src: 'https://io.io/piuma.png' }
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://loremflickr.com/500_200_100/https://io.io/piuma.png')
  }),
  it('renders the correct attributes for an image', () => {
    (Piuma as any).serverUrl = "https://loremflickr.com/"
    const wrapper = shallowMount(Piuma, {
      propsData: {
        width: 500, height: 200,
        src: 'https://io.io/piuma.png', class: 'customstyle',
        alt: 'alternate', title: 'title'
      }
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://loremflickr.com/500_200_100/https://io.io/piuma.png')
    expect(
      wrapper.findAll('img').at(0).attributes().class
    ).toEqual('customstyle')
    expect(
      wrapper.findAll('img').at(0).attributes().alt
    ).toEqual('alternate')
    expect(
      wrapper.findAll('img').at(0).attributes().title
    ).toEqual('title')
  })
})
