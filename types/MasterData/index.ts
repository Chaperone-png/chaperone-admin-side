export interface Plant {
  id: number;
  name: string;
  description: string | undefined;
  scientific_name: string | undefined;
  about: string | undefined;
  care_instructions: string | undefined;
  category: any | undefined;
  light_effeciency_description: string | undefined;
  light_effeciency_value: string | undefined;
  maintenance_type: string | undefined;
  water_schedule_description: string | undefined;
  water_schedule_value: string | undefined;
  zodiac_sign: string | undefined;
  plant_benefits: any | undefined;
  plant_benefits_summary: string | undefined;
  plant_care_tips: any | undefined;
  plant_care_tips_summary: string | undefined;
  tags: any | undefined;
  faqs: any | undefined;
  meta_description: string | undefined;
  meta_title: string | undefined;
  meta_h1: string | undefined;
  meta_keywords: string | undefined;
  created_at: string | undefined;
  updated_at: string | undefined;
}

export interface AddPlantPaylod {
  name: string ;
  description: string;
  scientific_name: string;
  about: string;
  care_instructions: string;
  category: any;
  light_effeciency_description: string;
  light_effeciency_value: string;
  maintenance_type: string;
  water_schedule_description: string;
  water_schedule_value: string;
  zodiac_sign: string;
  plant_benefits: any;
  plant_benefits_summary: string;
  plant_care_tips: any;
  plant_care_tips_summary: string;
  tags: any;
  faqs: any;
  meta_description: string;
  meta_title: string;
  meta_h1: string;
  meta_keywords: string;
}


export interface Pot {
  id: number;
  name: string;
  description: string | undefined;
  category: any | undefined;
  tags: any | undefined;
  faqs: any | undefined;
  meta_description: string | undefined;
  meta_title: string | undefined;
  meta_h1: string | undefined;
  meta_keywords: string | undefined;
  created_at: string | undefined;
  updated_at: string | undefined;
}
