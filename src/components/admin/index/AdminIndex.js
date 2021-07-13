import React from 'react';

export default function AdminIndex() {
    const user = JSON.parse(localStorage.getItem("user"));
    return(
        <>
            <p>Hello {user.name} {user.surname}</p>
        </>
    )
}