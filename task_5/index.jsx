import { useState } from "react";

// Provider component with HOC is the best fit for this situation
// Child components do not rerender, even if hover on (onMouseEnter event) them
const BlockProvider = ({ mouseEnterCallbak, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  return (
    <BlockProvider mouseEnterCallbak={mouseEnterCallbak}>
      <img src={imgSrc} alt={imgAlt} />
    </BlockProvider>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  return (
    <BlockProvider mouseEnterCallbak={mouseEnterCallbak}>
      <p>{content}</p>
    </BlockProvider>
  );
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  return (
    <BlockProvider mouseEnterCallbak={mouseEnterCallbak}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </BlockProvider>
  );
};
