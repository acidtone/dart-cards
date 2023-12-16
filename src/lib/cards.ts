import type { Card } from './game-types' 

export const cards: Card[] = [
  {
    label: '3 of a Kind',
    level: 'green',
    type: 'three',
    quantity: 4,
    weight: 2,
    instructions: 'One 3-of-a-Kind: 3 Singles OR Double and Single OR 1 Triple, of the same number. Multiple 3-of-a-Kind scores must be on different numbers (i.e. a 6-of-a-Kind is NOT two 3-of-a-Kind).'
  },
  {
    label: 'Any Pair',
    level: 'green',
    type: 'three',
    quantity: 4,
    weight: 2,
    instructions: 'One Pair: 2 Singles OR 1 Double OR 1 Triple (a Triple counts as 1 Pair). Multiple scored Pairs must be on different numbers (i.e. a 4-of-a-Kind is NOT two Pairs).'
  },
  {
    label: 'Triple',
    level: 'green',
    type: 'three',
    quantity: 4,
    weight: 2,
    instructions: 'Score any Triple. Multiple Triples can be on the same number.'
  },
  {
    label: 'Double',
    level: 'green',
    type: 'three',
    quantity: 4,
    weight: 2,
    instructions: 'Score any Double. Multiple Doubles can be on the same number.'
  },
  {
    label: 'Any Run',
    level: 'green',
    type: 'boolean',
    quantity: 4,
    weight: 2,
    instructions: 'Any sequence of 1, 2, 3 OR 5, 6, 7 OR 15, 16, 17... etc. Numbers can be shot in any order.'
  },
  {
    label: '4 of a Kind',
    level: 'yellow',
    type: 'boolean',
    quantity: 4,
    weight: 3,
    instructions: 'Any combination of Singles, Doubles or Triples to score 4-of-a-Kind on a single number.'
  },
  {
    label: 'Double 6',
    level: 'yellow',
    type: 'three',
    quantity: 1,
    weight: 3,
    instructions: 'Score up to three Double 6s.'
  },
  {
    label: 'Double 11',
    level: 'yellow',
    type: 'three',
    quantity: 1,
    weight: 3,
    instructions: 'Score up to three Double 11s.'
  },
  {
    label: 'Triple 20',
    level: 'yellow',
    type: 'three',
    quantity: 1,
    weight: 3,
    instructions: 'Score up to three Triple 20s.'
  },
  {
    label: 'Triple 3',
    level: 'yellow',
    type: 'three',
    quantity: 1,
    weight: 3,
    instructions: 'Score up to three Triple 3s.'
  },
  {
    label: 'Outer Bull',
    level: 'yellow',
    type: 'three',
    quantity: 2,
    weight: 3,
    instructions: 'Score up to three Outer Bulls.'
  },
  {
    label: 'Full House',
    level: 'red',
    type: 'boolean',
    quantity: 2,
    weight: 4,
    instructions: 'Any combination of Singles, Doubles and Triples to score 3 of one number and 2 of another number.'
  },
  {
    label: '5 of a Kind',
    level: 'red',
    type: 'boolean',
    quantity: 2,
    weight: 4,
    instructions: 'Any combination of Singles, Doubles and Triples to score 5 of any one number.'
  },
  {
    label: 'Two Pair',
    level: 'red',
    type: 'boolean',
    quantity: 2,
    weight: 4,
    instructions: 'Score any pair on two different numbers.'
  },
  {
    label: '61 Points',
    level: 'red',
    type: 'boolean',
    quantity: 1,
    weight: 4,
    instructions: 'Score any combination of numbers to add up to 61 points (not over). You do not have to throw all three darts.'
  },
  {
    label: '100 Points',
    level: 'red',
    type: 'boolean',
    quantity: 1,
    weight: 4,
    instructions: 'Score any combination of numbers to add up to 100 points (not over). You do not have to throw all three darts.'
  },
  {
    label: 'Inner Bull',
    level: 'goat',
    type: 'three',
    quantity: 1,
    weight: 5,
    instructions: 'Score up to three Inner Bulls.'
  },
  {
    label: 'One',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 1s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Two',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 2s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Three',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 3s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Four',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 4s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Five',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 5s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Six',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 6s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Seven',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 7s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Eight',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 8s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Nine',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 9s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Ten',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 10s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Eleven',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 11s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Twelve',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 12s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Thirteen',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 13s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Fourteen',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 14s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Fifteen',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 15s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Sixteen',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 16s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Seventeen',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 17s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Eighteen',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 18s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Nineteen',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 19s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  },
  {
    label: 'Twenty',
    level: 'grey',
    type: 'nine',
    quantity: 1,
    weight: 1,
    instructions: 'Score as many 20s as you can, including Singles, Doubles and Triples. Max score: 3 Triples for 9 points.'
  }
]