import React from "react"
import Togglable from "./Togglable"
import ProTypes from 'prop-types'

export default function LoginForm({handleSubmit,...props}) {
    return (
        <Togglable buttonLabel='Show Login' >
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={props.username}
                        name="Username"
                        placeholder="Username"
                        onChange={props.handleUsernameChange}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={props.password}
                        name="Password"
                        placeholder="Password"
                        onChange={props.handlePasswordChange}
                    />
                </div>
                <button id='form-login-button'>
                    login
                </button>
            </form>
          
        </Togglable>
    )
}

LoginForm.propTypes = {
    handleSubmit: ProTypes.func.isRequired,
    username: ProTypes.string.isRequired,
    password: ProTypes.string.isRequired,
    handleUsernameChange: ProTypes.func.isRequired,
    handlePasswordChange: ProTypes.func.isRequired
}