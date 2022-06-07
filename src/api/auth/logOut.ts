import AsyncStorage from "@react-native-async-storage/async-storage";

import { FirebaseError } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

import toAlert from "../toAlert";

export default function logOut(): Promise<void> {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        
        signOut(auth)
            .then(async () => {
                await AsyncStorage.removeItem("Auth Token");
                await AsyncStorage.removeItem("Assign Date");
                
                resolve();
            })
            .catch((error: FirebaseError) => (
                reject(toAlert(error))
            ));
    }); 
};