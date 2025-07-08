// 통합 헤더 HTML 생성 함수
function createUnifiedHeader(activePageId = '') {
    return `
    <!-- 상단 유틸리티 바 -->
    <div class="utility-bar">
        <div class="utility-container">
            <div class="utility-left">
                <span>🚀 ex-GPT 고도화 프로젝트</span>
                <span>•</span>
                <span>📅 2025.07.15 오픈 예정</span>
            </div>
            <div>
                <span>🤝 한국도로공사 × DataStreams 파트너십</span>
            </div>
        </div>
    </div>

    <!-- 메인 헤더 -->
    <header class="main-header">
        <div class="header-container">
            <div class="logo-area">
                <div class="logo-partnership">
                    <a href="main_index.html">
                        <img src="images/한국도로공사_logo.png" alt="한국도로공사" class="logo-img">
                    </a>
                    <span class="partnership-divider">×</span>
                    <a href="#" class="datastreams-logo-img">
                        <img src="images/ds_logo.svg" alt="DataStreams" class="ds-logo-img">
                    </a>
                </div>
            </div>
            
            <nav class="main-nav">
                <div class="nav-item">
                    <a href="company_overview.html" class="nav-link ${activePageId === 'company' ? 'active' : ''}">1. 데이터스트림즈 현황</a>
                    <div class="dropdown-menu">
                        <div class="dropdown-content">
                            <div class="dropdown-section">
                                <div class="dropdown-section-title">🏢 회사 개요</div>
                                <a href="company_overview.html#company-overview" class="dropdown-item">📊 회사 개요 및 역량</a>
                                <a href="company_overview.html#project-experience" class="dropdown-item">🚀 프로젝트 수행 경험</a>
                                <a href="company_overview.html#competitive-advantage" class="dropdown-item">⭐ 경쟁 우위 및 차별화</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="team_organization.html" class="nav-link ${activePageId === 'team' ? 'active' : ''}">2. 투입인력, 조직, 일정</a>
                    <div class="dropdown-menu">
                        <div class="dropdown-content">
                            <div class="dropdown-section">
                                <div class="dropdown-section-title">👥 팀 구성 및 일정</div>
                                <a href="team_organization.html#team-table" class="dropdown-item">🎯 핵심 팀 구성</a>
                                <a href="team_organization.html#team-roles" class="dropdown-item">🏢 주요 팀원 역할 및 책임</a>
                                <a href="team_organization.html#project-schedule" class="dropdown-item">📅 프로젝트 일정</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="interview_results.html" class="nav-link ${activePageId === 'interview' ? 'active' : ''}">3. 순회 인터뷰 결과 분석</a>
                    <div class="dropdown-menu">
                        <div class="dropdown-content">
                            <div class="dropdown-section">
                                <div class="dropdown-section-title">🎤 인터뷰 결과 분석</div>
                                <a href="interview_results.html#department-interviews" class="dropdown-item">🏑️ 부처별 인터뷰 결과</a>
                                <a href="interview_results.html#priority-insights" class="dropdown-item">📈 종합 분석 및 우선순위</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="current_status.html" class="nav-link ${activePageId === 'status' ? 'active' : ''}">4. 학습데이터 AS-IS vs TO-BE</a>
                </div>
                <div class="nav-item">
                    <a href="enhancement_plan.html" class="nav-link ${activePageId === 'enhancement' ? 'active' : ''}">5. 기능 AS-IS vs TO-BE</a>
                </div>
                <div class="nav-item">
                    <a href="customer_requirements.html" class="nav-link ${activePageId === 'requirements' ? 'active' : ''}">6. 한국도로공사 지원 요청사항</a>
                    <div class="dropdown-menu">
                        <div class="dropdown-content">
                            <div class="dropdown-section">
                                <div class="dropdown-section-title">📋 한국도로공사 지원 요청사항</div>
                                <a href="customer_requirements.html#infrastructure" class="dropdown-item">🖥️ 인프라 및 시스템 지원</a>
                                <a href="customer_requirements.html#api-support" class="dropdown-item">🔗 시스템 연계 및 API 지원</a>
                                <a href="customer_requirements.html#data-support" class="dropdown-item">📊 데이터 및 컨텐츠 지원</a>
                                <a href="customer_requirements.html#collaboration" class="dropdown-item">🤝 협업 및 커뮤니케이션</a>
                                <a href="customer_requirements.html#contacts" class="dropdown-item">📞 주요 연락처 및 협업 체계</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    `;
}

// 통합 푸터 HTML 생성 함수
function createUnifiedFooter() {
    return `
    <!-- 푸터 -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-title">ex-GPT 고도화 프로젝트</div>
            <div class="footer-info">
                한국도로공사 × DataStreams
            </div>
            <div class="footer-partnership">
                <div class="partner-logo">🏢 한국도로공사</div>
                <div class="partnership-icon">×</div>
                <div class="partner-logo">🚀 DataStreams</div>
            </div>
        </div>
    </footer>

    <a href="main_index.html" class="back-button">🏠</a>
    `;
}

// DOM이 로드되면 헤더와 푸터를 삽입
document.addEventListener('DOMContentLoaded', function() {
    // 현재 페이지 ID 감지
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    let activePageId = '';
    
    switch(currentPage) {
        case 'company_overview':
            activePageId = 'company';
            break;
        case 'team_organization':
            activePageId = 'team';
            break;
        case 'interview_results':
            activePageId = 'interview';
            break;
        case 'current_status':
            activePageId = 'status';
            break;
        case 'enhancement_plan':
            activePageId = 'enhancement';
            break;
        case 'customer_requirements':
            activePageId = 'requirements';
            break;
        default:
            activePageId = '';
    }

    // 헤더 삽입
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = createUnifiedHeader(activePageId);
    }

    // 푸터 삽입
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = createUnifiedFooter();
    }
});

// 부드러운 스크롤 처리
document.addEventListener('DOMContentLoaded', function() {
    // 앵커 링크에 대한 부드러운 스크롤
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
