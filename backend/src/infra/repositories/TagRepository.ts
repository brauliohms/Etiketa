import TagsRepository from '../../application/repositories/TagRepository';
import { Tag } from '../../domain/Tag';
import { TagProperty } from '../../domain/TagProperty';
import { KnexDatabase } from '../database/knex/KnexDatabase';

export class KnexTagsRepository implements TagsRepository {
  private knex = KnexDatabase.getInstance();

  async create(tag: Tag): Promise<void> {
    const tagData = {
      id: tag.id,
      parent_id: tag.parentId,
      name: tag.name,
    };

    await this.knex('tags').insert(tagData);

    for (const prop of tag.properties) {
      await this.knex('tags_properties').insert({
        tag_id: tag.id,
        key: prop.key,
        value: prop.value,
        type: prop.type,
      });
    }
  }

  async findById(id: string): Promise<Tag | undefined> {
    const tagData = await this.knex('tags').where({ id }).first();
    if (!tagData) return undefined;
    const propertiesData = await this.knex('tags_properties').where({
      tag_id: id,
    });
    const properties = propertiesData.map(
      (prop) => new TagProperty(prop.key, prop.value, prop.type)
    );
    return Tag.restore(tagData.id, tagData.parent_id, tagData.name, properties);
  }

  update(id: string, data: Partial<Tag>): Promise<Tag | undefined> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
