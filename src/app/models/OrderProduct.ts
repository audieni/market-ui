export interface OrderProduct {
    orderProductId?: number | null;
    orderId?: number | null;
    productId?: number | null;
    stock?: number | null;
    productName?: string | null;
    productImage?: string | null;
    productPrice: number;
}