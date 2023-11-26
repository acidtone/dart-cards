export type Card = {
  label: string,
  level: 'grey' | `green` | `yellow` | `red` | 'goat',
  type: 'boolean' | 'three' | 'nine',
  quantity: number,
  weight: number
}