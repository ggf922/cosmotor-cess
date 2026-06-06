/**
 * COSMOTOR CESS - 에너지 절감 솔루션 제안서
 * Main JavaScript — Full Version
 * ─────────────────────────────────────────────
 * 1. DOWNLOAD_RESOURCES (30개 이미지)
 * 2. LOADING SCREEN — 진행바 카운트업 + 자동 숨김
 * 3. SCROLL PROGRESS BAR — 스크롤 위치 기반 상단 바
 * 4. NAVIGATION — 스크롤 효과, 햄버거, 활성 링크
 * 5. SMOOTH SCROLL
 * 6. BACK TO TOP
 * 7. SCROLL REVEAL (IntersectionObserver)
 * 8. COUNTER ANIMATION
 * 9. HERO PARTICLES — 동적 파티클 생성
 * 10. ROI CALCULATOR — 계산 로직 + DOM 업데이트
 *     ├─ 슬라이더 ↔ 숫자 입력 동기화
 *     ├─ 절전율 버튼 선택 연동
 *     └─ 결과 시각화 바 애니메이션
 * 11. IMAGE DOWNLOAD (Fetch+Blob, CORS fallback)
 * 12. DOWNLOAD MODAL (30개 이미지 목록)
 * 13. TOAST NOTIFICATION
 */

/* ================================================
   IMAGE DOWNLOAD RESOURCES
================================================ */
const DOWNLOAD_RESOURCES = [
    { name: 'CESS 표지 (에너지 절감 솔루션)',          url: 'https://www.genspark.ai/api/files/s/BlujFSyF', filename: 'CESS_01_표지.jpg' },
    { name: 'CESS 절전효과 (아파트단지 누진세 절감)',    url: 'https://www.genspark.ai/api/files/s/AexP0p7a', filename: 'CESS_02_절전효과.jpg' },
    { name: 'INDEX 목차',                             url: 'https://www.genspark.ai/api/files/s/sHNpf3Su', filename: 'CESS_03_INDEX.jpg' },
    { name: '회사연혁 1 (1996-2007)',                  url: 'https://www.genspark.ai/api/files/s/E6YOfyk4', filename: 'CESS_04_연혁_1996-2007.jpg' },
    { name: '회사연혁 2 (2007-2018)',                  url: 'https://www.genspark.ai/api/files/s/DJiiJuBl', filename: 'CESS_05_연혁_2007-2018.jpg' },
    { name: '회사연혁 3 (2019-2025)',                  url: 'https://www.genspark.ai/api/files/s/FEXUzxBx', filename: 'CESS_06_연혁_2019-2025.jpg' },
    { name: '절전원리 (효율개선원리)',                  url: 'https://www.genspark.ai/api/files/s/xa7TFgaq', filename: 'CESS_07_절전원리.jpg' },
    { name: '정부인증 서류 (특허증 등)',                url: 'https://www.genspark.ai/api/files/s/7rx9YToR', filename: 'CESS_08_정부인증_서류.jpg' },
    { name: '인증서 목록 (KTL, CE, ISO 등)',           url: 'https://www.genspark.ai/api/files/s/JUQYUXw7', filename: 'CESS_09_인증서목록.jpg' },
    { name: '설치현황 개요 (국내외 실적)',              url: 'https://www.genspark.ai/api/files/s/Hm2CcZwJ', filename: 'CESS_10_설치현황_개요.jpg' },
    { name: '고객사 로고 1 (넥센, KT, 현대 등)',       url: 'https://www.genspark.ai/api/files/s/F0xmdDdc', filename: 'CESS_11_고객사1.jpg' },
    { name: '고객사 로고 2 (현대스틸, 농심, 대상 등)', url: 'https://www.genspark.ai/api/files/s/THEwss9D', filename: 'CESS_12_고객사2.jpg' },
    { name: '설치사례 - 대상, 농심',                   url: 'https://www.genspark.ai/api/files/s/qsOd2uGI', filename: 'CESS_13_사례_대상_농심.jpg' },
    { name: '설치사례 - KT파워텔, 롯데마트',           url: 'https://www.genspark.ai/api/files/s/FHbN8UtP', filename: 'CESS_14_사례_KT_롯데.jpg' },
    { name: '설치사례 - 리츠칼튼, 이마트',             url: 'https://www.genspark.ai/api/files/s/exsfD0Zs', filename: 'CESS_15_사례_리츠칼튼_이마트.jpg' },
    { name: '설치사례 - 태국 (Toyota, Mitsubishi)',    url: 'https://www.genspark.ai/api/files/s/zux2lgTg', filename: 'CESS_16_사례_태국.jpg' },
    { name: '설치사례 - 필리핀 (Goldilocks, Cargill)', url: 'https://www.genspark.ai/api/files/s/mm9nAFy5', filename: 'CESS_17_사례_필리핀.jpg' },
    { name: '아파트 절전 TEST 결과',                   url: 'https://www.genspark.ai/api/files/s/BnKix8Wm', filename: 'CESS_18_아파트_결과.jpg' },
    { name: '누진세 시뮬레이션 (아파트단지)',           url: 'https://www.genspark.ai/api/files/s/HFKZVlFm', filename: 'CESS_19_누진세시뮬레이션.jpg' },
    { name: '구축비용 회수기간 - 월 수익률',           url: 'https://www.genspark.ai/api/files/s/2byZq8bR', filename: 'CESS_20_월수익예상.jpg' },
    { name: '구축비용 회수기간 - 년 수익률',           url: 'https://www.genspark.ai/api/files/s/pBCNzjuK', filename: 'CESS_21_년수익예상.jpg' },
    { name: '개런티 적용방식',                         url: 'https://www.genspark.ai/api/files/s/MxuQLkBx', filename: 'CESS_22_개런티.jpg' },
    { name: '에너지 절감 필요성',                      url: 'https://www.genspark.ai/api/files/s/va696QRz', filename: 'CESS_23_에너지절감필요성.jpg' },
    { name: '설치 프로세스 (4단계)',                   url: 'https://www.genspark.ai/api/files/s/4K8lspys', filename: 'CESS_24_설치프로세스.jpg' },
    { name: '병렬설치 실제 CASE',                      url: 'https://www.genspark.ai/api/files/s/d6Fmcq3C', filename: 'CESS_25_병렬설치.jpg' },
    { name: '절전 테스트 분석표',                      url: 'https://www.genspark.ai/api/files/s/HCoFgKEy', filename: 'CESS_26_분석표.jpg' },
    { name: 'Q&A - 영향도 및 안전성',                  url: 'https://www.genspark.ai/api/files/s/qLKWudCV', filename: 'CESS_27_QA1.jpg' },
    { name: 'Q&A - 설치 및 용량',                     url: 'https://www.genspark.ai/api/files/s/8OFjGXOW', filename: 'CESS_28_QA2.jpg' },
    { name: 'Q&A - 계약 및 A/S',                      url: 'https://www.genspark.ai/api/files/s/dFjDbDiz', filename: 'CESS_29_QA3.jpg' },
    { name: 'Thank You (마지막 슬라이드)',              url: 'https://www.genspark.ai/api/files/s/WON7YSTw', filename: 'CESS_30_Thank_You.jpg' },
];

/* ================================================
   LOADING SCREEN
================================================ */
function initLoadingScreen() {
    const screen   = document.getElementById('loading-screen');
    const bar      = document.getElementById('loading-bar');
    const loadText = screen ? screen.querySelector('.loading-text') : null;
    if (!screen || !bar) return;

    let progress = 0;
    const messages = [
        '에너지 절감 솔루션 로딩 중...',
        '절전 데이터 초기화 중...',
        '계산기 준비 중...',
        'CESS 시스템 준비 완료!'
    ];
    let msgIdx = 0;

    const tick = setInterval(() => {
        // 초반에는 빠르게, 후반에는 천천히 (자연스러운 느낌)
        const increment = progress < 60 ? Math.random() * 6 + 3
                        : progress < 85 ? Math.random() * 3 + 1
                        : Math.random() * 1.5 + 0.3;
        progress = Math.min(progress + increment, 98);
        bar.style.width = progress + '%';

        // 메시지 전환
        const newIdx = Math.floor((progress / 100) * messages.length);
        if (newIdx !== msgIdx && newIdx < messages.length && loadText) {
            msgIdx = newIdx;
            loadText.style.opacity = '0';
            setTimeout(() => {
                loadText.textContent = messages[msgIdx];
                loadText.style.opacity = '1';
            }, 200);
        }

        if (progress >= 98) {
            clearInterval(tick);
        }
    }, 40);

    // 페이지 로드 완료 → 바 100% 채우고 숨기기
    window.addEventListener('load', () => {
        clearInterval(tick);
        bar.style.transition = 'width 0.3s ease';
        bar.style.width = '100%';

        if (loadText) {
            loadText.style.opacity = '0';
            setTimeout(() => {
                loadText.textContent = 'CESS 시스템 준비 완료!';
                loadText.style.opacity = '1';
            }, 200);
        }

        setTimeout(() => {
            screen.classList.add('hidden');
            // 숨김 후 DOM 제거 (메모리 절약)
            setTimeout(() => {
                screen.style.display = 'none';
            }, 700);
        }, 500);
    });

    // 안전장치: 5초 후에도 남아있으면 강제 숨김
    setTimeout(() => {
        if (!screen.classList.contains('hidden')) {
            bar.style.width = '100%';
            setTimeout(() => screen.classList.add('hidden'), 300);
        }
    }, 5000);
}

/* ================================================
   SCROLL PROGRESS BAR
================================================ */
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollTop    = window.scrollY;
                const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
                const pct          = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                progressBar.style.width = Math.min(pct, 100) + '%';
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ================================================
   NAVIGATION
================================================ */
const nav       = document.getElementById('main-nav');
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
const navLinks  = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveLink();
    updateBackToTop();
}, { passive: true });

hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
});

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) navMenu.classList.remove('open');
});

function updateActiveLink() {
    const scrollPos = window.scrollY + 120;
    document.querySelectorAll('section[id], footer[id]').forEach(section => {
        const id   = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (!link) return;
        const top    = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

/* ================================================
   SMOOTH SCROLL
================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const navH = nav ? nav.offsetHeight : 68;
        const pos  = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top: pos, behavior: 'smooth' });
    });
});

/* ================================================
   BACK TO TOP
================================================ */
const backToTopBtn = document.getElementById('back-to-top');

function updateBackToTop() {
    if (backToTopBtn) backToTopBtn.classList.toggle('visible', window.scrollY > 400);
}

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ================================================
   SCROLL REVEAL (IntersectionObserver)
================================================ */
function initReveal() {
    const targets = document.querySelectorAll(
        '.stat-card, .benefit-circle, .timeline-item, .index-item, .qa-item, ' +
        '.cert-badge, .process-step, .annual-roi-card, .warranty-card, ' +
        '.energy-point, .func-item, .roi-item, .result-card, ' +
        '.carbon-kpi-card, .carbon-result-card, .carbon-bar-row, ' +
        '.review-card, .live-c-item, .rating-bar-row'
    );
    targets.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    targets.forEach(el => observer.observe(el));
}

/* ================================================
   COUNTER ANIMATION
================================================ */
function initCounters() {
    const counters = document.querySelectorAll('.stat-num');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el   = entry.target;
            const span = el.querySelector('span');
            const spanHTML = span ? span.outerHTML : '';
            const numText  = el.textContent.replace(/[^0-9]/g, '');
            const target   = parseInt(numText, 10);
            if (isNaN(target) || target === 0) return;

            el.innerHTML = '0' + spanHTML;
            const numNode = el.childNodes[0];
            let count = 0;
            const steps   = 60;
            const stepVal  = target / steps;

            const timer = setInterval(() => {
                count += stepVal;
                if (count >= target) {
                    numNode.textContent = target.toLocaleString('ko-KR');
                    clearInterval(timer);
                } else {
                    numNode.textContent = Math.floor(count).toLocaleString('ko-KR');
                }
            }, 20);

            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

/* ================================================
   HERO PARTICLES
================================================ */
function initParticles() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    // 파티클 컨테이너
    const container = document.createElement('div');
    container.className = 'particles-container';
    container.setAttribute('aria-hidden', 'true');
    container.style.cssText = `
        position:absolute; inset:0; overflow:hidden;
        pointer-events:none; z-index:1;
    `;
    hero.insertBefore(container, hero.firstChild);

    const symbols = ['⚡', '⚡', '⚡', '◈', '◉', '✦', '❋'];
    const count = 22;

    for (let i = 0; i < count; i++) {
        createParticle(container, symbols, i, count);
    }
}

function createParticle(container, symbols, i, total) {
    const el = document.createElement('div');
    el.className = 'hero-particle';

    const size    = Math.random() * 14 + 8;              // 8~22px
    const leftPct = (i / total) * 100 + (Math.random() * 6 - 3); // 균등 배치
    const delay   = Math.random() * 8;                   // 0~8s delay
    const dur     = Math.random() * 6 + 7;               // 7~13s
    const drift   = (Math.random() - 0.5) * 60;          // ±30px 좌우 흔들림
    const sym     = symbols[Math.floor(Math.random() * symbols.length)];
    const opacity = Math.random() * 0.35 + 0.1;          // 0.1~0.45

    el.textContent = sym;
    el.style.cssText = `
        position: absolute;
        left: ${leftPct}%;
        bottom: -5%;
        font-size: ${size}px;
        opacity: 0;
        animation: floatParticle ${dur}s ease-in ${delay}s infinite;
        --drift: ${drift}px;
        color: rgba(255,255,255,${opacity});
        filter: blur(${Math.random() > 0.7 ? 0.5 : 0}px);
        user-select: none;
        pointer-events: none;
    `;
    container.appendChild(el);
}

/* ================================================
   ROI CALCULATOR
================================================ */
function initCalculator() {
    const billInput   = document.getElementById('monthly-bill');
    const billSlider  = document.getElementById('bill-slider');
    const saveRateInp = document.getElementById('save-rate');
    const calcBtn     = document.getElementById('calc-btn');
    const calcResult  = document.getElementById('calc-result');
    const calcVisual  = document.getElementById('calc-visual');

    if (!billInput || !billSlider || !saveRateInp || !calcBtn) return;

    /* ── 슬라이더 ↔ 숫자 입력 동기화 ── */
    function syncToSlider() {
        let val = parseInt(billInput.value, 10) || 1000000;
        val = Math.max(1000000, Math.min(500000000, val));
        billInput.value   = val;
        billSlider.value  = val;
        updateSliderFill();
    }

    function syncFromSlider() {
        billInput.value = billSlider.value;
        updateSliderFill();
    }

    function updateSliderFill() {
        const min = parseInt(billSlider.min, 10);
        const max = parseInt(billSlider.max, 10);
        const val = parseInt(billSlider.value, 10);
        const pct = ((val - min) / (max - min)) * 100;
        billSlider.style.setProperty('--fill-pct', pct + '%');
    }

    billInput.addEventListener('input',  syncToSlider);
    billInput.addEventListener('blur',   syncToSlider);
    billSlider.addEventListener('input', syncFromSlider);
    updateSliderFill();

    /* ── 절전율 버튼 ── */
    const rateBtns = document.querySelectorAll('.rate-btn');
    rateBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            rateBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            saveRateInp.value = btn.dataset.rate;
            // 버튼 클릭 시 바로 계산
            runCalculation();
        });
    });

    /* saveRateInp 직접 수정 시 버튼 동기화 */
    saveRateInp.addEventListener('input', () => {
        const v = parseInt(saveRateInp.value, 10);
        rateBtns.forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.rate, 10) === v);
        });
    });

    /* ── 계산 실행 ── */
    calcBtn.addEventListener('click', () => {
        runCalculation();
        // 결과 패널로 부드럽게 스크롤
        if (calcResult) {
            setTimeout(() => {
                calcResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 200);
        }
    });

    /* Enter 키 지원 */
    billInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') runCalculation();
    });

    function runCalculation() {
        const monthlyBill  = parseInt(billInput.value, 10) || 0;
        const saveRatePct  = parseFloat(saveRateInp.value) || 10;
        const paymentType  = document.querySelector('input[name="payment"]:checked')?.value || 'rental';

        if (monthlyBill < 1000000) {
            showToast('월 전기요금을 100만원 이상 입력해주세요.', 'warning');
            billInput.focus();
            return;
        }

        /* ─── 계산 로직 ───
         * CESS 제안서 기준:
         *  - 절전율 r% → 누진세 포함 실제 절감율 = r * 1.3 (10% → 13%)
         *  - 구축비용 견적 = 월 전기요금 × 2.5
         *  - 렌탈: 33개월 균등 납부, 월 렌탈료 = 구축비용 / 33
         *  - 회수기간(렌탈) = 33개월 (렌탈 완료 시점이 곧 회수 시점)
         *  - 회수기간(일시납) = 구축비용 / 월절감액
         */
        const savePctActual   = saveRatePct * 1.3;          // 누진세 포함 절감율
        const monthlySave     = Math.round(monthlyBill * (savePctActual / 100));
        const yearlySave      = monthlySave * 12;
        const installCost     = Math.round(monthlyBill * 2.5);
        const monthlyRental   = Math.round(installCost / 33);

        let paybackMonths, paybackLabel;
        if (paymentType === 'rental') {
            paybackMonths = 33;
            paybackLabel  = '렌탈 방식 기준 (33개월 완납 시)';
        } else {
            paybackMonths = monthlySave > 0 ? Math.ceil(installCost / monthlySave) : 999;
            paybackLabel  = '일시납 기준 (절감액으로 회수)';
        }

        const save10year  = yearlySave * 10;
        const save20year  = yearlySave * 20;

        /* DOM 업데이트 */
        animateValue('r-monthly-save', monthlySave, '원');
        animateValue('r-yearly-save',  yearlySave,  '원');
        animateValue('r-install-cost', installCost, '원');
        animateValue('r-10year',       save10year,  '원');
        animateValue('r-20year',       save20year,  '원');

        const paybackEl = document.getElementById('r-payback');
        if (paybackEl) {
            paybackEl.textContent = paybackMonths >= 999
                ? '계산 불가'
                : paybackMonths + '개월';
        }
        const paybackSubEl = document.getElementById('r-payback-sub');
        if (paybackSubEl) paybackSubEl.textContent = paybackLabel;

        const saveLabelEl = document.getElementById('r-save-rate-label');
        if (saveLabelEl) saveLabelEl.textContent = `절전율 ${saveRatePct}% → 실절감율 약 ${savePctActual.toFixed(1)}%`;

        /* 시각화 바 */
        if (calcVisual) {
            calcVisual.style.display = 'block';
            const saveBarEl  = document.getElementById('vb-save-bar');
            const totalBarEl = document.getElementById('vb-total-bar');
            const savePctEl  = document.getElementById('vb-save-pct');
            const totalPctEl = document.getElementById('vb-total-pct');

            // 바 초기화 → 애니메이션
            if (saveBarEl)  saveBarEl.style.width  = '0%';
            if (totalBarEl) totalBarEl.style.width = '0%';

            const maxPct = 30; // 시각화 최대 기준 30%
            const saveW  = Math.min((saveRatePct / maxPct) * 100, 100);
            const totalW = Math.min((savePctActual / maxPct) * 100, 100);

            requestAnimationFrame(() => {
                setTimeout(() => {
                    if (saveBarEl)  saveBarEl.style.width  = saveW  + '%';
                    if (totalBarEl) totalBarEl.style.width = totalW + '%';
                    if (savePctEl)  savePctEl.textContent  = saveRatePct  + '%';
                    if (totalPctEl) totalPctEl.textContent = savePctActual.toFixed(1) + '%';
                }, 100);
            });
        }

        /* result-card 리빌 */
        const resultCards = document.querySelectorAll('.result-card');
        resultCards.forEach((card, i) => {
            card.style.opacity   = '0';
            card.style.transform = 'translateY(16px)';
            setTimeout(() => {
                card.style.transition = 'opacity .4s ease, transform .4s ease';
                card.style.opacity    = '1';
                card.style.transform  = 'translateY(0)';
            }, i * 80 + 50);
        });

        showToast(
            `월 ${fmtKRW(monthlySave)}원 절감 예상! (절전율 ${saveRatePct}% → 실절감율 ~${savePctActual.toFixed(1)}%)`,
            'success'
        );
    }

    /* ── 숫자 카운트업 애니메이션 ── */
    function animateValue(id, targetVal, suffix) {
        const el = document.getElementById(id);
        if (!el) return;
        const duration = 900;
        const startTime = performance.now();
        const startVal  = parseFloat(el.textContent.replace(/[^0-9]/g, '')) || 0;

        function step(now) {
            const elapsed  = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const cur = Math.round(startVal + (targetVal - startVal) * eased);
            el.textContent = fmtKRW(cur) + suffix;
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    /* 초기 계산 (기본값으로 미리 실행) */
    setTimeout(runCalculation, 300);
}

/* KRW 포맷 헬퍼 */
function fmtKRW(num) {
    if (num >= 1_0000_0000) {
        const eok  = Math.floor(num / 1_0000_0000);
        const man  = Math.floor((num % 1_0000_0000) / 10000);
        return man > 0
            ? eok.toLocaleString('ko-KR') + '억 ' + man.toLocaleString('ko-KR') + '만'
            : eok.toLocaleString('ko-KR') + '억';
    }
    if (num >= 10000) {
        const man  = Math.floor(num / 10000);
        const rest = num % 10000;
        return rest > 0
            ? man.toLocaleString('ko-KR') + '만 ' + rest.toLocaleString('ko-KR')
            : man.toLocaleString('ko-KR') + '만';
    }
    return num.toLocaleString('ko-KR');
}
window.fmtKRW = fmtKRW;

/* ================================================
   IMAGE DOWNLOAD
================================================ */
async function downloadImage(url, filename) {
    showToast(`"${filename}" 다운로드 중...`, 'info');
    try {
        const res = await fetch(url, { mode: 'cors' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const blob    = await res.blob();
        const blobUrl = URL.createObjectURL(blob);
        const a       = document.createElement('a');
        a.href         = blobUrl;
        a.download     = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
        showToast(`"${filename}" 다운로드 완료!`, 'success');
    } catch (err) {
        console.warn('Download fallback:', err);
        window.open(url, '_blank');
        showToast('이미지를 새 탭에서 열었습니다. 우클릭 후 "다른 이름으로 저장"을 선택하세요.', 'warning');
    }
}
window.downloadImage = downloadImage;

/* ================================================
   DOWNLOAD MODAL
================================================ */
const modal          = document.getElementById('download-modal');
const modalClose     = document.getElementById('modal-close');
const modalCloseBtn  = document.getElementById('modal-close-btn');
const modalDlAll     = document.getElementById('modal-dl-all');
const downloadListEl = document.getElementById('download-list');
const downloadAllBtn = document.getElementById('download-all-btn');
const footerDlAll    = document.getElementById('footer-download-all');

function openModal() {
    if (!downloadListEl) return;
    downloadListEl.innerHTML = '';
    DOWNLOAD_RESOURCES.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = 'dl-item';
        row.innerHTML = `
            <span class="dl-item-num">${String(idx + 1).padStart(2, '0')}</span>
            <span class="dl-item-name">${item.name}</span>
            <button class="dl-item-btn" data-url="${item.url}" data-filename="${item.filename}"
                    aria-label="${item.name} 다운로드">
                <i class="fas fa-download"></i> 다운로드
            </button>
        `;
        downloadListEl.appendChild(row);
    });

    downloadListEl.onclick = (e) => {
        const btn = e.target.closest('.dl-item-btn');
        if (btn) downloadImage(btn.dataset.url, btn.dataset.filename);
    };

    if (modal) modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
}

if (downloadAllBtn)  downloadAllBtn.addEventListener('click', openModal);
if (footerDlAll)     footerDlAll.addEventListener('click', openModal);
if (modalClose)      modalClose.addEventListener('click', closeModal);
if (modalCloseBtn)   modalCloseBtn.addEventListener('click', closeModal);
if (modal)           modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

if (modalDlAll) {
    modalDlAll.addEventListener('click', async () => {
        closeModal();
        showToast(`전체 ${DOWNLOAD_RESOURCES.length}개 이미지 다운로드를 시작합니다...`, 'info');
        for (const item of DOWNLOAD_RESOURCES) {
            await new Promise(r => setTimeout(r, 700));
            await downloadImage(item.url, item.filename);
        }
        showToast('전체 다운로드 완료!', 'success');
    });
}

/* ================================================
   TOAST NOTIFICATION
================================================ */
let toastTimer = null;
function showToast(message, type = 'info') {
    const existing = document.querySelector('.cess-toast');
    if (existing) existing.remove();
    if (toastTimer) clearTimeout(toastTimer);

    const colorMap = { info: '#2969d6', success: '#22c55e', warning: '#f5a623', error: '#e02020' };
    const iconMap  = { info: 'fa-circle-info', success: 'fa-circle-check', warning: 'fa-triangle-exclamation', error: 'fa-circle-xmark' };

    const toast = document.createElement('div');
    toast.className = 'cess-toast';
    toast.style.cssText = `
        position: fixed; bottom: 5.5rem; left: 50%;
        transform: translateX(-50%) translateY(0);
        z-index: 3000;
        background: ${colorMap[type] || colorMap.info}; color: #fff;
        padding: 0.85rem 1.4rem; border-radius: 30px;
        font-family: 'Noto Sans KR', sans-serif; font-size: 0.86rem; font-weight: 600;
        display: flex; align-items: center; gap: 0.5rem;
        box-shadow: 0 8px 30px rgba(0,0,0,0.25); max-width: 90vw; text-align: center;
        transition: opacity .3s ease, transform .3s ease;
        white-space: normal; word-break: keep-all;
        animation: toastSlideUp .3s ease;
    `;
    toast.innerHTML = `<i class="fas ${iconMap[type] || iconMap.info}"></i><span>${message}</span>`;
    document.body.appendChild(toast);

    toastTimer = setTimeout(() => {
        toast.style.opacity   = '0';
        toast.style.transform = 'translateX(-50%) translateY(8px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
window.showToast = showToast;

/* ================================================
   CSS 동적 주입 (파티클 keyframe + toast 애니메이션)
================================================ */
(function injectKeyframes() {
    if (document.getElementById('cess-dynamic-styles')) return;
    const style = document.createElement('style');
    style.id = 'cess-dynamic-styles';
    style.textContent = `
        @keyframes floatParticle {
            0%   { transform: translateY(0)       translateX(0)            ; opacity: 0;   }
            5%   { opacity: 1; }
            90%  { opacity: 0.5; }
            100% { transform: translateY(-110vh)  translateX(var(--drift))  ; opacity: 0;   }
        }
        .hero-particle {
            animation-fill-mode: both;
        }
        @keyframes toastSlideUp {
            from { opacity: 0; transform: translateX(-50%) translateY(16px); }
            to   { opacity: 1; transform: translateX(-50%) translateY(0);    }
        }
        /* 슬라이더 fill 색상 */
        #bill-slider {
            background: linear-gradient(
                to right,
                #2969d6 0%,
                #2969d6 var(--fill-pct, 2%),
                #d0d8e8 var(--fill-pct, 2%),
                #d0d8e8 100%
            );
        }
        /* dl-item 번호 배지 */
        .dl-item-num {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 1.8rem; height: 1.8rem;
            background: var(--blue-bright, #2969d6);
            color: #fff; font-size: 0.72rem; font-weight: 700;
            border-radius: 50%; flex-shrink: 0;
        }
    `;
    document.head.appendChild(style);
})();

/* ================================================
   DARK MODE TOGGLE
================================================ */
function initDarkMode() {
    const toggleBtn  = document.getElementById('darkmode-toggle');
    const icon       = document.getElementById('darkmode-icon');
    if (!toggleBtn) return;

    // 저장된 테마 복원
    const saved = localStorage.getItem('cess-theme');
    if (saved === 'dark') applyDark(true);

    toggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        applyDark(!isDark);
        localStorage.setItem('cess-theme', !isDark ? 'dark' : 'light');
        showToast(!isDark ? '🌙 다크 모드로 전환했습니다.' : '☀️ 라이트 모드로 전환했습니다.', 'info');
    });

    function applyDark(on) {
        document.body.classList.toggle('dark-mode', on);
        if (icon) {
            icon.className = on ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

/* ================================================
   Q&A ACCORDION + SEARCH + FILTER
================================================ */
function initQAAccordion() {
    const accItems   = document.querySelectorAll('.qa-acc-item');
    const filterTabs = document.querySelectorAll('.qa-tab');
    const searchInp  = document.getElementById('qa-search');
    const searchClear= document.getElementById('qa-search-clear');
    const noResult   = document.getElementById('qa-no-result');
    if (!accItems.length) return;

    /* ── 아코디언 open/close ── */
    accItems.forEach(item => {
        const btn  = item.querySelector('.qa-acc-btn');
        const body = item.querySelector('.qa-acc-body');
        if (!btn || !body) return;

        btn.addEventListener('click', () => {
            const isOpen = btn.getAttribute('aria-expanded') === 'true';

            // 같은 카테고리의 다른 아이템 닫기 (1개만 열림)
            const siblings = item.closest('.qa-cat-section')
                               ?.querySelectorAll('.qa-acc-item') || [];
            siblings.forEach(sib => {
                const sBtn  = sib.querySelector('.qa-acc-btn');
                const sBody = sib.querySelector('.qa-acc-body');
                if (sBtn && sBody && sib !== item) {
                    sBtn.setAttribute('aria-expanded', 'false');
                    sBody.classList.remove('open');
                }
            });

            // 현재 아이템 토글
            btn.setAttribute('aria-expanded', String(!isOpen));
            body.classList.toggle('open', !isOpen);

            // 열릴 때 부드럽게 스크롤
            if (!isOpen) {
                setTimeout(() => {
                    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });

    /* ── 필터 탭 ── */
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const cat = tab.dataset.cat;
            filterQA(cat, searchInp ? searchInp.value.trim() : '');
        });
    });

    /* ── 검색 ── */
    if (searchInp) {
        searchInp.addEventListener('input', () => {
            const q = searchInp.value.trim();
            if (searchClear) searchClear.style.display = q ? 'block' : 'none';
            const activeCat = document.querySelector('.qa-tab.active')?.dataset.cat || 'all';
            filterQA(activeCat, q);
        });
    }
    if (searchClear) {
        searchClear.addEventListener('click', () => {
            if (searchInp) { searchInp.value = ''; searchInp.focus(); }
            searchClear.style.display = 'none';
            const activeCat = document.querySelector('.qa-tab.active')?.dataset.cat || 'all';
            filterQA(activeCat, '');
        });
    }

    /* ── 필터 + 검색 통합 함수 ── */
    function filterQA(cat, query) {
        const q      = query.toLowerCase();
        let visCount = 0;
        const catSections = document.querySelectorAll('.qa-cat-section');

        catSections.forEach(section => {
            const sectionCat = section.dataset.cat;
            const catMatch   = (cat === 'all' || sectionCat === cat);

            const items = section.querySelectorAll('.qa-acc-item');
            let visInCat = 0;

            items.forEach(item => {
                const btn  = item.querySelector('.qa-acc-btn');
                const body = item.querySelector('.qa-acc-body');
                const text = item.textContent.toLowerCase();
                const textMatch = !q || text.includes(q);

                if (catMatch && textMatch) {
                    item.classList.remove('hidden-item');
                    visInCat++;
                    visCount++;
                    // 검색어 하이라이트
                    if (q && btn) highlightText(btn.querySelector('.qa-q-text'), query);
                    else if (btn) removeHighlight(btn.querySelector('.qa-q-text'));
                } else {
                    item.classList.add('hidden-item');
                    // 숨겨진 아이템은 닫기
                    if (btn) btn.setAttribute('aria-expanded', 'false');
                    if (body) body.classList.remove('open');
                }
            });

            section.classList.toggle('hidden-cat', !catMatch || visInCat === 0);
        });

        // 결과 없음 표시
        if (noResult) noResult.style.display = visCount === 0 ? 'block' : 'none';

        // 검색 중 첫 번째 결과 자동 오픈
        if (q && visCount > 0) {
            const firstVisible = document.querySelector('.qa-acc-item:not(.hidden-item)');
            if (firstVisible) {
                const fBtn  = firstVisible.querySelector('.qa-acc-btn');
                const fBody = firstVisible.querySelector('.qa-acc-body');
                if (fBtn && fBody && fBtn.getAttribute('aria-expanded') === 'false') {
                    fBtn.setAttribute('aria-expanded', 'true');
                    fBody.classList.add('open');
                }
            }
        }
    }

    /* ── 텍스트 하이라이트 ── */
    function highlightText(el, query) {
        if (!el || !query) return;
        const safe = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        el.innerHTML = el.textContent.replace(
            new RegExp(`(${safe})`, 'gi'),
            '<mark class="qa-highlight">$1</mark>'
        );
    }
    function removeHighlight(el) {
        if (!el) return;
        el.innerHTML = el.textContent;
    }
}

/* ================================================
   RIPPLE EFFECT (버튼 클릭 시 물결 효과)
================================================ */
function initRipple() {
    const rippleTargets = document.querySelectorAll(
        '.btn-primary, .btn-secondary, .btn-calc, .btn-download-all, ' +
        '.download-btn-nav, .btn-cta-white, .rate-btn, .qa-tab'
    );

    rippleTargets.forEach(el => {
        el.style.position = el.style.position || 'relative';
        el.style.overflow = 'hidden';

        el.addEventListener('click', function (e) {
            // 이미 있는 ripple 제거
            const old = this.querySelector('.ripple-wave');
            if (old) old.remove();

            const rect   = this.getBoundingClientRect();
            const size   = Math.max(rect.width, rect.height) * 2;
            const x      = e.clientX - rect.left - size / 2;
            const y      = e.clientY - rect.top  - size / 2;

            const wave = document.createElement('span');
            wave.className = 'ripple-wave';
            wave.style.cssText = `
                position: absolute;
                width: ${size}px; height: ${size}px;
                left: ${x}px; top: ${y}px;
                border-radius: 50%;
                background: rgba(255,255,255,0.25);
                transform: scale(0);
                animation: rippleAnim 0.55s linear;
                pointer-events: none;
                z-index: 9;
            `;
            this.appendChild(wave);
            wave.addEventListener('animationend', () => wave.remove());
        });
    });

    // ripple keyframe 추가
    const s = document.getElementById('cess-dynamic-styles');
    if (s && !s.textContent.includes('rippleAnim')) {
        s.textContent += `
            @keyframes rippleAnim {
                to { transform: scale(1); opacity: 0; }
            }
        `;
    }
}

/* ================================================
   LIGHTBOX
================================================ */
// 라이트박스에서 사용할 이미지 목록 (모든 img-hover-card 이미지)
let lbImages   = [];
let lbCurrent  = 0;

function initLightbox() {
    const lb        = document.getElementById('lightbox');
    const lbImg     = document.getElementById('lightbox-img');
    const lbClose   = document.getElementById('lightbox-close');
    const lbPrev    = document.getElementById('lightbox-prev');
    const lbNext    = document.getElementById('lightbox-next');
    const lbCaption = document.getElementById('lightbox-caption-text');
    const lbCounter = document.getElementById('lightbox-counter');
    const lbDlBtn   = document.getElementById('lightbox-dl-btn');
    const lbOverlay = lb?.querySelector('.lightbox-overlay');
    const lbSpinner = lb?.querySelector('.lightbox-spinner');

    if (!lb || !lbImg) return;

    // 이미지 목록 수집 — img-hover-card 내부 img 태그 기준
    const cardImgs = document.querySelectorAll(
        '.img-hover-card img, .history-img-card img, .cert-img-card img, ' +
        '.clients-img-card img, .case-img-card img, .qa-img-card img, ' +
        '.process-img-card img, .achievement-img-card img, .principle-img-card img'
    );
    lbImages = Array.from(cardImgs).map(img => ({
        src      : img.src,
        alt      : img.alt || '',
        filename : img.closest('[onclick]')?.getAttribute('onclick')?.match(/'([^']+\.jpg)'/)?.[1] || img.alt + '.jpg'
    }));

    // 각 카드에 클릭 이벤트 바인딩
    cardImgs.forEach((img, idx) => {
        const card = img.closest(
            '.img-hover-card, .history-img-card, .cert-img-card, ' +
            '.clients-img-card, .case-img-card, .qa-img-card, ' +
            '.process-img-card, .achievement-img-card, .principle-img-card'
        );
        if (!card) return;
        card.addEventListener('click', (e) => {
            // 다운로드 버튼 클릭 시 라이트박스 열지 않음
            if (e.target.closest('.btn-img-download, .img-card-overlay')) return;
            openLightbox(idx);
        });
    });

    // 이전/다음
    lbPrev?.addEventListener('click', (e) => { e.stopPropagation(); moveLightbox(-1); });
    lbNext?.addEventListener('click', (e) => { e.stopPropagation(); moveLightbox(1);  });

    // 닫기
    lbClose?.addEventListener('click',   closeLightbox);
    lbOverlay?.addEventListener('click', closeLightbox);

    // 키보드
    document.addEventListener('keydown', (e) => {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'ArrowLeft')  moveLightbox(-1);
        if (e.key === 'ArrowRight') moveLightbox(1);
        if (e.key === 'Escape')     closeLightbox();
    });

    // 다운로드 버튼
    lbDlBtn?.addEventListener('click', () => {
        const item = lbImages[lbCurrent];
        if (item) downloadImage(item.src, item.filename);
    });

    // 스와이프 지원 (터치)
    let touchStartX = 0;
    lb.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend',   (e) => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) moveLightbox(diff > 0 ? 1 : -1);
    }, { passive: true });

    function openLightbox(idx) {
        lbCurrent = idx;
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
        loadLbImage();
    }

    function closeLightbox() {
        lb.classList.remove('open');
        document.body.style.overflow = '';
        lbImg.classList.remove('loaded');
        lbImg.src = '';
    }

    function moveLightbox(dir) {
        lbCurrent = (lbCurrent + dir + lbImages.length) % lbImages.length;
        lbImg.classList.remove('loaded');
        if (lbSpinner) lbSpinner.classList.remove('hidden');
        setTimeout(loadLbImage, 50);
    }

    function loadLbImage() {
        const item = lbImages[lbCurrent];
        if (!item) return;

        if (lbSpinner) lbSpinner.classList.remove('hidden');
        lbImg.classList.remove('loaded');

        const tmp  = new Image();
        tmp.onload = () => {
            lbImg.src = item.src;
            lbImg.alt = item.alt;
            lbImg.classList.add('loaded');
            if (lbSpinner) lbSpinner.classList.add('hidden');
        };
        tmp.onerror = () => {
            lbImg.src   = item.src;
            lbImg.alt   = item.alt;
            lbImg.classList.add('loaded');
            if (lbSpinner) lbSpinner.classList.add('hidden');
        };
        tmp.src = item.src;

        // 캡션 & 카운터
        if (lbCaption) lbCaption.textContent = item.alt;
        if (lbCounter) lbCounter.textContent = `${lbCurrent + 1} / ${lbImages.length}`;

        // 이전/다음 버튼 disabled 처리 (첫/마지막에서는 순환이므로 항상 활성)
        if (lbPrev) lbPrev.disabled = false;
        if (lbNext) lbNext.disabled = false;
    }

    // 전역 접근용
    window.openLightbox = openLightbox;
}

/* ================================================
   HERO STAT COUNTERS
================================================ */
function initHeroStats() {
    const statNums = document.querySelectorAll('.hero-stat-num[data-target]');
    if (!statNums.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el     = entry.target;
            const target = parseInt(el.dataset.target, 10);
            if (isNaN(target)) return;

            let start = 0;
            const dur   = 1200;
            const t0    = performance.now();

            function step(now) {
                const p    = Math.min((now - t0) / dur, 1);
                const ease = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(start + target * ease).toLocaleString('ko-KR');
                if (p < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    statNums.forEach(el => observer.observe(el));
}

/* ================================================
   섹션 헤더바 SLIDE-IN (IntersectionObserver)
================================================ */
function initHeaderReveal() {
    const headers = document.querySelectorAll('.section-header-bar');
    if (!headers.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('header-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    headers.forEach(h => observer.observe(h));
}

/* ================================================
   글로벌 현황 인포그래픽 (설치현황 섹션)
================================================ */
function initGlobalInfographic() {
    const target = document.getElementById('global-infographic-mount');
    if (!target) return;

    const countries = [
        { flag: '🇰🇷', name: '대한민국', status: '본사·5,000+ 설치' },
        { flag: '🇨🇳', name: '중국',     status: '법인 설립' },
        { flag: '🇯🇵', name: '일본',     status: '특약점 계약' },
        { flag: '🇵🇭', name: '필리핀',   status: '독점 수출계약' },
        { flag: '🇹🇭', name: '태국',     status: '현지 법인' },
        { flag: '🇻🇳', name: '베트남',   status: '판매권 계약' },
        { flag: '🇲🇾', name: '말레이시아',status: '판매 중' },
        { flag: '🇮🇩', name: '인도네시아',status: '판매법인' },
        { flag: '🇮🇳', name: '인도',     status: '판매권 계약' },
        { flag: '🇧🇩', name: '방글라데시',status: '판매권 계약' },
        { flag: '🇷🇺', name: '러시아',   status: 'GOST 인증' },
        { flag: '🇲🇽', name: '멕시코',   status: 'NOM 취득' },
        { flag: '🇧🇷', name: '브라질',   status: '수출계약' },
        { flag: '🇿🇦', name: '남아프리카',status: '판매권 계약' },
        { flag: '🇦🇺', name: '호주',     status: 'Agent 계약' },
        { flag: '🇳🇿', name: '뉴질랜드', status: 'Agent 계약' },
        { flag: '🇬🇧', name: '영국',     status: '판매권 계약' },
        { flag: '🇺🇸', name: '미국',     status: '판매권 계약' },
        { flag: '🇩🇪', name: '독일',     status: 'CE 인증 기반' },
        { flag: '🌍', name: '기타',      status: '20개국 이상' },
    ];

    target.innerHTML = `
        <div class="global-infographic">
            <div class="global-infographic-title">
                <i class="fas fa-globe-asia"></i>
                CESS 글로벌 진출 현황 — 20개국 이상 수출
            </div>
            <div class="global-map-grid">
                ${countries.map(c => `
                    <div class="global-country-card">
                        <span class="global-flag">${c.flag}</span>
                        <div class="global-country-info">
                            <div class="global-country-name">${c.name}</div>
                            <div class="global-country-status">${c.status}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

/* ================================================
   계산기 결과 클립보드 복사 + 초기화
================================================ */
function initCalcShare() {
    const copyBtn  = document.getElementById('btn-copy-result');
    const resetBtn = document.getElementById('btn-reset-calc');
    const shareRow = document.getElementById('calc-share-row');

    if (!copyBtn || !resetBtn) return;

    copyBtn.addEventListener('click', () => {
        const monthly = document.getElementById('r-monthly-save')?.textContent || '—';
        const yearly  = document.getElementById('r-yearly-save')?.textContent  || '—';
        const install = document.getElementById('r-install-cost')?.textContent || '—';
        const payback = document.getElementById('r-payback')?.textContent      || '—';
        const y10     = document.getElementById('r-10year')?.textContent       || '—';
        const y20     = document.getElementById('r-20year')?.textContent       || '—';
        const bill    = document.getElementById('monthly-bill')?.value || '';
        const rate    = document.getElementById('save-rate')?.value    || '';

        const text = [
            '⚡ COSMOTOR CESS — 전기요금 절감 계산 결과',
            '─────────────────────────',
            `📌 월 전기요금  : ₩${parseInt(bill,10).toLocaleString('ko-KR')}원`,
            `📌 적용 절전율  : ${rate}%`,
            '',
            `✅ 월 절감액    : ${monthly}원`,
            `✅ 연 절감액    : ${yearly}원`,
            `✅ 구축비용 견적: ${install}원`,
            `✅ 투자 회수    : ${payback}`,
            `✅ 10년 절감    : ${y10}원`,
            `✅ 20년 절감    : ${y20}원`,
            '',
            '🌐 www.cosmotor.net',
        ].join('\n');

        navigator.clipboard?.writeText(text)
            .then(() => showToast('📋 계산 결과가 클립보드에 복사되었습니다!', 'success'))
            .catch(() => {
                // fallback: textarea
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.style.cssText = 'position:fixed;opacity:0;';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
                showToast('📋 계산 결과가 복사되었습니다!', 'success');
            });
    });

    resetBtn.addEventListener('click', () => {
        const billInput  = document.getElementById('monthly-bill');
        const billSlider = document.getElementById('bill-slider');
        const saveRate   = document.getElementById('save-rate');
        const rateBtns   = document.querySelectorAll('.rate-btn');

        if (billInput)  billInput.value  = '10000000';
        if (billSlider) billSlider.value = '10000000';
        if (saveRate)   saveRate.value   = '10';
        rateBtns.forEach(b => b.classList.toggle('active', b.dataset.rate === '10'));

        // 결과 초기화
        ['r-monthly-save','r-yearly-save','r-install-cost','r-payback','r-10year','r-20year']
            .forEach(id => { const el = document.getElementById(id); if (el) el.textContent = '—'; });
        const cv = document.getElementById('calc-visual');
        if (cv) cv.style.display = 'none';
        if (shareRow) shareRow.style.display = 'none';

        const saveLabelEl = document.getElementById('r-save-rate-label');
        if (saveLabelEl) saveLabelEl.textContent = '절감율 ~%';

        // 슬라이더 fill 업데이트
        if (billSlider) {
            const pct = ((10000000 - 1000000) / (500000000 - 1000000)) * 100;
            billSlider.style.setProperty('--fill-pct', pct + '%');
        }
        showToast('계산기가 초기화되었습니다.', 'info');
    });

    // 계산 완료 시 공유 버튼 표시 (calcBtn 클릭 후 hookup)
    const calcBtn = document.getElementById('calc-btn');
    if (calcBtn && shareRow) {
        calcBtn.addEventListener('click', () => {
            setTimeout(() => { shareRow.style.display = 'flex'; }, 600);
        });
        // 절전율 버튼 클릭시도 표시
        document.querySelectorAll('.rate-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                setTimeout(() => { shareRow.style.display = 'flex'; }, 600);
            });
        });
    }
}

/* ================================================
   HERO TYPING EFFECT
================================================ */
function initHeroTyping() {
    const el = document.getElementById('hero-typing-text');
    if (!el) return;

    const words = [
        '전기요금', '에너지 비용', '탄소 배출', '운영 원가',
        '누진세 부담', '유지보수비', '전력 손실',
    ];
    let wi = 0, ci = 0, deleting = false;

    function tick() {
        const word    = words[wi];
        const current = deleting
            ? word.substring(0, ci - 1)
            : word.substring(0, ci + 1);
        el.textContent = current;
        ci = deleting ? ci - 1 : ci + 1;

        let delay = deleting ? 60 : 110;
        if (!deleting && ci === word.length) {
            delay = 1800;
            deleting = true;
        } else if (deleting && ci === 0) {
            deleting = false;
            wi = (wi + 1) % words.length;
            delay = 400;
        }
        setTimeout(tick, delay);
    }
    setTimeout(tick, 1200);
}

/* ================================================
   PERFORMANCE DASHBOARD — Chart.js
================================================ */
function initDashboardCharts() {
    if (typeof Chart === 'undefined') return;

    /* ── 공통 Chart.js 글로벌 설정 ── */
    Chart.defaults.font.family = "'Noto Sans KR', sans-serif";
    Chart.defaults.color = '#64748b';

    const isDark = () => document.body.classList.contains('dark-mode');
    const gridColor  = () => isDark() ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
    const labelColor = () => isDark() ? 'rgba(255,255,255,0.6)'  : '#64748b';

    /* ── 1. 설치 전·후 전력 비교 ── */
    const ctxBA = document.getElementById('chart-before-after');
    if (ctxBA) {
        new Chart(ctxBA, {
            type: 'bar',
            data: {
                labels: ['전압(V)', '전류(A)', '유효전력(kW)', '피상전력(kVA)', '전산전력(kWh)'],
                datasets: [
                    {
                        label: '설치 전',
                        data: [375.5, 328.45, 187.45, 213.41, 94.50],
                        backgroundColor: 'rgba(74,144,217,0.7)',
                        borderColor: 'rgba(74,144,217,1)',
                        borderWidth: 1.5,
                        borderRadius: 6,
                    },
                    {
                        label: '설치 후',
                        data: [376.4, 293.23, 168.28, 191.05, 84.00],
                        backgroundColor: 'rgba(232,122,30,0.7)',
                        borderColor: 'rgba(232,122,30,1)',
                        borderWidth: 1.5,
                        borderRadius: 6,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top', labels: { color: labelColor(), boxWidth: 12, padding: 14 } },
                    tooltip: {
                        callbacks: {
                            label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString('ko-KR')}`,
                        },
                    },
                },
                scales: {
                    x: { grid: { color: gridColor() }, ticks: { color: labelColor(), font: { size: 10 } } },
                    y: { grid: { color: gridColor() }, ticks: { color: labelColor() }, beginAtZero: false },
                },
            },
        });
    }

    /* ── 2. 연도별 누적 설치 업체 수 ── */
    const ctxG = document.getElementById('chart-growth');
    if (ctxG) {
        new Chart(ctxG, {
            type: 'line',
            data: {
                labels: ['2002','2004','2006','2008','2010','2013','2016','2019','2022','2025'],
                datasets: [{
                    label: '누적 설치 업체 수',
                    data: [30, 200, 700, 1200, 1800, 2500, 3200, 3900, 4500, 5000],
                    fill: true,
                    backgroundColor: 'rgba(41,105,214,0.12)',
                    borderColor: '#2969d6',
                    borderWidth: 2.5,
                    pointBackgroundColor: '#2969d6',
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    tension: 0.4,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top', labels: { color: labelColor(), boxWidth: 12 } },
                    tooltip: {
                        callbacks: {
                            label: ctx => ` 누적 ${ctx.parsed.y.toLocaleString('ko-KR')}개 업체`,
                        },
                    },
                },
                scales: {
                    x: { grid: { color: gridColor() }, ticks: { color: labelColor() } },
                    y: { grid: { color: gridColor() }, ticks: { color: labelColor(), callback: v => v.toLocaleString() } },
                },
            },
        });
    }
}

/* ================================================
   KPI COUNTERS (대시보드)
================================================ */
function initKPICounters() {
    const kpiVals = document.querySelectorAll('.kpi-value[data-kpi]');
    if (!kpiVals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el     = entry.target;
            const target = parseFloat(el.dataset.kpi);
            const isFloat = String(target).includes('.');
            const dur   = 1000;
            const t0    = performance.now();

            function step(now) {
                const p    = Math.min((now - t0) / dur, 1);
                const ease = 1 - Math.pow(1 - p, 3);
                const val  = target * ease;
                el.textContent = isFloat ? val.toFixed(1) : Math.round(val).toLocaleString('ko-KR');
                if (p < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    kpiVals.forEach(el => observer.observe(el));
}

/* ================================================
   절감율 비교 바 애니메이션
================================================ */
function initSavingBars() {
    const bars = document.querySelectorAll('.sc-bar[data-pct]');
    if (!bars.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const bar = entry.target;
            const pct = parseInt(bar.dataset.pct, 10);
            requestAnimationFrame(() => { bar.style.width = pct + '%'; });
            observer.unobserve(bar);
        });
    }, { threshold: 0.3 });

    bars.forEach(b => observer.observe(b));
}

/* ================================================
   진단 신청 팝업 폼
================================================ */
function initInquiryModal() {
    const modal      = document.getElementById('inquiry-modal');
    const overlay    = document.getElementById('inquiry-overlay');
    const closeBtn   = document.getElementById('inquiry-close');
    const form       = document.getElementById('inquiry-form');
    const submitBtn  = document.getElementById('btn-inquiry-submit');
    const successDiv = document.getElementById('inquiry-success');
    const closeSuc   = document.getElementById('btn-iq-close-success');
    const ctaBtn     = document.getElementById('cta-inquiry-btn');
    const textarea   = document.getElementById('iq-message');
    const charCount  = document.getElementById('iq-char-count');
    if (!modal) return;

    /* 열기 */
    function openInquiry() {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (successDiv) successDiv.style.display = 'none';
        if (form) form.style.display = '';
        // 처음 필드 포커스
        setTimeout(() => document.getElementById('iq-name')?.focus(), 200);
    }

    /* 닫기 */
    function closeInquiry() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    /* 이벤트 바인딩 */
    if (ctaBtn)   ctaBtn.addEventListener('click', openInquiry);
    if (closeBtn) closeBtn.addEventListener('click', closeInquiry);
    if (overlay)  overlay.addEventListener('click', closeInquiry);
    if (closeSuc) closeSuc.addEventListener('click', closeInquiry);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeInquiry(); });

    /* 글자 수 카운터 */
    if (textarea && charCount) {
        textarea.addEventListener('input', () => {
            charCount.textContent = `${textarea.value.length} / 300`;
            charCount.style.color = textarea.value.length > 260 ? '#f87171' : 'rgba(255,255,255,0.3)';
        });
    }

    /* 폼 유효성 검사 + 제출 (실제 DB 저장) */
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!validateForm()) return;

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> 신청 중...';
            }

            const nameVal    = document.getElementById('iq-name')?.value.trim()    || '';
            const companyVal = document.getElementById('iq-company')?.value.trim() || '';
            const phoneVal   = document.getElementById('iq-phone')?.value.trim()   || '';
            const emailVal   = document.getElementById('iq-email')?.value.trim()   || '';
            const billVal    = parseFloat(document.getElementById('iq-bill')?.value) || 0;
            const msgVal     = document.getElementById('iq-message')?.value.trim() || '';

            try {
                const res = await fetch('tables/cess_inquiries', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name:         nameVal,
                        company:      companyVal,
                        phone:        phoneVal,
                        email:        emailVal,
                        monthly_bill: billVal,
                        message:      msgVal,
                        status:       '신규'
                    })
                });
                if (!res.ok) throw new Error('서버 오류');
            } catch (err) {
                console.warn('DB 저장 실패 (폼은 정상 처리):', err);
            }

            // 성공 처리 (DB 실패 여부와 무관하게 UX는 성공 표시)
            if (form) form.style.display = 'none';
            if (successDiv) successDiv.style.display = 'block';
            form.reset();
            if (charCount) charCount.textContent = '0 / 300';
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> 무료 진단 신청하기';
            }
            showToast('✅ 신청이 완료되었습니다! 48시간 내 연락드리겠습니다.', 'success');
        });
    }

    function validateForm() {
        let valid = true;
        const checks = [
            { id: 'iq-name',    err: 'iq-name-err',    msg: '성함을 입력해주세요.',        test: v => v.trim().length >= 2 },
            { id: 'iq-company', err: 'iq-company-err',  msg: '회사명을 입력해주세요.',       test: v => v.trim().length >= 1 },
            { id: 'iq-phone',   err: 'iq-phone-err',    msg: '연락처를 입력해주세요.',       test: v => /^[\d\-+\s()]{7,}$/.test(v.trim()) },
            { id: 'iq-email',   err: 'iq-email-err',    msg: '올바른 이메일 형식을 입력해주세요.',
              test: v => !v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
        ];
        checks.forEach(({ id, err, msg, test }) => {
            const inp  = document.getElementById(id);
            const errEl = document.getElementById(err);
            const ok   = inp && test(inp.value);
            if (errEl) errEl.textContent = ok ? '' : msg;
            if (inp)   inp.classList.toggle('error', !ok);
            if (!ok)   valid = false;
        });
        // 개인정보 동의
        const privacy    = document.getElementById('iq-privacy');
        const privacyErr = document.getElementById('iq-privacy-err');
        if (privacy && !privacy.checked) {
            if (privacyErr) privacyErr.textContent = '개인정보 수집·이용에 동의해주세요.';
            valid = false;
        } else if (privacyErr) privacyErr.textContent = '';
        return valid;
    }
}

/* ================================================
   BREADCRUMB BAR (현재 섹션 표시)
================================================ */
function initBreadcrumb() {
    const bar     = document.getElementById('breadcrumb-bar');
    const current = document.getElementById('bc-current');
    if (!bar || !current) return;

    const sectionMap = {
        'hero':             '홈',
        'index-section':    'INDEX — 목차',
        'company':          '1. 회사개요',
        'principle':        '2. 절전원리',
        'certification':    '3. 정부인증',
        'installation':     '4. 설치현황',
        'simulation':       '5. 누진세 시뮬레이션',
        'roi':              '6. 구축비용 회수기간',
        'dashboard':        '성과 대시보드',
        'compare':          '제품 비교',
        'energy-necessity': '7. 에너지 절감 필요성',
        'process':          '8. 설치 프로세스',
        'qa':               '9. Q & A',
        'cta-band':         '문의하기',
        'calculator':       '⚡ 전기요금 절감 계산기',
        'carbon':           '🌱 탄소절감 효과',
        'reviews':          '⭐ 고객 후기',
        'live-counter':     '📊 실시간 절감 현황',
        'footer':           'Thank You',
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollPos = window.scrollY + 120;
                // 브레드크럼 표시 조건: 히어로 섹션 아래로 스크롤 시
                const heroEl = document.getElementById('hero');
                const show   = heroEl ? scrollPos > heroEl.offsetHeight * 0.6 : scrollPos > 300;
                bar.classList.toggle('visible', show);

                // 현재 섹션 찾기
                const sections = document.querySelectorAll('section[id], footer[id]');
                let activeName = '홈';
                sections.forEach(sec => {
                    if (scrollPos >= sec.offsetTop) {
                        activeName = sectionMap[sec.id] || sec.id;
                    }
                });
                current.textContent = activeName;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ================================================
   INIT — DOMContentLoaded
================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initScrollProgress();
    initDarkMode();
    initReveal();
    initCounters();
    initHeroStats();
    initHeroTyping();
    initParticles();
    initCalculator();
    initCalcShare();
    initQAAccordion();
    initRipple();
    initLightbox();
    initHeaderReveal();
    initGlobalInfographic();
    initDashboardCharts();
    initKPICounters();
    initSavingBars();
    initInquiryModal();
    initBreadcrumb();
    // v5.0 신규 모듈
    initCarbonCalc();
    initCarbonBars();
    initCarbonKPI();
    initReviewSlider();
    initLiveCounters();
    initRatingBars();
    initMobileFloatCTA();
    initEnergyTariffCharts();
    updateActiveLink();
    updateBackToTop();
});

/* ================================================
   v5.0 탄소절감 계산기
================================================ */
function initCarbonCalc() {
    const btn     = document.getElementById('btn-carbon-calc');
    const kwhInp  = document.getElementById('carbon-kwh');
    const rateEl  = document.getElementById('carbon-rate-select');
    const result  = document.getElementById('carbon-result');
    if (!btn || !kwhInp || !rateEl || !result) return;

    const CO2_FACTOR = 0.4781;        // kg CO₂/kWh (한국 2023)
    const TREE_ABSORB = 22;           // kg CO₂/그루/년
    const CAR_EMIT = 0.21;            // kg CO₂/km (가솔린 승용차 평균)

    function calculate() {
        const kwh      = parseFloat(kwhInp.value) || 0;
        const ratePct  = parseFloat(rateEl.value) || 10;
        if (kwh <= 0) {
            showToast('전기 사용량을 입력해주세요.', 'warning');
            return;
        }

        const savedKwh    = kwh * (ratePct / 100);
        const monthlyCO2  = savedKwh * CO2_FACTOR;           // kg
        const yearlyCO2   = monthlyCO2 * 12 / 1000;          // ton
        const trees       = Math.round((monthlyCO2 * 12) / TREE_ABSORB);
        const carKm       = Math.round((monthlyCO2 * 12) / CAR_EMIT);

        const monthly = document.getElementById('cr-monthly');
        const yearly  = document.getElementById('cr-yearly');
        const treesEl = document.getElementById('cr-trees');
        const carsEl  = document.getElementById('cr-cars');

        if (monthly) monthly.textContent = monthlyCO2.toFixed(1).toLocaleString('ko-KR');
        if (yearly)  yearly.textContent  = yearlyCO2.toFixed(2);
        if (treesEl) treesEl.textContent = trees.toLocaleString('ko-KR');
        if (carsEl)  carsEl.textContent  = carKm.toLocaleString('ko-KR');

        result.style.display = 'grid';
        result.style.opacity = '0';
        result.style.transform = 'translateY(10px)';
        requestAnimationFrame(() => {
            setTimeout(() => {
                result.style.transition = 'opacity .4s ease, transform .4s ease';
                result.style.opacity = '1';
                result.style.transform = 'translateY(0)';
            }, 50);
        });

        showToast(
            `🌱 연간 ${yearlyCO2.toFixed(2)}톤 CO₂ 절감! 나무 ${trees}그루 심기 효과`,
            'success'
        );
    }

    btn.addEventListener('click', calculate);
    kwhInp.addEventListener('keydown', e => { if (e.key === 'Enter') calculate(); });
}

/* ================================================
   v5.0 탄소절감 KPI 카운터
================================================ */
function initCarbonKPI() {
    const vals = document.querySelectorAll('.carbon-kpi-value[data-carbon]');
    if (!vals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el     = entry.target;
            const target = parseFloat(el.dataset.carbon);
            const isFloat = String(target).includes('.');
            const dur   = 1000;
            const t0    = performance.now();

            function step(now) {
                const p    = Math.min((now - t0) / dur, 1);
                const ease = 1 - Math.pow(1 - p, 3);
                const val  = target * ease;
                el.textContent = isFloat ? val.toFixed(4) : Math.round(val).toLocaleString('ko-KR');
                if (p < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    vals.forEach(el => observer.observe(el));
}

/* ================================================
   v5.0 탄소절감 ESG 바 애니메이션
================================================ */
function initCarbonBars() {
    const bars = document.querySelectorAll('.cb-bar[data-width]');
    if (!bars.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const bar = entry.target;
            const w   = parseInt(bar.dataset.width, 10);
            requestAnimationFrame(() => { bar.style.width = w + '%'; });
            observer.unobserve(bar);
        });
    }, { threshold: 0.3 });

    bars.forEach(b => observer.observe(b));
}

/* ================================================
   v5.0 고객 후기 슬라이더
================================================ */
function initReviewSlider() {
    const slider    = document.getElementById('review-slider');
    const prevBtn   = document.getElementById('review-prev');
    const nextBtn   = document.getElementById('review-next');
    const dotsWrap  = document.getElementById('review-dots');
    if (!slider || !prevBtn || !nextBtn) return;

    const cards     = slider.querySelectorAll('.review-card');
    const total     = cards.length;
    let current     = 0;
    let itemsPerView = window.innerWidth <= 700 ? 1 : 2;
    let maxIndex    = Math.ceil(total / itemsPerView) - 1;
    let autoTimer   = null;

    function buildDots() {
        if (!dotsWrap) return;
        dotsWrap.innerHTML = '';
        const pageCount = Math.ceil(total / itemsPerView);
        for (let i = 0; i < pageCount; i++) {
            const dot = document.createElement('button');
            dot.className = 'review-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `후기 페이지 ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(dot);
        }
    }

    function updateDots() {
        if (!dotsWrap) return;
        dotsWrap.querySelectorAll('.review-dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
    }

    function goTo(idx) {
        current = Math.max(0, Math.min(idx, maxIndex));
        const cardW = cards[0] ? cards[0].offsetWidth + 24 : 0; // gap 24px
        slider.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
        slider.style.transform  = `translateX(-${current * itemsPerView * cardW}px)`;
        updateDots();
    }

    function goNext() {
        goTo(current < maxIndex ? current + 1 : 0);
    }
    function goPrev() {
        goTo(current > 0 ? current - 1 : maxIndex);
    }

    prevBtn.addEventListener('click', () => { goPrev(); resetAuto(); });
    nextBtn.addEventListener('click', () => { goNext(); resetAuto(); });

    // 터치 스와이프
    let touchX = 0;
    slider.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend',   e => {
        const diff = touchX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) { diff > 0 ? goNext() : goPrev(); resetAuto(); }
    }, { passive: true });

    // 자동 슬라이드
    function startAuto() {
        autoTimer = setInterval(goNext, 5000);
    }
    function resetAuto() {
        clearInterval(autoTimer);
        startAuto();
    }

    // 반응형 재계산
    window.addEventListener('resize', () => {
        const newIPV = window.innerWidth <= 700 ? 1 : 2;
        if (newIPV !== itemsPerView) {
            itemsPerView = newIPV;
            maxIndex     = Math.ceil(total / itemsPerView) - 1;
            current      = 0;
            slider.style.transition = 'none';
            slider.style.transform  = 'translateX(0)';
            buildDots();
        }
    });

    buildDots();
    startAuto();
}

/* ================================================
   v5.0 평점 바 애니메이션
================================================ */
function initRatingBars() {
    const bars = document.querySelectorAll('.rb-fill[data-w]');
    if (!bars.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const bar = entry.target;
            const w   = parseInt(bar.dataset.w, 10);
            requestAnimationFrame(() => { bar.style.width = w + '%'; });
            observer.unobserve(bar);
        });
    }, { threshold: 0.3 });

    bars.forEach(b => observer.observe(b));
}

/* ================================================
   v5.0 실시간 누적 절감 카운터
   - 하루 전체 절감 추정치 = 5,000개 업체 × 월 평균 1,000만원 절감 / 30일
   - kWh, CO₂, 나무 파생 계산
================================================ */
function initLiveCounters() {
    const moneyEl = document.getElementById('lc-money');
    const kwhEl   = document.getElementById('lc-kwh');
    const co2El   = document.getElementById('lc-co2');
    const treesEl = document.getElementById('lc-trees');
    if (!moneyEl || !kwhEl || !co2El || !treesEl) return;

    // 5,000개 업체 기준 일일 절감액 (추정)
    // 업체당 평균 월 전기요금: 1억원 → 월 절감 1,300만원 → 일 433만원
    // 전체 5,000 업체 합산 일 절감: 약 21,650,000,000원 (약 216억)
    // 단, 가시성을 위해 현실적인 값으로 조정:
    // 업체당 월 절감 평균 50만원 (소형 포함) → 일 16,667원 × 5,000 = 83,333,333원/일
    const DAILY_MONEY = 83333333;   // 원/일
    const AVG_BILL    = 5000000;    // 업체당 평균 월 전기요금 (500만원)
    const SAVE_PCT    = 0.10;       // 10% 절전율
    const KWH_RATE    = 150;        // 원/kWh (평균 단가)

    const DAILY_KWH   = Math.round(DAILY_MONEY / KWH_RATE);
    const DAILY_CO2   = Math.round(DAILY_KWH * 0.4781);
    const DAILY_TREES = Math.round(DAILY_CO2 / (22 / 365));

    // 자정 기준으로 오늘 경과 시간 계산
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const secondsElapsed = Math.floor((now - midnight) / 1000);
    const totalSeconds = 86400;

    let elapsed = secondsElapsed;

    function formatMoney(v) {
        if (v >= 1_0000_0000) {
            const eok = Math.floor(v / 1_0000_0000);
            const man = Math.floor((v % 1_0000_0000) / 10000);
            return man > 0 ? `₩ ${eok.toLocaleString('ko-KR')}억 ${man.toLocaleString('ko-KR')}만` : `₩ ${eok.toLocaleString('ko-KR')}억`;
        }
        if (v >= 10000) {
            return `₩ ${Math.floor(v / 10000).toLocaleString('ko-KR')}만`;
        }
        return `₩ ${v.toLocaleString('ko-KR')}`;
    }

    function updateCounters() {
        const ratio = elapsed / totalSeconds;
        const money = Math.round(DAILY_MONEY * ratio);
        const kwh   = Math.round(DAILY_KWH   * ratio);
        const co2   = Math.round(DAILY_CO2   * ratio);
        const trees = Math.round(DAILY_TREES * ratio);

        moneyEl.textContent = formatMoney(money);
        kwhEl.textContent   = kwh.toLocaleString('ko-KR') + ' kWh';
        co2El.textContent   = co2.toLocaleString('ko-KR') + ' kg';
        treesEl.textContent = trees.toLocaleString('ko-KR') + ' 그루';

        elapsed++;
        if (elapsed > totalSeconds) elapsed = 0; // 자정 리셋
    }

    // 초기 표시 (즉시)
    updateCounters();
    // 1초마다 업데이트
    setInterval(updateCounters, 1000);
}

/* ================================================
   v5.0 모바일 플로팅 CTA
================================================ */
function initMobileFloatCTA() {
    const floatCTA = document.getElementById('mobile-float-cta');
    const inquiryBtn = document.getElementById('mf-inquiry-btn');
    if (!floatCTA) return;

    // 문의 버튼 → 진단 신청 팝업 열기
    if (inquiryBtn) {
        inquiryBtn.addEventListener('click', () => {
            const modal = document.getElementById('inquiry-modal');
            if (modal) {
                modal.classList.add('open');
                document.body.style.overflow = 'hidden';
                const successDiv = document.getElementById('inquiry-success');
                const form = document.getElementById('inquiry-form');
                if (successDiv) successDiv.style.display = 'none';
                if (form) form.style.display = '';
                setTimeout(() => document.getElementById('iq-name')?.focus(), 200);
            }
        });
    }

    // 스크롤 시 CTA 표시/숨김 (히어로 섹션에서는 숨김)
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const hero = document.getElementById('hero');
                const heroH = hero ? hero.offsetHeight * 0.7 : 300;
                floatCTA.classList.toggle('hidden', window.scrollY < heroH);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ================================================
   v5.0 전기요금 상승 추이 Chart.js
================================================ */
function initEnergyTariffCharts() {
    if (typeof Chart === 'undefined') return;

    const isDark   = () => document.body.classList.contains('dark-mode');
    const gridCol  = () => isDark() ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
    const labelCol = () => isDark() ? 'rgba(255,255,255,0.6)'  : '#64748b';

    const years = ['2020', '2021', '2022', '2023', '2024', '2025'];

    /* ── 산업용 ── */
    const ctxI = document.getElementById('chart-industry-tariff');
    if (ctxI) {
        new Chart(ctxI, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: '산업용 (원/kWh)',
                    data: [98.2, 102.4, 130.8, 158.0, 179.2, 181.5],
                    borderColor: '#e02020',
                    backgroundColor: 'rgba(224,32,32,0.08)',
                    fill: true,
                    borderWidth: 2.5,
                    pointBackgroundColor: '#e02020',
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    tension: 0.4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.y}원/kWh` } }
                },
                scales: {
                    x: { grid: { color: gridCol() }, ticks: { color: labelCol(), font: { size: 11 } } },
                    y: {
                        grid: { color: gridCol() },
                        ticks: { color: labelCol(), callback: v => v + '원' },
                        min: 80, suggestedMax: 200
                    }
                }
            }
        });
    }

    /* ── 가정용 ── */
    const ctxH = document.getElementById('chart-home-tariff');
    if (ctxH) {
        new Chart(ctxH, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: '가정용 (원/kWh)',
                    data: [108.5, 118.1, 134.9, 164.5, 168.0, 170.2],
                    borderColor: '#e87a1e',
                    backgroundColor: 'rgba(232,122,30,0.08)',
                    fill: true,
                    borderWidth: 2.5,
                    pointBackgroundColor: '#e87a1e',
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    tension: 0.4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.y}원/kWh` } }
                },
                scales: {
                    x: { grid: { color: gridCol() }, ticks: { color: labelCol(), font: { size: 11 } } },
                    y: {
                        grid: { color: gridCol() },
                        ticks: { color: labelCol(), callback: v => v + '원' },
                        min: 90, suggestedMax: 190
                    }
                }
            }
        });
    }
}

