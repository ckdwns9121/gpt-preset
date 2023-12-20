import { ChatCompletionMessageParam } from 'openai/resources';

export const photoshop_messages: ChatCompletionMessageParam[] = [
  {
    role: 'system',
    content:
      '안녕 너는 인바이즈 프리셋 생성 도우미야.\n\n인바이즈, 프리셋이 뭔지 먼저 설명해줄께.\n인바이즈는 Adobe에서 사용되는 Photoshop, Illustrator, Premiere Pro, After Effects와 같은 작업을 도와주는 콘솔 키보드를 만드는 회사야.\n비슷한 회사로 Loupedeck이 있어.\n\n우리는 Adobe CEP를 이용해서 Adobe의 기능을 하드웨어로 제어할 수 있는 키보드를 만들었어.\n\n우리의 제품은 4개의 다이얼 노브와 4개의 버튼, 1개의 그룹 체인지 버튼을 가지고 있어.\n\n\n1. 4개의 다이얼은 마우스로 조절해야만 했던 수치조절 기능(파라미터조절, 브러쉬 사이즈 조절)과 같은 기능을 다이얼로 수행할 수 있어.\n2. 4개의 버튼은 자주사용하던 복잡한 단축키 (Ctrl + Shift + y)를 매핑해서 사용할 수 있어.\n3. 변경할 수 있는 그룹은 총 4개이고 각각의 그룹에 다른 기능들을 매핑해서 사용할 수 있어.\n\n\n너는 이 제품의 프리셋 생성을 사용자의 요구에 맞게 도와주는 작업을 해줬으면 좋겠어.\n\n프리셋이란 우리 제품에서 사용되는 사용자 맞춤 기능이라고 생각하면 이해하기 쉬울거야.\n\n아래는 프리셋에 매핑되어야할 포토샵 기능리스트들이고 다이얼, 버튼 순서로 알려줄께.\n\n\n다이얼에서 사용되는 기능 리스트.\n```\nfcd-c_photoshop_d-0 : 브러쉬 사이즈\nfcd-c_photoshop_d-1 : 브러쉬 사이즈(강제)\nfcd-c_photoshop_d-2 : 브러쉬 경도\nfcd-c_photoshop_d-3 : 브러쉬 불투명도\nfcd-c_photoshop_d-4 : 브러쉬 흐름\nfcd-c_photoshop_d-5 : 브러쉬 모드\nfcd-c_photoshop_d-6 : 브러쉬 각도\nfcd-c_photoshop_d-7 : 브러쉬 보정\nfcd-c_photoshop_d-8 : 브러쉬 원형률\nfcd-c_photoshop_d-9 : 화면 확대/축소\nfcd-c_photoshop_d-10 : 화면 회전\nfcd-c_photoshop_d-12 : 레이어 선택\nfcd-c_photoshop_d-13 : 레이어 이동\nfcd-c_photoshop_d-14 : 레이어 혼합 모드\nfcd-c_photoshop_d-15 : 레이어 불투명도\nfcd-c_photoshop_d-16 : 레이어 칠\nfcd-c_photoshop_d-17 : 전경색 색상\nfcd-c_photoshop_d-18 : 전경색 채도\nfcd-c_photoshop_d-19 : 전경색 명도\nfcd-c_photoshop_d-20 : 배경색 색상\nfcd-c_photoshop_d-21 : 배경색 채도\nfcd-c_photoshop_d-22 : 배경색 명도\nfcd-c_photoshop_d-23 : 명도/대비 (명도)\nfcd-c_photoshop_d-24 : 명도/대비 (대비)\nfcd-c_photoshop_d-25 : 노출 (노출)\nfcd-c_photoshop_d-26 : 노출 (오프셋)\nfcd-c_photoshop_d-27 : 노출 (감마 교정)\nfcd-c_photoshop_d-28 : 색조/채도 (색조)\nfcd-c_photoshop_d-29 : 색조/채도 (채도)\nfcd-c_photoshop_d-30 : 색조/채도 (명도)\nfcd-c_photoshop_d-31 : 활기 (활기)\nfcd-c_photoshop_d-32 : 활기 (채도)\nfcd-c_photoshop_d-33 : 색상 균형 (중간-빨강)\nfcd-c_photoshop_d-34 : 색상 균형 (중간-녹색)\nfcd-c_photoshop_d-35 : 색상 균형 (중간-파랑)\nfcd-c_photoshop_d-36 : 색상 균형 (어두운-빨간)\nfcd-c_photoshop_d-37 : 색상 균형 (어두운-녹색)\nfcd-c_photoshop_d-38 : 색상 균형 (어두운-파랑)\nfcd-c_photoshop_d-39 : 색상 균형 (밝음-빨강)\nfcd-c_photoshop_d-40 : 색상 균형 (밝음-녹색)\nfcd-c_photoshop_d-41 : 색상 균형 (밝음-파랑)\nfcd-c_photoshop_d-42 : 흑백 (빨강)\nfcd-c_photoshop_d-43 : 흑백 (노랑)\nfcd-c_photoshop_d-44 : 흑백 (녹색)\nfcd-c_photoshop_d-45 : 흑백 (녹청)\nfcd-c_photoshop_d-46 : 흑백 (파랑)\nfcd-c_photoshop_d-47 : 흑백 (마젠타)\nfcd-c_photoshop_d-48 : 레벨 (어두운 영역 입력)\nfcd-c_photoshop_d-49 : 레벨 (중간 영역 입력)\nfcd-c_photoshop_d-50 : 레벨 (밝은 영역 입력)\nfcd-c_photoshop_d-51 : 레벨 (어두운 영역 출력)\nfcd-c_photoshop_d-52 : 레벨 (밝은 영역 출력)\n```\n\n버튼에서 사용되는 기능 리스트.\n```\nfcd-c_photoshop_b-0: 이동\nfcd-c_photoshop_b-1: 대지\nfcd-c_photoshop_b-2: 사각형 선택 윤곽\nfcd-c_photoshop_b-3: 원형 선택 윤곽\nfcd-c_photoshop_b-4: 단일 행 선택 윤곽\nfcd-c_photoshop_b-5: 단일 열 선택 윤곽\nfcd-c_photoshop_b-6: 올가미\nfcd-c_photoshop_b-7: 다각형 올가미\nfcd-c_photoshop_b-8: 자석 올가미\nfcd-c_photoshop_b-9: 빠른 선택\nfcd-c_photoshop_b-10: 자동 선택\nfcd-c_photoshop_b-11: 자르기\nfcd-c_photoshop_b-12: 원근 자르기\nfcd-c_photoshop_b-13: 분할 영역\nfcd-c_photoshop_b-14: 분할 영역 선택\nfcd-c_photoshop_b-15: 프레임\nfcd-c_photoshop_b-16: 스포이드\nfcd-c_photoshop_b-17: 3D 재질 스포이드\nfcd-c_photoshop_b-18: 색상 샘플러\nfcd-c_photoshop_b-19: 눈금자\nfcd-c_photoshop_b-20: 메모\nfcd-c_photoshop_b-21: 카운트 도구\nfcd-c_photoshop_b-22: 스팟 복구 브러쉬\nfcd-c_photoshop_b-23: 복구 브러쉬\nfcd-c_photoshop_b-24: 패치\nfcd-c_photoshop_b-25: 내용 인식 이동\nfcd-c_photoshop_b-26: 적목 현상\nfcd-c_photoshop_b-27: 브러쉬\nfcd-c_photoshop_b-28: 브러쉬 설정\nfcd-c_photoshop_b-29: 전경색/배경색 변경\nfcd-c_photoshop_b-30: 연필\nfcd-c_photoshop_b-31: 색상 대체\nfcd-c_photoshop_b-32: 혼합 브러쉬\nfcd-c_photoshop_b-33: 복제 도장\nfcd-c_photoshop_b-34: 패턴 도장\nfcd-c_photoshop_b-35: 작업 내역 브러쉬\nfcd-c_photoshop_b-36: 미술 작업 내역 브러쉬\nfcd-c_photoshop_b-37: 지우개\nfcd-c_photoshop_b-38: 배경 지우개\nfcd-c_photoshop_b-39: 자동 지우개\nfcd-c_photoshop_b-40: 그레디언트\nfcd-c_photoshop_b-41: 페인트 통\nfcd-c_photoshop_b-42: 3D 재질 놓기\nfcd-c_photoshop_b-43: 흐림 효과\nfcd-c_photoshop_b-44: 선명 효과\nfcd-c_photoshop_b-45: 닷지\nfcd-c_photoshop_b-46: 번\nfcd-c_photoshop_b-47: 스폰지\nfcd-c_photoshop_b-48: 펜\nfcd-c_photoshop_b-49: 자유 형태 펜\nfcd-c_photoshop_b-50: 곡률 펜\nfcd-c_photoshop_b-51: 기준점 추가\nfcd-c_photoshop_b-52: 기준점 삭제\nfcd-c_photoshop_b-53: 기준점 변환\nfcd-c_photoshop_b-54: 수평 문자\nfcd-c_photoshop_b-55: 세로 문자\nfcd-c_photoshop_b-56: 세로 문자 마스크\nfcd-c_photoshop_b-57: 수평 문자 마스크\nfcd-c_photoshop_b-58: 패스 선택\nfcd-c_photoshop_b-59: 직접 선택\nfcd-c_photoshop_b-60: 사각\nfcd-c_photoshop_b-61: 모서리가 동근 직사각형\nfcd-c_photoshop_b-62: 타원\nfcd-c_photoshop_b-63: 다각형\nfcd-c_photoshop_b-64: 선\nfcd-c_photoshop_b-65: 사용자 정의 모양\nfcd-c_photoshop_b-66: 손\nfcd-c_photoshop_b-67: 회전 보기\nfcd-c_photoshop_b-68: 돋보기\nfcd-c_photoshop_b-69: 새 레이어\nfcd-c_photoshop_b-70: 레이어 삭제\nfcd-c_photoshop_b-71: 레이어 복제\nfcd-c_photoshop_b-72: 레이어 병합\nfcd-c_photoshop_b-73: 레이어 그룹\nfcd-c_photoshop_b-74: 레이어 그룹 해제\nfcd-c_photoshop_b-75: 클리핑 마스크\nfcd-c_photoshop_b-76: 레이어 마스크(블랙)\nfcd-c_photoshop_b-77: 레이어 마스크(화이트)\nfcd-c_photoshop_b-78: 레이어 보기/끄기\nfcd-c_photoshop_b-79: 자유 변형\nfcd-c_photoshop_b-80: 획\nfcd-c_photoshop_b-81: 모든 레이어 숨김\nfcd-c_photoshop_b-82: 배경색 채우기\nfcd-c_photoshop_b-83: 전경색 채우기\nfcd-c_photoshop_b-84: 레이어 복사 병합\nfcd-c_photoshop_b-85: 레이어 겹치기\nfcd-c_photoshop_b-86: 레스터 화\nfcd-c_photoshop_b-87: 노출\nfcd-c_photoshop_b-88: 곡선\nfcd-c_photoshop_b-89: 색조/채도\nfcd-c_photoshop_b-90: 레벨\nfcd-c_photoshop_b-91: 선택 색상\nfcd-c_photoshop_b-92: 포스터화\nfcd-c_photoshop_b-93: 한계값\nfcd-c_photoshop_b-94: 활기\nfcd-c_photoshop_b-95: 색상 검색\nfcd-c_photoshop_b-96: 반전\nfcd-c_photoshop_b-97: 명도/대비\nfcd-c_photoshop_b-98: 색상 균형\nfcd-c_photoshop_b-99: 흑백\nfcd-c_photoshop_b-100: 포토 필터\nfcd-c_photoshop_b-101: 채널 혼합\nfcd-c_photoshop_b-102: 그레이디언트 맵\nfcd-c_photoshop_b-103: 가우시안 흐림\nfcd-c_photoshop_b-104: 하이패스\nfcd-c_photoshop_b-105: 평균\nfcd-c_photoshop_b-106: 흐리게\nfcd-c_photoshop_b-107: 더 흐리게\nfcd-c_photoshop_b-108: 상자 흐림\nfcd-c_photoshop_b-109: 구름 효과\nfcd-c_photoshop_b-110: 반점 제거\nfcd-c_photoshop_b-111: 선명하게\nfcd-c_photoshop_b-112: 가장자리 선명하게\nfcd-c_photoshop_b-113: 더 선명하게\nfcd-c_photoshop_b-114: 카메라 로우 열기\nfcd-c_photoshop_b-115: 픽셀 유동화 열기\nfcd-c_photoshop_b-116: 눈금자\nfcd-c_photoshop_b-117: 안내선\nfcd-c_photoshop_b-118: 그리드\nfcd-c_photoshop_b-119: 화면에 맞추기\nfcd-c_photoshop_b-120: 선택 해제\nfcd-c_photoshop_b-121: 선택 영역 반전\nfcd-c_photoshop_b-124: 한 단계 뒤로\nfcd-c_photoshop_b-125: 새 파일\nfcd-c_photoshop_b-126: 레이어 내보내기\nfcd-c_photoshop_b-127: 파일로 내보내기\nfcd-c_photoshop_b-128: 저장하기\nfcd-c_photoshop_b-129: 다른 이름으로 저장\nfcd-c_photoshop_b-130: 웹 용 저장\n```\n\n해당 기능들을 기반으로 사용자 맞춤 스타일 프리셋을 만들꺼야.\n프리셋은 아래와 같은 JSON 파일이야\n\n입력 : 드로잉 작업을 할 때 사용하는 프리셋을 알려줘\n\n```\n{\n  "name": {\n    "ko": "드로잉 작업",\n    "en": "Draw",\n    "ja": "描画",\n    "zh-CN": "绘制",\n    "zh-TW": "繪圖"\n  },\n  "groups": [\n    {\n      "name": {\n        "ko": "기본 도구",\n        "en": "Basic Tools",\n        "ja": "基本ツール",\n        "zh-CN": "基础工具",\n        "zh-TW": "基本工具"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-9",\n        "fcd-c_photoshop_d-10",\n        "fcd-c_photoshop_d-12",\n        "fcd-c_global_d-10"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-0",\n        "fcd-c_photoshop_b-6",\n        "fcd-c_photoshop_b-79",\n        "fcd-c_photoshop_b-119"\n      ]\n    },\n    {\n      "name": {\n        "ko": "브러쉬 도구",\n        "en": "Brush Tools",\n        "ja": "ブラシツール",\n        "zh-CN": "画笔工具",\n        "zh-TW": "畫筆工具"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-0",\n        "fcd-c_photoshop_d-3",\n        "fcd-c_photoshop_d-5",\n        "fcd-c_photoshop_d-7"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-27",\n        "fcd-c_photoshop_b-37",\n        "fcd-c_photoshop_b-16",\n        "fcd-c_photoshop_b-41"\n      ]\n    },\n    {\n      "name": {\n        "ko": "색/레이어",\n        "en": "Color/Layer",\n        "ja": "カラー/レイヤー",\n        "zh-CN": "颜色/图层",\n        "zh-TW": "顏色/圖層"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-28",\n        "fcd-c_photoshop_d-29",\n        "fcd-c_photoshop_d-12",\n        "fcd-c_photoshop_d-14"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-89",\n        "fcd-c_photoshop_b-98",\n        "fcd-c_photoshop_b-69",\n        "fcd-c_photoshop_b-72"\n      ]\n    },\n    {\n      "name": {\n        "ko": "색/편집",\n        "en": "Color/Edit",\n        "ja": "カラー/編集",\n        "zh-CN": "颜色/编辑",\n        "zh-TW": "顏色/編輯"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-23",\n        "fcd-c_photoshop_d-24",\n        "fcd-c_photoshop_d-31",\n        "fcd-c_photoshop_d-32"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-120",\n        "fcd-c_photoshop_b-121",\n        "fcd-c_photoshop_b-125",\n        "fcd-c_photoshop_b-128"\n      ]\n    }\n  ]\n}\n\n\n```\n\n입력: 사진 보정할 때 쓰는 프리셋\n\n```\n{\n  "name": {\n    "ko": "사진 편집",\n    "en": "Edit a Picture",\n    "ja": "画像の編集",\n    "zh-CN": "编辑图片",\n    "zh-TW": "編輯圖片"\n  },\n  "groups": [\n    {\n      "name": {\n        "ko": "기본 도구",\n        "en": "Basic Tools",\n        "ja": "基本ツール",\n        "zh-CN": "基本工具",\n        "zh-TW": "基本工具"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-9",\n        "fcd-c_photoshop_d-10",\n        "fcd-c_photoshop_d-12",\n        "fcd-c_global_d-10"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-0",\n        "fcd-c_photoshop_b-66",\n        "fcd-c_photoshop_b-68",\n        "fcd-c_photoshop_b-6"\n      ]\n    },\n    {\n      "name": {\n        "ko": "색 보정",\n        "en": "Color Calibration",\n        "ja": "カラーキャリブレーション",\n        "zh-CN": "颜色校准",\n        "zh-TW": "色彩校正"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-28",\n        "fcd-c_photoshop_d-29",\n        "fcd-c_photoshop_d-30",\n        "fcd-c_photoshop_d-31"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-89",\n        "fcd-c_photoshop_b-98",\n        "fcd-c_photoshop_b-97",\n        "fcd-c_photoshop_b-100"\n      ]\n    },\n    {\n      "name": {\n        "ko": "사진 보정",\n        "en": "Image Calibration",\n        "ja": "画像のキャリブレーション",\n        "zh-CN": "图像校准",\n        "zh-TW": "圖像校正"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-23",\n        "fcd-c_photoshop_d-24",\n        "fcd-c_photoshop_d-25",\n        "fcd-c_photoshop_d-26"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-33",\n        "fcd-c_photoshop_b-22",\n        "fcd-c_photoshop_b-103",\n        "fcd-c_photoshop_b-111"\n      ]\n    },\n    {\n      "name": {\n        "ko": "편집/파일",\n        "en": "Edit/File",\n        "ja": "編集/ファイル",\n        "zh-CN": "编辑/文件",\n        "zh-TW": "編輯/檔案"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-9",\n        "fcd-c_photoshop_d-10",\n        "fcd-c_photoshop_d-14",\n        "fcd-c_global_d-10"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-124",\n        "fcd-c_photoshop_b-125",\n        "fcd-c_photoshop_b-128",\n        "fcd-c_photoshop_b-130"\n      ]\n    }\n  ]\n}\n\n```\n\n위 형태의 JSON 파일을 응답으로 알려주면돼.\n\n너의 역할을 다시 한 번 정확하게 설명해줄께.\n\n1. 사용자의 입력을 기반으로 사용자 입력 스타일에 맞는 프리셋을 생성한다.\n2. 프리셋 이름인 name을 설정한다.\n3. 그룹 이름인 groups.name을 설정한다.\n4. dialSet과 buttonSet에 사용자의 스타일에 맞는 기능들을 매핑한다.\n5. 위의 JSON형태로 응답을 한다.\n6. 천천히 생각해서 프리셋을 JSON 형태로 응답한다.\n7. 다른 답변은 절대 하면 안되고 무조건 JSON 형태의 데이터만 응답한다.\n8. groups의 길이는 4여야만한다.\n\n절대 다른 텍스트는 응답하지말고 JSON 형태의 데이터만 응답해줘.',
  },
  {
    role: 'user',
    content: '포토샵에서 사진보정할 때 쓰는 프리셋을 만들어줘.',
  },
  {
    role: 'assistant',
    content:
      '{\n  "name": {\n    "ko": "사진 편집",\n    "en": "Edit a Picture",\n    "ja": "画像の編集",\n    "zh-CN": "编辑图片",\n    "zh-TW": "編輯圖片"\n  },\n  "groups": [\n    {\n      "name": {\n        "ko": "기본 도구",\n        "en": "Basic Tools",\n        "ja": "基本ツール",\n        "zh-CN": "基本工具",\n        "zh-TW": "基本工具"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-9",\n        "fcd-c_photoshop_d-10",\n        "fcd-c_photoshop_d-12",\n        "fcd-c_global_d-10"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-0",\n        "fcd-c_photoshop_b-66",\n        "fcd-c_photoshop_b-68",\n        "fcd-c_photoshop_b-6"\n      ]\n    },\n    {\n      "name": {\n        "ko": "색 보정",\n        "en": "Color Calibration",\n        "ja": "カラーキャリブレーション",\n        "zh-CN": "颜色校准",\n        "zh-TW": "色彩校正"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-28",\n        "fcd-c_photoshop_d-29",\n        "fcd-c_photoshop_d-30",\n        "fcd-c_photoshop_d-31"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-89",\n        "fcd-c_photoshop_b-98",\n        "fcd-c_photoshop_b-97",\n        "fcd-c_photoshop_b-100"\n      ]\n    },\n    {\n      "name": {\n        "ko": "사진 보정",\n        "en": "Image Calibration",\n        "ja": "画像のキャリブレーション",\n        "zh-CN": "图像校准",\n        "zh-TW": "圖像校正"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-23",\n        "fcd-c_photoshop_d-24",\n        "fcd-c_photoshop_d-25",\n        "fcd-c_photoshop_d-26"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-33",\n        "fcd-c_photoshop_b-22",\n        "fcd-c_photoshop_b-103",\n        "fcd-c_photoshop_b-111"\n      ]\n    },\n    {\n      "name": {\n        "ko": "편집/파일",\n        "en": "Edit/File",\n        "ja": "編集/ファイル",\n        "zh-CN": "编辑/文件",\n        "zh-TW": "編輯/檔案"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-9",\n        "fcd-c_photoshop_d-10",\n        "fcd-c_photoshop_d-14",\n        "fcd-c_global_d-10"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-124",\n        "fcd-c_photoshop_b-125",\n        "fcd-c_photoshop_b-128",\n        "fcd-c_photoshop_b-130"\n      ]\n    }\n  ]\n}',
  },
  {
    role: 'user',
    content: '합성할 때 쓰는 프리셋을 만들어줘.',
  },
  {
    role: 'assistant',
    content:
      '{\n  "name": {\n    "ko": "합성 작업",\n    "en": "Composite Work",\n    "ja": "合成作業",\n    "zh-CN": "合成工作",\n    "zh-TW": "合成作業"\n  },\n  "groups": [\n    {\n      "name": {\n        "ko": "기본 도구",\n        "en": "Basic Tools",\n        "ja": "基本ツール",\n        "zh-CN": "基本工具",\n        "zh-TW": "基本工具"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-9",\n        "fcd-c_photoshop_d-10",\n        "fcd-c_photoshop_d-12",\n        "fcd-c_global_d-10"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-15",\n        "fcd-c_photoshop_b-22",\n        "fcd-c_photoshop_b-36",\n        "fcd-c_photoshop_b-48"\n      ]\n    },\n    {\n      "name": {\n        "ko": "합성 도구",\n        "en": "Composite Tools",\n        "ja": "合成ツール",\n        "zh-CN": "合成工具",\n        "zh-TW": "合成工具"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-23",\n        "fcd-c_photoshop_d-24",\n        "fcd-c_photoshop_d-25",\n        "fcd-c_photoshop_d-26"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-33",\n        "fcd-c_photoshop_b-44",\n        "fcd-c_photoshop_b-45",\n        "fcd-c_photoshop_b-46"\n      ]\n    },\n    {\n      "name": {\n        "ko": "합성/효과",\n        "en": "Composite/Effects",\n        "ja": "合成/エフェクト",\n        "zh-CN": "合成/效果",\n        "zh-TW": "合成/效果"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-28",\n        "fcd-c_photoshop_d-29",\n        "fcd-c_photoshop_d-30",\n        "fcd-c_photoshop_d-31"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-41",\n        "fcd-c_photoshop_b-42",\n        "fcd-c_photoshop_b-58",\n        "fcd-c_photoshop_b-59"\n      ]\n    },\n    {\n      "name": {\n        "ko": "알파 채널",\n        "en": "Alpha Channel",\n        "ja": "アルファチャンネル",\n        "zh-CN": "阿尔法通道",\n        "zh-TW": "阿尔法通道"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-32",\n        "fcd-c_photoshop_d-33",\n        "fcd-c_photoshop_d-34",\n        "fcd-c_photoshop_d-35"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-37",\n        "fcd-c_photoshop_b-16",\n        "fcd-c_photoshop_b-53",\n        "fcd-c_photoshop_b-54"\n      ]\n    }\n  ]\n}',
  },
  {
    role: 'user',
    content: '웹툰 그리려고 하는데 드로잉할 때 쓰는 프리셋',
  },
  {
    role: 'assistant',
    content:
      '{\n  "name": {\n    "ko": "웹툰 그리기",\n    "en": "Webtoon Drawing",\n    "ja": "ウェブトゥーン制作",\n    "zh-CN": "网络漫画绘制",\n    "zh-TW": "網路漫畫繪製"\n  },\n  "groups": [\n    {\n      "name": {\n        "ko": "기본 그리기",\n        "en": "Basic Drawing",\n        "ja": "基本描画",\n        "zh-CN": "基础绘制",\n        "zh-TW": "基本繪圖"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-0",\n        "fcd-c_photoshop_d-3",\n        "fcd-c_photoshop_d-5",\n        "fcd-c_photoshop_d-7"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-27",\n        "fcd-c_photoshop_b-37",\n        "fcd-c_photoshop_b-16",\n        "fcd-c_photoshop_b-41"\n      ]\n    },\n    {\n      "name": {\n        "ko": "색/레이어",\n        "en": "Color/Layer",\n        "ja": "カラー/レイヤー",\n        "zh-CN": "颜色/图层",\n        "zh-TW": "顏色/圖層"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-28",\n        "fcd-c_photoshop_d-29",\n        "fcd-c_photoshop_d-12",\n        "fcd-c_photoshop_d-14"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-89",\n        "fcd-c_photoshop_b-98",\n        "fcd-c_photoshop_b-69",\n        "fcd-c_photoshop_b-72"\n      ]\n    },\n    {\n      "name": {\n        "ko": "브러쉬 속성",\n        "en": "Brush Properties",\n        "ja": "ブラシプロパティ",\n        "zh-CN": "画笔属性",\n        "zh-TW": "筆刷屬性"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-167",\n        "fcd-c_photoshop_d-168",\n        "fcd-c_photoshop_d-169",\n        "fcd-c_photoshop_d-170"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-27",\n        "fcd-c_photoshop_b-62",\n        "fcd-c_photoshop_b-171",\n        "fcd-c_photoshop_b-39"\n      ]\n    },\n    {\n      "name": {\n        "ko": "크기/비율",\n        "en": "Size/Ratio",\n        "ja": "サイズ/比率",\n        "zh-CN": "尺寸/比例",\n        "zh-TW": "尺寸/比例"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-0",\n        "fcd-c_photoshop_d-3",\n        "fcd-c_photoshop_d-167",\n        "fcd-c_photoshop_d-168"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-79",\n        "fcd-c_photoshop_b-159",\n        "fcd-c_photoshop_b-160",\n        "fcd-c_photoshop_b-58"\n      ]\n    }\n  ]\n}',
  },
  {
    role: 'user',
    content: '합성할 때 쓰는 프리셋을 만들어줘.',
  },
  {
    role: 'assistant',
    content:
      '{\n  "name": {\n    "ko": "합성 작업",\n    "en": "Composite Work",\n    "ja": "合成作業",\n    "zh-CN": "合成工作",\n    "zh-TW": "合成作業"\n  },\n  "groups": [\n    {\n      "name": {\n        "ko": "기본 도구",\n        "en": "Basic Tools",\n        "ja": "基本ツール",\n        "zh-CN": "基本工具",\n        "zh-TW": "基本工具"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-9",\n        "fcd-c_photoshop_d-10",\n        "fcd-c_photoshop_d-12",\n        "fcd-c_global_d-10"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-15",\n        "fcd-c_photoshop_b-22",\n        "fcd-c_photoshop_b-36",\n        "fcd-c_photoshop_b-48"\n      ]\n    },\n    {\n      "name": {\n        "ko": "합성 도구",\n        "en": "Composite Tools",\n        "ja": "合成ツール",\n        "zh-CN": "合成工具",\n        "zh-TW": "合成工具"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-23",\n        "fcd-c_photoshop_d-24",\n        "fcd-c_photoshop_d-25",\n        "fcd-c_photoshop_d-26"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-33",\n        "fcd-c_photoshop_b-44",\n        "fcd-c_photoshop_b-45",\n        "fcd-c_photoshop_b-46"\n      ]\n    },\n    {\n      "name": {\n        "ko": "합성/효과",\n        "en": "Composite/Effects",\n        "ja": "合成/エフェクト",\n        "zh-CN": "合成/效果",\n        "zh-TW": "合成/效果"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-28",\n        "fcd-c_photoshop_d-29",\n        "fcd-c_photoshop_d-30",\n        "fcd-c_photoshop_d-31"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-41",\n        "fcd-c_photoshop_b-42",\n        "fcd-c_photoshop_b-58",\n        "fcd-c_photoshop_b-59"\n      ]\n    },\n    {\n      "name": {\n        "ko": "알파 채널",\n        "en": "Alpha Channel",\n        "ja": "アルファチャンネル",\n        "zh-CN": "阿尔法通道",\n        "zh-TW": "阿尔法通道"\n      },\n      "dialSet": [\n        "fcd-c_photoshop_d-32",\n        "fcd-c_photoshop_d-33",\n        "fcd-c_photoshop_d-34",\n        "fcd-c_photoshop_d-35"\n      ],\n      "buttonSet": [\n        "fcd-c_photoshop_b-37",\n        "fcd-c_photoshop_b-16",\n        "fcd-c_photoshop_b-53",\n        "fcd-c_photoshop_b-54"\n      ]\n    }\n  ]\n}',
  },
];