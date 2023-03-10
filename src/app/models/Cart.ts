export interface Cart {
    cartId?: number | null;
    userId?: number | null;
    productId?: number | null;
    stock?: number | null;
    productName?: string | null;
    productImage?: string | null;
    productPrice: number;
}