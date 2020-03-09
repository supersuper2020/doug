import React, { Component } from 'react'

class BoolAndCount extends Component {
    constructor(props) {
        super(props)
    
        this.bool_x = true;   
        this.bool_x =! this.bool_x;  //flip flop

        this.state = { message_x:'Ready'}
        //this.ct=0;
        this.ct=1;
    }
  
   // Boolean Value: { ipsumText.toString() }  
   // Boolean Value: { String(ipsumText) }
   // Boolean Value: { '' + ipsumText }
   // {`Boolean Value: ${ipsumText}`}

click_handler(){
  // this.setState({message_x:this.ct});

  this.bool_x =! this.bool_x;

   this.setState({message_x:''+this.bool_x});
    this.ct = this.ct +1;
  
    //alert(this.bool_x);
}

    render(){return(
    <div>
        <h1>{this.state.message_x}</h1>
<button onClick={this.click_handler.bind(this)}>
    Click me-{this.ct}</button></div>
    )}
}

export default BoolAndCount
