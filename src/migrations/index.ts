import * as migration_20260531_213004_initial from './20260531_213004_initial'

export const migrations = [
  {
    up: migration_20260531_213004_initial.up,
    down: migration_20260531_213004_initial.down,
    name: '20260531_213004_initial',
  },
]
