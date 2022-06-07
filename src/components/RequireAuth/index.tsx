import { useState, useEffect, useContext } from "react";

import { AlertContext, FirebaseContext, UserContext } from "../../contexts";
import PublicScreen from "../../screens/PublicScreen";
import { getCurrentUser } from "../../api/auth";


export default function RequireAuth(props: { children: JSX.Element }) {
    const [ready, setReady]     = useState<boolean>(false);
    const [allowed, setAllowed] = useState<boolean>(false);
    
    const { setSeverity, setMessage } = useContext(AlertContext);
    const { db } = useContext(FirebaseContext);
    const { setUser } = useContext(UserContext);
    
    useEffect(() => {
        setReady(false);
        
        getCurrentUser(db)
            .then((user) => {
                setUser(user);
                setAllowed(!!user); 
                /* If "user" is null, then it will be casted to false,
                 * thus, not allowing content to be displayed.
                 */
                    
                setReady(true);
            })
            .catch((error) => {
                setSeverity(error.severity);
                setMessage(error.message);   
            });
    }, [db]); 

    if (!ready) {
        return <></>;
    }
    
    if (!allowed) {
        return <PublicScreen />;
    }

    return props.children;
};