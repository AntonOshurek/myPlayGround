import { useEffect } from "react";

export const Allert = (props) => {
  const { name, closeAllert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAllert, 3000);

    return () => {
      clearTimeout(timerId);
    }
  }, [name]);

  return(
    <div className="toast-container allert">
      <div className="toast">
        {name} добавлен в корзину
      </div>
    </div>
  )
}
