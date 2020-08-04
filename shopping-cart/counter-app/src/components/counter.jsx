import React, { Component } from 'react';
class counter extends Component {
   // state = {
       // value : this.props.counter.value
      //  imageUrl: "https://picsum.photos/200"(<img src = {this.state.imageUrl} alt = ""/> )
     // tags: ['tag1', 'tag2', 'tag3']

 //   };
    styles = {
        fontSize : 15,
        fontWeight : "bold"
       //style= {{fontSize}}
    }
    
   // constructor(){
   //     super();
    //    this.handleIncrement = this.handleIncrement.bind(this)
   // } 
   //use this constructor when this is undefined from this constructor it will define bind will set the value of this
    // dont use same method in arrow function

   // handleIncrement = () => {
        
     //this.setState({value: this.state.value + 1});  
 //   }
    
    
    render() { 
        return ( 
        <div>
         <span style={this.styles} className = {this.getBadgeClasses()}> { this.formatCount() } </span>
         <button onClick = {() => this.props.onIncrement(this.props.counter)} className ="btn btn-secondary btn-sm" >Increment</button>
       {/* <ul>
        {this.state.tags.map(tag => <li key = {tag}>{ tag }</li>)}
        </ul> */}
        <button onClick = {() => this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm m-2">delete</button>
        </div>);
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){  
       //return this.state.count === 0 ? 'zero' : this.state.count;
       const { value } = this.props.counter;
       return value === 0 ? "zero" : value;
    }
}
 
export default counter;