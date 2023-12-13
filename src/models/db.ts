import mongoose from 'mongoose';
import { container } from '@sapphire/framework';

const connectToDB = async () => {
    container.logger.info('Database: Connecting.');
    if(process.env.db) {
        try {
            await mongoose.connect(process.env.db, {
            });
            container.logger.info('Database: Successfully connected to MongoDB');
        } catch (error) {
            container.logger.error(`Database: Couldn't connect to MongoDB`, error)
        }
    }
};

export default connectToDB;
