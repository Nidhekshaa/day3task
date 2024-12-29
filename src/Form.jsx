import React, { Component } from "react";

class Form extends Component{
    render()
    {
        return(
            <>
            <form>
                <label>Name</label>
                <input type="text" id="name"></input><br/><br/>
                <label>DOB</label>
                <input type="date" id="dob"></input><br/><br/>
                <label>Gender</label><br/>
                <input type="radio" name="gender" value="male" />male
            </form>
            </>
        )
    }
}
export default Form