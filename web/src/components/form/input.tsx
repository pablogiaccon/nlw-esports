import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  name: string;
  mandatory?: boolean;
  error?: FieldError;
}

const Input = ({ mandatory = false, name, title, error, ...rest }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {!!title && (
        <label htmlFor={name} className="font-semibold flex gap-1">
          {title} {mandatory && <span className="text-red-600">*</span>}
        </label>
      )}
      <input
        id={name}
        type="text"
        className={`bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 border-2 ${
          !!error ? "border-red-600" : "border-transparent"
        }`}
        {...rest}
        value={rest.value || ""}
      />
      {error && <span className="text-red-600 text-xs">{error.message}</span>}
    </div>
  );
};

export { Input };
