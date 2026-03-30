import Image from "next/image";

const RedeemCouponPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/assests/redeemback.png)",
      }}
      className="h-[85vh] flex justify-center items-center rounded-md"
    >
      <div className="md:w-[30%] w-[90%] m-auto shadow-md rounded-md py-4 bg-white/50">
        <div className="grid place-items-center">
          <Image
            src="/assests/coupon.png"
            alt="redeem"
            width={300}
            height={300}
          />
          <input
            className="md:w-[90%] w-full rounded-lg py-2 border border-primaryDark text-center"
            placeholder="Enter eCard/Coupon code"
          />
          <button className="md:w-[90%] w-full py-4 text-lg font-semibold bg-pink-400 text-white rounded-lg mt-6">
            Redeem Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedeemCouponPage;
