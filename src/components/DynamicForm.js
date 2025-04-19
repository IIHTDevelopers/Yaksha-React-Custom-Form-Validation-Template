import React, { useState } from "react";

const formConfig = [
    { type: "text", label: "Full Name", name: "name", validation: { required: true }, value: "" },
    { type: "email", label: "Email", name: "email", validation: { required: true, email: true }, value: "" },
    { type: "number", label: "Age", name: "age", validation: { required: true, number: true }, value: "" },
    {
        type: "dropdown",
        label: "Gender",
        name: "gender",
        options: ["Male", "Female"],
        validation: { required: true },
        value: "",
    },
];

const DynamicForm = () => {
    return (
        <div></div>
    );
};

export default DynamicForm;
