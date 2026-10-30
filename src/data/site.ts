export const site={
  "name": "24시 안내 확인노트",
  "description": "24시라는 광고 문구에서 접수 가능·답변 가능·처리 완료 시점을 나눠 확인합니다.",
  "editor": "결제노트 편집",
  "updatedAt": "2026-10-30",
  "keyword": "소액결제현금화24시",
  "slug": "hours-versus-completion",
  "tag": "운영시간과 처리 상태",
  "number": "10",
  "answer": "소액결제현금화24시의 24시는 접수 창구가 열려 있다는 뜻인지 실제 답변·처리가 가능한 시간인지 확인해야 합니다. 이 사이트는 외부 상담 대상의 24시간 운영이나 즉시 지급을 검증하지 않았습니다.",
  "intro": "24시라는 광고 문구에서 접수 가능·답변 가능·처리 완료 시점을 나눠 확인합니다.",
  "steps": [
    {
      "name": "시간 표현의 대상을 묻기",
      "description": "접수 폼, 상담 답변과 실제 처리 중 어느 서비스가 24시간인지 질문합니다. 상담을 시작했다는 사실을 처리 완료로 표시하지 마세요. 안내받은 운영시간과 예상 답변 시점을 대화에 남깁니다."
    },
    {
      "name": "늦은 시간에는 기록부터 확보",
      "description": "오류가 발생하면 시각, 화면 문구와 현재 주문 상태를 보관합니다. 공식 지원의 운영시간은 해당 서비스에서 확인하세요. 야간이라는 이유로 인증번호나 계정 접근을 외부 상대에게 넘기는 절차는 피합니다."
    },
    {
      "name": "완료 약속과 실제 확인 나누기",
      "description": "예정된 시간과 본인 계정에서 확인한 내역을 각각 적습니다. 예정이 바뀌면 이유와 새 답변을 덧붙이세요. 늦은 시간의 상담 가능 여부가 구매 취소나 회선 청구의 조건을 바꾼다고 해석하지 않습니다."
    }
  ],
  "accent": "#224641" ,
  contact: {
    name: '누티켓', phone: '010-8111-1555', kakaoId: 'N1348',
    kakaoUrl: 'https://qr.kakao.com/talk/MBsKvshDmtamG2EuQNKdmPuGFJQ-',
    sourceUrl: 'https://xn--od1b246c0uc.kr', verifiedAt: '2026-10-03'
  }
} as const;
export const topics=[{id:'basics',name:"운영시간과 처리 상태",number:'01',description:"24시라는 광고 문구에서 접수 가능·답변 가능·처리 완료 시점을 나눠 확인합니다."}] as const;
export const phoneHref='tel:'+site.contact.phone.replaceAll('-','');
