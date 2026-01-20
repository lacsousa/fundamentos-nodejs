import fs from 'node:fs/promises';

const databasePath = new URL('../db.json', import.meta.url);

export class Database { 
    #database = {}; // Putting # before the name makes it a private field

    constructor() {
        fs.readFile(databasePath, 'utf8')
            .then((data) => {
                this.#database = JSON.parse(data);
            })
            .catch(() => {
                this.#persist();
            });
    }
    
    async #persist() {
        await fs.writeFile(
            databasePath,
            JSON.stringify(this.#database, null, 2)
        );
    }


    async insert(table, data) {
        if (!this.#database[table]) {
            this.#database[table] = [];
        }

        this.#database[table].push(data);
        await this.#persist();
        return data;
    }

    select(table) {
        return this.#database[table] ?? [];
    }

}