import { shallowMount } from '@vue/test-utils'
import Piuma from '@/Piuma.vue'

describe('ImagePlaceholder.vue', () => {
  it('renders the correct url for an image images', () => {
    (Piuma as any).serverUrl = "https://loremflickr.com/"
    const wrapper = shallowMount(Piuma, {
      propsData: { width: 500, height: 200, src: 'https://io.io/piuma.png' }
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://loremflickr.com/500_200_100/https://io.io/piuma.png')
  })
})
