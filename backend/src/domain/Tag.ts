import { randomUUID } from 'crypto';
import { TagName } from './TagName';
import { TagProperty } from './TagProperty';

export class Tag {
  id: string;
  parentId: string | null;
  name: string;
  description?: string;
  properties: TagProperty[];

  constructor(
    id: string,
    parentId: string | null,
    name: string,
    properties: TagProperty[]
  ) {
    this.id = id;
    this.parentId = parentId;
    this.name = name;
    this.properties = properties;
  }

  static create(
    name: string,
    properties: { key: string; value: string; type: string }[]
  ): Tag {
    const id = randomUUID();
    const tagProperties = properties.map(
      (prop) => new TagProperty(prop.key, prop.value, prop.type)
    );
    return new Tag(id, null, name, tagProperties);
  }

  static restore(
    id: string,
    parentId: string | null,
    name: string,
    properties: { key: string; value: string; type: string }[]
  ): Tag {
    const tagProperties = properties.map(
      (prop) => new TagProperty(prop.key, prop.value, prop.type)
    );
    return new Tag(id, parentId, name, tagProperties);
  }

  addProperty(key: string, value: string, type: string) {
    const property = new TagProperty(key, value, type);
    this.properties.push(property);
  }
}
