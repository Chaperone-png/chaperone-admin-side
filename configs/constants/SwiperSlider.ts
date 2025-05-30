type SliderConfigInput = {
  sliderType: string;
  navigationNextElClass: string;
  navigationPrevElClass: string;
};

type BreakpointsConfig = {
  breakpoints: number[];
  slidesPerView: number[];
  slidesPerGroup: number[];
};

const generateConfig = (
  type: string,
  slidesToShow: number,
  slidesToScroll: number = 1,
  navigation: { nextEl: string; prevEl: string },
  breakpointsConfig?: BreakpointsConfig
) => ({
  slidesToShow,
  slidesToScroll,
  type,
  navigation,
  ...(breakpointsConfig && { breakpointsConfig }),
});

export const getSwiperSliderConfig = ({
  sliderType = "",
  navigationNextElClass = ".swiper-button-next",
  navigationPrevElClass = ".swiper-button-prev",
}: SliderConfigInput) => {
  const navigation = {
    nextEl: navigationNextElClass || ".swiper-button-next",
    prevEl: navigationPrevElClass || ".swiper-button-prev",
  };

  const configMap: Record<string, () => any> = {
    testimonial: () =>
      generateConfig(sliderType, 2.5, 1, navigation, {
        breakpoints: [320, 768, 1024, 1440],
        slidesPerView: [1, 1, 2.5, 2.5],
        slidesPerGroup: [1, 1, 1, 1],
      }),

    pricePlanSlider: () =>
      generateConfig(sliderType, 3, 1, navigation, {
        breakpoints: [320, 768, 1024, 1440],
        slidesPerView: [1, 1, 3, 3],
        slidesPerGroup: [1, 1, 3, 3],
      }),


    coupons: () =>
      generateConfig(sliderType, 2.5, 1, navigation, {
        breakpoints: [320, 768, 1024, 1440],
        slidesPerView: [1, 1, 2.5, 2.5],
        slidesPerGroup: [1, 1, 1, 1],
      }),


    cards: () =>
      generateConfig(sliderType, 4, 1, navigation, {
        breakpoints: [320, 560, 960, 1024, 1440],
        slidesPerView: [1, 2, 3, 4, 4],
        slidesPerGroup: [1, 1, 1, 1, 1],
      }),

    Articlescards: () =>
      generateConfig(sliderType, 4, 1, navigation, {
        breakpoints: [320, 560, 960],
        slidesPerView: [1, 2, 3],
        slidesPerGroup: [1, 1, 1],
      }),

    Lushcards: () =>
      generateConfig(sliderType, 4, 1, navigation, {
        breakpoints: [320, 560, 960, 1024],
        slidesPerView: [2, 3, 3, 4],
        slidesPerGroup: [1, 1, 1, 1],
      }),

    deal: () =>
      generateConfig(sliderType, 3, 1, navigation, {
        breakpoints: [320, 768, 1024, 1440],
        slidesPerView: [1, 1, 3, 3],
        slidesPerGroup: [1, 1, 1, 1],
      }),

    categoryListing: () =>
      generateConfig(sliderType, 5, 1, navigation, {
        breakpoints: [320, 768, 1024, 1440],
        slidesPerView: [2, 4, 5, 5],
        slidesPerGroup: [1, 1, 1, 1],
      }),

    productSlider: () =>
      generateConfig(sliderType, 1, 1, navigation, {
        breakpoints: [320, 768, 1024, 1440],
        slidesPerView: [1, 1, 1, 1],
        slidesPerGroup: [1, 1, 1, 1],
      }),

    productSliderNav: () =>
      generateConfig(sliderType, 3, 1, navigation, {
        breakpoints: [320, 768, 1024, 1440],
        slidesPerView: [4, 4, 4, 4],
        slidesPerGroup: [1, 1, 1, 1],
      }),

    card: () => ({
      type: sliderType,
      navigation,
    }),
  };

  return configMap[sliderType]
    ? configMap[sliderType]()
    : {
      navigation,
      autoplayDelay: 2000,
    };
};
