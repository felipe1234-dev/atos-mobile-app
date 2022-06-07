import AsyncStorage from "@react-native-async-storage/async-storage";

import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { Firestore } from "@firebase/firestore";

import { User } from "../../interfaces";
import { getUser } from "../collections/Users";
import logOut from "./logOut";

export default function getCurrentUser(db: Firestore): Promise<User|null> {
    return new Promise(async (resolve, reject) => {
        const refreshToken = await AsyncStorage.getItem("Auth Token");
        const tokenDate = await AsyncStorage.getItem("Assign Date");
        const timeNow = new Date().getTime();
        const minutesPassed = tokenDate ? (timeNow - Number(tokenDate))/(1000 * 60) : 100;

        if (!refreshToken || minutesPassed > 60) {
            logOut().catch((error) => reject(error));
        }
        
        const auth = getAuth();
        
        onAuthStateChanged(auth, (user) => {
            if (!!user) {
                const { uid } = user; 
                
                getUser(db, uid)
                    .then((user) => (
                        resolve(user)
                    ))
                    .catch((error) => (
                        reject(error)
                    ));
            } else {
                resolve(null);
            }
        });        
    });
};