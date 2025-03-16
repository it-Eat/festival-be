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
    const { limit, cursor, keyword } = req.query;
    const data = await festivalService.getFestival(
      parseInt(cursor) || 1,
      parseInt(limit) || 10,
      keyword
    );
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

export default { patchFestival: patchFestivalController, getFestival };
