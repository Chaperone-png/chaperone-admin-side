"use client";

import { useState } from "react";
import Button from "@/components/common/UI/Button";
import { bookingsData } from "./bookingData";
import BookingCard from "./MaaliBookingCard";

const ITEMS_PER_PAGE = 4;

const MaaliBooking = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const visibleBookings = bookingsData.slice(0, visibleCount);

  return (
    <div className="bg-white rounded-3xl py-5 min-h-[640px]">
      <h2 className="text-3xl font-semibold  px-5">Maali Booking</h2>

      <div className="h-[580px] overflow-y-auto px-5">
        {visibleBookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>

      {visibleCount < bookingsData.length && (
        <div className="flex justify-center">
          <Button
            className="common-button max-w-[150px]"
            content="Load More"
            onClick={handleLoadMore}
          />
        </div>
      )}
    </div>
  );
};

export default MaaliBooking;
