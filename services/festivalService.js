import festivalRepository from "../repositorys/festivalRepository.js";

const patchFestivalImg = async (festivalId, mapImage) => {
  const festivalPatch = await festivalRepository.festivalImagePatch(
    festivalId,
    mapImage
  );
  return festivalPatch;
};

const getFestival = async (cursor, limit, keyword, month) => {
  const festival = await festivalRepository.getFestival(
    cursor,
    limit,
    keyword,
    month
  );
  return festival;
};

const getFestivalById = async (festivalId) => {
  const festival = await festivalRepository.getFestivalById(festivalId);
  return festival;
};

export default { patchFestivalImg, getFestival, getFestivalById };
