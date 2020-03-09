import React, { Component } from 'react'

class MyTimer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {info:'info_x' }
        this.ct_xx = 1; 
    }
    //=============================
    my_timer(){
        setInterval(()=>{
            this.setState({hold:'hold string'})
            //alert(0);
            this.setState({state:'ggg'});
            this.ct_xx = this.ct_xx +1;

        },20)
        }

clear_timer(){ this.ct_xx =0;}
    //==========================
    render() {return (
<div className="my_timer_contain">
    <h2 className="timer_text">{this.ct_xx}</h2>
<button onClick={this.my_timer.bind(this)}>Click me</button>
<button onClick={this.clear_timer.bind(this)}>Clear Timer</button>
</div>

)}}

export default MyTimer
