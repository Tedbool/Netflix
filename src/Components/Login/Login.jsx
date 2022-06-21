import "./Login.scss"

export default function Login() {
    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img className="logo"
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png'
                    />
                </div>
            </div>
            <div className="container-login">
                <form>
                    <h1>Sign In</h1>
                    <input type={"email"} placeholder={"Email"}/>
                    <input type={"password"} placeholder={"Password"}/>
                    <button className="loginButton">Sign in</button>
                    <span>
                        New to Netflix? <b>sign up now</b>
                    </span>
                </form>
            </div>
        </div>
    )
}
