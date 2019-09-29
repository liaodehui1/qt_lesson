<template>
  <div class="search-list">
    <transition-group tag="ul" name="list">
      <li class="search-item" v-for="item in searchs" :key="item" @click="selectItem(item)">
        <span class="text">{{item}}</span>
        <span class="icon-box" @click.stop="deleteOne(Item)">
          <i class="icon">&#xe656;</i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props:{
    searchs:{
      type:Array,
      default:[]
    }
  },
  methods: {
    selectItem(item){
      this.$emit('select',item)
    },
    deleteOne(item){
      
    }
  },
}
</script>

<style lang="stylus" scoped>
.search-list 
  .search-item 
    display flex
    align-items center
    height 40px
    overflow hidden

    &.list-enter-active, &.list-leave-active 
      transition all 0.1s
    

    &.list-enter, &.list-leave-to 
      height 0
    

    .text 
      flex 1
      color hsla(0,0%,100%,.5)
    

    .icon-box 
      .icon 
        font-size 18px
        color hsla(0,0%,100%,.3)
</style>
