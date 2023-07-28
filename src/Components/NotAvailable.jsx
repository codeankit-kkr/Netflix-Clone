import React from "react";

export default function NotAvailable({ type }) {
    return (
        <h1 className="not-available">
            No {type} avaialble for the selected genre. Please select a different
            genre.
        </h1>
    );
}
