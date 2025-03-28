import festivalRepository from "../repositorys/festivalRepository.js";

const patchFestivalImg = async (festivalId, mapImage) => {
  const festivalPatch = await festivalRepository.festivalImagePatch(
    festivalId,
    mapImage
  );
  return festivalPatch;
};

const getFestival = async (cursor, limit, keyword) => {
  const festival = await festivalRepository.getFestival(cursor, limit, keyword);
  return festival;
};

const getFestivalById = async (festivalId) => {
  const festival = await festivalRepository.getFestivalById(festivalId);
  return festival;
};

export default { patchFestivalImg, getFestival, getFestivalById };
