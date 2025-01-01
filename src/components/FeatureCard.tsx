import React from 'react';
import { LucideIcon } from 'lucide-react';
import { BookOpen, Brain, Search, Shield, GraduationCap } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  homework: BookOpen,
  exam: Brain,
  doubt: Search,
  plagiarism: Shield,
  career: GraduationCap
};

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  path: string;
}

function FeatureCard({ id, title, description }: FeatureCardProps) {
  const Icon = iconMap[id];

  return (
    <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300">
      {Icon && <Icon className="w-8 h-8 mb-4 text-indigo-600" />}
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;