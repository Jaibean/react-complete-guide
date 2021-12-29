import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
    const [isloggedIn, setIsloggedIn] = useState(false);

    useEffect(() => {
        const storedInfo = localStorage.getItem("isLoggedIn");
        if (storedInfo === "1") {
          setIsloggedIn(true);
        }
      }, []);

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsloggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
        setIsloggedIn(true);
    };
    return <AuthContext.Provider>{props.children}</AuthContext.Provider>
};

export default AuthContext;
