export interface ErrorMessage {
  code: any;
  message: string;
}

export interface UserType {
  id: 1;
  name: string;
  created_at: string;
  updated_at: string;
  telegraph_chat_id: number;
  chat_id: number;
  lang: string;
  coins: number;
  claim_at: string;
  level_time: number;
  level_speed: number;
  next_claim_at: string;
  claim_hours: number;
  count_in_hour: number;
}

export interface MissionItemType {
  id: number;
  name: string;
  image: string;
  reward: number;
  completed: boolean;
}

export interface BoostItemType {
  id: number;
  type: string;
  image: string;
  name: string;
  description: string;
  price: string;
  level: string;
  next_level: string;
  current: string;
  next_current: string;
}
