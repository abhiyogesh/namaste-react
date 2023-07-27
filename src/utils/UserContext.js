import { createContext } from "react";

//for creating context
const UserContext = createContext({
    loggedInUser : "Default User"
});

export default UserContext;