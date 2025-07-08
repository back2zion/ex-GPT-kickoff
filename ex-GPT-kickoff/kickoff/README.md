# ex-GPT 프로젝트 통합 헤더/푸터 시스템

## 📋 개요

이 프로젝트는 ex-GPT 고도화 프로젝트의 웹페이지들에서 일관된 헤더와 푸터를 사용하기 위한 통합 시스템입니다.

## 🏗️ 파일 구조

```
kickoff/
├── shared-styles.css          # 통합 CSS 스타일
├── unified-components.js      # 헤더/푸터 컴포넌트 JS
├── main_index.html           # 메인 페이지
├── company_overview.html     # 회사 개요
├── team_organization.html    # 팀 구성 및 일정
├── interview_results.html    # 인터뷰 결과
├── current_status.html       # 현재 상태
├── enhancement_plan.html     # 개선 계획
├── customer_requirements.html # 고객 요구사항
└── images/                   # 로고 이미지들
    ├── 한국도로공사_logo.png
    └── ds_logo.svg
```

## 🎯 주요 특징

### ✨ 통일된 로고 사이즈
- 모든 페이지에서 로고 높이 35px로 통일 (강제 적용)
- `!important` 속성으로 일관성 보장

### 🔧 통합 헤더/푸터 시스템
- JavaScript로 동적 생성
- 페이지별 활성 상태 자동 감지
- 공통 CSS로 스타일 통일

### 📱 반응형 디자인
- 모바일, 태블릿, 데스크톱 대응
- 브라우저 호환성 고려

## 🚀 사용법

### 새 페이지 추가 시

1. HTML 구조:
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>페이지 제목 - ex-GPT 프로젝트</title>
    <link rel="stylesheet" href="shared-styles.css">
    <style>
        /* 페이지별 전용 스타일 */
        .main-content {
            margin-top: 113px; /* 고정 헤더 높이 */
        }
    </style>
</head>
<body>
    <div id="header-placeholder"></div>
    
    <!-- 페이지 내용 -->
    <main class="main-content">
        <!-- 여기에 페이지 콘텐츠 -->
    </main>
    
    <div id="footer-placeholder"></div>
    
    <script src="unified-components.js"></script>
</body>
</html>
```

2. unified-components.js에서 페이지 ID 추가:
```javascript
switch(currentPage) {
    case 'your_new_page':
        activePageId = 'new_page';
        break;
    // ...
}
```

### 네비게이션 메뉴 수정

unified-components.js의 `createUnifiedHeader` 함수에서 네비게이션 항목을 추가/수정할 수 있습니다.

## 🎨 스타일 커스터마이징

### 색상 변경
```css
/* shared-styles.css에서 */
:root {
    --primary-color: #1976d2;
    --secondary-color: #1565c0;
}
```

### 로고 사이즈 조정
```css
.ds-logo-img, .logo-img {
    height: 40px !important; /* 원하는 높이로 변경 */
    width: auto !important;
}
```

## 🔧 문제 해결

### 로고가 다르게 표시되는 경우
1. `shared-styles.css`가 올바르게 로드되었는지 확인
2. `!important` 속성이 적용되었는지 확인
3. 브라우저 캐시 클리어

### 헤더/푸터가 표시되지 않는 경우
1. `unified-components.js`가 로드되었는지 확인
2. placeholder div가 올바른 ID를 가지는지 확인
3. 개발자 도구에서 JavaScript 오류 확인

### 활성 메뉴가 잘못 표시되는 경우
1. 파일명과 `activePageId` 매핑 확인
2. `nav-link active` 클래스 적용 확인

## 🎯 장점

1. **일관성**: 모든 페이지에서 동일한 헤더/푸터
2. **유지보수성**: 한 곳에서 수정하면 모든 페이지에 반영
3. **확장성**: 새 페이지 추가가 간편
4. **성능**: CSS/JS 파일 캐싱으로 로딩 속도 향상

## 📝 수정 이력

- 2025.07.05: 통합 헤더/푸터 시스템 구축
- 로고 사이즈 통일 (35px)
- JavaScript 기반 동적 컴포넌트 생성
- 모든 기존 페이지 업데이트 완료

## 👥 기여자

- DataStreams 개발팀
- ex-GPT 프로젝트 PM

---

**참고**: 이 시스템은 ex-GPT 고도화 프로젝트의 웹 프레젠테이션 표준화를 위해 구축되었습니다.
