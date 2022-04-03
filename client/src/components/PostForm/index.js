import { React, useState } from 'react'
import { useMutation } from '@apollo/client'

export default function PostForm() {
  return (
    <div className="container-form">
      <div className="card-signup">
        <div className="inner-box" id="card">
          <div className="card-front">
            <form>
              <input name='username' className="input-box" placeholder="Stock Name" required />
              <input name='email' className="input-box" placeholder="Price Bought" required />
              <input name='password' className="input-box" placeholder="Amount Bought" required />
              <input name='password' className="input-box" placeholder="Priced At" required />
              <input name='password' className="input-box" placeholder="Creator" required />
              <button className="submit-btn" type="submit">Add Asset</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
