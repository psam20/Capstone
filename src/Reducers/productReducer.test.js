import reducer from './productReducers'
import c from '../actions/constants'

describe('product reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        products:[],
        loading:false,
        hasErrors:false,
        searchInput:"",
        filteredProducts:[],
        count:0
      }
    )
  })

  it('should handle DELETE_PRODUCT', () => {

    const state={
        products:[],
        loading:false,
        hasErrors:false,
        searchInput:"",
        filteredProducts:[],
        count:0
      }
    expect(
      reducer(state,
        {
          type: c.DELETE_PRODUCT
        })
    ).toMatchSnapshot()  
})

it('should handle EDIT_PRODUCT', () => {

    const state={
        products:[],
        loading:false,
        hasErrors:false,
        searchInput:"",
        filteredProducts:[],
        count:0
      }
    expect(
      reducer(state,
        {
          type: c.EDIT_PRODUCT
        })
    ).toMatchSnapshot()
})

})