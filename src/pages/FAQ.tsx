import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: '現在の主な業務内容を教えてください。',
    answer: 'ABCテック株式会社でWebエンジニアとして、主にReactとTypeScriptを使用したフロントエンド開発を担当しています。チームリーダーとして3名のメンバーを指導しながら、月間CV率の20%改善など、具体的な成果を上げています。'
  },
  {
    id: 2,
    question: '技術スキルの中で最も得意な領域は何ですか？',
    answer: 'React.jsが最も得意な技術です。現在の業務でも活用しており、95%の習熟度を持っています。次いでTypeScriptも90%の習熟度があり、型安全な開発を心がけています。'
  },
  {
    id: 3,
    question: '大学時代はどのような研究をされていましたか？',
    answer: '京都大学工学部情報学科で、ユーザーインターフェースの最適化に関する研究を行い、優秀研究賞を受賞しました。この経験は現在のフロントエンド開発業務にも活かされています。'
  },
  {
    id: 4,
    question: '英語力はどの程度お持ちですか？',
    answer: 'TOEIC 850点を取得しており、ビジネスレベルの英語力があります。この英語力は、国際的なプロジェクトやコミュニケーションの場面で活用しています。'
  },
  {
    id: 5,
    question: '仕事とプライベートの両立はどのように図っていますか？',
    answer: '週に2回程度の3on3バスケットボール、週末の釣り、日々の読書など、趣味の時間を確保することで、心身のリフレッシュを図っています。これらの活動が仕事の生産性向上にも繋がっています。'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const FAQ: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-dark mb-6 flex items-center justify-center gap-3">
            <HelpCircle className="text-primary" size={36} />
            よくある質問
          </h1>
          <p className="text-lg text-gray-700">
            私のキャリアや経験についてよくいただく質問をまとめました。
          </p>
        </div>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              variants={item}
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-primary-dark mb-4 flex items-start gap-3">
                  <span className="text-primary">Q.</span>
                  {faq.question}
                </h2>
                <div className="pl-7">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default FAQ;