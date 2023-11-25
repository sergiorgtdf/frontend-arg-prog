const RegisterPg = () => {
    return (
        <div className="box">
            <div id="logo" className="logo-Pg" title="task">
                <img src="../../img/task.svg" height="50px" alt="" />
            </div>
            <h2>Register</h2>
            <p>Registrese para poder acceder</p>
            <form>
                <div className="inputBox">
                    <input
                        type="text"
                        name="username"
                        required=""
                        placeholder=" "
                    />
                    <label>Username </label>
                </div>

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
                    <button type="button">
                        <a to="/LoginPg">I Have an Account</a>
                    </button>
                </div>
                <input type="submit" name="sign-in" defaultValue="Sign In" />
            </form>
        </div>
    );
};

export default RegisterPg;
