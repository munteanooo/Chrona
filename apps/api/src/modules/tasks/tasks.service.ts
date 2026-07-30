import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  findAll() {
    return [
      {
        id: '1',
        title: 'Build Chrona',
        completed: false,
      },
      {
        id: '2',
        title: 'Setup API',
        completed: true,
      },
    ];
  }
}