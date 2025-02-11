
export type RatingType = {
    rate: number;
    count: number;
};

export type ProductType = {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description: string;
    rating: RatingType;
};

export type FiltersType = {
    category: string
    minPrice: number
}

export type FiltersContextType = {
    category: string
    minPrice: number
}

export type CartItemType = {
    image: string
    quantity: number | string
    title: string
    price: number | string
    addToCart: () => void
}