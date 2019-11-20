import React,{Component} from 'react'

export default function withDragAble(Com) {
  class WithDragAble extends Component {
    state = {
      left:0,
      top:0
    }
    handleMove = (e) => {
      let left = e.clientX - this.startX
      let top = e.clientY - this.startY
      this.setState({
        left,
        top
      })
    }
    handleUp = (e) => {
      document.removeEventListener('mousemove',this.handleMove)
    }
    handleDown = (e) => {
      let objClientRect = e.target.getBoundingClientRect()
      this.startX = e.clientX - objClientRect.left 
      this.startY = e.clientY - objClientRect.top
      document.addEventListener('mousemove',this.handleMove)
      document.addEventListener('mouseup',this.handleUp)
    }
    render() {
      const {left,top} = this.state
      return (
        <div style={{left,top}} 
          onMouseDown={this.handleDown}
          className="drag">
          <Com></Com>
        </div>
      )
    }
  }
  return WithDragAble
}