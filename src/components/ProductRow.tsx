import Product from "../types/products"

type ProductsRowProps = {
  product: Product;
}

export default function ProductRow({ product }: ProductsRowProps) {
  return (
    <tr>
      <td>
        <span style={{
          color: product.stocked ? 'black' : 'red',
        }}>
          {product.name}
        </span>
      </td>
      <td>{product.price}</td>
    </tr>
  )
};