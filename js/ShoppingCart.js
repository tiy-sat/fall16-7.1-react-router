import React from 'react'
import AvailableItem from './AvailableItem'

export default React.createClass({
  getInitialState(){
    return {
      availableItems: [
        "Expo Dry low odor marker"
      ],
      shoppingCartItems: []
    }
  },
  onItemClick(){
    console.log(this);
    this.setState({
      shoppingCartItems: [
        ""
      ]
    })
  },
  render() {
    return (
      <section>
        <section>
          <h2>Available Items</h2>
          <ol>
            {
              this.state.availableItems.map((item, i)=>{
                return <AvailableItem itemName={ item } key={ i } onItemClick={this.onItemClick}/>
              })
            }
          </ol>
        </section>
        <section>
          <h2>Available Items</h2>
         <ol ref="shoppingCartList">

         </ol>
       </section>
      </section>
    )
  }
})
