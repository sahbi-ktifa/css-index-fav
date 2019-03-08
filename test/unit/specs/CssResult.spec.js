import { mount } from '@vue/test-utils'
import CssResult from '@/components/CssResult'

describe('CssResult.vue', () => {
  let cssResultComp

  beforeEach(() => {
    let wrapper = mount(CssResult, {
      propsData: {
        item: {
          keyword: 'test-key',
          url: 'http://www.test.com',
          type: 'type-test',
          tags: ['tag1', 'tag2']
        }
      }
    })
    cssResultComp = wrapper.vm
  })

  it('should render correct contents for keyword', () => {
    expect(cssResultComp.$el.querySelector('h3.item-keyword').textContent)
      .toEqual('test-key')
  })

  it('should render correct contents for url', () => {
    expect(cssResultComp.$el.querySelector('h3.item-keyword a').href)
      .toEqual('http://www.test.com/')
  })

  it('should render correct contents for type', () => {
    expect(cssResultComp.$el.querySelector('.item-type').textContent)
      .toEqual('type-test')
  })

  it('should render correct contents for tags', () => {
    expect(cssResultComp.$el.querySelectorAll('.item-tags .item-tag').length)
      .toEqual(2)
    expect(cssResultComp.$el.querySelectorAll('.item-tags .item-tag').item(0).textContent)
      .toEqual('tag1')
    expect(cssResultComp.$el.querySelectorAll('.item-tags .item-tag').item(1).textContent)
      .toEqual('tag2')
  })
})
