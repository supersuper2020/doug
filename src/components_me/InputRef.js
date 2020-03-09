import React, { Component } from 'react'

class InputRef extends Component {
constructor(props) {
    super(props)

    this.state = {
         
    }
    this.input_ref = React.createRef()

}

/*
git remote add origin https://github.com/user/repo.git
https://github.com/supersuper2020/doug
git remote -v

https://superuser.com/questions/1064197/how-to-switch-git-user-at-terminal

git config user.name
git config user.email
Set your username: git config --global user.name "FIRST_NAME LAST_NAME"
Set your email address: git config --global user.email "MY_NAME@example.com"
For Windows User:
Follow Instructions:
Control Panel >> User Account >> Credential Manager >> Windows Credential >> Generic Credential

remove git credential.
next time when you'll push repo it'll ask you for credential.

*/


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
