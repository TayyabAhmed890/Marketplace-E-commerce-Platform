import AddToCartButton from "@/app/components/AddToCartButton";
import { client } from "@/sanity/lib/client";

interface Product {
  id: number; // Change to number to align with your Sanity schema
  name: string;
  description: string;
  price: string;
  image_url?: string;
}

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  // Ensure the id is treated as a number in the query
  const product: Product | null = await client.fetch(
    `*[_type == "product" && id == $id][0]{
      id,
      name,
      description,
      price,
      "image_url": image.asset->url
    }`,
    { id: Number(id) } // Convert id to number
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <section className="py-8 bg-white md:py-16">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 ">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              {product.image_url && (
                <img
                  src={product.image_url}
                  alt={product.name}
                  style={{ width: "350px", height: "auto" }}
                />
              )}
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
                {product.name}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
                  <span>Price: ${product.price}</span>
                </p>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    {/* Rating stars */}
                  </div>
                  <p className="text-sm font-medium leading-none text-gray-500 ">
                    (5.0)
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline"
                  >
                    345 Reviews
                  </a>
                </div>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  Add to favorites
                </a>

                <AddToCartButton
                  product={{ ...product, id: product.id, image_url: product.image_url || "" }}
                />
              </div>

              <hr className="my-6 md:my-8 border-gray-200 " />

              <p className="mb-6 text-gray-500 dark:text-gray-400">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
