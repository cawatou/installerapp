import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Основная работа' },
      { id: 2, name: 'Вызов' },
      { id: 3, name: 'Ремонт' },
      { id: 4, name: 'Диагностика' },

    ];
    return {heroes};
  }
}
