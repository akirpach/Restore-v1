import { Box } from "@mui/material"
import type { Product } from "../../app/models/products"
import ProductCard from "./ProductCard"

type Proprs = {
    products: Product[]
}

export default function ProductList({ products }: Proprs) {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Box>
    )
}