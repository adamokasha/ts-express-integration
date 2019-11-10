import "reflect-metadata";
import express from "express";

export const router = express.Router();

export function controller(routePrefix: string) {
  // NOTE: if applied to a class the decorator target is constructor function (not the prototype)
  return function(target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      // path will be decorated on our methods (through get decorator, for example)
      const path = Reflect.getMetadata("path", target.prototype, key);

      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
