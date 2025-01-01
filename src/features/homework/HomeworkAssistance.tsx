import React from 'react';
import { BookOpen } from 'lucide-react';
import SubjectSelector from '../../components/SubjectSelector';
import QuestionInput from '../../components/QuestionInput';

export default function HomeworkAssistance() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <BookOpen className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-semibold">Homework Help</h2>
      </div>
      <SubjectSelector />
      <QuestionInput placeholder="Describe your homework question..." />
    </div>
  );
}