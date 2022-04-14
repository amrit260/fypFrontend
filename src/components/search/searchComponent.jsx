// import {Link, Redirect, useHistory} from 'react-router-dom'
import React from 'react'
import { useNavigate } from 'react-router'
import getItems from 'src/utils/tourRequests/getItems'

const SearchBox = () => {

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    let members = document.getElementById('members').value
    let difficulty = document.getElementById('category').value
    let duration = document.getElementById('duration').value

    let rawParams = {}
    members ? rawParams.members = members : null
    difficulty ? rawParams.difficulty = difficulty : null
    duration ? rawParams.duration = duration : null


    let queryString = `${document.getElementById('members').value ? 'members=1' : ''}&category=${document.getElementById('category').value ? '' : ''}&duration=${document.getElementById('duration').value || '1'}`

    const params = new URLSearchParams(rawParams);

    // getItems('Search', queryString)
    alert('btn clicked')
    navigate(`/search?${params}`)

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

              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="difficult">difficult</option>


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