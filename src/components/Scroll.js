import React from 'react';

//state, props, children.... every props has a children
const Scroll = (props) => {
  return (                        //returning objet that has css style in 2 {{}}
    <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>     
      {props.children}
    </div>
  )
}

export default Scroll;
