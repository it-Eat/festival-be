import prisma from "../utils/prismaClient.js";

const user = [
  {
    userName: "영은",
    password: "",
    nickname: "영은",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "민수",
    password: "",
    nickname: "민수",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "세윤",
    password: "",
    nickname: "세윤",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "영한",
    password: "",
    nickname: "영한",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "수민",
    password: "",
    nickname: "수민",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "영수",
    password: "",
    nickname: "영수",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "영식",
    password: "",
    nickname: "영식",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "영호",
    password: "",
    nickname: "영호",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "영철",
    password: "",
    nickname: "영철",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "광수",
    password: "",
    nickname: "광수",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "상철",
    password: "",
    nickname: "상철",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "영숙",
    password: "",
    nickname: "영숙",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "정숙",
    password: "",
    nickname: "정숙",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "순자",
    password: "",
    nickname: "순자",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "영자",
    password: "",
    nickname: "영자",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "옥순",
    password: "",
    nickname: "옥순",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "현숙",
    password: "",
    nickname: "현숙",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "영호",
    password: "",
    nickname: "영호",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "애순",
    password: "",
    nickname: "에순",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "관식",
    password: "",
    nickname: "관식",
    provider: "KAKAO",
    role: "USER",
    refreshToken: "refreshToken",
  },
  {
    userName: "금명",
    password: "",
    nickname: "금명",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "은명",
    password: "",
    nickname: "은명",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "동명",
    password: "",
    nickname: "동명",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "춘옥",
    password: "",
    nickname: "춘옥",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "광례",
    password: "",
    nickname: "광례",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "한무",
    password: "",
    nickname: "한무",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "병철",
    password: "",
    nickname: "병철",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "민옥",
    password: "",
    nickname: "민옥",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "이숙",
    password: "",
    nickname: "이숙",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "종구",
    password: "",
    nickname: "종구",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "막천",
    password: "",
    nickname: "막천",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "계옥",
    password: "",
    nickname: "계옥",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "경옥",
    password: "",
    nickname: "경옥",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "삼보",
    password: "",
    nickname: "삼보",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "충수",
    password: "",
    nickname: "충수",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "양임",
    password: "",
    nickname: "양임",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "경자",
    password: "",
    nickname: "경자",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "상길",
    password: "",
    nickname: "상길",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "영란",
    password: "",
    nickname: "영란",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
  {
    userName: "오성",
    password: "",
    nickname: "오성",
    provider: "KAKAO",
    role: "SELLER",
    refreshToken: "refreshToken",
  },
];

const booth = [
  {
    festivalId: 2201,
    userId: 21,
    name: "교촌치킨",
    content: "교촌치킨입니다. 맛있는 치킨을 즐겨보세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%80%E1%85%AD%E1%84%8E%E1%85%A9%E1%86%AB.jpeg",
    boothType: "EAT",
    accept: "WAITING",
    accountNumber: "1234-7654-6546-1234",
    bankName: "KB",
    businessNumber: "asdfa-sdf3241",
  },
  {
    festivalId: 2201,
    userId: 22,
    name: "기영이숯불두마리",
    content: "기영이숯불두마리입니다. 맛있는 숯불구이를 즐겨보세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%80%E1%85%B5%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B5.jpeg",
    boothType: "EAT",
    accept: "WAITING",
    accountNumber: "1234-5678-9012-3456",
    bankName: "KB",
    businessNumber: "123-45-67890",
  },
  {
    festivalId: 2201,
    userId: 23,
    name: "명량핫도그",
    content: "명량핫도그입니다. 바삭하고 맛있는 핫도그를 만나보세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%85%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A1%E1%86%BA%E1%84%83%E1%85%A9%E1%84%80%E1%85%B3.jpeg",
    boothType: "EAT",
    accept: "WAITING",
    accountNumber: "2345-6789-0123-4567",
    bankName: "KAKAO",
    businessNumber: "234-56-78901",
  },
  {
    festivalId: 2201,
    userId: 24,
    name: "컴포즈커피",
    content: "컴포즈커피입니다. 향긋한 커피 한잔하세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%8C%E1%85%B3.jpeg",
    boothType: "EAT",
    accept: "WAITING",
    accountNumber: "3456-7890-1234-5678",
    bankName: "KAKAO",
    businessNumber: "345-67-89012",
  },
  {
    festivalId: 2201,
    userId: 25,
    name: "메가커피",
    content: "메가커피입니다. 다양한 음료를 즐겨보세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%86%E1%85%A6%E1%84%80%E1%85%A1%E1%84%8F%E1%85%A5%E1%84%91%E1%85%B5.jpeg",
    boothType: "EAT",
    accept: "WAITING",
    accountNumber: "4567-8901-2345-6789",
    bankName: "KAKAO",
    businessNumber: "456-78-90123",
  },
  {
    festivalId: 2201,
    userId: 26,
    name: "죠스떡볶이",
    content: "죠스떡볶이입니다. 매콤달콤한 떡볶이를 맛보세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8C%E1%85%AD%E1%84%89%E1%85%B3.jpeg",
    boothType: "EAT",
    accept: "WAITING",
    accountNumber: "5678-9012-3456-7890",
    bankName: "KAKAO",
    businessNumber: "567-89-01234",
  },
  {
    festivalId: 2201,
    userId: 27,
    name: "신전떡볶이",
    content: "신전떡볶이입니다. 특별한 맛의 떡볶이를 즐겨보세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB.jpeg",
    boothType: "EAT",
    accept: "WAITING",
    accountNumber: "6789-0123-4567-8901",
    bankName: "KAKAO",
    businessNumber: "678-90-12345",
  },
  {
    festivalId: 2201,
    userId: 28,
    name: "회오리감자",
    content: "회오리감자입니다. 바삭한 감자의 맛을 느껴보세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%92%E1%85%AC%E1%84%8B%E1%85%A9%E1%84%85%E1%85%B5%E1%84%80%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%A1.jpeg",
    boothType: "EAT",
    accept: "WAITING",
    accountNumber: "7890-1234-5678-9012",
    bankName: "TOSS",
    businessNumber: "789-01-23456",
  },
  {
    festivalId: 2201,
    userId: 29,
    name: "닭띠들의 닭꼬치",
    content: "닭띠들의 닭꼬치입니다. 특별한 양념의 닭꼬치를 맛보세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%83%E1%85%A1%E1%86%B0%E1%84%81%E1%85%A9%E1%84%8E%E1%85%B5.jpeg",
    boothType: "EAT",
    accept: "WAITING",
    accountNumber: "8901-2345-6789-0123",
    bankName: "TOSS",
    businessNumber: "890-12-34567",
  },
  {
    festivalId: 2201,
    userId: 30,
    name: "스시장인 초밥",
    content: "스시장인 초밥입니다. 신선한 초밥을 즐겨보세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%89%E1%85%B3%E1%84%89%E1%85%B5.jpeg",
    boothType: "EAT",
    accept: "WAITING",
    accountNumber: "9012-3456-7890-1234",
    bankName: "TOSS",
    businessNumber: "901-23-45678",
  },
  {
    festivalId: 2201,
    userId: 31,
    name: "페이스 페인팅",
    content:
      "전문 아티스트가 그려주는 특별한 페이스 페인팅! 귀여운 동물부터 멋진 슈퍼히어로까지 원하는 캐릭터로 변신해보세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B5%E1%86%BC.jpeg",
    boothType: "ETC",
    accept: "WAITING",
    accountNumber: "5315-7547-9879-4344",
    bankName: "TOSS",
    businessNumber: "901-23-45678",
  },
  {
    festivalId: 2201,
    userId: 32,
    name: "퍼스널 컬러",
    content: "나만의 퍼스널 컬러를 찾아보세요. 전문가의 컨설팅을 받아보세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%91%E1%85%A5%E1%84%89%E1%85%B3%E1%84%82%E1%85%A5%E1%86%AF%E1%84%8F%E1%85%A5%E1%86%AF%E1%84%85%E1%85%A5.jpeg",
    boothType: "ETC",
    accept: "WAITING",
    accountNumber: "1234-5678-9012-3456",
    bankName: "TOSS",
    businessNumber: "123-45-67890",
  },
  {
    festivalId: 2201,
    userId: 33,
    name: "무엇이든 물어보살 타로 및 사주",
    content: "당신의 운명이 궁금하다면? 타로와 사주로 알아보는 나의 미래",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%90%E1%85%A1%E1%84%85%E1%85%A9.jpeg",
    boothType: "ETC",
    accept: "WAITING",
    accountNumber: "2345-6789-0123-4567",
    bankName: "KAKAO",
    businessNumber: "234-56-78901",
  },
  {
    festivalId: 2201,
    userId: 34,
    name: "분실물 센터",
    content:
      "축제에서 잃어버린 물건을 찾아드립니다. 안전한 축제를 위한 분실물 센터입니다.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%B5%E1%86%AF%E1%84%86%E1%85%AE%E1%86%AF.jpeg",
    boothType: "ETC",
    accept: "WAITING",
    accountNumber: "3456-7890-1234-5678",
    bankName: "KB",
    businessNumber: "345-67-89012",
  },
  {
    festivalId: 2201,
    userId: 35,
    name: "추억을 저장하세요",
    content:
      "전문 포토그래퍼가 찍어드리는 인생샷! 즉석사진 인화 서비스도 제공합니다.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%8E%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%A7%E1%86%BC.png",
    boothType: "ETC",
    accept: "WAITING",
    accountNumber: "4567-8901-2345-6789",
    bankName: "TOSS",
    businessNumber: "456-78-90123",
  },
  {
    festivalId: 2201,
    userId: 36,
    name: "안전 활쏘기",
    content:
      "전통 활을 체험해보세요! 안전한 장비와 전문 강사의 지도로 즐기는 활쏘기 체험입니다.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8A%E1%85%A9%E1%84%80%E1%85%B5.jpeg",
    boothType: "PLAY",
    accept: "WAITING",
    accountNumber: "1234-5678-9012-3456",
    bankName: "TOSS",
    businessNumber: "123-45-67890",
  },
  {
    festivalId: 2201,
    userId: 37,
    name: "석고 방향제 만들기",
    content:
      "나만의 특별한 방향제를 만들어보세요! 다양한 향과 색상으로 세상에서 하나뿐인 방향제를 만들 수 있습니다.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%89%E1%85%A5%E1%86%A8%E1%84%80%E1%85%A9+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A3%E1%86%BC%E1%84%8C%E1%85%A6.jpeg",
    boothType: "PLAY",
    accept: "WAITING",
    accountNumber: "2345-6789-0123-4567",
    bankName: "KB",
    businessNumber: "234-56-78901",
  },
  {
    festivalId: 2201,
    userId: 38,
    name: "딱지 치기",
    content:
      "추억의 놀이 딱지치기! 직접 딱지를 접어보고 대결도 즐겨보세요. 우승자에게는 특별한 선물이 있습니다.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%84%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%B5%E1%84%8E%E1%85%B5%E1%84%80%E1%85%B5.jpeg",
    boothType: "PLAY",
    accept: "WAITING",
    accountNumber: "3456-7890-1234-5678",
    bankName: "SHINHAN",
    businessNumber: "345-67-89012",
  },
  {
    festivalId: 2201,
    userId: 39,
    name: "공기 놀이",
    content:
      "전통 공기놀이의 재미를 느껴보세요! 다양한 난이도의 공기놀이에 도전하고 상품도 받아가세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%80%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B5%E1%84%82%E1%85%A9%E1%86%AF%E1%84%8B%E1%85%B5.jpg",
    boothType: "PLAY",
    accept: "WAITING",
    accountNumber: "4567-8901-2345-6789",
    bankName: "WOORI",
    businessNumber: "456-78-90123",
  },
  {
    festivalId: 2201,
    userId: 40,
    name: "줄넘기",
    content:
      "긴 줄넘기부터 개인 줄넘기까지! 친구들과 함께 즐기는 신나는 줄넘기 놀이에 참여해보세요.",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8C%E1%85%AE%E1%86%AF%E1%84%82%E1%85%A5%E1%86%B7%E1%84%80%E1%85%B5.jpeg",
    boothType: "PLAY",
    accept: "WAITING",
    accountNumber: "5678-9012-3456-7890",
    bankName: "KAKAO",
    businessNumber: "567-89-01234",
  },
];

const menu = [
  {
    boothId: 1,
    name: "교촌 콤보",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%80%E1%85%AD%E1%84%8E%E1%85%A9%E1%86%AB%E1%84%8F%E1%85%A9%E1%86%B7%E1%84%87%E1%85%A9.jpg",
    price: 20000,
    soldOut: false,
  },
  {
    boothId: 1,
    name: "레드 콤보",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%85%E1%85%A6%E1%84%83%E1%85%B3%E1%84%8F%E1%85%A9%E1%86%B7%E1%84%87%E1%85%A9.jpg",
    price: 21000,
    soldOut: false,
  },
  {
    boothId: 1,
    name: "반반 콤보",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%87%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8F%E1%85%A9%E1%86%B7%E1%84%87%E1%85%A9.jpg",
    price: 22000,
    soldOut: false,
  },
  {
    boothId: 1,
    name: "옥수수통안심 콤보",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8B%E1%85%A9%E1%86%A8%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%84%90%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%89%E1%85%B5%E1%86%B7.jpg",
    price: 20000,
    soldOut: false,
  },
  {
    boothId: 1,
    name: "허니오리지날",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%92%E1%85%A5%E1%84%82%E1%85%B5%E1%84%8B%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%82%E1%85%A1%E1%86%AF.jpg",
    price: 19000,
    soldOut: false,
  },
  {
    boothId: 2,
    name: "까만양념 숯불치킨",
    image: "",
    price: 24000,
    soldOut: false,
  },
  {
    boothId: 2,
    name: "돼껍누들 양념숯불",
    image: "",
    price: 24000,
    soldOut: false,
  },
  {
    boothId: 2,
    name: "막창누들 숯불치킨",
    image: "",
    price: 24000,
    soldOut: false,
  },
  {
    boothId: 2,
    name: "모짜치즈 빨간양념",
    image: "",
    price: 24000,
    soldOut: false,
  },
  {
    boothId: 2,
    name: "순살 반반숯불",
    image: "",
    price: 24000,
    soldOut: false,
  },
  {
    boothId: 3,
    name: "럭키 치즈떡볶이 세트",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%85%E1%85%A5%E1%86%A8%E1%84%8F%E1%85%B5+%E1%84%8E%E1%85%B5%E1%84%83%E1%85%B3%E1%84%84%E1%85%A5%E1%86%A8%E1%84%87%E1%85%A9%E1%86%A9%E1%84%8B%E1%85%B5+%E1%84%89%E1%85%A6%E1%84%90%E1%85%B3.jpg",
    price: 18600,
    soldOut: false,
  },
  {
    boothId: 3,
    name: "럭키 치즈떡볶이",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%85%E1%85%A5%E1%86%A8%E1%84%8F%E1%85%B5+%E1%84%8E%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%84%E1%85%A5%E1%86%A8%E1%84%87%E1%85%A9%E1%86%A9%E1%84%8B%E1%85%B5.jpg",
    price: 11000,
    soldOut: false,
  },
  {
    boothId: 3,
    name: "의성 마늘 크런치 핫도그",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8B%E1%85%B4%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%86%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AF+%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A5%E1%86%AB%E1%84%8E%E1%85%B5+%E1%84%92%E1%85%A1%E1%86%BA%E1%84%83%E1%85%A9%E1%84%80%E1%85%B3.jpg",
    price: 3800,
    soldOut: false,
  },
  {
    boothId: 3,
    name: "인기폭탄 세트",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%80%E1%85%B5%E1%84%91%E1%85%A9%E1%86%A8%E1%84%90%E1%85%A1%E1%86%AB+%E1%84%89%E1%85%A6%E1%84%90%E1%85%B3.jpg",
    price: 18000,
    soldOut: false,
  },
  {
    boothId: 3,
    name: "치즈 폭탄 세트",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8E%E1%85%B5%E1%84%8C%E1%85%B3+%E1%84%91%E1%85%A9%E1%86%A8%E1%84%90%E1%85%A1%E1%86%AB+%E1%84%89%E1%85%A6%E1%84%90%E1%85%B3.jpg",
    price: 18000,
    soldOut: false,
  },
  {
    boothId: 4,
    name: "아메리카노",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8B%E1%85%A1%E1%84%86%E1%85%A6%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%82%E1%85%A9.jpeg",
    price: 1800,
    soldOut: false,
  },
  {
    boothId: 4,
    name: "딸기스무디",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%84%E1%85%A1%E1%86%AF%E1%84%80%E1%85%B5%E1%84%89%E1%85%B3%E1%84%86%E1%85%AE%E1%84%83%E1%85%B5.jpg",
    price: 4300,
    soldOut: false,
  },
  {
    boothId: 4,
    name: "리얼초코자바칩프라페",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%A9%E1%84%8F%E1%85%A9%E1%84%8C%E1%85%A1%E1%84%87%E1%85%A1%E1%84%8E%E1%85%B5%E1%86%B8%E1%84%91%E1%85%B3%E1%84%85%E1%85%A1%E1%84%91%E1%85%A6.jpg",
    price: 4500,
    soldOut: false,
  },
  {
    boothId: 4,
    name: "커피밀크쉐이크",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8F%E1%85%A5%E1%84%91%E1%85%B5%E1%84%86%E1%85%B5%E1%86%AF%E1%84%8F%E1%85%B3%E1%84%89%E1%85%B0%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3.jpg",
    price: 5000,
    soldOut: false,
  },
  {
    boothId: 5,
    name: "아메리카노",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8B%E1%85%A1%E1%84%86%E1%85%A6%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%82%E1%85%A9.jpg",
    price: 2500,
    soldOut: false,
  },
  {
    boothId: 5,
    name: "감자빵세트",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%80%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%A1%E1%84%88%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6%E1%84%90%E1%85%B3.jpg",
    price: 6000,
    soldOut: false,
  },
  {
    boothId: 5,
    name: "아이스티",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%B5.jpg",
    price: 3500,
    soldOut: false,
  },
  {
    boothId: 5,
    name: "쿠키프라페",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8F%E1%85%AE%E1%84%8F%E1%85%B5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A1%E1%84%91%E1%85%A6.jpg",
    price: 4400,
    soldOut: false,
  },
  {
    boothId: 5,
    name: "큐브라떼",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8F%E1%85%B2%E1%84%87%E1%85%B3%E1%84%85%E1%85%A1%E1%84%84%E1%85%A6.jpg",
    price: 4700,
    soldOut: false,
  },
  {
    boothId: 6,
    name: "만두",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%AE.jpeg",
    price: 4500,
    soldOut: false,
  },
  {
    boothId: 6,
    name: "죠스 떡볶이",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8C%E1%85%AD%E1%84%89%E1%85%B3%E1%84%84%E1%85%A5%E1%86%A8%E1%84%87%E1%85%A9%E1%86%A9%E1%84%8B%E1%85%B5.png",
    price: 8500,
    soldOut: false,
  },
  {
    boothId: 6,
    name: "모듬튀김",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%86%E1%85%A9%E1%84%83%E1%85%B3%E1%86%B7%E1%84%90%E1%85%B1%E1%84%80%E1%85%B5%E1%86%B7.jpeg",
    price: 8500,
    soldOut: false,
  },
  {
    boothId: 6,
    name: "수제 튀김",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A6%E1%84%90%E1%85%B1%E1%84%80%E1%85%B5%E1%86%B7.png",
    price: 5000,
    soldOut: false,
  },
  {
    boothId: 6,
    name: "순대",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%89%E1%85%AE%E1%86%AB%E1%84%83%E1%85%A2.png",
    price: 4500,
    soldOut: false,
  },
  {
    boothId: 7,
    name: "떡볶이",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%84%E1%85%A5%E1%86%A8%E1%84%87%E1%85%A9%E1%86%A9%E1%84%8B%E1%85%B5.jpg",
    price: 4000,
    soldOut: false,
  },
  {
    boothId: 7,
    name: "로제떡볶이",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%84%84%E1%85%A5%E1%86%A8%E1%84%87%E1%85%A9%E1%86%A9%E1%84%8B%E1%85%B5.jpg",
    price: 6000,
    soldOut: false,
  },
  {
    boothId: 7,
    name: "신전치즈김밥",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8E%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%80%E1%85%B5%E1%86%B7%E1%84%87%E1%85%A1%E1%86%B8.jpg",
    price: 4000,
    soldOut: false,
  },
  {
    boothId: 7,
    name: "잡채말이",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8C%E1%85%A1%E1%86%B8%E1%84%8E%E1%85%A2%E1%84%86%E1%85%A1%E1%86%AF%E1%84%8B%E1%85%B5.jpg",
    price: 1700,
    soldOut: false,
  },
  {
    boothId: 7,
    name: "튀김오뎅",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%90%E1%85%B1%E1%84%80%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%A9%E1%84%83%E1%85%A6%E1%86%BC.jpg",
    price: 1700,
    soldOut: false,
  },
  {
    boothId: 8,
    name: "회오리감자",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%92%E1%85%AC%E1%84%8B%E1%85%A9%E1%84%85%E1%85%B5%E1%84%80%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%A1.jpg",
    price: 3500,
    soldOut: false,
  },
  {
    boothId: 9,
    name: "삼겹살 꼬치",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A7%E1%86%B8%E1%84%89%E1%85%A1%E1%86%AF+%E1%84%81%E1%85%A9%E1%84%8E%E1%85%B5.jpeg",
    price: 4500,
    soldOut: false,
  },
  {
    boothId: 9,
    name: "순살 닭꼬치",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%89%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A1%E1%86%AF+%E1%84%83%E1%85%A1%E1%86%B0%E1%84%81%E1%85%A9%E1%84%8E%E1%85%B5.jpeg",
    price: 4500,
    soldOut: false,
  },
  {
    boothId: 9,
    name: "파닭 닭꼬치",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%91%E1%85%A1%E1%84%83%E1%85%A1%E1%86%B0+%E1%84%83%E1%85%A1%E1%86%B0%E1%84%81%E1%85%A9%E1%84%8E%E1%85%B5.jpeg",
    price: 4500,
    soldOut: false,
  },
  {
    boothId: 10,
    name: "랜덤스시 30p",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%A5%E1%86%B7%E1%84%89%E1%85%B3%E1%84%89%E1%85%B5.jpg",
    price: 25000,
    soldOut: false,
  },
  {
    boothId: 10,
    name: "광어 10p",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%80%E1%85%AA%E1%86%BC%E1%84%8B%E1%85%A5.jpg",
    price: 12000,
    soldOut: false,
  },
  {
    boothId: 10,
    name: "연어 10p",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%8B%E1%85%A5.jpg",
    price: 12000,
    soldOut: false,
  },
  {
    boothId: 10,
    name: "광어 연어 10p",
    image:
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%80%E1%85%AA%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%AB.jpg",
    price: 12000,
    soldOut: false,
  },
];

const board = [
  {
    userId: 1,
    festivalId: 2201,
    title: "프로필 사진 만들고 가요!!",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%8C%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg",
    ],
    content: "저녁엔 사람 너무 많던데 오전에 가서 인생사진 찍고 가세요!!",
    boardType: "BOARD",
    lossType: "NULL",
  },
  {
    userId: 2,
    festivalId: 2201,
    title: "여기 꼭 오셔야해요!",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%8C%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B52.jpg",
    ],
    content: "기차 앞에서 찍은 사진이라 좀 흐릿해요 ㅠㅠ",
    boardType: "BOARD",
    lossType: "NULL",
  },
  {
    userId: 3,
    festivalId: 2201,
    title: "적당한 시간에 사진 한장",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%8C%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B53.jpg",
    ],
    content: "사진 한컷!",
    boardType: "BOARD",
    lossType: "NULL",
  },
  {
    userId: 4,
    festivalId: 2201,
    title: "와 여기 사람 진짜 많네요",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%8C%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B54.jpg",
    ],
    content: "다들 일 안하시나 ...? 오늘 월요일인데 왜 이렇게 많아요??",
    boardType: "BOARD",
    lossType: "NULL",
  },
  {
    userId: 5,
    festivalId: 2201,
    title: "군항제는 여좌천에서 사진한방 찍고 가세요!!",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%8C%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B55.png",
    ],
    content: "여좌천에서 사진 한방 찍고 가세요!! 제발요!",
    boardType: "BOARD",
    lossType: "NULL",
  },
  {
    userId: 6,
    festivalId: 2201,
    title: "제가 찍어도 놀랍네요 진짜 이뻐요",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%8C%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B56.jpg",
    ],
    content: "제가 찍어도 놀랍네요 진짜 이뻐요 매년 와야겠어요",
    boardType: "BOARD",
    lossType: "NULL",
  },
  {
    userId: 7,
    festivalId: 2201,
    title: "여기 말고 또 어디 가야하나요??",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%8C%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B57.jpg",
    ],
    content: "어디로 가면 사람이 또 많을까요 ?? 정보좀 부탁드려요!!",
    boardType: "BOARD",
    lossType: "NULL",
  },
  {
    userId: 8,
    festivalId: 2201,
    title: "다들 커플이네요 ㅠㅠ",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%8C%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B58.jpg",
    ],
    content: "친구랑 왔는데 다들 커플이네요 ㅠㅠ",
    boardType: "BOARD",
    lossType: "NULL",
  },
  {
    userId: 9,
    festivalId: 2201,
    title: "서울에서 왔는데 근처 맛집 있을까요!!?",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%8C%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B59.jpg",
    ],
    content: "서울에서 왔는데 근처 맛집 있으면 추천해주세요!!",
    boardType: "BOARD",
    lossType: "NULL",
  },
  {
    userId: 10,
    festivalId: 2201,
    title:
      "안녕하세요, 사진 작가 준비하고있는데 너무 아름답게 사진 촬영해서 공유합니다.",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%8C%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B510.jpg",
    ],
    content:
      "대포 카메라로 한번 찍어봤어요  어떤가요 ?? 다른분들도 촬영한 사진 있으면 공유 부탁드려요!!",
    boardType: "BOARD",
    lossType: "NULL",
  },
  {
    userId: 11,
    festivalId: 2201,
    title: "아이폰 16 주웠어요! 주인 찾아요",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%A9%E1%86%AB16.jpg",
    ],
    content: "아이폰 16 주웠어요! 주인 찾아요 댓글 남겨주세요",
    boardType: "LOSS",
    lossType: "GET",
  },
  {
    userId: 12,
    festivalId: 2201,
    title: "아이폰 14 주웠어요! 주인 찾아가세요",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%A9%E1%86%AB16.jpg",
    ],
    content: "분실물 센터에 보관해뒀습니다. 주인 찾아가세요",
    boardType: "LOSS",
    lossType: "GET",
  },
  {
    userId: 13,
    festivalId: 2201,
    title: "아이폰 15 Plus 주인분 찾아요",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%A9%E1%86%AB16.jpg",
    ],
    content:
      "일단 제가 들고 있습니다. 문자 주세요!! 본인 확인(얼굴 인식) 확인하고 돌려드립니다",
    boardType: "LOS",
    lossType: "GET",
  },
  {
    userId: 14,
    festivalId: 2201,
    title: "에어팟 주인분 찾아요",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8B%E1%85%A6%E1%84%8B%E1%85%A5%E1%84%91%E1%85%A1%E1%86%BA.jpeg",
    ],
    content: "제가 들고 있어요 문자 주세요! 010-0000-1234",
    boardType: "LOSS",
    lossType: "GET",
  },
  {
    userId: 15,
    festivalId: 2201,
    title: "에어팟 2세대 잃어버리신분 분실물 센터에 보관해뒀습니다.",
    images: [
      "https://festivals3ss.s3.us-east-1.amazonaws.com/profiles/%E1%84%8B%E1%85%A6%E1%84%8B%E1%85%A5%E1%84%91%E1%85%A1%E1%86%BA.jpeg",
    ],
    content: "분실물 센터에 보관해뒀습니다. 주인 찾아가세요",
    boardType: "LOSS",
    lossType: "GET",
  },
  {
    userId: 16,
    festivalId: 2201,
    title: "갤럭시 폴드 잃어 버렸습니다 ㅠㅠ",
    images: [],
    content: "사례 가능합니다. 친구폰 010-0000-4535 연락주세요 ",
    boardType: "LOSS",
    lossType: "LOSS",
  },
  {
    userId: 17,
    festivalId: 2201,
    title: "갤럭시 플립 잃어 버렸습니다",
    images: [],
    content: "제발 분실물센터에 보관해주세요 ㅠㅠ",
    boardType: "LOSS",
    lossType: "LOSS",
  },
  {
    userId: 18,
    festivalId: 2201,
    title: "에어팟 프로 잃어 버렸습니다",
    images: [],
    content: "제발 분실물센터에 보관해주세요 ㅠㅠ",
    boardType: "LOSS",
    lossType: "LOSS",
  },
  {
    userId: 19,
    festivalId: 2201,
    title: "갤럭시 울트라 잃어 버렸습니다",
    images: [],
    content: "찾아 주시면 사례 합니다!! 제발 댓글 남겨주세요!!",
    boardType: "LOSS",
    lossType: "LOSS",
  },
  {
    userId: 20,
    festivalId: 2201,
    title: "아이폰 잃어버렸어요ㅠ",
    images: [],
    content: "교촌치킨 근처에서 아이폰 주우신 분 있으신가요?",
    boardType: "LOSS",
    lossType: "LOSS",
  },
];

