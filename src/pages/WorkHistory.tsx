import React from 'react';
import PageTransition from '../components/PageTransition';
import TimelineItem from '../components/TimelineItem';

const workExperiences = [
  {
    id: 1,
    title: 'ABCテック株式会社',
    subtitle: 'Webエンジニア',
    period: '2020年 - 現在',
    description: 'フロントエンド開発（React, TypeScript）を担当。月間CV率を20%改善。チームリーダーとして3名のメンバーを指導し、プロジェクト納期を常に遵守。顧客満足度向上に貢献。',
  }
];

const WorkHistory: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-dark mb-10 text-center">職務経歴</h1>
        
        <div className="mb-12">
          <div className="relative">
            {workExperiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                title={experience.title}
                subtitle={experience.subtitle}
                period={experience.period}
                description={experience.description}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <div className="bg-primary-light bg-opacity-10 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">スキルと専門知識</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">技術スキル</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>React.js / TypeScript / JavaScript</li>
                <li>HTML5 / CSS3 / Tailwind CSS</li>
                <li>RESTful API 設計と実装</li>
                <li>状態管理 (Redux, Context API)</li>
                <li>ユニットテスト・結合テスト</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">プロジェクト経験</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>ECサイトのフロントエンド開発</li>
                <li>企業向け業務アプリケーション開発</li>
                <li>既存システムのモダナイズ</li>
                <li>チームリーダーとしての開発マネジメント</li>
                <li>ユーザビリティテストの実施</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default WorkHistory;