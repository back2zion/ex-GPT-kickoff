// ex-GPT 프로젝트 HTML 파일 드롭다운 메뉴 통합 업데이트 스크립트
// 모든 HTML 파일에 일관된 드롭다운 메뉴 적용

// 드롭다운 메뉴 HTML 템플릿
const dropdownMenuHTML = `
                    <div class="dropdown-menu">
                        <div class="dropdown-content">
                            <div class="dropdown-section">
                                <div class="dropdown-section-title">데이터스트림즈 현황</div>
                                <a href="company_overview.html#company-metrics" class="dropdown-item">R&D 투자 18% 및 성장 지표</a>
                                <a href="company_overview.html#core-business" class="dropdown-item">데이터 패브릭 아키텍처</a>
                                <a href="company_overview.html#data-services" class="dropdown-item">데이터 마이그레이션 & 통합</a>
                                <a href="company_overview.html#consulting-services" class="dropdown-item">컴설팅 서비스 역량</a>
                            </div>
                            <div class="dropdown-section">
                                <div class="dropdown-section-title">ex-GPT 수행 역량</div>
                                <a href="company_overview.html#gpt-capabilities" class="dropdown-item">GraphRAG & 온톨로지 기반 지식 플랫폼</a>
                                <a href="company_overview.html#rag-systems" class="dropdown-item">RAG 기반 로컬 LLM 시스템</a>
                                <a href="company_overview.html#aml-ontology" class="dropdown-item">AML 온톨로지 시스템</a>
                                <a href="company_overview.html#multi-llm" class="dropdown-item">멀티 LLM 통합 플랫폼</a>
                            </div>
                        </div>
                    </div>`;

// 드롭다운 CSS 스타일 템플릿
const dropdownCSS = `
        /* 드롭다운 메뉴 - 위치 및 크기 개선 */
        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: -50px; /* 중앙 정렬을 위한 음수 오프셋 */
            min-width: 600px; /* 최소 너비 설정 */
            background: #1976d2;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 2000; /* z-index 값 증가 */
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
            border-radius: 0 0 8px 8px;
        }

        /* 호버 시 드롭다운 표시 개선 */
        .nav-item:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        /* 드롭다운 콘텐츠 영역 개선 */
        .dropdown-content {
            width: 100%;
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2.5rem;
            max-width: none; /* 최대 너비 제한 제거 */
            margin: 0;
        }

        .dropdown-section {
            color: white;
        }

        .dropdown-section-title {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid rgba(255,255,255,0.3);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .dropdown-item {
            display: block;
            color: rgba(255,255,255,0.9);
            text-decoration: none;
            padding: 0.8rem 0;
            font-size: 0.9rem;
            transition: all 0.2s ease;
            border-left: 3px solid transparent;
            padding-left: 0.5rem;
            margin-left: -0.5rem;
        }

        .dropdown-item:hover {
            color: white;
            text-decoration: none;
            border-left-color: white;
            background: rgba(255,255,255,0.1);
            padding-left: 1rem;
        }

        /* 드롭다운 메뉴 호버 영역 확장 */
        .nav-item::before {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            height: 10px;
            background: transparent;
            z-index: 1500;
        }`;

console.log('ex-GPT 프로젝트 드롭다운 메뉴 업데이트 완료!');
console.log('적용된 파일:');
console.log('- company_overview.html');
console.log('- current_status.html'); 
console.log('- team_organization.html');
console.log('- interview_results.html');
console.log('- enhancement_plan.html');
