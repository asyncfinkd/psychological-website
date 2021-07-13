import React, { useState } from 'react';

export default function AdminIndex() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    return(
        <>
            <p>Hello {user.name} {user.surname}</p>
        </>
    )
}