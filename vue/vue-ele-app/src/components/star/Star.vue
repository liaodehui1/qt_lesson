<template>
  <div class="star" :class="starSize">
    <span 
      v-for="(itemClass,index) in itemClasses"
      :key="index"
      class="star-item"
      :class="itemClass"></span>
  </div>
</template>

<script>
const ON='on'
const OFF='off'
const LENGTH=5
const HALF='half'
export default {
  props:{
    size:{
      type:Number,
      default:36
    },
    score:{
      type:Number,
      default:0
    }
  },
  computed: {
    starSize(){
      return `star-${this.size}`
    },
    itemClasses(){
      let itemClasses=[]
      let onStar=Math.floor(this.score)
      for(let i=0;i<onStar;i++){
        itemClasses.push(ON)
      }
      let halfStar=0
      if(this.score-onStar>=0.5){
        halfStar=1
        itemClasses.push(HALF)
      }
      let offStar=LENGTH-onStar-halfStar
      for(let i=0;i<offStar;i++){
        itemClasses.push(OFF)
      }
      // console.log(itemClasses)
      return itemClasses
    }
  },
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixin.styl'
  .star
    display flex
    &.star-24
      .on
        bg-image('star24_on')
      .off
        bg-image('star24_off')
      .half
        bg-image('star24_half')
      .star-item
        background-size 10px 10px
        width 10px
        height 10px
        margin-right 3px
        &:last-child
          margin-right 0px
    &.star-36
      .on
        bg-image('star36_on')
      .off
        bg-image('star36_off')
      .half
        bg-image('star36_half')
      .star-item
        background-size 15px 15px
        width 15px
        height 15px
        margin-right 6px
        &:last-child
          margin-right 0px
    &.star-48
      .on
        bg-image('star48_on')
      .off
        bg-image('star48_off')
      .half
        bg-image('star48_half')
      .star-item
        background-size 20px 20px
        width 20px
        height 20px
        margin-right 22px
        &:last-child
          margin-right 0px
</style>