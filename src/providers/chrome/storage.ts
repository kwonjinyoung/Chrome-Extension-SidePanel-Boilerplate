const isLocalDevelopment = !chrome?.storage;

/**
 * Local/Chrome Storage Getter
 * @param key
 * @param callback
 */
export const getFromStorage = (
  key: string,
  callback: (value: string) => void
): void => {
  if (isLocalDevelopment) {
    const value = localStorage.getItem(key);
    callback(value || '');
  } else {
    chrome.storage.local.get([key], (result: Record<string, string>) => {
      const value = result[key];
      callback(value || '');
    });
  }
};

/**
 * Local/Chrome Storage Setter
 * @param key
 * @param value
 * @param callback
 */
export const setToStorage = (
  key: string,
  value: string,
  callback?: () => void
): void => {
  if (isLocalDevelopment) {
    localStorage.setItem(key, value);
    if (callback) callback();
  } else {
    chrome.storage.local.set({ [key]: value }, () => {
      if (callback) callback();
    });
  }
};

/**
 * Local/Chrome Storage Remover
 * @param key
 * @param callback
 */
export const removeFromStorage = (key: string, callback?: () => void): void => {
  if (isLocalDevelopment) {
    localStorage.removeItem(key);
    if (callback) callback();
  } else {
    chrome.storage.local.remove(key, () => {
      if (callback) callback();
    });
  }
};

/**
 * Local/Chrome Storage Clear
 * @param callback
 */
export const clearStorage = (callback?: () => void): void => {
  if (isLocalDevelopment) {
    localStorage.clear();
    if (callback) callback();
  } else {
    chrome.storage.local.clear(() => {
      if (callback) callback();
    });
  }
};
