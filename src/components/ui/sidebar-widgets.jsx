"use client";

import { useMemo, useState } from "react";
import { bnMonths, bnWeekdays, getCalendarMatrix, toBnDigits } from "@/lib/utils";

function Calendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const weeks = useMemo(() => getCalendarMatrix(year, month), [year, month]);

  const years = Array.from({ length: 7 }, (_, i) => today.getFullYear() - 3 + i);

  return (
    <div className="border rounded-xl p-3 bg-white dark:bg-gray-800">
      <div className="flex items-center gap-2 mb-3">
        <select
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          className="font-bengali border rounded px-2 py-1 text-sm bg-white dark:bg-gray-900"
        >
          {years.map((y) => (
            <option key={y} value={y} className="font-bengali">{toBnDigits(y)}</option>
          ))}
        </select>
        <select
          value={month}
          onChange={(e) => setMonth(parseInt(e.target.value))}
          className="font-bengali border rounded px-2 py-1 text-sm bg-white dark:bg-gray-900"
        >
          {bnMonths.map((m, i) => (
            <option key={m} value={i} className="font-bengali">{m}</option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden">
        <table className="w-full text-center">
          <thead>
            <tr className="border-b">
              {bnWeekdays.map((d) => (
                <th key={d} className="font-bengali py-2 text-sm">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((row, rIdx) => (
              <tr key={rIdx}>
                {row.map((cell, cIdx) => {
                  const isToday =
                    year === today.getFullYear() &&
                    month === today.getMonth() &&
                    cell.otherMonth === 0 &&
                    cell.day === today.getDate();
                  return (
                    <td
                      key={`${rIdx}-${cIdx}`}
                      className={`font-bengali py-2 text-sm ${
                        cell.otherMonth !== 0 ? "text-gray-400" : "text-gray-900 dark:text-gray-100"
                      } ${isToday ? "text-green-600 font-bold" : ""}`}
                    >
                      {toBnDigits(cell.day)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function SidebarWidgets() {
  return (
    <aside className="space-y-6">
      <Calendar />
      <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
        <h3 className="font-bengali font-bold mb-3">Social Media</h3>
        <div className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
          <a href="#" className="hover:text-primary">Facebook</a>
          <a href="#" className="hover:text-primary">Twitter</a>
          <a href="#" className="hover:text-primary">YouTube</a>
        </div>
      </div>
    </aside>
  );
}


