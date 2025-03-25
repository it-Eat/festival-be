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
  // 커서가 있는 경우, 해당 레코드 찾기
  let cursorItem = null;
  if (cursor) {
    cursorItem = await prisma.festival.findUnique({
      where: { id: parseInt(cursor) }, // 숫자로 변환
      select: { id: true, eventStartDate: true },
    });
  }

  // cursorItem 또는 eventStartDate가 없는 경우를 처리
  const whereCondition = {
    eventStartDate: {
      not: null,
    },
    festivalName: {
      contains: keyword || "",
      mode: "insensitive",
    },
  };

  // 커서 조건은 cursorItem과 eventStartDate가 있을 때만 추가
  if (cursorItem && cursorItem.eventStartDate) {
    whereCondition.OR = [
      { eventStartDate: { lt: cursorItem.eventStartDate } },
      {
        eventStartDate: cursorItem.eventStartDate,
        id: { gt: cursorItem.id },
      },
    ];
  }

  const data = await prisma.festival.findMany({
    where: whereCondition,
    take: limit,
    orderBy: [{ eventStartDate: "desc" }, { id: "asc" }],
  });

  return {
    items: data,
    nextCursor: data.length === limit ? data[data.length - 1].id : null,
  };
};

const getFestivalById = async (festivalId) => {
  const data = await prisma.festival.findUnique({
    where: { id: festivalId },
  });
  return data;
};
export default { festivalImagePatch, getFestival, getFestivalById };
