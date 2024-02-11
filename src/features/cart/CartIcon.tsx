"use client";

import { MotionDiv } from "@/components/util/motion";
import { useCartContext } from "../../components/context/CartContextProvider";
import { Drawer } from "vaul";

function CartIcon() {
  const { items } = useCartContext();
  return (
    <Drawer.Trigger role="button" asChild className="relative group">
      <MotionDiv className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
          />
        </svg>
        {Boolean(items?.length) && (
          <div className="absolute text-xs -top-[40%] -right-2  bg-black text-white w-5 h-5 p-2 rounded-full justify-center items-center flex">
            <span>{items.length}</span>
            <MotionDiv
              initial={{ opacity: 1, scale: 1 }}
              // TODO: fix animation bug on safari
              animate={{ opacity: 0, scale: 1.3 }}
              key={items?.length?.toString()}
              className="absolute  h-full w-full bg-black/50 animate-ping rounded-full"
            />
          </div>
        )}
        <MotionDiv className="absolute -bottom-8 text-center hidden group-hover:block">
          <p className="text-xs font-semibold p-1 px-2 rounded-md bg-black text-white">
            Cart
          </p>
        </MotionDiv>
      </MotionDiv>
    </Drawer.Trigger>
  );
}

export default CartIcon;
