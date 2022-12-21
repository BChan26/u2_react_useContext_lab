import {useState} from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'

//The Login component should contain a form element that has one text input for the username and a submit button. When the form is submitted, it should use the Context consumer to update the user in context with an object that contains the username property and the current date and time such as: { username: 'username-here', lastLogIn: 'current-date-time' }.

export default function Login () {
const {userInfo, setUserInfo} = useContext (UserContext)
const [formState, setFormState] = useState({
    username: '',
})

const handleChange = (event) => {
let value = event.target.value;
setFormState({...formState, username: value})}

const handleSubmit = (event) => {
event.preventDefault()
setUserInfo({...userInfo, username: formState.username})
}

return (
    <div>
        <form>
            <label htmlFor="username">Username:</label>

            <input  type="text" 
                    name="username" 
                    onChange={handleChange}
                    value={formState.username}
                                            >
                                            </input>
        </form>
  
    </div>

)















// const data = useContext(UserContext)
// const [formState, setFormState] = useState ()



// const handleSubmit = (event) => {
// event.preventDefault()
// console.log(formState)
// setFormState()}

// const handleChange = (event) => {
// setUserInfo({...username, [event.target.id]: event.target.value})}


//     return (

//         <div>
//         <h2>Login Information</h2> 
        
//         <form onSubmit={handleSubmit}>
//         <input 
//                 onChange={handleChange}
//                 type = "text"
//                 value={formState.username}
//                 placeholder="username"/>
//         </form>

//         <button onClick={() =>
//             setUserInfo({
//             ...userInfo,
//             username
//             })}>
//             Submit</button>

        




//         </div>
//     )
}