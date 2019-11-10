import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

export function controller(routePrefix: string) {
  // NOTE: if applied to a class the decorator target is constructor function (not the prototype)
  return function(target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      // path will be decorated on our methods (through get decorator, for example)
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );
      // reflect returns any and router will not accept that so use Method enum which satisfies that interface
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
