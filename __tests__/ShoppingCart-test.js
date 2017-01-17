import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ShoppingCart from '../js/ShoppingCart'

describe("Shopping Cart", ()=>{
  // Have access (variable) to the component that has been rendered
  //   HOISTING

  // If I use a "const" high level var that should not be changed
  let shoppingCartComponent = {}

  beforeEach(()=>{
    // Think of this as the "fixture" for Jest/React
    shoppingCartComponent = TestUtils.renderIntoDocument(<ShoppingCart />)
  })

  it("Should have list of items to add", ()=>{
    // Assumptions
    // 1) I have at least one item to click add on by finding it
    const availableItemElement = shoppingCartComponent.refs.availableItem
    // 2) That I can click add on one of the items
    expect(availableItemElement).toBeDefined()
  })

  it("Should have cart", ()=>{
    // Assumptions
    // 1) Can find reference to cart
    const shoppingCartListElement = shoppingCartComponent.refs.shoppingCartList
    // 2) Expect list to have been found
    expect(shoppingCartListElement).toBeDefined()
  })

  it("Should add item to cart when clicked on", ()=>{
    // Assumptions
    // 1) That I have clicked add on one of the items

    // 2) Have reference to cart
    const shoppingCartListElement = shoppingCartComponent.refs.shoppingCartList
    // 3) Expect that it is now in the list of items in cart
    expect(shoppingCartListElement.children.length).toBe(1)
  })

  it("Should add to total price of cart", ()=>{
    // Assumptions
  })
})
