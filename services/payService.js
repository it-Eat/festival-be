import payRepository from "../repositorys/payRepository.js";
import wishlistRepository from "../repositorys/wishlistRepository.js";
import boothRepository from "../repositorys/boothRepository.js";
import { sendBooth } from "../app.js";
import userRepository from "../repositorys/userRepository.js";
import menuRepository from "../repositorys/menuRepository.js";

function randomWaitingNumber(userId) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = userId.toString();

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

const createPay = async (userId, wishlistIds, totalPrice, payType) => {
  try {
    const waitingNumber = randomWaitingNumber(userId);

    const wishlistItems = await Promise.all(
      wishlistIds.map((id) => wishlistRepository.getWaitingComment(id))
    );

    if (wishlistItems.some((item) => !item)) {
      throw new Error("일부 장바구니 정보를 찾을 수 없습니다");
    }

    const boothId = wishlistItems[0].boothId;
    if (wishlistItems.some((item) => item.boothId !== boothId)) {
      throw new Error("서로 다른 부스의 상품은 함께 결제할 수 없습니다");
    }

    const isPay = await wishlistRepository.isPay(wishlistIds);
    if (isPay.some((item) => item.status === "PAID")) {
      throw new Error("이미 결제한 내역입니다.");
    }
    const userInfo = await userRepository.getUserById(userId);

    // pay 생성
    const pay = await payRepository.createPay({
      userId,
      price: totalPrice,
      payType,
      waitingNumber,
      boothId,
      wishList: {
        connect: wishlistIds.map((id) => ({ id })), // wishlist와 연결
      },
    });

    // 선택적: wishlist 상태 업데이트
    await Promise.all(
      wishlistIds.map((id) =>
        wishlistRepository.updateWishlistStatus(id, "PAID")
      )
    );
    const boothInfo = await boothRepository.getBooth(boothId);
    const menuInfo = await menuRepository.getIdMenu(wishlistItems[0].menuId);
    sendBooth(boothInfo.user.id, {
      type: "pay",
      message: `${userInfo.nickname}님 이 ${menuInfo.name}을 결제를 완료했습니다.
      `,
      data: {
        wishlistItems: wishlistItems,
        payId: pay,
        userInfo: userInfo,
      },
      createdAt: new Date(),
    });

    return {
      pay,
      waitingTime: wishlistItems[0].booth.waitingTime,
    };
  } catch (error) {
    throw new Error(`결제 생성 중 오류 발생: ${error.message}`);
  }
};

const getPaysByUserId = async (userId) => {
  try {
    const pays = await payRepository.getPaysByUserId(userId);
    return pays;
  } catch (error) {
    throw new Error(`결제 조회 중 오류 발생: ${error.message}`);
  }
};

const getPay = async (payId) => {
  try {
    const pay = await payRepository.getPay(payId);
    return pay;
  } catch (error) {
    throw new Error(`결제 조회 중 오류 발생: ${error.message}`);
  }
};

const getPayByBoothId = async (
  userId,
  boothId,
  page,
  pageSize,
  startDate,
  endDate
) => {
  const pay = await boothRepository.BoothCheck(userId, boothId);
  if (!pay) {
    throw new Error("권한이 없습니다.");
  }
  const payData = await payRepository.getPayByBoothId(
    boothId,
    page,
    pageSize,
    startDate,
    endDate
  );

  const totalPrice = payData.reduce((sum, pay) => sum + pay.price, 0);

  return { payData, totalPrice };
};
export default { createPay, getPaysByUserId, getPay, getPayByBoothId };
