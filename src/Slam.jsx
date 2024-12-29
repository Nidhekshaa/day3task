
import React, { Component } from "react";
import './Slam.css'
class Slam extends Component{
    render()
    {
        return(
            <>
                <form>
                    <fieldset>
                    <legend >SLAMBOOK</legend><br/>
                    <label for="name">NAME:</label>
                    <input type="text" id="name" name="name" required></input><br/><br/>
                    <label>NICKNAME:</label>
                    <input type="text" id="nickname" required></input><br/><br/>
                    <label>ADDRESS:</label>
                    <textarea id="address" required></textarea><br/><br/>
                    <label>PHONE:</label>
                    <input type="tel" id="phone" pattern="[0-9]{10}" required></input><br/><br/>
                    <label>MEMORIES:</label>
                        <textarea id="memories" required></textarea><br/><br/>
                    <label>GENDER:</label><br/><br/>
                    <input type="radio" name="gender" value="male" />Male<br/>
                    <input type="radio" name="gender" value="female" />Female<br/><br/>
                    <label>FAV ACTORS:</label><br/><br/>
                    <input type="checkbox" name="fav actors" value="vijay" />Vijay<br/>
                    <input type="checkbox" name="fav actors" value="ajith" />Ajith<br/>
                    <input type="checkbox" name="fav actors" value="surya" />Surya<br/>
                    <input type="checkbox" name="fav actors" value="vikram" />Vikram<br/><br/>
                    <label>SCHOOL:<br/><br/>
                        <select >
                            <option value="SSM">SSM</option>
                            <option value="JKKM">JKKM</option>
                            <option value="RVS">RVS</option>                        
                            </select>
                    </label><br/><br/>
                    <button type="submit">Submit</button>
                    </fieldset>
                </form>
            </>
        )
    }
}
export default Slam