import { openDB } from 'idb';

const DB_NAME = 'RR-Matrimony';
const STORE_NAME = 'companyDetails';

export const initDB = async () => {
  return await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
};

export const saveCompanyDetails = async (data) => {
  const db = await initDB();
  await db.put(STORE_NAME, { id: 'company', ...data });
};

export const getCompanyDetails = async () => {
  const db = await initDB();
  return await db.get(STORE_NAME, 'company');
};

export const clearCompanyDetails = async () => {
  const db = await initDB();
  await db.delete(STORE_NAME, 'company');
};
