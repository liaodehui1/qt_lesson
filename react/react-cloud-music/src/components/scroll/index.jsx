import React, { useEffect, useRef } from 'react';
import BScroll from 'better-scroll';
import { Content, ScrollContainer } from './style';

export default function (props) {
  // React.createRef()
  const scrollContainerRef = useRef()
  useEffect(() => {
    const scroll = new BScroll(
      scrollContainerRef.current
    )
  })
  return (
    <Content>
      <ScrollContainer ref={scrollContainerRef}>
        {
          props.children
        }
      </ScrollContainer>
    </Content>
  );
}