import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import firebaseApp from './config';
import cookies from 'js-cookie';
import { createUserNode } from './database';



export const auth = getAuth(firebaseApp);

const setAccessToken = async (user) => {
    const token = await user.getIdToken();
    cookies.set('access_token', token)
}

export const signUp = (email, password, fullName, avatar) => {
    return new Promise((resolve, reject) =>
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (resp) => {
                createUserNode(resp.user.uid, fullName, avatar);
                setAccessToken(resp.user);
                await updateProfile(resp.user, {
                    displayName: fullName,
                    photoURL: avatar
                });
                resolve();
            })
            .catch(error => {
                console.log(error)
                reject()
            })
    );
}

export const login = (email, password,) => {
    return new Promise((resolve, reject) =>
        signInWithEmailAndPassword(auth, email, password)
            .then(async (resp) => {
                setAccessToken(resp.user);
                resolve();
            })
            .catch(error => {
                console.log('Error', error);
                reject();
            })
    );
}

export const logout = () => {
    return signOut(auth);
};


export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(observer => {
            try {
                resolve(observer)
            } catch (error) {
                reject(error);
            }
        });
    });
}

