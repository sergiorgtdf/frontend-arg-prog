// import NavbarPrivate from "../../components/NavBar/NavbarPrivate";
import { useAuth } from "../../context/authContext";

const TaskPg = () => {
    const { user } = useAuth();

    return (
        <>
            {/* <NavbarPrivate /> */}
            <div>
                <h1 className="text-3xl font-bold text-center">Task</h1>
                {JSON.stringify(user, null, 3)}
            </div>
        </>
    );
};

export default TaskPg;
