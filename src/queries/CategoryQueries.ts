import { type Category } from "@prisma/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "../config/axios";
import { type GetCategory } from "../types/getCategories";
import { type PatchCategory } from "../types/patchCategory";
import { type PostCategory } from "../types/postCategory";

const getCategories = async (): Promise<GetCategory[]> => {
  const { data } = await axios.get("/categories");
  return data;
};

const getCategoriesId = async (): Promise<Category[]> => {
  const { data } = await axios.get("/categories/id");
  return data;
};

const postCategory = async (props: PostCategory) => {
  const { data } = await axios.post("/category", props);
  return data;
};

const deleteCategory = async (id: string) => {
  const { data } = await axios.delete(`/category`, { params: { id } });
  return data;
};

const patchCategory = async (props: PatchCategory) => {
  const { data } = await axios.patch(`/category`, props);
  return data;
};

const useGetCategories = () => useQuery(["categories"], getCategories);
const useGetCategoriesId = () => useQuery(["categoriesId"], getCategoriesId);
const usePostCategory = () => useMutation(["category"], postCategory);
const useDeleteCategory = () => useMutation(["category"], deleteCategory);
const usePatchCategory = () => useMutation(["category"], patchCategory);

export {
  useDeleteCategory, useGetCategories,
  useGetCategoriesId, usePatchCategory, usePostCategory
};
