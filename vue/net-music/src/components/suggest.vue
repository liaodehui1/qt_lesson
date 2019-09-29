<template>
  <v-scroll 
    ref="suggest" 
    class="suggest" 
    :data="result" 
    :pullup="pullup" 
    :beforeScroll="beforeScroll"
    @scrollToEnd="searchMore"
    @beforeScroll="listScroll">
      <ul class="suggest-list">
        <li 
          class="suggest-item" 
          v-for="(item,index) in result" 
          :key="index" 
          @click="selectItem(item)">
          <div class="icon">
            <i class="icon">&#xe641;</i>
          </div>
          <div class="name">
            <p class="text" v-html="getDisplayName(item)"></p>
          </div>
        </li>
      </ul>
      <div class="no-result-wrapper" v-show="!result.length || !hasMore">
        <span>抱歉，暂无搜索结果</span>
      </div>
    </v-scroll>
</template>

<script>
import scroll from '@/components/scroll'
import api from '@/api/index'
const limit = 20
export default {
  props:{
    query:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      result:[],
      hasMore:true,
      pullup:true,
      beforeScroll:true,
      page:1
    }
  },
  methods: {
    refresh(){
      this.$refs.suggest.refresh()
    },
    // 重新搜索
    search(){
      this.page = 1
      this.hasMore = true
      this.$refs.suggest.scrollTo(0,0)
      this.result = []
      this.fetchResult(this.page)
    },
    getDisplayName(item){
      return `${item.name}-${item.artists[0]} && ${item.name}`
    },
    selectItem(item){
      this.$emit('select',item)
    },
    searchMore(){
      this.page++
      this.fetchResult(this.page)
    },
    listScroll(){
      this.$emit('listScroll')
    },
    _checkMore(data){
      if(data.songs.length < 12 || ((this.page - 1)*limit) >= data.songCount){
        this.hasMore = false
      }
    },
    fetchResult(page){
      const param = {
        limit,
        offset:page - 1,
        keywords:this.query 
      }
      api.MusicSearch(param)
        .then(res=>{
          if(res.code === 200){
            // 原来所有歌曲+现在获取的歌曲
            this.result = [...this.result,...res.result.songs]
            this._checkMore(res.result)
          }
        })
    }
  },
  components:{
    'v-scroll':scroll
  },
  watch: {
    query(newQuery){
      if(newQuery){
        this.search()
      }
    }
  },
}
</script>

<style scoped lang="stylus">
@import "../assets/css/function.styl"
.suggest
  height calc(100vh - 120px)
  overflow hidden
  .suggest-list
    padding 0 px2rem(60px)
    .suggest-item
      display flex
      align-items center
      line-height px2rem(80px)
    .icon
      flex 0 0 px2rem(60px)
      width px2rem(60px)
      font-size 14px
      color hsla(0,0%,100%,.3)
    .name
      flex 1
      font-size 14px
      color hsla(0,0%,100%,.3)
      overflow hidden
      .text
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
    .loading-wraper
      height px2rem(80px)
  .no-result-wrapper
    position absolute
    width 100%
    top 50%
    transform translateY(-50%)
    span
      font-size 14px
      color hsla(0,0%,100%,.3)
</style>
