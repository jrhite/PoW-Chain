
1. add `.env` to the `.gitignore` file
2. copy the desired environment template file (eg: `$PROJECT_ROOT/example-envs/env-dev`) to the project's root dir and rename the file `.env`
# eg:
```
cp $PROJECT_ROOT/example-envs/env-dev $PROJECT_ROOT/.env
```
3. change all 'private' template env vars to their appropriate values in the `PROJECT_ROOT/.env` file. For example change:
```
PRIVATE_KEY=<PRIVATE_KEY>
```
to
```
PRIVATE_KEY=therealprivatekey
```
*** Note: never check in the actual `.env` file. This is prevented from happening by the `.gitignore` file entry added in step 1. But be aware of this point regardless!
