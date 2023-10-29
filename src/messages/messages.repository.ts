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

  async create(payload: string) {
    const contents = await readFile('data.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content: payload };

    await writeFile('data.json', JSON.stringify(messages));

    return (messages[id] = { id, content: payload });
  }
}
