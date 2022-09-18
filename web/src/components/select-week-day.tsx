import { useState } from "react";

import { WeekDay, WEEK_DAYS } from "@/helpers/week-day";

const SelectWeekDay = () => {
  const [selectedWeekDay, setSelectedWeekDay] = useState<WeekDay[]>([]);

  function handleSelect(day: WeekDay) {
    const isSelected = selectedWeekDay.some((item) => item.value === day.value);

    if (isSelected) {
      const filteredSelectedWeekDay = selectedWeekDay.filter(
        (item) => item.value !== day.value
      );
      setSelectedWeekDay(filteredSelectedWeekDay);
    } else {
      setSelectedWeekDay((prevState) => [...prevState, day]);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="weekDays">
        Quando costuma jogar? <span className="text-red-600">*</span>
      </label>

      <div className="grid grid-cols-7 gap-1">
        {WEEK_DAYS.map((day) => (
          <button
            key={day.value}
            type="button"
            className={`h-8 w-7 rounded ${
              selectedWeekDay.includes(day) ? `bg-violet-500` : ` bg-zinc-900`
            }`}
            title={day.title}
            onClick={() => handleSelect(day)}
          >
            {day.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export { SelectWeekDay };
