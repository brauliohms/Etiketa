import { Tag } from '../../domain/Tag';
import TagsRepository from '../repositories/TagRepository';

export default class CreateTagUseCase {
  constructor(private readonly tagRepository: TagsRepository) {}

  async execute(input: Input): Promise<void> {
    const { name, description, type, properties } = input;
    const tag = Tag.create(name, properties);
    await this.tagRepository.create(tag);
  }
}

type Properties = {
  key: string;
  value: string;
  type: string;
};

type Input = {
  name: string;
  description: string;
  type: string;
  properties: Properties[];
};
