import Generator from './Generator';
import { sampleSize } from 'lodash';

export default class ElementGenerator implements Generator {

  elems: Array<String>;
  constructor(elems: Array<String>) {
    this.elems = elems;
  }

  take(count: number): Array<String> {
    return sampleSize(this.elems, count);
  }
}
