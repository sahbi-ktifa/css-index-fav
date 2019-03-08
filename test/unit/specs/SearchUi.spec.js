import { mount } from '@vue/test-utils'
import SearchUi from '@/components/SearchUi'

describe('SearchUi.vue', () => {
  it('should render correct contents', () => {
    let wrapper = mount(SearchUi, {
      stubs: ['ais-pagination', 'ais-hits', 'ais-configure', 'ais-search-box', 'ais-refinement-list', 'ais-clear-refinements', 'ais-instant-search']
    })

    expect(wrapper.vm.searchClient).toBeTruthy()
  })
})
