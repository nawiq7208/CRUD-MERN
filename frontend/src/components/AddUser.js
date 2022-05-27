import React from 'react'

const AddUser = () => {
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form action="">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input type="text" className="input" placeholder='Name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input type="text" className="input" placeholder='Email'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Gender</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='button is-success'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddUser