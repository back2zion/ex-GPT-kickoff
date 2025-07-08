// 나머지 HTML 파일들을 일괄 업데이트하는 스크립트
// 각 파일에 공통 CSS 링크와 통합 헤더/푸터 placeholder 추가

const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'interview_results.html',
    'current_status.html', 
    'enhancement_plan.html',
    'customer_requirements.html'
];

filesToUpdate.forEach(filename => {
    const filePath = path.join(__dirname, filename);
    
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // CSS 링크 추가
        if (!content.includes('shared-styles.css')) {
            content = content.replace(
                /<title>([^<]+)<\/title>/,
                '<title>$1</title>\n    <link rel="stylesheet" href="shared-styles.css">'
            );
        }
        
        // 헤더 대체
        content = content.replace(
            /<!-- 상단 유틸리티 바 -->[\s\S]*?<\/header>/m,
            '<div id="header-placeholder"></div>'
        );
        
        // 푸터 대체
        content = content.replace(
            /<!-- 푸터 -->[\s\S]*?<\/footer>\s*(<a href="main_index.html" class="back-button">🏠<\/a>)?/m,
            '<div id="footer-placeholder"></div>'
        );
        
        // 스크립트 추가
        if (!content.includes('unified-components.js')) {
            content = content.replace(
                /<\/body>/,
                '    <script src="unified-components.js"></script>\n</body>'
            );
        }
        
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filename}`);
    }
});
