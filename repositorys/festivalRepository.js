import prisma from "../utils/prismaClient.js";

const festivalImagePatch = async (festivalId, mapImage) => {
  const data = await prisma.festival.update({
    where: {
      id: festivalId,
    },
    data: {
      mapImage: mapImage,
    },
  });
  return data;
};

const getFestival = async (cursor, limit, keyword) => {
  const data = await prisma.festival.findMany({
    where: {
      festivalName: {
        contains: keyword,
        mode: "insensitive",
      },
      ...(cursor ? { id: { gt: cursor } } : {}),
    },
    take: limit,
    orderBy: {
      id: "asc",
    },
  });

  return {
    items: data,
    nextCursor: data.length === limit ? data[data.length - 1].id : null,
  };
};
export default { festivalImagePatch, getFestival };
