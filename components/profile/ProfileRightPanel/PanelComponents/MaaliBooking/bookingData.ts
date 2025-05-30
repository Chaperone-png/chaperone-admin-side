import MaaliImage1 from "@/public/assets/images/profile/maaliBookig/img1.svg";
import MaaliImage2 from "@/public/assets/images/profile/maaliBookig/img2.svg";
import MaaliImage3 from "@/public/assets/images/profile/maaliBookig/img3.svg";
import { ProfileBooking } from "@/types/profile";

export const bookingsData: ProfileBooking[] = [
  {
    id: 1,
    status: "Scheduled",
    date: "Tue, 6 May, 9:00 AM",
    bookingId: "1101-1201-8817",
    bookedOn: "Tue, 4 Feb",
    package: "Package 01",
    location: "Indirapuram, Ghaziabad",
    image: MaaliImage1,
    name: "Amit Sharma",
    statusClass: "status-scheduled",
    bg: "bg-[var(--skyLight)]",
  },
  {
    id: 2,
    status: "Completed",
    date: "Tue, 6 May, 9:00 AM",
    bookingId: "1101-1201-8817",
    bookedOn: "Tue, 4 Feb",
    package: "Package 01",
    location: "Indirapuram, Ghaziabad",
    image: MaaliImage2,
    name: "Amit Sharma",
    statusClass: "status-completed",
    bg: "bg-[var(--grayBG)]",
  },
  {
    id: 3,
    status: "Confirmed",
    date: "Tue, 6 May, 9:00 AM",
    bookingId: "1101-1201-8817",
    bookedOn: "Tue, 4 Feb",
    package: "Package 01",
    location: "Indirapuram, Ghaziabad",
    image: MaaliImage3,
    name: "Amit Sharma",
    statusClass: "status-confirmed",
    bg: "bg-[var(--grayBG)]",
  },
  {
    id: 4,
    status: "Failed",
    date: "Tue, 6 May, 9:00 AM",
    bookingId: "1101-1201-8817",
    bookedOn: "Tue, 4 Feb",
    package: "Package 01",
    location: "Indirapuram, Ghaziabad",
    image: MaaliImage3,
    name: "Amit Sharma",
    statusClass: "status-failed",
    bg: "bg-[var(--grayBG)]",
  },
  // Add more as needed...
];
