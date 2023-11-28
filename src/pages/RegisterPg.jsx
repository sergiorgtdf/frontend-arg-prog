import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/authContext";

const RegisterPg = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signup, isAuth, errorBack } = useAuth();

    // Efecto para que se redirecciones
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) navigate("/task");
    }, [isAuth]);

    const onSubmit = handleSubmit(async (value) => {
        signup(value);
    });

    return (
        <>
            {/* <NavbarPublic /> */}
            <div className="flex h-screen items-center justify-center">
                <div className="bg-zinc-900 max-w-md p-8 rounded-md ">
                    <form action="">
                        {errorBack.map((err, i) => (
                            <div key={i} className="ErrLogin">
                                {err}
                            </div>
                        ))}

                        <h1 className="text-3xl text-center font-semibold mb-5 text-white">
                            Register
                        </h1>

                        <input
                            className="w-full bg-zinc-700 text-white px4  py-2 rounded-md my-2"
                            type="text"
                            placeholder="Username"
                            {...register("username", { required: true })}
                        />
                        {errors.username && (
                            <p className="text-red-300 text-xs">
                                Username is required
                            </p>
                        )}
                        <input
                            className="w-full bg-zinc-700 text-white px4  py-2 rounded-md my-2"
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <p className="text-red-300 text-xs">
                                Email is required
                            </p>
                        )}
                        <input
                            className="w-full bg-zinc-700 text-white px4  py-2 rounded-md my-2"
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <p className="text-red-300 text-xs">
                                Password is required
                            </p>
                        )}
                        <button
                            onClick={onSubmit}
                            className="h-10 px-6 font-semibold rounded-md bg-green-500 text-white my-3">
                            Registrar
                        </button>
                    </form>

                    <p className="flex-justify-between mt-5">
                        <Link
                            to="/login"
                            className="px-3 font-semibold rounded-md  text-white">
                            Ya tengo una cuenta
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default RegisterPg;
