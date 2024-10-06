import { productData } from "@/lib/product-data";
import { delay } from "./utils/delay";

import type { Product } from "@/types";

const ITEMS_PER_PAGE = 10;

export async function getProducts(pageNum: number) {
	await delay(1500);

	const products: Array<Product> = productData.slice(
		ITEMS_PER_PAGE * pageNum,
		ITEMS_PER_PAGE * (pageNum + 1),
	);
	const isEnd = ITEMS_PER_PAGE * (pageNum + 1) >= productData.length;

	return { products, isEnd };
}
