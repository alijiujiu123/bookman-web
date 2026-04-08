import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('deployment pipeline', () => {
  test('ships the prebuilt image from Jenkins instead of rebuilding on huoshan', () => {
    const jenkinsfile = readFileSync(resolve(process.cwd(), 'Jenkinsfile'), 'utf8');
    const deployScript = readFileSync(
      resolve(process.cwd(), 'scripts/deploy.sh'),
      'utf8',
    );

    expect(jenkinsfile).toContain('docker save');
    expect(deployScript).toContain('docker load -i');
    expect(deployScript).toContain('docker compose');
    expect(deployScript).toContain('--no-build');
    expect(deployScript).not.toContain('up -d --build');
  });
});
