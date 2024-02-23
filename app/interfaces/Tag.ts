export interface Tag {
  id: string;
  name: string;
  isLevelAvailable: boolean;
}

export interface TagWithLevel extends Tag {
  level: number;
}

export interface TagPayload {
  id: string;
  level: number;
}
