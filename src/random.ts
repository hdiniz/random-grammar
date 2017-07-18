import { RequestParser as Parser } from './parser';
export function random(request: String): Array<any> {
  const parser = new Parser();
  const parseResult = parser.parse(request);
  return parseResult.generator.take(parseResult.count);
}
