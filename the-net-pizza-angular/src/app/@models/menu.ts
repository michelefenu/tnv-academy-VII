export interface Piatto {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  ingredients: string[];
  available: boolean;
  allergens: string[];
  nutritionalValues: NutritionalValues;
}

export interface NutritionalValues {
  kcal: string;
  totalFat: string;
  saturatedFat: string;
  cholesterol: string;
  carbohydrate: string;
  sodium: string;
  protein: string;
}
