import { BadRequestException } from '@nestjs/common';
import { Document, FilterQuery, Model } from 'mongoose';

export abstract class EntityRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T> {
    return this.entityModel.findOne(entityFilterQuery, {
      _id: 0,
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
      ...projection,
    });
  }

  async find(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery, {
      _id: 0,
      __v: 0,
      ...projection,
    });
  }

  async create(createEntityData: unknown): Promise<T> {
    try {
      const entity = await this.entityModel.create(createEntityData);
      await entity.save();
      return entity;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Duplicate Field');
      }
    }
  }
}
