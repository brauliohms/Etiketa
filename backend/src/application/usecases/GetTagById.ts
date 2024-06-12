import { Tag } from '../../domain/Tag';
import TagsRepository from '../repositories/TagRepository';

export default class GetTagUseCase {
  constructor(private readonly tagsRepository: TagsRepository) {}

  async execute(id: string): Promise<Tag | null> {
    const tag = await this.tagsRepository.findById(id);
    if (!tag) return null;
    return tag;
  }
}
