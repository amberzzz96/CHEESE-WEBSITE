
export interface Cheese {
  id: number;
  name: string;
  pronunciation?: string;
  mainImage: string;
  country: string;
  region: string;
  type: string;
  texture: string;
  flavor: string;
  pairing: string;
  description: string;
  story: string;
  gallery: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  image?: string;
  options: {
    text: string;
    value: string;
  }[];
  key: string;
}
