import React, { Component } from 'react'

class InputRef extends Component {
constructor(props) {
    super(props)

    this.state = {
         
    }
    this.input_ref = React.createRef()

}

componentDidMount(){
    this.input_ref.current.focus()
    console.log(this.input_ref)
   // var name_id = React.findDOMNode(this.refs.cpDev1).id;
   // this.someOtherFunction(name);
   //alert(name_id)
    //this.setState({inputValue: this.props.inputValue})
   
   //keeps it permantly there (:
    this.setState({inputValue: 'Works nicely'});
 }
 ct_ct =0
 click_show(){
     this.ct_ct++
    this.setState({inputValue: '='+this.ct_ct});
 }

//===============
    render() {
        return (
            <div><center>


<button onClick={this.click_show.bind(this)}>Click me</button>

<input value={this.state.inputValue} ref={this.input_ref} id="input_x" type="text"/>
            </center>               
            </div>
        )
    }
}

export default InputRef
