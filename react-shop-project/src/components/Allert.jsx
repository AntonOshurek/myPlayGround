import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

export const Allert = () => {
  const { allertName, closeAllert = Function.prototype } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAllert, 3000);

    return () => {
      clearTimeout(timerId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allertName]);

  return(
    <div className="toast-container allert">
      <div className="toast">
        {allertName} добавлен в корзину
      </div>
    </div>
  )
}