const comment = [
  {
    userId: 2,
    boardId: 1,
    content: "와 진짜 프로필 사진으로 사용해도 좋을 거 같아요",
  },
  {
    userId: 3,
    boardId: 1,
    content: "저녁에 사람이 너무 많긴해요 ㅠㅠ",
  },
  {
    userId: 4,
    boardId: 1,
    content: "저 오전에 왔는데.. 똑같아요 ㅠㅠ",
  },
  {
    userId: 5,
    boardId: 1,
    content: "다들 휴가 쓰고 오셨나봐요",
  },
  {
    userId: 5,
    boardId: 2,
    content: "와 여기 어딘가요 ??",
  },
  {
    userId: 1,
    boardId: 2,
    content: "기차쪽 사람 엄청 많던데",
  },
  {
    userId: 4,
    boardId: 2,
    content: "저도 지금 여기 있는데 사람 지금 많이 없어요!!",
  },
  {
    userId: 5,
    boardId: 2,
    content: "저도 여기서 사진 엄청 찍고 다른곳 가려고 합니다!",
  },
  {
    userId: 1,
    boardId: 11,
    content: "감사합니다 혹시 어디로 가면 받을 수 있을까요 ??ㅠㅠ",
  },
  {
    userId: 5,
    boardId: 11,
    content: "다행이네요 이런 사람 많이 있으면 좋겠네요",
  },
  {
    userId: 6,
    boardId: 12,
    content:
      "분실물 센터에서 본인확인하고 찾았습니다. 감사합니다:) 댓글 남겨주시면 커피라도 사드리겠습니다.",
  },
  {
    userId: 6,
    boardId: 12,
    content: "와 다행이네요!",
  },
  {
    userId: 8,
    boardId: 11,
    content: "배우신분...",
  },
];

