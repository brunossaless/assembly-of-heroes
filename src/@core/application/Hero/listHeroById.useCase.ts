import { HeroEntity } from "../../domain/entities/Hero";
import { HeroGateway } from "../../domain/gateways/hero.gateway";

export class ListHeroByIdUseCase {
  constructor(private heroGateway: HeroGateway) {}

  async execute(id: Number): Promise<HeroEntity> {
    return await this.heroGateway.findById(id);
  }
}