export const getLocationFromPincode = async (pincode: string) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${pincode}&key=${apiKey}`
  );

  const data = await response.json();

  if (data.status !== "OK") {
    throw new Error("Location not found");
  }

  const result = data.results[0];

  let city = "";
  let state = "";
  let country = "";

  for (const component of result.address_components) {
    const types = component.types;

    if (types.includes("locality")) {
      city = component.long_name;
    } else if (types.includes("administrative_area_level_1")) {
      state = component.long_name;
    } else if (types.includes("country")) {
      country = component.long_name;
    }
  }

  return { city, state, country };
};
