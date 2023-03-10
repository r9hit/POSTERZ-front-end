import React from "react";
import { useParams } from "react-router";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import "./Payments.scss";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Payments() {
  const params = useParams();
  const status = params.status;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const infoData = {
    success: {
      message: "Your order has been placed",
      cta: "Shop More",
      icon: <BsFillCartCheckFill />,
    },
    failed: {
      message: "Payment Failed",
      cta: "Try Again",
      icon: <BiErrorCircle />,
    },
  };

  if (status === "success") {
    dispatch(resetCart());
  }

  async function handlebutton() {
    // if (params.status === "success") {
    //   navigate("/category");
    // }
    // if (params.status === "failed") {
    //   navigate("/category");
    // }
    navigate("/category");
  }

  return (
    <div className="Payments">
      <div className="icon">{infoData[status].icon}</div>
      <h2 className="message">{infoData[status].message}</h2>
      <div className="btn-primary" onClick={handlebutton}>
        {infoData[status].cta}
      </div>
    </div>
  );
}

export default Payments;
