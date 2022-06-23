function LoginForm(props){
    return (
        <div>
            <fieldset>
                <form className="form" action="#" method="POST">
                    <legend className="form-title">Sign In</legend>
                    <div>
                        <label>Email: </label>
                        <input name="email" type="email" id="email-input" required placeholder="Machamp@Muscles.com"></input>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input name="password" type="password" id="password-input" required placeholder="At least 8 characters" minLength={8}></input>
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </fieldset>
            <button onClick={props.setIsNewUser}>New User? Create Account here!</button>
        </div>
    )
}

export default LoginForm