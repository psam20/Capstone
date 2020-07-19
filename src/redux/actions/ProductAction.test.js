import * as actions from './productActions'
import c from './constants';

describe('actions', () => {
  it('should create an action to add a product', () => {
    const pro = []
    const expectedAction = {
      type: c.ADD_PRODUCT,
      payload: pro
    }
    expect(actions.addProducts(pro)).toEqual(expectedAction)
  })

  it('should create an action to edit a product', () => {
    const pro = []
    const expectedAction = ({
        type:c.EDIT_PRODUCT,
        payload:pro
    })
    expect(actions.EditProducts(pro)).toEqual(expectedAction)
  })

  it('should create an action to delete a product', () => {
    const id = null
    const expectedAction = {
      type: c.DELETE_PRODUCT,
      payload: id
    }
    expect(actions.deleteProducts(id)).toEqual(expectedAction)
  })

  it('should create an action to increment a count of product', () => {
    const id=null;
    const count=0;
    const expectedAction =({
        type:c.INCREMENT_VIEWED_PRODUCT_COUNT,
        payload:{
            id:id,
            count:count
        }
    })
    expect(actions.incrementCount(id,count)).toEqual(expectedAction)
  })
})