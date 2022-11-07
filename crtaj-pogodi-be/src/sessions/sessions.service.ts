import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { randomInt, randomUUID } from 'crypto';

@Injectable()
export class SessionsService {
  private readonly redis: Redis;

  constructor(private readonly redisService: RedisService) {
    this.redis = redisService.getClient();
  }

  async create(createSessionDto: CreateSessionDto) {
    const sessionId = randomUUID();
    const redisResponse = await this.redis.hset(sessionId, {
      players: [createSessionDto.nickname],
    });
    console.log(redisResponse);
    return { sessionId };
  }

  findAll() {
    return `This action returns all sessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
