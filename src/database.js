import { table } from 'node:console';
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

    delete(table, id){
        const rowIndex = this.#database[table].findIndex(row => row.id === id);

        if (rowIndex > -1){
            this.#database[table].splice(rowIndex, 1);
            this.#persist;
        }
    }

    update(table, id, data){
        const rowIndex = this.#database[table].findIndex(row => row.id === id);

        if (rowIndex > -1){
            const row = this.#database[table][rowIndex];
            this.#database[table][rowIndex] = { ...row, ...data};
            this.#persist;
        }
    }

    select(table) {
        return this.#database[table] ?? [];
    }

}