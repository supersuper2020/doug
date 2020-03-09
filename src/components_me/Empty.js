import React, { Component } from 'react';
class Empty extends Component {
  constructor(props) {
    super(props);
    this.state = {
     // my_list: [1,1, 2, 3,4,5,6,"aaa:bbb"]
      my_list: ["aaa","bbb","ccc","ddd","eee"]
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.my_list.map((item,index) => (
            // <li key={item}>--{item}--{this.state.my_list[2]}</li>
            <li key={item}>--{item+'---'+index}--{item+'fff'}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Empty;