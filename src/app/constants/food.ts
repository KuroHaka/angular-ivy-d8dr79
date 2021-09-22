export enum FoodType {
  DAIRY = 'dairy',
  CEREAL = 'cereal',
  LEGUME = 'legume',
  MEAT = 'meat',
  VEGETABLE = 'vegetable',
}

export interface Food {
  name: string;
  type: FoodType;
}

export interface ClassifiedFood extends Food {
  barcode: string;
}

// List of foods, adding only a sample, but this could be a long list
export const ALL_FOODS: Food[] = [
  { name: 'pea', type: FoodType.VEGETABLE },
  { name: 'yogurt', type: FoodType.DAIRY },
  { name: 'bean', type: FoodType.LEGUME },
  { name: 'lamb', type: FoodType.MEAT },
  { name: 'wheat', type: FoodType.CEREAL },
  { name: 'cream', type: FoodType.DAIRY },
  { name: 'chickpea', type: FoodType.LEGUME },
  { name: 'beef', type: FoodType.MEAT },
  { name: 'oat', type: FoodType.CEREAL },
  { name: 'carrot', type: FoodType.VEGETABLE },
  { name: 'tomato', type: FoodType.VEGETABLE },
];

export const genBarcode = () => Math.random().toString().substring(2);

export const isVegan = (f: Food) =>
  f.type !== FoodType.DAIRY && f.type !== FoodType.MEAT;
