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

const getFestival = async (cursor, limit, keyword, month) => {
  const nowDate = new Date();
  const currentYear = nowDate.getFullYear();
  const monthStr = month ? month.toString().padStart(2, "0") : null;

  let cursorItem = null;
  if (cursor) {
    cursorItem = await prisma.festival.findUnique({
      where: { id: parseInt(cursor) },
      select: { id: true, eventStartDate: true },
    });
  }

  // 기본 where 조건
  const whereCondition = {
    eventStartDate: {
      not: null,
    },
    festivalName: {
      contains: keyword || "",
      mode: "insensitive",
    },
  };

  // 월 필터링 조건 추가
  if (monthStr) {
    whereCondition.OR = [
      // 시작일이 해당 월인 경우
      {
        eventStartDate: {
          startsWith: `${currentYear}${monthStr}`,
        },
      },
      // 종료일이 해당 월인 경우
      {
        eventEndDate: {
          startsWith: `${currentYear}${monthStr}`,
        },
      },
      // 시작일과 종료일이 다른 월에 걸쳐있는 경우
      {
        AND: [
          {
            eventStartDate: {
              lte: `${currentYear}${monthStr}31`,
            },
          },
          {
            eventEndDate: {
              gte: `${currentYear}${monthStr}01`,
            },
          },
        ],
      },
    ];
  }

  // 커서 조건 추가
  if (cursorItem && cursorItem.eventStartDate) {
    // 월 필터링이 있는 경우 기존 OR 조건을 보존
    const cursorCondition = {
      OR: [
        { eventStartDate: { lt: cursorItem.eventStartDate } },
        {
          eventStartDate: cursorItem.eventStartDate,
          id: { gt: cursorItem.id },
        },
      ],
    };

    // 월 필터링이 있는 경우 AND로 조건 결합
    if (monthStr) {
      whereCondition.AND = [{ OR: whereCondition.OR }, cursorCondition];
      delete whereCondition.OR;
    } else {
      whereCondition.OR = cursorCondition.OR;
    }
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
