import fs from 'fs-extra';
import { exec } from 'child_process';

export default async function publishPackages(path: string, authToken: string) {
  return Promise.all(
    fs.readdirSync(path).map(
      dir =>
        new Promise((resolve, reject) => {
          exec(
            `npm set //registry.npmjs.org/:_authToken=${authToken} && npm publish`,
            { cwd: `${path}/${dir}` },
            (error, stdout, stderr) => {
              if (error) {
                reject(error);
                return;
              }

              if (stderr) {
                console.error(stderr);
              }

              console.log(stdout);

              resolve(stdout);
            },
          );
        }),
    ),
  );
}
