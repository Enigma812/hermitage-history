export function trackBy(property: string): (index: number, entity: any) => any {
  return (index, entity: any) => entity && entity[property] ? entity[property] : undefined;
}