/* ================================================
   v5.2 — FAQ ACCORDION (카테고리 탭 + 애니메이션)
================================================ */
function initFAQAccordion() {
    const tabs      = document.querySelectorAll('.faq-tab');
    const items     = document.querySelectorAll('.faq-item');
    const questions = document.querySelectorAll('.faq-q');

    // 카테고리 탭 필터
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const cat = tab.dataset.cat;
            items.forEach(item => {
                const match = cat === 'all' || item.dataset.cat === cat;
                item.classList.toggle('faq-hidden', !match);
                // 필터 시 열려있던 항목 닫기
                if (!match) {
                    const q = item.querySelector('.faq-q');
                    const a = item.querySelector('.faq-a');
                    if (q && a) {
                        q.classList.remove('faq-open');
                        a.classList.remove('faq-open');
                    }
                }
            });
        });
    });

    // 아코디언 토글
    questions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.closest('.faq-item');
            const ans  = item.querySelector('.faq-a');
            const isOpen = q.classList.contains('faq-open');

            // 다른 항목 닫기 (아코디언 방식)
            questions.forEach(other => {
                if (other !== q) {
                    other.classList.remove('faq-open');
                    other.closest('.faq-item').querySelector('.faq-a').classList.remove('faq-open');
                }
            });

            q.classList.toggle('faq-open', !isOpen);
            ans.classList.toggle('faq-open', !isOpen);
        });
    });
}

/* ================================================
   v5.2 — COMPARE SECTION 카운터 (chb-num)
================================================ */
function initCompareCounters() {
    const counters = document.querySelectorAll('.chb-num[data-target]');
    if (!counters.length) return;

    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el     = entry.target;
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || '';
            let start = 0;
            const duration = 1800;
            const step = timestamp => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                const eased   = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.unobserve(el);
        });
    }, { threshold: 0.3 });

    counters.forEach(c => io.observe(c));
}

/* ================================================
   v5.2 — TIMELINE 진입 애니메이션
================================================ */
function initTimelineReveal() {
    const items = document.querySelectorAll('.timeline-item');
    if (!items.length) return;

    const io = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 100);
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    items.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
        io.observe(item);
    });
}

/* ================================================
   v5.2 — FAQ 버튼 → 문의 모달 연결
================================================ */
function initFAQCTA() {
    const btn = document.getElementById('faq-inquiry-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const modal = document.getElementById('inquiry-modal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
}

/* ================================================
   v5.2 — BREADCRUMB sectionMap 확장 (호환용)
================================================ */
// DOMContentLoaded 에서 호출될 때 sectionMap에 추가 등록

/* ================================================
   v5.3 — ROI 예측 차트 (계산기 결과 연동)
================================================ */
let roiChart = null;

function renderROIChart(monthlyBill, savePct, installCost) {
    const canvas = document.getElementById('chart-roi-predict');
    if (!canvas) return;

    const wrap = document.getElementById('calc-roi-chart-wrap');
    if (wrap) wrap.style.display = 'block';

    const months    = Array.from({ length: 48 }, (_, i) => `${i + 1}개월`);
    const monthlySave = monthlyBill * (savePct / 100);
    const cumulativeSave = months.map((_, i) => Math.round(monthlySave * (i + 1)));
    const costLine       = months.map(() => installCost);

    const isDark   = document.body.classList.contains('dark-mode');
    const gridCol  = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
    const labelCol = isDark ? 'rgba(255,255,255,0.5)'  : '#64748b';

    if (roiChart) roiChart.destroy();

    roiChart = new Chart(canvas, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: '누적 절감액',
                    data: cumulativeSave,
                    borderColor: '#2969d6',
                    backgroundColor: 'rgba(41,105,214,0.1)',
                    fill: true,
                    borderWidth: 2.5,
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    tension: 0.4,
                },
                {
                    label: '초기 투자비',
                    data: costLine,
                    borderColor: '#e87a1e',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderDash: [6, 4],
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    tension: 0,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: {
                    display: true,
                    labels: { color: labelCol, font: { size: 11 }, usePointStyle: true }
                },
                tooltip: {
                    callbacks: {
                        label: ctx => ` ${ctx.dataset.label}: ₩${ctx.parsed.y.toLocaleString()}원`
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: gridCol },
                    ticks: { color: labelCol, font: { size: 10 }, maxTicksLimit: 12 }
                },
                y: {
                    grid: { color: gridCol },
                    ticks: {
                        color: labelCol,
                        font: { size: 10 },
                        callback: v => '₩' + (v / 10000).toFixed(0) + '만'
                    }
                }
            }
        }
    });
}

/* ================================================
   v5.3 — 계산기 PDF/인쇄 버튼
================================================ */
function initCalcPrintButton() {
    const btn = document.getElementById('btn-print-result');
    if (!btn) return;

    btn.addEventListener('click', () => {
        // 계산 결과값 수집
        const monthlyBill  = document.getElementById('monthly-bill')?.value  || 0;
        const savePct      = document.querySelector('.rate-btn.active')?.dataset?.rate || 10;
        const monthlySave  = document.getElementById('monthly-save')?.textContent    || '-';
        const annualSave   = document.getElementById('annual-save')?.textContent     || '-';
        const roiMonths    = document.getElementById('roi-months')?.textContent      || '-';

        // 인쇄용 팝업 창 생성
        const printWin = window.open('', '_blank', 'width=800,height=700');
        if (!printWin) { showToast('팝업 차단을 해제해주세요.', 'error'); return; }

        printWin.document.write(`
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>CESS 절감 예측 결과 — COSMOTOR</title>
<style>
  body { font-family: 'Malgun Gothic', sans-serif; color: #1a2233; max-width: 700px; margin: 2rem auto; padding: 2rem; }
  .print-header { text-align: center; border-bottom: 3px solid #1a4a9e; padding-bottom: 1.5rem; margin-bottom: 2rem; }
  .print-header h1 { color: #1a4a9e; font-size: 1.6rem; margin-bottom: 0.4rem; }
  .print-header p  { color: #64748b; font-size: 0.9rem; }
  .result-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-bottom: 2rem; }
  .result-card { background: #f4f7fb; border-radius: 10px; padding: 1.2rem; text-align: center; }
  .result-card .label { font-size: 0.8rem; color: #64748b; margin-bottom: 0.5rem; }
  .result-card .value { font-size: 1.5rem; font-weight: 700; color: #1a4a9e; }
  .result-card.highlight .value { color: #e87a1e; font-size: 1.8rem; }
  .note { font-size: 0.8rem; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 1rem; }
  @media print { body { margin: 0; } }
</style>
</head>
<body>
<div class="print-header">
  <h1>⚡ CESS 전기요금 절감 예측 결과</h1>
  <p>COSMOTOR — Cosmotor Electricity Saving System | 출력일: ${new Date().toLocaleDateString('ko-KR')}</p>
</div>
<div class="result-grid">
  <div class="result-card">
    <div class="label">월 전기요금 (입력값)</div>
    <div class="value">₩${parseInt(monthlyBill).toLocaleString()}원</div>
  </div>
  <div class="result-card">
    <div class="label">적용 절전율</div>
    <div class="value">${savePct}%</div>
  </div>
  <div class="result-card highlight">
    <div class="label">월 예상 절감액</div>
    <div class="value">${monthlySave}</div>
  </div>
  <div class="result-card highlight">
    <div class="label">연간 예상 절감액</div>
    <div class="value">${annualSave}</div>
  </div>
  <div class="result-card" style="grid-column:span 2">
    <div class="label">투자 회수 예상 기간</div>
    <div class="value" style="color:#16a34a">${roiMonths}</div>
  </div>
</div>
<p class="note">※ 본 결과는 추정치이며, 실제 절감액은 시설 조건·요금 체계에 따라 다를 수 있습니다.<br>
정확한 분석은 COSMOTOR 전문 컨설턴트를 통해 무료 현장 진단을 받아보세요.<br>
문의: 031-000-0000 | info@cosmotor.net | www.cosmotor.net</p>
<script>window.onload = () => { window.print(); }<\/script>
</body>
</html>`);
        printWin.document.close();
    });
}

/* ================================================
   v5.3 — 기존 계산기에 ROI 차트 연동 (패치)
================================================ */
function patchCalculatorForROI() {
    // 기존 계산 버튼을 찾아서 계산 완료 후 ROI 차트도 그리도록 patch
    const calcBtn = document.getElementById('calc-btn');
    if (!calcBtn) return;

    calcBtn.addEventListener('click', () => {
        // 약간의 딜레이 후 계산 결과 값으로 ROI 차트 렌더링
        setTimeout(() => {
            const monthlyBillEl = document.getElementById('monthly-bill');
            const roiEl         = document.getElementById('roi-months');
            if (!monthlyBillEl || !roiEl) return;

            const monthlyBill = parseFloat(monthlyBillEl.value) || 10000000;
            const activeRate  = document.querySelector('.rate-btn.active');
            const savePct     = activeRate ? parseFloat(activeRate.dataset.rate) : 10;
            const monthlySave = monthlyBill * (savePct / 100);

            // ROI 개월 텍스트에서 숫자 추출
            const roiText  = roiEl.textContent || '';
            const roiMatch = roiText.match(/\d+/);
            const roiMo    = roiMatch ? parseInt(roiMatch[0]) : 33;

            // 설치비 = 월 절감액 × 회수 개월수 (역산)
            const installCost = monthlySave * roiMo;

            // 공유 행 표시 여부 확인 후 차트 그리기
            const shareRow = document.getElementById('calc-share-row');
            if (shareRow && shareRow.style.display !== 'none') {
                renderROIChart(monthlyBill, savePct, installCost);
            }
        }, 100);
    });
}

/* ================================================
   v5.4 — 히어로 웨이브 다크모드 색상 동기화
================================================ */
function initHeroWave() {
    const wavePath = document.querySelector('.hero-wave path');
    if (!wavePath) return;

    function updateWaveColor() {
        const isDark = document.body.classList.contains('dark-mode');
        wavePath.setAttribute('fill', isDark ? '#0a1628' : '#ffffff');
    }

    // 초기 설정
    updateWaveColor();

    // 다크모드 버튼 클릭 시 업데이트
    const dmBtn = document.getElementById('darkmode-toggle');
    if (dmBtn) dmBtn.addEventListener('click', () => setTimeout(updateWaveColor, 50));
}

/* ================================================
   v5.4 — 섹션 헤더바 IntersectionObserver 강화
================================================ */
function initSectionHeaderAnimation() {
    const headers = document.querySelectorAll('.section-header-bar');
    if (!headers.length) return;

    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    headers.forEach(h => io.observe(h));
}

/* ================================================
   v5.4 — 버튼 Ripple 클릭 이펙트
================================================ */
function initButtonRipple() {
    const rippleBtns = document.querySelectorAll(
        '.btn-primary, .btn-secondary, .btn-inquiry-submit, .btn-faq-inquiry, .btn-cta-white'
    );
    rippleBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect   = this.getBoundingClientRect();
            const x      = e.clientX - rect.left;
            const y      = e.clientY - rect.top;
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position:absolute; border-radius:50%;
                background:rgba(255,255,255,0.3);
                width:0; height:0;
                left:${x}px; top:${y}px;
                transform:translate(-50%,-50%);
                animation:rippleAnim 0.6s ease forwards;
                pointer-events:none;
            `;
            // rippleAnim 키프레임 (이미 있을 경우 재사용)
            if (!document.getElementById('ripple-style')) {
                const style = document.createElement('style');
                style.id = 'ripple-style';
                style.textContent = `@keyframes rippleAnim{to{width:200px;height:200px;opacity:0}}`;
                document.head.appendChild(style);
            }
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 650);
        });
    });
}

/* ================================================
   v5.4 — 스크롤 기반 히어로 패럴랙스
================================================ */
function initHeroParallax() {
    const heroImg = document.querySelector('.hero-img');
    if (!heroImg) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                heroImg.style.transform = `translateY(${scrollY * 0.3}px) scale(1.1)`;
            }
            ticking = false;
        });
        ticking = true;
    }, { passive: true });
}

/* ================================================
   v5.4 — 브레드크럼 sectionMap 확장 패치
================================================ */
function patchBreadcrumbSectionMap() {
    // 기존 initBreadcrumb이 실행된 후에 추가 섹션 등록
    const newSections = {
        'compare':   '비교 분석',
        'timeline':  '도입 로드맵',
        'faq-new':   'FAQ'
    };
    // 브레드크럼 업데이트 이벤트에 편승
    const bcEl = document.getElementById('bc-current');
    if (!bcEl) return;

    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                const id = entry.target.id;
                if (newSections[id]) bcEl.textContent = newSections[id];
            }
        });
    }, { threshold: 0.3 });

    Object.keys(newSections).forEach(id => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
    });
}

/* ================================================
   DOMContentLoaded 에 v5.2 + v5.3 + v5.4 init
================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // v5.2 새 기능
    initFAQAccordion();
    initCompareCounters();
    initTimelineReveal();
    initFAQCTA();
    // v5.3 새 기능
    initCalcPrintButton();
    patchCalculatorForROI();
    // v5.4 새 기능
    initHeroWave();
    initSectionHeaderAnimation();
    initButtonRipple();
    initHeroParallax();
    patchBreadcrumbSectionMap();
});
