import "./style.css";

const LoginPg = () => {
    return (
        <div className="box">
            <div id="logo" className="logo" title="Task">
                <img src="../../img/task.svg" height="50px" alt="" />
            </div>
            <h2>Sign in</h2>
            <p>Use a Google account</p>
            <form>
                <div className="inputBox">
                    <input
                        type="email"
                        name="email"
                        required=""
                        placeholder=" "
                    />
                    <label>E-mail </label>
                </div>
                <div className="inputBox">
                    <input
                        type="password"
                        name="pasword"
                        required=""
                        placeholder=" "
                    />
                    <label>Password</label>
                </div>
                <div className="forgot">
                    <button type="button">Forgot your address?</button>
                </div>
                <input type="submit" name="sign-in" defaultValue="Sign In" />
            </form>
        </div>
    );
};

export default LoginPg;
