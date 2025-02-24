# avito-api

Клиент для работы с api Avito

> Библиотека на стадии разработки!

## Готовые разделы:

- Автозагрузка

## Пример

```typescript
import { Avito, Token } from "avito-api";

const setToken = (token: Token) => {
  await db.settings.update("avito_token", JSON.stringify(token));
};

const getToken = async () => {
  const token = await db.settings.get("avito_token");
  return JSON.parse(token);
};

export const avito = new Avito({
  auth: {
    client_id: process.env.AVITO_CLIENT_ID,
    сlient_secret: process.env.AVITO_CLIENT_SECRET,
    setToken: setToken,
    getToken: getToken,
  },
});

// Список отчётов автозагрузки
const reports = await avito.autoload.reports.list({
  perPage: 30,
  page: 1,
});

// Получить отчет автовыгрузки по ID
const report = await avito.autoload.reports.get("id");
```
