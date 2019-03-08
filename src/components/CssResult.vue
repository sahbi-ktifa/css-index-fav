<template>
    <div>
        <h3 class="item-keyword"><a target="_blank" v-bind:href="item.url">{{item.keyword}}</a></h3>
        <span class="item-type">{{item.type}}<img title="Experimental" src="../assets/experimental.png" v-if="item.experimental === true"/></span>
        <p v-html="item.details"></p>
        <ul class="item-tags" v-if="item.tags">
            <li class="item-tag" v-for="tag in item.tags" :key="tag">{{tag}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'CssResult',
  props: ['item']
}
</script>

<style scoped>
.item-keyword {
  text-transform: capitalize;
}
.item-keyword a {
  color: inherit;
  text-decoration: none;
}
.item-type {
  position: absolute;
  top: -25px;
  right: 0;
  font-size: small;
  font-style: italic;
  color: orange;
}
.item-type img {
  width: 35px;
  float: left;
  margin-top: -8px;
}
.item-tags {
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
}
.item-tags li {
  float: left;
}
.item-tag {
  background: #eee;
  border-radius: 3px 0 0 3px;
  color: #999;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
}
.item-tag::before {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  content: '';
  height: 6px;
  left: 10px;
  position: absolute;
  width: 6px;
  top: 10px;
}
.item-tag::after {
  background: #fff;
  border-bottom: 13px solid transparent;
  border-left: 10px solid #eee;
  border-top: 13px solid transparent;
  content: '';
  position: absolute;
  right: 0;
  top: 0;
}
.item-tag:hover {
  background-color: #dfe2ee;
  color: #3a4570;
}
.item-tag:hover::after {
  border-left-color: #dfe2ee;
}
</style>
