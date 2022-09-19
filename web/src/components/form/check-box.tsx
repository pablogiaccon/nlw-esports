import * as PrimitiveCheckbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

interface Props {
  label: string;
  onCheck(checked: boolean | "indeterminate"): void;
}

const Checkbox = ({ label, onCheck }: Props) => {
  return (
    <label
      htmlFor="checkbox"
      className="mt-2 flex gap-2 text-sm items-center cursor-pointer max-w-max"
    >
      <PrimitiveCheckbox.Root
        id="checkbox"
        className="w-6 h-6 p-1 rounded bg-zinc-900"
        onCheckedChange={onCheck}
      >
        <PrimitiveCheckbox.Indicator>
          <Check className="w-4 h-4 text-emerald-400" />
        </PrimitiveCheckbox.Indicator>
      </PrimitiveCheckbox.Root>

      {label}
    </label>
  );
};

export { Checkbox };
