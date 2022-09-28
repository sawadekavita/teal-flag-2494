import React from 'react'


const Navbar = () => {
  return (

<div className="navbar">
    <div>
    <img src="https://press.nordstrom.com/system/files-encrypted/nasdaq_kms/inline-images/RACK_2021_BLACK_rgb-1280x1280.jpeg" alt="" />
</div>
<div>
    <input type="text"placeholder="Search for products or brands"  />
</div>
{/* <div>
    <p>    Sign In</p>
</div> */}
<div>
<select name="Sign In" className="opt">
<option value="signIn ">sign In</option>
<option value="Your Account">Your Account</option>
<option value="Purchases">Purchases</option>
<option value="Wish List">Wish List</option>
<option value="The Nordy Club Rewards">The Nordy Club Rewards</option>
<option value="Shipping addresses">Shipping addresses</option>
<option value="Payment Method">Payment Method</option>
<option value=" Pay and Manage Nordstrome card">Pay and Manage Nordstrome card</option>
<option value="Store Locator">Store Locator</option>
<option value="Account Setting">Account Setting</option>

</select>


</div>

</div>


  )
}

export default Navbar