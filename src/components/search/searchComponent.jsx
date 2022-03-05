// import {Link, Redirect, useHistory} from 'react-router-dom'
import React from 'react'

const SearchBox = () => {

  // const history = useHistory()


  const handleSubmit = (e) => {
    // e.preventDefault();
    let queryString = `/search?members=${document.getElementById('members').value || '1'}&category=${document.getElementById('category').value}&duration=${document.getElementById('duration').value || '1'}`
    // history.push(queryString)

  }


  return <div className="submit-form">
    <form id="dkf" onSubmit={handleSubmit} action="/search" method="get">
      <div className="row">
        <div className="col-md-3 first-item">
          <fieldset>
            <input
              name="members"
              type="number"
              className="form-control"
              id="members"
              placeholder="Group members"
              required=""
            />
          </fieldset>
        </div>
        <div className="col-md-3 second-item">
          <fieldset>
            <input
              name="difficulty"
              type="number"
              className="form-control"
              id="duration"
              placeholder="Duration in days"
              required=""
            />
          </fieldset>
        </div>
        <div className="col-md-3 third-item">
          <fieldset >
            <select required id="select" id="category" name="category">

              <option value="adventure">Adventure</option>
              <option value="culture">Culture</option>
              <option value="exploring">Exploring</option>


            </select>
          </fieldset>
        </div>
        <div className="col-md-3">
          <fieldset>
            <button type="submit" id="form-submit" className="btn">
              Find tour
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  </div>

}

export default SearchBox