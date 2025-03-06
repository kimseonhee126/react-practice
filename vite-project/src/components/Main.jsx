import "./Main.css"

const Main = () => {
    const user = {
        name: "Lee",
        isLogin: true,
    };

    if (user.isLogin) {
        return <div className="logout">Log OUT</div>
    } else {
        return <div className="login">Log IN</div>
    }

    // return (
    //     <>
    //         {user.isLogin ? (
    //             <div>Log OUT</div>
    //         ): (
    //             <div>Log In</div>
    //         )}
    //     </>
    // );
};

export default Main;