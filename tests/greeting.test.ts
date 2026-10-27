import { describe, it, expect } from 'vitest'
import { greeting } from '../src/greeting'

describe('greeting', () => {
  it('builds a greeting for the given name', () => {
    expect(greeting('world')).toBe('Hello from world!')
  })

  it('handles an empty name', () => {
    expect(greeting('')).toBe('Hello from !')
  })
})
