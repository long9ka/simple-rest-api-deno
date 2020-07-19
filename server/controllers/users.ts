import { RouterContext } from "https://deno.land/x/oak/mod.ts";

// models
import User from "../models/User.ts";

export const get = async (ctx: RouterContext) => {
  ctx.response.body = await User.find();
};

export const getOne = async (ctx: any) => {
  const user = await User.findOne({ _id: { $oid: ctx.params.id } });
  ctx.response.body = user;
};

export const create = async (ctx: RouterContext) => {
  const body = await ctx.request.body({ type: "json" }).value
  const insertId = await User.insertOne(body);
  ctx.response.body = insertId;
};