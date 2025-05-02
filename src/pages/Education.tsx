import React from 'react';
import PageTransition from '../components/PageTransition';
import TimelineItem from '../components/TimelineItem';
import { Award } from 'lucide-react';

const educationHistory = [
  {
    id: 1,
    title: '京都大学',
    subtitle: '工学部 情報学科',
    period: '2015年 - 2019年',
    description: '情報科学とソフトウェア工学を専攻。卒業研究では「ユーザーインターフェースの最適化に関する研究」に取り組み、優秀研究賞を受賞。',
  }
];

const Education: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-dark mb-10 text-center">学歴</h1>
        
        <div className="mb-12">
          <div className="relative">
            {educationHistory.map((education, index) => (
              <TimelineItem
                key={education.id}
                title={education.title}
                subtitle={education.subtitle}
                period={education.period}
                description={education.description}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-2">
            <Award size={24} className="text-primary" />
            <span>資格・認定</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-100 rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-dark mb-2">応用情報技術者</h3>
              <p className="text-gray-700">
                情報処理推進機構（IPA）認定の国家資格。ソフトウェア開発、データベース、ネットワークなど幅広い知識を証明。
              </p>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-dark mb-2">TOEIC 850点</h3>
              <p className="text-gray-700">
                ビジネスレベルの英語力を保有。国際的なプロジェクトやコミュニケーションにおいて活用しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Education;