import boothService from "../services/boothService.js";
import asyncHandle from "../middleware/error/asyncHandler.js";

const createBooth = asyncHandle(async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { festivalId } = req.params;
    const image = req.file ? req.file.location : undefined;
    const {
      name,
      content,
      boothType,
      typeCategory,
      accountNumber,
      bankName,
      businessNumber,
    } = req.body;
    const booth = await boothService.createBooth(
      parseInt(userId),
      parseInt(festivalId),
      {
        name,
        content,
        image,
        boothType,
        typeCategory,
        accountNumber,
        bankName,
        businessNumber,
      }
    );
    res.status(201).send(booth);
  } catch (error) {
    next(error);
  }
});

const getBoothAdmin = asyncHandle(async (req, res, next) => {
  try {
    const { id: adminId, role: userRole } = req.user;
    const { festivalId } = req.params;
    const {
      page = 1,
      pageSize = 5,
      orderBy = "recent",
      keyword = "",
      type = "",
    } = req.query;

    const booths = await boothService.getBoothAdmin(
      parseInt(adminId),
      parseInt(festivalId),
      parseInt(page),
      parseInt(pageSize),
      orderBy,
      keyword,
      type,
      userRole
    );

    res.status(200).send(booths);
  } catch (error) {
    next(error);
  }
});

const getBooths = asyncHandle(async (req, res, next) => {
  try {
    const { festivalId } = req.params;
    const {
      page = 1,
      pageSize = 5,
      orderBy = "recent",
      keyword = "",
      type = "",
    } = req.query;

    const booths = await boothService.getBooths(
      parseInt(festivalId),
      parseInt(page),
      parseInt(pageSize),
      orderBy,
      keyword,
      type
    );

    res.status(200).send(booths);
  } catch (error) {
    next(error);
  }
});

const getBooth = asyncHandle(async (req, res, next) => {
  try {
    const { boothId } = req.params;

    const booth = await boothService.getBooth(parseInt(boothId));

    res.status(200).send(booth);
  } catch (error) {
    next(error);
  }
});

const updateBooth = asyncHandle(async (req, res, next) => {
  try {
    const { id: userId, role: userRole } = req.user;
    const { festivalId, boothId } = req.params;
    const image = req.file ? req.file.location : undefined;
    const {
      name,
      content,
      boothType,
      typeCategory,
      accountNumber,
      bankName,
      waitingTime,
    } = req.body;

    const booth = await boothService.updateBooth(
      parseInt(festivalId),
      parseInt(boothId),
      parseInt(userId),
      userRole,
      {
        name,
        content,
        image,
        boothType,
        typeCategory,
        accountNumber,
        bankName,
        waitingTime,
      }
    );
    res.status(200).send(booth);
  } catch (error) {
    next(error);
  }
});

const getMyBooths = asyncHandle(async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { festivalId } = req.params;

    const booths = await boothService.getMyBooths(
      parseInt(userId),
      parseInt(festivalId)
    );

    res.status(200).send(booths);
  } catch (error) {
    next(error);
  }
});

const getBoothName = asyncHandle(async (req, res, next) => {
  try {
    const { festivalId } = req.params;
    const booths = await boothService.getBoothName(parseInt(festivalId));
    res.status(200).send(booths);
  } catch (error) {
    next(error);
  }
});

const deleteBooth = asyncHandle(async (req, res, next) => {
  try {
    const { id: userId, role: userRole } = req.user;
    const { festivalId, boothId } = req.params;

    await boothService.deleteBooth(
      parseInt(boothId),
      parseInt(userId),
      parseInt(festivalId),
      userRole
    );

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

const acceptBooth = asyncHandle(async (req, res, next) => {
  try {
    const { id: adminId, role: userRole } = req.user;
    const { festivalId, boothId } = req.params;
    const { location, type } = req.body;

    await boothService.acceptBooth({
      adminId: parseInt(adminId),
      festivalId: parseInt(festivalId),
      boothId: parseInt(boothId),
      location,
      type,
      userRole,
    });

    res.status(200).send({ message: "부스 승인이 완료되었습니다." });
  } catch (error) {
    next(error);
  }
});

export default {
  createBooth,
  getBoothAdmin,
  getBooths,
  getBooth,
  updateBooth,
  getMyBooths,
  deleteBooth,
  getBoothName,
  acceptBooth,
};
