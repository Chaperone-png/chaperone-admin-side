import { Category } from "@/types/ReduxSliceType/categories";

export const categoryData: Category[] = [
    {
      "parent_id": 1,
      "parent_name": "Plants",
      "parent_slug": "/plants",
      "parent_description": "A wide variety of indoor and outdoor plants that enhance your space and well-being.",
      "parent_is_active": true,
      "subcategories": [
        {
          "id": 6,
          "parent_id": 1,
          "name": "Indoor Plants",
          "slug": "/indoor-plants",
          "description": "Plants that thrive in indoor environments with low to medium light levels, improving air quality and aesthetic appeal.",
          "is_active": true,
          "icon_url": "https://cdn-icons-gif.flaticon.com/19003/19003791.gif",
          "banner_url": "https://chaperoneimages.s3.ap-southeast-2.amazonaws.com/miscellaneousImages/1745347127484_indoor-plant-banner.webp",
          "position": 1,
          "level": 1,
          "created_at": "2025-04-21T08:47:32.000Z",
          "updated_at": "2025-04-21T09:33:22.000Z"
        },
        {
          "id": 7,
          "parent_id": 1,
          "name": "Outdoor Plants",
          "slug": "/outdoor-plants",
          "description": "Plants suitable for outdoor gardening, requiring sunlight and space to grow, ideal for patios and gardens.",
          "is_active": true,
          "icon_url": "https://cdn-icons-png.flaticon.com/128/13167/13167892.png",
          "banner_url": "https://chaperoneimages.s3.ap-southeast-2.amazonaws.com/miscellaneousImages/1745347224653_outdoor-plant-banner.webp",
          "position": 2,
          "level": 1,
          "created_at": "2025-04-21T08:47:32.000Z",
          "updated_at": "2025-04-21T09:33:39.000Z"
        },
        {
          "id": 8,
          "parent_id": 1,
          "name": "Flower Plants",
          "slug": "/flower-plants",
          "description": "Colorful and vibrant plants that bloom with beautiful flowers, perfect for garden landscapes and indoor decor.",
          "is_active": true,
          "icon_url": "https://cdn-icons-gif.flaticon.com/12468/12468574.gif",
          "banner_url": "https://chaperoneimages.s3.ap-southeast-2.amazonaws.com/miscellaneousImages/1745347582605_summer-plant-banner.webp",
          "position": 3,
          "level": 1,
          "created_at": "2025-04-21T08:47:32.000Z",
          "updated_at": "2025-04-21T09:34:03.000Z"
        },
        {
          "id": 9,
          "parent_id": 1,
          "name": "Monsoon Plants",
          "slug": "/monsoon-plants",
          "description": "Plants that thrive during the monsoon season, requiring frequent watering and humid environments.",
          "is_active": true,
          "icon_url": "https://cdn-icons-png.flaticon.com/128/5243/5243848.png",
          "banner_url": "https://chaperoneimages.s3.ap-southeast-2.amazonaws.com/miscellaneousImages/1745347446413_monsoon-plant-banner.webp",
          "position": 4,
          "level": 1,
          "created_at": "2025-04-21T08:47:32.000Z",
          "updated_at": "2025-04-21T09:34:26.000Z"
        },
        {
          "id": 10,
          "parent_id": 1,
          "name": "Air Purifying Plants",
          "slug": "/air-purifying-plants",
          "description": "Plants known for their ability to filter and purify indoor air, improving your health and indoor environment.",
          "is_active": true,
          "icon_url": "https://cdn-icons-png.flaticon.com/128/3723/3723998.png",
          "banner_url": "https://chaperoneimages.s3.ap-southeast-2.amazonaws.com/miscellaneousImages/1745346664664_air-purifying-plant-banner.webp",
          "position": 5,
          "level": 1,
          "created_at": "2025-04-21T08:47:32.000Z",
          "updated_at": "2025-04-21T09:35:04.000Z"
        },
        {
          "id": 11,
          "parent_id": 1,
          "name": "Low Maintenance Plants",
          "slug": "/low-maintenance-plants",
          "description": "Easy-to-care-for plants that require minimal attention and are ideal for beginners or busy people.",
          "is_active": true,
          "icon_url": "https://cdn-icons-gif.flaticon.com/16431/16431860.gif",
          "banner_url": "https://chaperoneimages.s3.ap-southeast-2.amazonaws.com/miscellaneousImages/1745347535058_low-maintenance-plant-banner.webp",
          "position": 6,
          "level": 1,
          "created_at": "2025-04-21T08:47:32.000Z",
          "updated_at": "2025-04-21T09:35:21.000Z"
        },
        {
          "id": 12,
          "parent_id": 1,
          "name": "Hanging Plants",
          "slug": "/hanging-plants",
          "description": "Plants that can be hung from baskets or walls, perfect for adding greenery to small spaces or enhancing your decor.",
          "is_active": true,
          "icon_url": "https://cdn-icons-gif.flaticon.com/12749/12749953.gif",
          "banner_url": "https://chaperoneimages.s3.ap-southeast-2.amazonaws.com/miscellaneousImages/1745347057823_hanging-plant-banner.webp",
          "position": 7,
          "level": 1,
          "created_at": "2025-04-21T08:47:32.000Z",
          "updated_at": "2025-04-21T09:35:38.000Z"
        },
        {
          "id": 13,
          "parent_id": 1,
          "name": "Summer Plants",
          "slug": "/summer-plants",
          "description": "Plants that thrive in hot weather, requiring plenty of sunlight and water to survive during summer months.",
          "is_active": true,
          "icon_url": "https://cdn-icons-png.flaticon.com/128/14734/14734369.png",
          "banner_url": "https://chaperoneimages.s3.ap-southeast-2.amazonaws.com/miscellaneousImages/1745347582605_summer-plant-banner.webp",
          "position": 8,
          "level": 1,
          "created_at": "2025-04-21T08:47:32.000Z",
          "updated_at": "2025-04-21T09:36:16.000Z"
        }
      ]
    },
    {
      "parent_id": 2,
      "parent_name": "Pots",
      "parent_slug": "/pots",
      "parent_description": "Explore a collection of stylish, durable, and functional pots for all your plants.",
      "parent_is_active": true,
      "subcategories": [
        {
          "id": 3,
          "parent_id": 2,
          "name": "Ceramic Pot",
          "slug": "/ceramic-pot",
          "description": "High-quality ceramic pots perfect for both indoor and outdoor gardening. Elegant and durable.",
          "is_active": true,
          "icon_url": "https://cdn-icons-gif.flaticon.com/12836/12836198.gif",
          "banner_url": "https://chaperoneimages.s3.ap-southeast-2.amazonaws.com/miscellaneousImages/1745347828284_ceramic-pot-banner.webp",
          "position": 1,
          "level": 1,
          "created_at": "2025-04-21T08:43:24.000Z",
          "updated_at": "2025-04-21T09:32:29.000Z"
        },
        {
          "id": 4,
          "parent_id": 2,
          "name": "Plastic Pot",
          "slug": "/plastic-pot",
          "description": "Durable and lightweight pots ideal for growing indoor and outdoor plants. Available in various sizes and colors.",
          "is_active": true,
          "icon_url": "https://cdn-icons-png.flaticon.com/512/1055/1055670.png",
          "banner_url": "https://chaperoneimages.s3.ap-southeast-2.amazonaws.com/miscellaneousImages/1745347886018_plastic-pot-banner.webp",
          "position": 2,
          "level": 1,
          "created_at": "2025-04-21T08:43:24.000Z",
          "updated_at": "2025-04-21T09:32:43.000Z"
        },        
        {
          "id": 5,
          "parent_id": 2,
          "name": "Railing Planter",
          "slug": "/railing-planter",
          "description": "Stylish planters that hang on balcony railings. Ideal for compact gardening spaces.",
          "is_active": true,
          "icon_url": "https://cdn-icons-gif.flaticon.com/18997/18997598.gif",
          "banner_url": "https://chaperoneimages.s3.ap-southeast-2.amazonaws.com/miscellaneousImages/1745347853747_railing-planter-banner.webp",
          "position": 3,
          "level": 1,
          "created_at": "2025-04-21T08:43:24.000Z",
          "updated_at": "2025-04-21T09:33:04.000Z"
        }
      ]
    }
  ]
  