import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('data.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('data.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(payload: string) {}
}
