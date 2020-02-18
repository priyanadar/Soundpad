import React from'react';
import './Box.css'

class Box extends React.Component{
    onClick=()=>{
        const audio=new Audio(this.props.track.path);
        audio.play();
    }
    render(){
        
        return(
            
        <button onClick={this.onClick} className="box">{this.props.track.name}</button>
        );
    }
}

export default Box;
