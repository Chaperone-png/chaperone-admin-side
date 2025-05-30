import React from "react";
import Image from "next/image";
import Button from "@/components/common/UI/Button";
import { BookingCardProps } from "@/types/profile";

const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  return (
    <div className="maali-booking-list my-6">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-semibold">Booking ID:</span> {booking.bookingId}
        </div>
        <div>{booking.bookedOn}</div>
      </div>

      <div className={`${booking.bg} p-4 mt-2 rounded-md booking-card-wrapper`}>
        <ul className="booking-detail-list">
          <li>
            <span className="font-bold min-w-[85px] inline-block">
              Scheduled:
            </span>{" "}
            {booking.date}
            <span className={`booking-status ${booking.statusClass}`}>
              {booking.status}
            </span>
          </li>
          <li>
            <span className="font-bold min-w-[85px] inline-block">
              Package:
            </span>{" "}
            {booking.package}
          </li>
          <li>
            <span className="font-bold min-w-[85px] inline-block">
              Location:
            </span>{" "}
            {booking.location}
          </li>
        </ul>

        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-2 items-center">
            <div className="maali-circle-image">
              <Image
                src={booking.image}
                width={20}
                height={20}
                alt="MaaliImage"
              />
            </div>
            <span className="font-bold text-[var(--primarybgcolor)]">
              {booking.name}
            </span>
          </div>
          <Button
            className="common-button max-w-[150px]"
            content="View Details"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
