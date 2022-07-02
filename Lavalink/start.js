import { spawn } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const jar = `${dirname(fileURLToPath(import.meta.url))}/Lavalink.jar`;

spawn('java', ['-jar', jar], { stdio: 'inherit' });
