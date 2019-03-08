<template>
  <ais-instant-search
    index-name="CSS_KEYWORDS"
    :search-client="searchClient">
    <div class="left-panel">
      <ais-clear-refinements />
      <h2>Type</h2>
      <ais-refinement-list attribute="type" searchable />
      <h2>Tags</h2>
      <ais-refinement-list attribute="tags" searchable />
      <ais-configure :hitsPerPage="8" />
    </div>
    <div class="right-panel">
      <ais-search-box />
      <ais-hits>
        <div slot="item" slot-scope="{ item }" class="item-result">
          <css-result v-bind:item="item"></css-result>
        </div>
      </ais-hits>
      <ais-pagination />
    </div>
  </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite'
import CssResult from './CssResult'

export default {
  name: 'SearchUi',
  components: {
    CssResult
  },
  data () {
    return {
      searchClient: algoliasearch('41PGPF96WQ', '0ce280a9fb181069b1dae58eee853cb5')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ais-Hits {
  margin-top: 10px;
  margin-bottom: 10px;
}
.ais-InstantSearch {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 1em;
  margin-right: 25px;
  margin-left: 25px;
}
.item-result {
  position: relative;
}
</style>
