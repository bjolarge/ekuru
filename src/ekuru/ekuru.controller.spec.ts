import { Test, TestingModule } from '@nestjs/testing';
import { EkuruController } from './ekuru.controller';
import { EkuruService } from './ekuru.service';

describe('EkuruController', () => {
  let controller: EkuruController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EkuruController],
      providers: [EkuruService],
    }).compile();

    controller = module.get<EkuruController>(EkuruController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
