import { Client } from 'jayson';
import config from '../config';

const client = Client.http({
  port: config.port
});

export default client;
