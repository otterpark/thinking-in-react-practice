import { useRef } from "react";

type CheckBoxField = {
  label : string;
}

export default function CheckBoxField({ label }: CheckBoxField) {
  const id = useRef(`checkbox-${label}`.replace('/ /g', '-').toLowerCase());
  return (
    <div>
      <input type="checkbox" id={id.current}/>
      <label htmlFor={id.current}>
        {label}
      </label>
    </div>
  )
}