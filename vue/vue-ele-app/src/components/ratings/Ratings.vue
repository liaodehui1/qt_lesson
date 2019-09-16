<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <reatingsSelect :ratings="ratings"></reatingsSelect>
      <div class="rating-wrapper">
        <ul>
          <li 
            class="rating-item" 
            v-for="(rating,index) in ratings"
            :key="index">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery">{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <span v-if="rating.recommend.length" class="icon-thumb_up"></span>
                <span 
                  class="item" 
                  v-for="(item,index) in rating.recommend"
                  :key="index">{{item}}</span>
                </div>
            </div>
            <div class="time">{{rating.rateTime}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/Star'
import split from '@/components/split/Split'
import reatingsSelect from '@/components/ratingsSelect/RatingsSelect'
export default {
  components:{
    star,
    split,
    reatingsSelect
  },
  props:{
    seller:{
      type:Object
    }
  },
  data(){
    return {
      ratings:[]
    }
  },
  created() {
    this.$http.get('http://127.0.0.1:8080/static/ratings.json')
      .then(res=>{
        console.log('ratings:',res)
        if(res.data.errno===0){
          this.ratings=res.data.data
        }
      })
  },
}
</script>

<style lang="stylus" scoped>
  .ratings-content
    .overview
      padding 16px 0
      display flex
      &-left
        flex 0 0 137px
        border-right 1px solid #d9dde1
        text-align center
        padding 6px 0
        .score
          color #fc9153
          font-size 24px
          line-height 28px
          margin-bottom 6px
          font-weight 400
        .title
          color #333
          font-size 12px
          line-height 12px
          margin-bottom 8px
        .rank
          font-size 10px
          color #999
          line-height 10px
      &-right
        flex 1 
        padding 6px 0 6px 24px
        .score-wrapper
          display flex
          align-items center
          margin-bottom 8px
          .title
            font-size 12px
            margin-right 12px
          .score
            color #fc9153
            font-size 12px
            margin-left 12px
          .delivery
            font-size 12px
            color #999
    .rating-wrapper
      padding 0 18px
      .rating-item
        display flex
        position relative
        margin-top 18px
        margin-bottom 36px
        &:last-child
          margin-bottom 0px
        .avatar
          flex 0 0 28px
          margin-right 12px
          img
            border-radius 50%
        .content
          flex 1
          .name
            font-size 10px
            margin-bottom 4px
          .star-wrapper
            display flex // 使delivery不换行
            margin-bottom 6px
            .delivery
              font-size 10px
              color #999999
              margin-left 6px
          .text
            color #333333
            font-size 12px
            margin-bottom 8px
            line-height 18px
          .recommend
            line-height 18px
            .icon-thumb_up
              color #00a0dc
            .icon-thumb_up,.item
              font-size 10px
              margin 0 8px 4px 0
            .item
              display inline-block
              padding 0 6px
              border 1px solid rgba(7,17,27,.1)
              border-radius 1px
              color #999999
        .time
          position absolute
          right 0
          top 0
          font-size 12px
          color #999999
</style>