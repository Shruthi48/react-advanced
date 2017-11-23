import React from 'react';

export default class Timestamp extends React.Component {
   render() {
       return (
           <div>
               {this.props.timestamp.toString()}
           </div>
       )
   }
}