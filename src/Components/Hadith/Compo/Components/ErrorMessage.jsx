// src/components/ErrorMessage.jsx
import React from "react";

export const ErrorMessage = ({ message }) => (
  <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-2xl text-[11px] text-center">
    {message}
  </div>
);