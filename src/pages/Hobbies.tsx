import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const hobbies = [
  {
    id: 'fishing',
    title: '釣り',
    description: '東京湾岸エリアでのバス釣りが特に好きです。自然の中でリラックスしながら、忍耐と集中力を養っています。週末には友人と釣り旅行に出かけることもあります。',
    imageUrl: 'https://images.pexels.com/photos/5560911/pexels-photo-5560911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: '湖の岸辺で釣り竿を持つ人物のシルエット。朝日が水面に反射し、穏やかな雰囲気を醸し出している。',
  },
  {
    id: 'reading',
    title: '読書',
    description: '自己啓発書からファンタジー小説まで幅広いジャンルを読みます。特に好きな作家は東野圭吾と村上春樹です。読書を通じて想像力を鍛え、新しい視点を得ることができます。',
    imageUrl: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: '積み重ねられた古書と開かれた本。ページがわずかにめくれており、読書の雰囲気を感じさせる構図。',
  },
  {
    id: 'basketball',
    title: 'バスケットボール',
    description: '社会人チームで3on3のバスケを楽しんでいます。チームワークとスポーツマンシップを大切にし、週に2回程度練習しています。身体を動かすことでリフレッシュし、仕事の生産性向上にも役立てています。',
    imageUrl: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'バスケットボールコートでシュートを打とうとしているプレイヤー。ゴールとネットが背景に見える動きのある一瞬を捉えた写真。',
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Hobbies: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-dark mb-10 text-center">趣味</h1>
        
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          仕事以外でも様々な活動を通じて充実した時間を過ごしています。
          これらの趣味は、新しい視点やアイデアを生み出す源となっています。
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {hobbies.map((hobby) => (
            <motion.div 
              key={hobby.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              variants={item}
            >
              <img 
                src={hobby.imageUrl} 
                alt={hobby.imageAlt}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-dark mb-3">{hobby.title}</h3>
                <p className="text-gray-700">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Hobbies;