const OrderPricePanel = () => (
  <div className="order-price border-box-ui">
    <div className="order-price-title">
      ₹ 4500 <small>You Saved ₹249</small>
    </div>
    <div className="order-price-list">
      <div className="flex justify-between">
        <span>Total MRP</span>
        <span>₹ 0000</span>
      </div>
      <div className="flex justify-between">
        <span>Discounted Total MRP</span>
        <span>₹ 0000</span>
      </div>
      <div className="flex justify-between">
        <span>Additional Discount</span>
        <span className="additional-discount">-₹ 3</span>
      </div>
      <div className="flex justify-between order-total">
        <span>Order Total</span>
        <span>₹ 0000</span>
      </div>
      <div className="flex justify-between">
        <span>Payment Mode</span>
        <span>UPI</span>
      </div>
    </div>
  </div>
);

export default OrderPricePanel;
