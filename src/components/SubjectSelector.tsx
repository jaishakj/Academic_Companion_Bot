import React from 'react';
import { subjects } from '../utils/constants';

export default function SubjectSelector() {
  return (
    <div className="flex flex-wrap gap-3">
      {subjects.map((subject) => (
        <button
          key={subject}
          className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition"
        >
          {subject}
        </button>
      ))}
    </div>
  );
}