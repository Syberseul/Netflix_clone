import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db from "../../server/firebase";
import config from "../../config";
import "./index.css";

function PlanScreen() {
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((query) => {
        const products = {};
        query.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((query) => {
        query.forEach(async (subscription) => {
          //   console.log(subscription);
          const { current_period_start, current_period_end, role } =
            subscription.data();
          setSubscription({
            role: role,
            current_period_end: current_period_end.seconds,
            current_period_start: current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);

  //   console.log(products);
  //   console.log(subscription);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`An error occurred: ${error.message}`);
      }
      if (sessionId) {
        // init Stripe
        const stripe = await loadStripe(
          // public key
          `${config.stripe.stripePublicKey}`
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="planScreen">
      {subscription && (
        <p>
          Renewal date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}

      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPlan = productData.name?.includes(subscription?.role);

        return (
          <div
            className={`planScreen__plan ${
              isCurrentPlan && "planScreen__planDisabled"
            }`}
            key={productId}
          >
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrentPlan && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPlan ? "Current Plan" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
