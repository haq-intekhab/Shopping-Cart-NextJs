import { fetchProductDetails } from "@/actions";
import AddToCartButton from "@/components/add-to-cart-btn";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function ProductDetails({ params }) {
  const getSession = await auth();
  if (!getSession?.user) redirect("/unauth-page");

  const getProductDetails = await fetchProductDetails(params.details);
//   console.log(getProductDetails, "getProductDetails");

  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className="p-6">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
            <img
              src={getProductDetails?.thumbnail}
              alt={getProductDetails?.title}
              className="w-4/5 rounded object-cover"
            />
            <hr className="border-black border-2 my-6" />
            <div className="flex flex-wrap gap-5 justify-center mx-auto">
              {getProductDetails?.images?.map((imageItem) => (
                <img
                  src={imageItem}
                  alt={imageItem}
                  className="w-24 cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">
              {getProductDetails?.title}
            </h2>
            <div className="flex gap-1 mt-5 items-center">
                <p className=" text-gray-800 font-extrabold text-2xl mr-4">Price</p>
            <p className=" text-gray-800 font-extrabold text-xl">
              {getProductDetails?.price}
            </p>
            <p className="text-xl font-extrabold text-gray-800">$</p>
            </div>
            <h3 className="mt-3 text-lg font-bold text-gray-700">
              {getProductDetails?.description}
            </h3>
            <AddToCartButton productItem={getProductDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;