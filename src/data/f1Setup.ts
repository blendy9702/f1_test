export type SetupItem = {
  key: string;
  title: string;
  recommended?: string;
  notes: string[];
};

export type SetupSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: SetupItem[];
};

export const f1SetupSections: SetupSection[] = [
  {
    id: "aero",
    title: "에어로 다이내믹",
    items: [
      {
        key: "wing-delta",
        title: "프론트윙-리어윙 수치 차이",
        recommended: "차이 10 이하 유지",
        notes: ["프론트윙과 리어윙의 수치 차이는 10 이하가 되도록 설정"],
      },
    ],
  },
  {
    id: "transmission",
    title: "트랜스미션",
    items: [
      {
        key: "on-throttle",
        title: "온 스로틀",
        recommended: "50% ~ 60%",
        notes: [
          "수치가 높으면 재가속 증가, 조향 무거움(언더스티어)",
          "수치가 낮으면 재가속 감소, 조향 가벼움(오버스티어)",
        ],
      },
      {
        key: "off-throttle",
        title: "오프 스로틀",
        recommended: "50% ~ 55%",
        notes: [
          "수치가 높으면 그립 증가, 조향 감소(언더스티어)",
          "수치가 낮으면 그립 감소, 조향 증가(오버스티어)",
        ],
      },
    ],
  },
  {
    id: "susp-geometry",
    title: "서스펜션 지오메트리",
    items: [
      {
        key: "front-camber",
        title: "프론트 캠버",
        recommended: "-3.50",
        notes: [
          "-3.50에 가까울수록 반응/선회력 증가, 타이어 마모 상승 및 탈출 속도 감소",
          "-2.50에 가까울수록 반응/선회력 감소, 타이어 마모 감소 및 탈출 속도 증가",
        ],
      },
      {
        key: "rear-camber",
        title: "리어 캠버",
        recommended: "-2.00",
        notes: [
          "-2.00에 가까울수록 반응/선회력 증가, 탈출 속도/그립 감소",
          "-1.00에 가까울수록 반응/선회력 감소, 탈출 속도/그립 증가",
        ],
      },
      {
        key: "front-toe-out",
        title: "프론트 토 아웃",
        recommended: "0.00",
        notes: [
          "0.10에 가까울수록 반응/선회력 증가, 그립 감소",
          "0.00에 가까울수록 반응/선회력 감소, 그립 상승",
        ],
      },
      {
        key: "rear-toe-out",
        title: "리어 토 아웃",
        recommended: "0.10",
        notes: [
          "0.30에 가까울수록 반응/선회력 증가, 그립 감소",
          "0.10에 가까울수록 반응/선회력 감소, 그립 상승",
        ],
      },
    ],
  },
  {
    id: "suspension",
    title: "서스펜션",
    items: [
      {
        key: "front-suspension",
        title: "프론트 서스펜션",
        notes: [
          "브레이킹 시 전방 하중 이동 최소화",
          "높을수록 안정적 코너링/그립 상승, 반응/선회력 감소",
          "낮을수록 불안정 코너링/그립 감소, 반응/선회력 증가",
        ],
      },
      {
        key: "rear-suspension",
        title: "리어 서스펜션",
        notes: [
          "높을수록 고속 코너 안정성/그립 증가, 저속 코너 안정성/그립 감소",
          "낮을수록 고속 코너 안정성/그립 감소, 저속 코너 안정성/그립 증가",
        ],
      },
      {
        key: "front-arb",
        title: "프론트 안티 롤 바",
        notes: [
          "높으면 고속 코너 반응/그립 증가, 저속 코너 어려움, 요철/연석 주의",
          "낮으면 저속 코너 반응/그립 증가, 고속 코너 어려움",
        ],
      },
      {
        key: "rear-arb",
        title: "리어 안티 롤 바",
        notes: [
          "높으면 선회력/반응 상승, 그립 감소",
          "낮으면 그립 증가, 선회력/반응 감소",
        ],
      },
      {
        key: "front-ride-height",
        title: "프론트 라이드 하이트",
        notes: [
          "높으면 요철/연석 대응 안전, 선회력/반응 감소(언더스티어)",
          "낮으면 요철/연석에서 불안, 선회력/반응 증가(오버스티어)",
          "최고 속도 영향은 크지 않음",
        ],
      },
      {
        key: "rear-ride-height",
        title: "리어 라이드 하이트",
        notes: [
          "높으면 드래그 증가, 고속 코너 안정적",
          "낮으면 드래그 감소, 저속 코너 안정적",
          "최고 속도 영향은 크지 않음",
        ],
      },
    ],
  },
  {
    id: "brake",
    title: "브레이크",
    items: [
      {
        key: "brake-pressure",
        title: "브레이크 프레셔",
        recommended: "100%",
        notes: [
          "확실하고 안정적 제동을 위해 최대값 권장",
          "휠락 등 상황에 따라 낮추기",
        ],
      },
      {
        key: "front-brake-bias",
        title: "프론트 브레이크 바이어스",
        notes: [
          "강한 제동 코너: 55% ~ 57%",
          "약한 제동 코너: 53% ~ 54%",
          "우천: 58% ~ 65%",
          "레이스 중 수치 조절 가능",
        ],
      },
    ],
  },
  {
    id: "tyre",
    title: "타이어",
    items: [
      {
        key: "tyre-pressure",
        title: "타이어 압력",
        notes: [
          "압력 높음: 반응/안정성 상승, 온도/마모/그립 감소",
          "압력 낮음: 반응/안정성 감소, 온도/마모/그립 상승",
        ],
      },
    ],
  },
];
