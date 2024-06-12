export class TagProperty {
  constructor(
    readonly key: string,
    readonly value: string,
    readonly type: string
  ) {
    if (this.isInvalidKey(key)) throw new Error('Invalid property key');
    if (this.isInvalidValue(value)) throw new Error('Invalid property value');
    if (this.isInvalidType(type)) throw new Error('Invalid property type');
  }

  isInvalidKey(value: string): boolean {
    return value.trim().length === 0;
  }

  isInvalidValue(value: string): boolean {
    return value.trim().length === 0;
  }

  isInvalidType(value: string): boolean {
    const validTypes = ['text', 'number', 'date'];
    return !validTypes.includes(value);
  }
}
