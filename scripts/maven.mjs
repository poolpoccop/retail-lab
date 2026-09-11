import { spawnSync } from 'node:child_process'

const windows = process.platform === 'win32'
const result = spawnSync(windows ? '.\\mvnw.cmd' : 'sh',
  windows ? process.argv.slice(2) : ['./mvnw', ...process.argv.slice(2)],
  { stdio: 'inherit', shell: windows })
process.exit(result.status ?? 1)
