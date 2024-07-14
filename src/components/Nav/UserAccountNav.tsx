"use client"
import React from 'react';
import {signOut} from "next-auth/react";

const UserAccountNav = () => {
    return (
        <div>
            <button onClick={() => signOut()}
                    type="button"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
                Sign Out
            </button>
        </div>
    );
};

export default UserAccountNav;