import { useEffect, useRef, useState } from "react";

/**
 * Tracks visibility of multiple elements using Intersection Observer.
 * @param {Array} dataList - Array of items (must have a unique 'name' or 'id' property).
 * @param {number} threshold - Visibility threshold (0 to 1).
 * @returns {[Array, Object]} refsArray and visibility state keyed by item name.
 */
const useVisibilityObserver = (dataList, threshold = 0.5) => {
  const [visibleItems, setVisibleItems] = useState({});
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1) {
              const key = dataList[index].name;
              setVisibleItems((prev) => ({
                ...prev,
                [key]: true,
              }));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [dataList, threshold]);

  return [itemRefs, visibleItems];
};

export default useVisibilityObserver;
