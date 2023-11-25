import { useForm } from "react-hook-form";
import "./style.css";

const LoginPg = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = handleSubmit(async (value) => {});
    return (
        <div className="box">
            <div id="logo" className="logo-Pg" title="Task">
                <img src="../../img/task.svg" height="50px" alt="" />
            </div>
            <h2>Sign in</h2>
            <p>Ingrese con sus credenciales</p>
            <form>
                <div className="inputBox">
                    <input
                        type="email"
                        name="email"
                        required=""
                        placeholder=" "
                        {...register("email", { required: true })}
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
                <button onClick={onSubmit} className="Boton-enviar">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default LoginPg;
