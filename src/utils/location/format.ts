export const formatLocation = (city: string, state: string): string => {
  return `${city}, ${state}`;
};

export const formatServiceArea = (city: string, surroundingCities: string[]): string => {
  if (!surroundingCities.length) return city;
  
  const areaList = [city, ...surroundingCities];
  if (areaList.length === 2) return areaList.join(' and ');
  
  const last = areaList.pop();
  return `${areaList.join(', ')}, and ${last}`;
};