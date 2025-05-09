import prisma from "../utils/prismaClient.js";

const createBooth = (userId, festivalId, data, boothImage) => {
  return prisma.booth.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      festival: {
        connect: {
          id: festivalId,
        },
      },
      ...data,
    },
  });
};

const getBoothAdmin = async (
  festivalId,
  page,
  pageSize,
  orderBy,
  keyword,
  type
) => {
  const skip = (page - 1) * pageSize;
  const where = {
    festivalId: festivalId,
  };

  const validBoothTypes = ["EAT", "PLAY", "ETC"];
  if (type && validBoothTypes.includes(type)) {
    where.boothType = type;
  }

  if (keyword) {
    where.AND = [
      {
        OR: [
          { name: { contains: keyword, mode: "insensitive" } },
          { content: { contains: keyword, mode: "insensitive" } },
        ],
      },
    ];
  }

  const validOrders = ["recent", "older"];
  if (!validOrders.includes(orderBy)) {
    orderBy = "recent";
  }

  // 총 개수 조회
  const total = await prisma.booth.count({
    where,
  });

  // 부스 데이터 조회
  const booths = await prisma.booth.findMany({
    where,
    take: pageSize,
    skip,
    orderBy: { createdAt: orderBy == "recent" ? "desc" : "asc" },
    include: {
      user: {
        select: {
          id: true,
          userName: true,
          nickname: true,
          role: true,
        },
      },
      festival: true,
    },
  });

  return {
    booths,
    total,
  };
};

const getBooths = async (
  festivalId,
  page,
  pageSize,
  orderBy,
  keyword,
  type
) => {
  const skip = (page - 1) * pageSize;
  const where = {
    festivalId: festivalId,
    accept: "ACCEPT",
  };

  const validBoothTypes = ["EAT", "PLAY", "ETC"];
  if (type && validBoothTypes.includes(type) && type === "EAT") {
    where.boothType = type;
  } else {
    where.boothType = {
      in: ["PLAY", "ETC"],
    };
  }

  if (keyword) {
    where.AND = [
      {
        OR: [
          { name: { contains: keyword, mode: "insensitive" } },
          { content: { contains: keyword, mode: "insensitive" } },
        ],
      },
    ];
  }

  const validOrders = ["recent", "older"];

  if (!validOrders.includes(orderBy)) {
    orderBy = "recent";
  }

  const booths = await prisma.booth.findMany({
    where,
    take: pageSize,
    skip,
    orderBy: { createdAt: orderBy == "recent" ? "desc" : "asc" },
    include: {
      user: {
        select: {
          id: true,
          userName: true,
          nickname: true,
          role: true,
        },
      },
      review: true,
      menu: true,
    },
  });
  const boothsWithAvgScore = booths.map((booth) => {
    const avgScore =
      booth.review.length > 0
        ? booth.review.reduce((sum, review) => sum + review.score, 0) /
          booth.review.length
        : 0;

    return {
      ...booth,
      avgReviewScore: parseFloat(avgScore.toFixed(1)),
    };
  });

  return boothsWithAvgScore;
};

const getBooth = async (boothId) => {
  const booth = await prisma.booth.findUnique({
    where: {
      id: boothId,
    },
    include: {
      user: {
        select: {
          id: true,
          userName: true,
          nickname: true,
          role: true,
        },
      },
      review: true,
      menu: true,
    },
  });
  const boothWithAvgScore = {
    ...booth,
    avgReviewScore: parseFloat(
      booth.review.reduce((sum, review) => sum + review.score, 0) /
        booth.review.length
    ).toFixed(1),
  };

  return boothWithAvgScore;
};

const updateBooth = (boothId, data) => {
  return prisma.booth.update({
    where: {
      id: boothId,
    },
    data: {
      ...data,
    },
  });
};

const BoothCheck = async (userId, boothId) => {
  const pay = await prisma.booth.findFirst({
    where: { userId: userId, id: boothId },
  });
  return pay;
};

const getMyBooths = (userId, festivalId) => {
  return prisma.booth.findFirst({
    where: {
      userId: userId,
      festivalId: festivalId,
    },
    include: {
      user: {
        select: {
          id: true,
          userName: true,
          nickname: true,
          role: true,
        },
      },
      festival: {
        select: {
          id: true,
          festivalCode: true,
          mapImage: true,
        },
      },
    },
  });
};

const getBoothName = (festivalId) => {
  return prisma.booth.findMany({
    where: {
      festivalId: festivalId,
    },
    select: {
      id: true,
      name: true,
    },
  });
};

const deleteBooth = (boothId) => {
  return prisma.booth.delete({
    where: {
      id: boothId,
    },
  });
};

const acceptBooth = async (boothId, location, type) => {
  const booth = await prisma.booth.update({
    where: {
      id: boothId,
    },
    data: {
      accept: type,
      location: location,
    },
  });
  return booth;
};

export default {
  createBooth,
  getBoothAdmin,
  getBooths,
  getBooth,
  updateBooth,
  getMyBooths,
  deleteBooth,
  getBoothName,
  BoothCheck,
  acceptBooth,
};
