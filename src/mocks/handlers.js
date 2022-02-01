// src/mocks/handlers.js
import { rest } from "msw";

const coins = [
  { name: "Cardano", website: "https://cardano.org" },
  { name: "Polkadot", website: "https://polkadot.network" },
];

export const handlers = [
  rest.get("/coins", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json(
        coins.map((data) => {
          return [...data];
        })
      )
    );
  }),
];
