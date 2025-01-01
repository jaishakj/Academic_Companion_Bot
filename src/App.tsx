import React from 'react';
import Header from './components/Header';
import FeatureCard from './components/FeatureCard';
import { features } from './utils/constants';
import HomeworkAssistance from './features/homework/HomeworkAssistance';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Personal Academic Assistant
          </h1>
          <p className="text-xl text-gray-600">
            Empowering students with AI-powered learning support
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              {...feature}
            />
          ))}
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8">
          <HomeworkAssistance />
        </section>
      </main>
    </div>
  );
}

export default App;