<template>
  <div class="ratings-select">
    <div class="rating-type">
      <span class="block positive" :class="{'active':showType===-1}" @click="show(-1)">
        全部
        <span class="count">{{totalCount}}</span>
      </span>
      <span class="block positive" :class="{'active':showType===0}"  @click="show(0)">
        满意
        <span class="count">{{positiveCount}}</span>
      </span>
      <span class="block negative" :class="{'active':showType===1}" @click="show(1)">
        不满意
        <span class="count">{{negativeCount}}</span>
      </span>
    </div>
    <div class="switch" :class="{'on':only_content}" @click="showAllRatings">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['ratings','showType','show','only_content','showAllRatings'],
  computed: {
    totalCount(){
      return this.ratings.length
    },
    positiveCount(){
      return this.positiveRatings().length
    },
    negativeCount(){
      return this.negativeRatings().length
    }
  },
  methods: {
    positiveRatings(){
      // console.log(this.ratings)
      return this.ratings.filter(rating=>rating.rateType===0)
    },
    negativeRatings(){
      return this.ratings.filter(rating=>rating.rateType===1)
    }
  },
}
</script>

<style lang="stylus" scoped>
  .ratings-select
    .rating-type
      padding 18px 18px
      font-size 0 // 消除空隙
      .block
        display inline-block
        font-size 12px
        padding 8px 12px
        margin-right 8px
        color #666
        line-height 16px
      .positive
        background-color rgba(0,160,220,.2)
        &.active
          background-color #00a0dc
          color #ffffff
      .negative
        background-color #ccc
        &.active
          background-color #666
          color #ffffff
    .switch
      padding 12px 18px
      color #999999
      border-bottom 1px solid rgba(7,17,27,.1)
      height 24px
      line-height 24px
      font-size 0
      .icon-check_circle
        font-size 24px
        margin-right 4px
      .text
        font-size 12px
        vertical-align top
      &.on
        .icon-check_circle
          color #00b43c
</style>