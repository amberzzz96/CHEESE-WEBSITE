import { Cheese, QuizQuestion } from './types';

export const CHEESE_DATA: Cheese[] = [
  {
    id: 1,
    name: '布里德莫起司',
    pronunciation: 'bree duh moh',
    mainImage: 'https://i.meee.com.tw/Wt3dj9V.jpg',
    country: '法國',
    region: '法蘭西島',
    type: '軟質',
    texture: '奶油般、滑順、柔軟',
    flavor: '溫和、帶有果香，以及一絲蘑菇和杏仁的風味',
    pairing: '香檳、硬皮法棍麵包、無花果、蜂蜜',
    description: '被譽為「起司皇后」，布里德莫起司是一種柔軟熟成的起司，擁有細膩的白色外皮。',
    story: '作為最著名的法國起司之一，其歷史可追溯至八世紀。它在1815年的維也納會議上被加冕為「起司之王」，聞名遐邇。',
    gallery: ['https://i.meee.com.tw/roSzonB.jpg', 'https://i.meee.com.tw/5PCRVD7.jpg']
  },
  {
    id: 2,
    name: '切達起司',
    mainImage: 'https://i.meee.com.tw/8zw8OZD.jpg',
    country: '英國',
    region: '薩默塞特郡',
    type: '硬質',
    texture: '質地堅實、緊密，熟成後可能變得易碎',
    flavor: '風味從溫和奶香到濃郁、帶堅果味且層次豐富',
    pairing: '卡本內蘇維濃紅酒、蘋果、核桃、酸辣醬',
    description: '一種用途廣泛且全球流行的起司，源自英國的切達村。',
    story: '切達起司的生產至少可以追溯到12世紀。其獨特的「切達化」過程，涉及堆疊和翻轉凝乳塊，賦予了它獨特的緊實質地。',
    gallery: ['https://i.meee.com.tw/roSzonB.jpg', 'https://i.meee.com.tw/5PCRVD7.jpg']
  },
  {
    id: 3,
    name: '帕瑪森雷吉亞諾起司',
    pronunciation: 'pahr-mee-JAH-noh reh-JAH-noh',
    mainImage: 'https://i.meee.com.tw/5PCRVD7.jpg',
    country: '義大利',
    region: '艾米利亞-羅馬涅和倫巴底',
    type: '硬質',
    texture: '質地堅硬、顆粒狀、有結晶體',
    flavor: '堅果味、鹹香、果香，並帶有濃郁的鮮味',
    pairing: '義式生火腿、巴薩米克醋、藍布思珂紅酒',
    description: '「起司之王」，這是一個受法律保護的稱號，專指在義大利特定省份生產的起司。',
    story: '擁有近千年的歷史，帕瑪森雷吉亞諾至今仍使用相同的傳統方法和原料製作：牛奶、鹽和凝乳酶。',
    gallery: ['https://i.meee.com.tw/roSzonB.jpg', 'https://i.meee.com.tw/8zw8OZD.jpg']
  },
  {
    id: 4,
    name: '高達起司',
    pronunciation: 'GOW-duh',
    mainImage: 'https://i.meee.com.tw/roSzonB.jpg',
    country: '荷蘭',
    region: '南荷蘭省',
    type: '半硬質',
    texture: '年輕時有彈性且柔軟，熟成後變得堅實並帶有結晶',
    flavor: '年輕時溫和且有奶油味，隨著熟成會發展出焦糖和奶油糖的風味',
    pairing: '啤酒、芥末、黑麥麵包、葡萄',
    description: '全球最受歡迎的起司之一，以荷蘭城市高達命名。',
    story: '歷史上，荷蘭農民會將他們的起司帶到高達的市場進行稱重和銷售。這個傳統至今仍在延續，使其成為荷蘭文化的象徵。',
    gallery: ['https://i.meee.com.tw/Wt3dj9V.jpg', 'https://i.meee.com.tw/8zw8OZD.jpg']
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "您通常如何享用咖啡或茶？",
    image: "https://i.meee.com.tw/OP746NX.jpg",
    options: [
      { text: "黑咖啡或無糖茶", value: "濃郁且大膽" },
      { text: "加奶和糖", value: "溫和且奶香濃郁" },
      { text: "花草茶或果茶", value: "細膩且層次豐富" },
    ],
    key: "intensity"
  },
  {
    id: 2,
    question: "選擇您理想中的麵包。",
    image: "https://i.meee.com.tw/Sh3WjAM.jpg",
    options: [
      { text: "柔軟的奶油布里歐", value: "柔軟易塗抹" },
      { text: "紮實的酸種麵包", value: "堅實易切片" },
      { text: "厚實易碎的玉米麵包", value: "易碎且濃郁" },
    ],
    key: "texture"
  },
  {
    id: 3,
    question: "這是為了什麼場合？",
    image: "https://i.meee.com.tw/9xBX4Z7.jpg",
    options: [
      { text: "正式的晚宴派對", value: "優雅且令人印象深刻" },
      { text: "與朋友的休閒野餐", value: "百搭且方便食用" },
      { text: "療癒的獨享點心", value: "療癒且令人滿足" },
    ],
    key: "occasion"
  }
];
