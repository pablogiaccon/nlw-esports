import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { FieldError } from "react-hook-form";

import { WEEK_DAYS } from "@/helpers/week-day";

interface Props {
  value: string[];
  onSelect(weekDays: string[]): void;
  error?: FieldError;
}

const SelectWeekDay = ({ value, onSelect, error }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="weekDays">
        Quando costuma jogar? <span className="text-red-600">*</span>
      </label>

      <ToggleGroup.Root
        type="multiple"
        className="grid grid-cols-7 gap-1"
        value={value}
        onValueChange={onSelect}
      >
        {WEEK_DAYS.map((day) => (
          <ToggleGroup.Item
            key={day.value}
            value={day.value}
            title={day.title}
            className="h-8 w-7 rounded bg-zinc-900 [&[data-state=on]]:bg-violet-500"
          >
            {day.text}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
      {error && <span className="text-red-600 text-xs">{error.message}</span>}
    </div>
  );
};

export { SelectWeekDay };
