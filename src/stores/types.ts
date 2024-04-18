export interface ErrorMessage {
  code: any;
  message: string;
}

export interface InventoryItem {
  id: number;
  name: string;
  image: string;
  rare: string;
}
export interface MissionItem {
  id: number;
  name: string;
  image: string;
  reward: number;
}
