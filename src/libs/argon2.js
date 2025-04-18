//This file will be create to centralize the code of encrypting the password and
//Doing the verification
//Doing in this way, eases the code maintenance
import argon2 from "argon2";

export async function verify(hash, password) {
    try {
        return argon2.verify(hash, password)
    } catch (error) {
        console.log(error);
        return false
    }
}

export async function hash(password) {
    try {
        return argon2.hash(password)
    } catch (error) {
        console.log(error);
        return false
    }
}