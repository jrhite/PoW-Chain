import { JSONRPCErrorLike, JSONRPCResultLike } from 'jayson';
import client from './client';

client.request(
  'startMining',
  [],
  function (
    err: JSONRPCErrorLike,
    response: { result: JSONRPCResultLike }
  ): void {
    if (err) {
      throw err;
    }

    console.log(response.result); // success!
  }
);
