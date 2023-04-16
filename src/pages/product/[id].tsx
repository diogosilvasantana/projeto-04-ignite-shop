
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const {query} = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 69,90</span>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam reprehenderit quia voluptatibus alias eum dolorem incidunt! Atque porro veritatis expedita sit fugiat repellendus beatae numquam, ipsa, at voluptatem ab consequuntur.</p>

        <button>
          Comprar Agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}