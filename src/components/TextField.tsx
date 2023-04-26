import React, { useState } from "react";

type TextFieldProps = {
  filterText: string;
  placeholder: string;
  setFilterText: (value: string) => void;
}

export default function TextField({
  filterText, placeholder, setFilterText
}: TextFieldProps) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  }
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}/>
    </div>
  )
}
