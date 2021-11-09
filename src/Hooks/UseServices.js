import { useState, useEffect } from "react";

const UseServices = () => {
  const [services, setServices] = useState([]);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#f63e7b");

  useEffect(() => {
    fetch("https://fast-taiga-01124.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setServices(data);
      });
  }, []);

  return { color, services, loading };
};

export default UseServices;
