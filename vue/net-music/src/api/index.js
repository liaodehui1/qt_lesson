// axios封装
import Vue from 'vue'
import axios from 'axios'

const vue = new Vue();

// axios的配置
axios.defaults.timeout = 10000;
axios.defaults.baseUrl = 'http://localhost:3000';

// 返回状态判断(也叫响应拦截器)
axios.interceptors.response.use((res)=>{
  if(res.data.code!==200){
    alert('网络异常');
    return Promise.reject(res);
  }
  return res;
},(error)=>{
  alert('网络异常')
  return Promise.reject(error);
});

// 对axios.get方法进行封装
export function fetchGet(url, param) {
  return new Promise((resolve,reject)=>{
    axios.get(url,{
      params: param
    })
    .then(response => {//成功
      resolve(response.data);
    },err => {
      reject(err);
    })
    .catch((error) => {
      reject(error);
    })
  })
}

export default {
  // 用户登录
  Login(params) {
    return fetchGet('/login',params);
  },
  // 歌单
  DiscLists(params) {
    return fetchGet('/top/playList',params);
  },
  // 歌单详情
  SongList(params) {
    return fetchGet('/playList/detail',params);
  },
  // 歌曲搜索
  MusicSearch() {
    return fetchGet('/search',params);
  },
  // 热搜
  HotSearchKey() {
    return fetchGet('/search/hot');
  },
  // 歌词
  MusicLyric(id) {
    return fetchGet('/lyric',{id});
  },
  MusicUrl() {
    return fetchGet('/song/url',{id});
  }
}