const review = [
  {
    userId: 1,
    boothId: 1,
    content: "집에서 배달로 먹는 교촌보다 맛있었어요",
    score: 4,
  },
  {
    userId: 2,
    boothId: 1,
    content: "친구가 엽떡에 교촌 먹자고해서 먹었습니다!!",
    score: 5,
  },
  {
    userId: 3,
    boothId: 1,
    content: "사장님이 비닐장갑까지 챙겨주셨어요 감사합니다",
    score: 5,
  },
  {
    userId: 4,
    boothId: 1,
    content: "레드콤보 양념이 적게 발린거 같아요 좀 더 발리면 좋겠어요",
    score: 3,
  },
  {
    userId: 5,
    boothId: 1,
    content: "포장 박스가 이상해요 좀 더 좋았으면 좋았을 것 같아요",
    score: 3,
  },
  {
    userId: 4,
    boothId: 2,
    content: "와 엄청 맵네요 근데 맛있었어요",
    score: 5,
  },
  {
    userId: 5,
    boothId: 2,
    content: "맛있어요!!",
    score: 4,
  },
  {
    userId: 6,
    boothId: 2,
    content: "밖에서 숯불 치킨이라니 정말 신기하네요",
    score: 5,
  },
  {
    userId: 7,
    boothId: 2,
    content: "축제라서 음주가 아쉽네요 치킨은 최고입니다.",
    score: 4,
  },
  {
    userId: 8,
    boothId: 2,
    content: "와 진짜 맛있어요 집에서도 시켜먹어야겠네요",
    score: 5,
  },
  {
    userId: 9,
    boothId: 2,
    content: "대박 맛있어요 친구들이랑 왔는데 너무 맛있게 잘 먹었습니다.",
    score: 5,
  },
  {
    userId: 1,
    boothId: 3,
    content: "정말 오랜만에 핫도그 먹었는데 맛있엇습니다.",
    score: 5,
  },
  {
    userId: 3,
    boothId: 3,
    content: "맛있었어요",
    score: 5,
  },
  {
    userId: 3,
    boothId: 4,
    content: "정말 피곤함이 없어지네요",
    score: 5,
  },
  {
    userId: 3,
    boothId: 4,
    content: "가성비 끝, 얼음도 많이 주셔서 감사했습니다",
    score: 5,
  },
];

async function main() {
  try {
    await prisma.notification.deleteMany();
    await prisma.notice.deleteMany();
    await prisma.comment.deleteMany();
    await prisma.board.deleteMany();
    await prisma.review.deleteMany();
    await prisma.wishList.deleteMany();
    await prisma.menu.deleteMany();
    await prisma.booth.deleteMany();
    await prisma.participation.deleteMany();
    await prisma.pay.deleteMany();
    await prisma.user.deleteMany();
    await prisma.festival.deleteMany();

    await prisma.user.createMany({ data: user });
    await prisma.booth.createMany({ data: booth });
    await prisma.menu.createMany({ data: menu });
    await prisma.board.createMany({ data: board });
    await prisma.comment.createMany({ data: comment });
    await prisma.review.createMany({ data: review });
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

main();
