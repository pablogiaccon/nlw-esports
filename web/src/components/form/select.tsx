import * as PrimitiveSelect from "@radix-ui/react-select";
import { CaretDown, CaretUp } from "phosphor-react";
import { FieldError } from "react-hook-form";

interface Options {
  value: string;
  label: string;
}

interface Props {
  title?: string;
  name: string;
  mandatory?: boolean;
  options: Options[];
  placeholder?: string;
  onSelect(value: string): void;
  error?: FieldError;
}

const Select = ({
  title,
  name,
  mandatory,
  placeholder,
  options,
  onSelect,
  error,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {!!title && (
        <label htmlFor={name} className="font-semibold flex gap-1">
          {title} {mandatory && <span className="text-red-600">*</span>}
        </label>
      )}

      <PrimitiveSelect.Root onValueChange={onSelect}>
        <PrimitiveSelect.Trigger
          className={`bg-zinc-900 py-3 px-4 rounded flex items-center justify-between text-sm [&[data-placeholder]]:text-zinc-500 border-2 ${
            !!error ? "border-red-600" : "border-transparent"
          }`}
        >
          <PrimitiveSelect.Value placeholder={placeholder} />
          <PrimitiveSelect.Icon>
            <CaretDown size={20} weight="bold" className="text-zinc-400" />
          </PrimitiveSelect.Icon>
        </PrimitiveSelect.Trigger>

        <PrimitiveSelect.Portal>
          <PrimitiveSelect.Content className="overflow-hidden bg-zinc-900 rounded relative">
            <PrimitiveSelect.ScrollUpButton className="flex items-center justify-center p-2">
              <CaretUp size={20} className="text-white" />
            </PrimitiveSelect.ScrollUpButton>

            <PrimitiveSelect.Viewport>
              {options.map(({ label, value }) => (
                <div key={value}>
                  <PrimitiveSelect.Item
                    key={value}
                    value={value}
                    className="flex items-center py-2 px-4 text-zinc-300 cursor-pointer [&[data-highlighted]]:bg-violet-400 [&[data-state=checked]]:bg-violet-400 [&[data-highlighted]]:text-white [&[data-state=checked]]:text-white"
                  >
                    <PrimitiveSelect.ItemText>{label}</PrimitiveSelect.ItemText>
                  </PrimitiveSelect.Item>
                  <PrimitiveSelect.Separator className="h-[1px] bg-zinc-700" />
                </div>
              ))}
            </PrimitiveSelect.Viewport>
            <PrimitiveSelect.ScrollDownButton className="flex items-center justify-center p-2">
              <CaretDown size={20} className="text-white" />
            </PrimitiveSelect.ScrollDownButton>
          </PrimitiveSelect.Content>
        </PrimitiveSelect.Portal>
      </PrimitiveSelect.Root>

      {error && <span className="text-red-600 text-xs">{error.message}</span>}
    </div>
  );
};

export { Select };
