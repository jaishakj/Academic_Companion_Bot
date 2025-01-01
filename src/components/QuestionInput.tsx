import React from 'react';

interface QuestionInputProps {
  placeholder: string;
}

export default function QuestionInput({ placeholder }: QuestionInputProps) {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition min-h-[120px]"
    />
  );
}