/* eslint-disable no-undef */
export const engine = new BrowserEngine("db");
export const db = new StormDB(engine);
export function checkDB() {
  if (db.get("apps").value()) {
    return true;
  }
  return false;
}
