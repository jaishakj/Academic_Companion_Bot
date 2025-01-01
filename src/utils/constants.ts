export const subjects = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'History',
  'Literature',
  'Computer Science'
];

export const features = [
  {
    id: 'homework',
    title: 'Homework Assistance',
    description: 'Get step-by-step solutions and detailed explanations',
    path: '/homework'
  },
  {
    id: 'exam',
    title: 'Exam Preparation',
    description: 'Access personalized study materials and practice tests',
    path: '/exam'
  },
  {
    id: 'doubt',
    title: 'Doubt Resolution',
    description: 'Get instant answers to your academic questions',
    path: '/doubt'
  },
  {
    id: 'plagiarism',
    title: 'Plagiarism Checker',
    description: 'Verify the originality of your work',
    path: '/plagiarism'
  },
  {
    id: 'career',
    title: 'Career Guidance',
    description: 'Discover educational and career opportunities',
    path: '/career'
  }
] as const;