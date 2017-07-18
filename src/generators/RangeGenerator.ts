import Generator from './Generator';

function random(lower: number, upper: number): number {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

export default class RangeGenerator implements Generator {

  lower: number;
  upper: number;
  constructor(lower: number, upper: number) {
    this.lower = lower;
    this.upper = upper;
  }

  take(count: number): Array<number> {
    if (this.lower == this.upper) {
      return [];
    }

    count = Math.min(count, 100);
    const last = this.upper - this.lower;
    let i = 0;
    const array: Array<number> = [];
    const map: any = {};
    while (i < count) {
      const pick = random(i, last);

      if (map[pick] != null) {
        array[i] = map[pick] + this.lower;
      } else {
        array[i] = pick + this.lower;
      }

      if (map[i] != null) {
        map[pick] = map[i];
        delete map[i];
      } else {
        map[pick] = i;
      }
      i++;
      if (i == last + 1) break;
    }

    return array;
  }
}
