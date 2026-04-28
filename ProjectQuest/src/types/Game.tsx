export type Hero = {
  name: string
  level: number
  xp: number
  hp: number
  balance: number
}

export type Boss = {
  id: string
  name: string
  maxHp: number
  currentHp: number
}

export type Quest = {
  id: string
  title: string
  damage: number
  reward: number
}