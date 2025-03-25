import noticeRepository from "../repositorys/noticeRepository.js";
import checkUser from "../utils/checkUser.js";
import notificationRepository from "../repositorys/notificationRepository.js";
import participationRepository from "../repositorys/participationRepository.js";
import { sendNotification } from "../app.js";

const deleteNotice = async (userId, festivalId, noticeId, userRole) => {
  if (userRole !== "ADMIN") {
    throw new Error("관리자가 아닙니다.");
  }
  await checkUser(userId, festivalId);
  const data = await noticeRepository.deleteNotice(noticeId);
  return data;
};

const getNotice = async (festivalId, page, pageSize, orderBy) => {
  const { data, totalPages } = await noticeRepository.getNotice(
    festivalId,
    page,
    pageSize,
    orderBy
  );
  return { data, totalPages };
};

const patchNotice = async (userId, festivalId, noticeId, userRole, content) => {
  if (userRole !== "ADMIN") {
    throw new Error("관리자가 아닙니다.");
  }
  await checkUser(userId, festivalId);
  const data = await noticeRepository.patchNotice(userId, noticeId, content);
  return data;
};

const createNotice = async (userId, festivalId, userRole, content) => {
  if (userRole !== "ADMIN") {
    throw new Error("관리자가 아닙니다.");
  }
  await checkUser(userId, festivalId);

  const data = await noticeRepository.createNotice(userId, festivalId, content);

  const userList = await participationRepository.participationManyCheck(
    festivalId
  );

  await Promise.all(
    userList.map(async (user) => {
      await notificationRepository.createNoticeNotification(
        user.userId,
        content
      );
      sendNotification(user.userId, {
        type: "notice",
        message: content,
        data: { noticeId: data.id },
        createdAt: new Date(),
      });
    })
  );
  return data;
};

export default { getNotice, createNotice, patchNotice, deleteNotice };
