import prisma from "../utils/prismaClient.js";

const createWishlist = async (cartItem) => {
  return await prisma.wishList.create({
    data: cartItem,
  });
};

const updateWishlist = async (cartItem) => {
  const existingItem = await prisma.wishList.findFirst({
    where: {
      userId: cartItem.userId,
      boothId: cartItem.boothId,
      menuId: cartItem.menuId,
    },
  });
  return await prisma.wishList.update({
    where: {
      id: existingItem.id,
    },
    data: {
      cnt: cartItem.cnt,
      price: cartItem.price * cartItem.cnt,
    },
  });
};

const deleteWishlist = async (wishlistId) => {
  return await prisma.wishList.delete({
    where: {
      id: wishlistId,
    },
  });
};

const getWishlists = async (userId, boothId) => {
  const wishlists = await prisma.wishList.findMany({
    where: {
      userId: userId,
      boothId: boothId,
      status: "PENDING",
    },
    include: {
      menu: {
        select: {
          id: true,
          name: true,
          price: true,
        },
      },
      booth: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  // data 배열로 직접 반환
  return {
    data: wishlists,
  };
};

const getWaitingComment = async (wishlistId) => {
  return await prisma.wishList.findFirst({
    where: {
      id: wishlistId,
    },
    include: {
      booth: {
        select: {
          id: true,
          waitingTime: true,
        },
      },
    },
  });
};

const updateWishlistStatus = async (wishlistId, status) => {
  return await prisma.wishList.update({
    where: { id: wishlistId },
    data: { status },
  });
};

const isPay = async (wishlistIds) => {
  return await prisma.wishList.findMany({
    where: { id: { in: wishlistIds } },
    select: {
      status: true,
    },
  });
};

export default {
  createWishlist,
  updateWishlist,
  deleteWishlist,
  getWishlists,
  getWaitingComment,
  updateWishlistStatus,
  isPay,
};
