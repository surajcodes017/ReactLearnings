import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item, index) => {
        const info = item.card.info;

        return (
          <div
            key={`${info.id}-${index}`}
            className="flex justify-between border-b border-gray-200 py-6 hover:bg-gray-50
    px-4
    rounded-lg
    transition-all"
          >
            {/* Left Side */}
            <div className="w-9/12 text-left">
              <h3 className="font-bold text-lg text-gray-800">{info.name}</h3>

              <p className="font-semibold text-gray-700 mt-1">
                ₹ {(info.price || info.defaultPrice) / 100}
              </p>

              {/* Rating */}
              {info.ratings?.aggregatedRating?.rating && (
                <p className="text-green-600 font-semibold mt-1">
                  ⭐ {info.ratings.aggregatedRating.rating}
                  {" ("}
                  {info.ratings.aggregatedRating.ratingCountV2}
                  {")"}
                </p>
              )}

              <p className="text-gray-500 text-sm mt-3">{info.description}</p>
            </div>

            {/* Right Side */}
            <div className="w-3/12 relative flex justify-center">
              {info.imageId && (
                <>
                  <img
                    className="w-36 h-36 rounded-xl object-cover shadow-md"
                    src={CDN_URL + info.imageId}
                    alt={info.name}
                  />

                  {/* ADD Button */}
                  <button
                    className="
                      absolute
                      bottom-[-10px]
                      bg-white
                      text-green-600
                      font-bold
                      px-8
                      py-2
                      rounded-lg
                      shadow-lg
                      border
                      hover:bg-gray-50
                    "
                    onClick={() => handleAddItem(item)}
                  >
                    ADD
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
