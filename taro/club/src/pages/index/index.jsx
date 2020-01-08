import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { PostCard, PostForm } from '../../components';

export default class Index extends Component {
  // es7 class public
  // constructor() {
  //   this.state = {}
  // }

  state = {
    posts: [
      {
        title: '泰罗奥特曼',
        content: '好厉害'
      }
    ],
    formTitle: '',
    formContent: ''
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleSubmit = (e) => {
    e.preventDefault()
    const { 
      formTitle: title, 
      formContent: content 
    } = this.state
    const newPosts = this.state.posts.concat({
      title,
      content
    })
    this.setState({
      posts: newPosts,
      formContent: '',
      formTitle: ''
    })
  }
  handleTitleInput = (e) => {
    this.setState({
      formTitle: e.target.value
    })
  }
  handleContentInput = (e) => {
    this.setState({
      formContent: e.target.value
    })
  }
  render () {
    return (
      <View className='index'>
        {
          this.state.posts.map((post, index) => (
            <PostCard key={index}
              title={post.title}
              content={post.content} />
          ))
        }
        <PostForm formTitle={this.state.formTitle}
          formContent={this.state.formContent} 
          handleSubmit={this.handleSubmit}
          handleTitleInput={this.handleTitleInput}
          handleContentInput={this.handleContentInput} />
      </View>
    )
  }
}
