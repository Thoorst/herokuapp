import { AddRemoveElement } from "../page-object/AddRemoveElement"
import { Checkboxes } from "../page-object/Checkboxes"
import { ContextMenu } from "../page-object/ContextMenu"

//Note that there are only examples of use. Besides, not all cases has been included in test scenario.

describe('Add remove elements', () => {
  beforeEach(`Open site`, () =>{
    cy.visit('/')
    cy.get('div#content ul li:nth-of-type(2) a').click()
  })

  it('Should have add element', () => {
    var addRemoveElement = new AddRemoveElement()
    addRemoveElement.clickAddButton()
    addRemoveElement.verifyButtonIsAdded(1)
  })

  it('Should have remove element', () => {
    let addRemoveElement = new AddRemoveElement()
    addRemoveElement.clickAddButton()
    addRemoveElement.clickDeleteButton(1)
    addRemoveElement.verifyButtonIsRemoved(1)
  })
})

describe('Tests of heckboxes', () => {
  beforeEach(`Open site`, () =>{
    cy.visit('/')
    cy.get('div#content ul li:nth-of-type(6) a').click()
  })

  it('Checkbox should not be selected as default', () => {
    const checkboxes = new Checkboxes()
    checkboxes.verifyCheckboxIsNotSelected(1)
  })

  it('Should select checkbox', () => {
    const checkboxes = new Checkboxes()
    checkboxes.selectCheckbox(1)
    checkboxes.verifyCheckboxIsSelected(1)
  })
})

describe(`Tests of ContextMenu` , () =>{
  beforeEach(`Open site`, () =>{
    cy.visit('/')
    cy.get('div#content ul li:nth-of-type(7) a').click()
  })

  it.only('', () =>{
    const contextMenu = new ContextMenu()
    contextMenu.rightClickOnContextMenu()
    cy.wait(500)
  })
})