import React from 'react';
import { isLoggedInAtom } from "../state/authAtoms";
import {useAtom} from "jotai";

export default function Login () {
    const [loggedInAtom, setLoggedInAtom] = useAtom(isLoggedInAtom);
    return (
        <div>
            Login Screen

            <button onClick={() => {
                setLoggedInAtom(true);
            }}>Login</button>
        </div>
    )
}
