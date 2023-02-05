import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  jweleryData,
  clothingData,
  electronicsData,
} from "../categoryData/categoryData";
import Footer from "../components/Footer";

const CategoryView = () => {
  const param = useParams();
  const category = param["category"];
  const nav = useNavigate();

  if (category == "clothing") {
    return (
      <>
        <div className="flex container mx-auto flex-row justify-center flex-wrap gap-20  py-10">
          {clothingData().map((e, i) => (
            <div
              className=""
              onClick={() => {
                nav("/category/product", { state: { data: e } });
              }}
              key={i}
            >
              <div className="">
                <div className="flex flex-col justify-start  border border-stone-400/20 w-[380px] h-[400px] shadow-sm transition ease-in-out delay-150 hover:shadow-2xl px-4 rounded">
                  <img
                    src={e.image}
                    alt=""
                    className="py-4  self-center h-52"
                  />
                  <h2 className="text-black/40 mt-2 ">
                    {e.category.toUpperCase()}
                  </h2>
                  <p className="text-lg text-sky-900/80 cursor-pointer mt-1">
                    {e.title}
                  </p>
                  <p className="mt-2 text-black/70  text-[20px] ">
                    Rating :
                    <span className="text-cyan-900/70 px-2 text-xl">
                      {e.rating.rate}
                    </span>
                    <span className="text-[18px] pl-2">Rated :</span>
                    <span className="text-base pl-1 text-cyan-900/90  ">
                      ({e.rating.count})
                    </span>
                  </p>
                  <p className="mt-1 text-[20px] text-stone-400">
                    ₹<span>{e.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  }
  if (category == "jewelery") {
    return (
      <>
        <div className="flex container mx-auto flex-row justify-center flex-wrap gap-20  py-10">
          {jweleryData().map((e, i) => (
            <div
              className=""
              onClick={() => {
                nav("/category/product", { state: { data: e } });
              }}
              key={i}
            >
              <div className="">
                <div className="flex flex-col justify-start  border border-stone-400/20 w-[380px] h-[400px] shadow-sm transition ease-in-out delay-150 hover:shadow-2xl px-4 rounded">
                  <img
                    src={e.image}
                    alt=""
                    className="py-4  self-center h-52"
                  />
                  <h2 className="text-black/40 mt-2 ">
                    {e.category.toUpperCase()}
                  </h2>
                  <p className="text-lg text-sky-900/80 cursor-pointer mt-1">
                    {e.title}
                  </p>
                  <p className="mt-2 text-black/70  text-[20px] ">
                    Rating :
                    <span className="text-cyan-900/70 px-2 text-xl">
                      {e.rating.rate}
                    </span>
                    <span className="text-[18px] pl-2">Rated :</span>
                    <span className="text-base pl-1 text-cyan-900/90  ">
                      ({e.rating.count})
                    </span>
                  </p>
                  <p className="mt-1 text-[20px] text-stone-400">
                    ₹<span>{e.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  }
  if (category == "electronics") {
    return (
      <>
        <div className="flex container mx-auto flex-row justify-center flex-wrap gap-20  py-10">
          {electronicsData().map((e, i) => (
            <div
              className=""
              onClick={() => {
                nav("/category/product", { state: { data: e } });
              }}
              key={i}
            >
              <div className="">
                <div className="flex flex-col justify-start  border border-stone-400/20 w-[380px] h-[400px] shadow-sm transition ease-in-out delay-150 hover:shadow-2xl px-4 rounded">
                  <img
                    src={e.image}
                    alt=""
                    className="py-4  self-center h-52"
                  />
                  <h2 className="text-black/40 mt-2 ">
                    {e.category.toUpperCase()}
                  </h2>
                  <p className="text-lg text-sky-900/80 cursor-pointer mt-1">
                    {e.title}
                  </p>
                  <p className="mt-2 text-black/70  text-[20px] ">
                    Rating :
                    <span className="text-cyan-900/70 px-2 text-xl">
                      {e.rating.rate}
                    </span>
                    <span className="text-[18px] pl-2">Rated :</span>
                    <span className="text-base pl-1 text-cyan-900/90  ">
                      ({e.rating.count})
                    </span>
                  </p>
                  <p className="mt-1 text-[20px] text-stone-400">
                    ₹<span>{e.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  }
  return <div>Incorect path</div>;
};

export default CategoryView;
