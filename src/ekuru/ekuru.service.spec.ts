import { Test, TestingModule } from '@nestjs/testing';
import { EkuruService } from './ekuru.service';

describe('EkuruService', () => {
  let service: EkuruService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EkuruService],
    }).compile();

    service = module.get<EkuruService>(EkuruService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
