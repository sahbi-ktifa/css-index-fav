import { mount } from '@vue/test-utils'
import App from '@/App'

describe('App.vue', () => {
  it('should render correct contents', () => {
    let wrapper = mount(App, {
      stubs: ['search-ui']
    })
    expect(wrapper.vm.$el.querySelector('#app h1').textContent)
      .toEqual('What is your favorite CSS reference?')
  })
})
