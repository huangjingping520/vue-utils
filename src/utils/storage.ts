import type { IStorage } from '@/types/utils/storage'

const config: IStorage = {
  type: 'localStorage',
  prefix: 'app_',
  expire: 1,
  isEncrypt: true
}

export function setStorage(key: string, value: any, expire = 0) {
  if (value === '' || value === null || value === undefined) {
    value = null
  }

  if (Number.isNaN(expire) || expire < 1) {
    throw new Error('The expiration time must be a positive number.')
  }

  expire = (expire || config.expire) * 86400

  const data = {
    value,
    time: Date.now(),
    expire
  }

  window[config.type].setItem(config.prefix + key, JSON.stringify(data))
}
