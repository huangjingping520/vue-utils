/**
 * Represents the configuration options for storage.
 */
export interface IStorage {
  /**
   * The type of storage to use, either 'localStorage' or 'sessionStorage'.
   */
  type: 'localStorage' | 'sessionStorage'

  /**
   * The prefix to be added to the keys in the storage.
   */
  prefix: string

  /**
   * The expiration time in seconds for the stored items.
   */
  expire: number

  /**
   * Indicates whether the stored items should be encrypted.
   * By crypto-js library.
   */
  isEncrypt: boolean
}
