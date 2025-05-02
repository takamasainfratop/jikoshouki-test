import React from 'react';
import PageTransition from '../components/PageTransition';
import SkillBar from '../components/SkillBar';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary-dark mb-6">田中一郎</h1>
          <p className="text-xl sm:text-2xl mb-6 text-gray-700 leading-relaxed">
            経験豊富なWebエンジニアとして、高品質なフロントエンド開発に取り組んでいます。
            Reactを用いた効率的な開発と、チームリーダーとしてのマネジメント経験を活かし、
            ユーザー体験の向上に貢献しています。
          </p>
          <p className="text-lg sm:text-xl text-primary italic mb-12">
            "技術とコミュニケーションで、最高のユーザー体験を創造します"
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary-dark mb-8 pb-2 border-b-2 border-primary-light">スキル</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <div className="mb-8 md:mb-0">
              <SkillBar name="Java" percentage={80} delay={0.1} />
              <SkillBar name="React.js" percentage={95} delay={0.2} />
              <SkillBar name="TypeScript" percentage={90} delay={0.3} />
            </div>
            <div>
              <SkillBar name="Python" percentage={75} delay={0.4} />
              <SkillBar name="SQL" percentage={85} delay={0.5} />
              <SkillBar name="C#" percentage={70} delay={0.6} />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            to="/work-history" 
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg transition-colors duration-300"
          >
            職務経歴を見る
            <ChevronRight size={18} />
          </Link>
          <Link 
            to="/education" 
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border border-primary py-3 px-6 rounded-lg transition-colors duration-300"
          >
            学歴を見る
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;