import { describe, it, expect } from 'vitest'
import { barcode } from '../src/barcode'

describe('greeting', () => {
  it('builds a greeting for the given name', () => {
    expect(barcode('world')).toBe('Hello from world!')
  })

  it('handles an empty name', () => {
    expect(barcode('')).toBe('Hello from !')
  })
})
