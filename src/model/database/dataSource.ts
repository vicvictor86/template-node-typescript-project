import { DataSource } from 'typeorm';

const connectionSource = new DataSource({
  type: 'sqlite',
  database: 'src/model/database/db.sqlite',
  migrations: ['src/model/database/migrations/*.ts'],
  entities: ['src/model/*.ts'],
});

connectionSource.initialize().then(() => {
  console.log('database connection established');
});

export { connectionSource };
