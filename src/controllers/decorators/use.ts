import "reflect-metadata";
import { RequestHandler } from "express";
import { MetadataKeys } from "./MetadataKeys";

export function use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    // get middlewares array or initiate empty one
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

    // spread middleware w/ previous middleware
    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
