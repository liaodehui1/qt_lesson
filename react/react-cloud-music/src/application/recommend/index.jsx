import React, { Component } from 'react';
import Scroll from '../../components/scroll/index';

function RecommendComponent() {
  return (
    <Scroll>
      <div>
        {
          new Array(100).fill(1)
            .map((el, index) => {
              return (
                <li key={index}>{el}</li>
              )
            })
        }
      </div>
    </Scroll>
  )
}

export default RecommendComponent;