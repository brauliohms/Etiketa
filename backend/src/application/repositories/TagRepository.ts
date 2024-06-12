import { Tag } from '../../domain/Tag';

export default interface TagsRepository {
  create(tag: Tag): Promise<void>;
  findById(id: string): Promise<Tag | undefined>;
  update(id: string, data: Partial<Tag>): Promise<Tag | undefined>;
  delete(id: string): Promise<void>;
}
