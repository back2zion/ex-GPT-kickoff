# ex-GPT 고도화 프로젝트

## 📋 프로젝트 개요

한국도로공사와 DataStreams가 협력하여 진행하는 ex-GPT 시스템 고도화 프로젝트입니다. 
기존 ex-GPT 시스템의 기능을 대폭 개선하여 더욱 지능적이고 실용적인 AI 어시스턴트로 발전시키는 것이 목표입니다.

## 🎯 주요 목표

### AS-IS → TO-BE 전환
- **Single-Turn → Multi-Turn 대화**: 연속적인 대화 지원
- **기본 검색 → 지능형 분석**: 문서 비교, 경영평가 보고서 자동 생성
- **독립 시스템 → 통합 자동화**: 하이포털, 모바일오피스 등 외부 시스템 연동
- **텍스트만 → 멀티모달**: 이미지, 음성 처리 지원

## 🚀 핵심 기능

### 1단계: 지능형 라우팅 (7월 15일)
- QWen3-235B 기반 멀티턴 대화
- LangGraph 기반 컨텍스트 메모리 관리
- 질의 유형별 최적 경로 선택

### 2단계: 문서 분석 + 경영평가 (8월)
- 지능형 문서 분석 및 비교 (파일 5개)
- 경영평가 보고서 템플릿 제공
- 국정감사 시즌 대비 특화 기능

### 3단계: 자동화 서비스 통합 (10월)
- 회의록 자동 생성 (STT 기반)
- 회의실 자동 예약 시스템
- 배차 신청 자동화

### 4단계: 멀티모달 처리 (11월)
- Florence-2-Large 이미지 분석
- Whisper-Large-v3 음성 인식
- 통합 검색 및 인덱싱

## 🏗️ 시스템 아키텍처

```
사용자 인터페이스 → AI 라우팅 계층 → AI 처리 엔진 → MCP 도구 실행 계층 → 외부 시스템
```

### 핵심 기술 스택
- **LLM**: QWen3-235B, Llama4-400B, MiniMax-M1 456B
- **라우팅**: LangGraph 멀티턴 대화
- **자동화**: MCP (Model Context Protocol)
- **멀티모달**: Florence-2-Large, Whisper-Large-v3
- **인프라**: H100 GPU 클러스터

## 📁 프로젝트 구조

```
├── kickoff/                    # 킥오프 자료
│   ├── main_index.html        # 메인 페이지
│   ├── company_overview.html  # 회사 개요
│   ├── team_organization.html # 팀 구성 및 일정
│   ├── interview_results.html # 인터뷰 결과
│   ├── current_status.html    # 현재 상태 분석
│   ├── enhancement_plan.html  # 기능 고도화 방안
│   └── customer_requirements.html # 고객 요구사항
├── code/                      # 소스 코드
├── data/                      # 데이터 파일
├── interview/                 # 인터뷰 자료
├── 회의록/                    # 회의록
└── README.md                  # 프로젝트 설명
```

## 🔧 설치 및 실행

### 웹 페이지 보기
1. `kickoff/` 디렉토리로 이동
2. `main_index.html` 파일을 웹 브라우저에서 열기

### 로컬 서버 실행 (권장)
```bash
# Python 3.x가 설치되어 있다면
cd kickoff
python -m http.server 8000

# 또는 Node.js가 설치되어 있다면
npx serve .
```

## 📊 주요 성과 지표

- **대화 품질**: Single-Turn → Multi-Turn (연속 대화 지원)
- **문서 처리**: 기본 요약 → 지능형 분석 + 비교 + 경영평가
- **시스템 연계**: 독립 → 하이포털 등 외부 시스템 통합
- **자동화**: 수동 → 회의록/회의실/배차 자동화
- **멀티모달**: 텍스트만 → 이미지+음성+텍스트 통합

## 🤝 협력 기관

- **주관**: 한국도로공사
- **수행**: DataStreams
- **기간**: 2024년 7월 ~ 11월

## 📞 문의

프로젝트 관련 문의사항이 있으시면 DataStreams로 연락주세요.

---

**© 2024 DataStreams. All rights reserved.** 