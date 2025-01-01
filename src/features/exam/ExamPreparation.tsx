import React from 'react';
import { Brain } from 'lucide-react';
import SubjectSelector from '../../components/SubjectSelector';

export default function ExamPreparation() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <Brain className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-semibold">Exam Preparation</h2>
      </div>
      <SubjectSelector />
      <div className="grid md:grid-cols-2 gap-4">
        <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
          Generate Practice Quiz
        </button>
        <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
          Create Flashcards
        </button>
      </div>
    </div>
  );
}