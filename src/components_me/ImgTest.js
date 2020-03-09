import React, { Component } from 'react'

class ImgTest extends Component {constructor(props) {super(props)  
this.state = {
color:'blue'

}
this.bbb=["aaa:a11","bbb","ccc","ddd"]
this.a=1;

}
//==========functions can go here

hello = () => {
    return "Hello World!";
  }


//==============================
render() {return (
<div>

<h2>ImgTest</h2> 
<h3>a = {this.a}</h3>
<h3 className="facebook_fong">function hello() = {this.hello()}</h3>
<h3>color = {this.bbb.aaa}= {this.state.color}</h3>
<img width="50" src="https://zowiejobs.club/img_site/logo_nice.png" alt=""/>
<img width="50" src="https://zowiejobs.club/img_site/logo_nice.png" alt=""/>
<img width="50" src="https://zowiejobs.club/img_site/logo_nice.png" alt=""/>

<p>
a p tag
</p>             

</div>
)}}

export default ImgTest
