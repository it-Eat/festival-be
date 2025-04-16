import festivalService from "../services/festivalService.js";
import asyncHandle from "../middleware/error/asyncHandler.js";
const patchFestivalController = asyncHandle(async (req, res, next) => {
  try {
    const { festivalId } = req.params;
    const mapImage = req.file ? req.file.location : undefined;
    const data = await festivalService.patchFestivalImg(
      parseInt(festivalId),
      mapImage
    );
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

const getFestival = asyncHandle(async (req, res, next) => {
  try {
    const { limit, cursor, keyword, month } = req.query;
    const data = await festivalService.getFestival(
      parseInt(cursor) || null,
      parseInt(limit) || 12,
      keyword,
      month
    );
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

const getFestivalById = asyncHandle(async (req, res, next) => {
  try {
    const { festivalId } = req.params;
    const data = await festivalService.getFestivalById(parseInt(festivalId));
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

export default {
  patchFestival: patchFestivalController,
  getFestival,
  getFestivalById,
};
