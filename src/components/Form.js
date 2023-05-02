import { useState } from "react";
const Form = (props) => {
    //instantiate a new instance of state
    const [formData, setFormData] = useState({searchTerm: ''})
    
    // handleChange function to capture/update formData
    const handleChange = (event) => {
        // console.log('event', event.target.name, event.target.value)
        //when you set state you create a brand new object. In this case it's a new ojbect with all the previous key:values and the key we want to update
        setFormData({
            //[event.target.name] is a way to target an object dynamically
            // you always spread the previous object first... then update specific key:values
            ...formData,[event.target.name]: event.target.value
        })
    }

    //handleSubmit function will submit lift state up to App.js
    const handleSubmit = (event) => {
        // the natural behavior of a form is to refresh the page which we don't want to do:
        event.preventDefault();
        // call the movieSearch fucntion from App.js and pass it our form data:
        props.movieSearch(formData.searchTerm)
    }

    return (
        <div>
           <form onSubmit = {handleSubmit}>
            <input 
                type="text" 
                name='searchTerm'
                value={formData.searchTerm}
                onChange={handleChange}
            />
            <input type="submit" value ="submit" />
            </form>     
        </div>

    )
};







export default Form;