import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as domMatchers from '@testing-library/jest-dom/matchers'

expect.extend(domMatchers)

// Cleanup after each test
afterEach(() => {
  cleanup()
})
