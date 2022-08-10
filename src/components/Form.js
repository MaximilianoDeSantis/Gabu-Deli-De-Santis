import React from 'react'
import { Link } from 'react-router-dom';

const Form = ({userData,handleChange,setOrder}) => {

  return (
    <form onChange={handleChange}>
        <div class="form-floating mb-3">
            <input type="text" name="name" class="form-control" id="floatingInput" placeholder="Name" defaultValue={userData.name}/>
            <label for="floatingInput">Full Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="number" name="phone" class="form-control" id="floatingInput" placeholder="Phone" defaultValue={userData.phone}/>
            <label for="floatingInput">Phone</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" name="address" class="form-control" id="floatingInput" placeholder="Address"defaultValue={userData.address}/>
            <label for="floatingInput">Address</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com" defaultValue={userData.email} />
            <label for="floatingInput">Email address</label>
        </div>

            <button type="button" class="btn btn-primary" 
                        onClick={setOrder}
                        disabled={!(userData.name !== ''
                            && userData.phone !== ''
                            && userData.email !== ''
                            && userData.phone.length > 5
                        )}
                        >Buy</button>

    </form>
  )
}

export default Form;
