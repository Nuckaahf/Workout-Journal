function SignUpForm(props) {
    return ( 
    <div>
        <fieldset>
            <form className="form" action="#" method="POST">
                <legend className="form-title">Sign Up</legend>
                <div>
                    <label>Email: </label>
                    <input name="email" type="email" id="email-input" required placeholder="Machamp@Muscles.com"></input>
                </div>
                <div>
                    <label>Username: </label>
                    <input name="username" type="username" id="name-input" required placeholder="Machamp Main"></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input name="password" type="password" id="password-input" required placeholder="At least 8 characters" minLength={8}></input>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input name="confirm-password" type="password" id="email-input" required></input>
                </div>
                <button type="submit">Create Account</button>
            </form>
        </fieldset>
        <button onClick={props.setIsNewUser}>Already have an account? Sign in here!</button>
    </div>)
}

export default SignUpForm