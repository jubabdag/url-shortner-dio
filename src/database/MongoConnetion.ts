require('dotenv/config');

import mongoose from 'mongoose';

export class MongoConnection {
  public async connect(): Promise<void> {
    try {
      await mongoose.connect(process.env.MONGO_CONNECTION)
      console.log('Database conected')
    } catch (err) {
      console.error(err.message)
      process.exit(1)
    }
  }
};