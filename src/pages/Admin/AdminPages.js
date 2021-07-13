import React from 'react';
import AdminSignin from '../../components/admin/signin/AdminSignin';
import AdminIndex from "../../components/admin/index/AdminIndex";

export default function AdminPages() {
    return(
        <>
            {localStorage.getItem("logged") === "true" ? (
                <>
                    <AdminIndex />
                </>
            ) : (
                <>
                    <AdminSignin />
                </>
            )}
        </>
    )
}