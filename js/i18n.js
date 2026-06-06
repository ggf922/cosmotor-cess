/**
 * COSMOTOR CESS — 다국어 시스템 (i18n)
 * 지원 언어: 한국어(ko) / English(en) / 中文(zh) / 日本語(ja) / Tiếng Việt(vi)
 */

const I18N = {

  /* ══════════════════════════════════════════════
     한국어 (Korean) — 기본값
  ══════════════════════════════════════════════ */
  ko: {
    // ── 메타 / 제목
    page_title: 'COSMOTOR CESS - 에너지 절감 솔루션 제안서',
    page_desc:  'COSMOTOR CESS 에너지 절감 솔루션 제안서. 10% 절전율로 13% 전기요금 절감, 33개월 내 투자 회수.',

    // ── 네비게이션
    nav_home:        '홈',
    nav_index:       'INDEX',
    nav_company:     '회사개요',
    nav_principle:   '절전원리',
    nav_cert:        '정부인증',
    nav_install:     '설치현황',
    nav_sim:         '시뮬레이션',
    nav_roi:         '구축비용',
    nav_calc:        '계산기',
    nav_download:    '자료 다운로드',
    nav_distributor: '유통망 관리',

    // ── 히어로
    hero_top:    '전기절감의 새로운 세계, CESS가 만들어갑니다.',
    hero_main:   '에너지 절감 솔루션 제안서',
    hero_sub:    '(코스모토 전기절전기 설치 방안)',
    hero_typing_prefix: '절약하는 것은 ',
    hero_typing: ['전기요금', 'CO₂ 배출', '운영 비용', '탄소 발자국'],
    hero_cta1:   '제안서 보기',
    hero_cta2:   '표지 다운로드',
    hero_stat1_label: '국내 설치 운용',
    hero_stat1_unit:  '여 업체',
    hero_stat2_label: '해외 수출',
    hero_stat2_unit:  '개국',
    hero_stat3_label: '투자 회수 기간',
    hero_stat3_unit:  '개월',
    hero_stat4_label: '평균 절전율',
    hero_stat4_unit:  '%',

    // ── 혜택 배너
    benefit_title:   '아파트단지 CESS 구축 시, 누진세 절감 대폭확대!',
    benefit_hl:      '절전율 확보 시 절감율 혜택!',
    effect_title:    'CESS의 탁월한 절전효과',
    effect_sub:      '초기비용이 들어가지 않는 가장 강력한 경제성',

    // ── 섹션 공통
    section_company:   '회사 개요',
    section_principle: '절전 원리',
    section_cert:      '정부 인증',
    section_install:   '설치 현황',
    section_sim:       '누진세 시뮬레이션',
    section_roi:       '구축비용 · 회수기간',
    section_dashboard: '성과 대시보드',
    section_carbon:    '탄소절감 · ESG',
    section_reviews:   '고객 후기',
    section_counter:   'CESS 실시간 누적 절감 현황 (추정)',
    section_energy:    '에너지 절감 필요성',
    section_process:   '설치 프로세스',
    section_qa:        'Q & A',
    section_calc:      '⚡ 전기요금 절감 계산기',
    section_compare:   '⚡ CESS 도입 전 vs 후 비교',
    section_timeline:  '⚡ CESS 도입 로드맵',
    section_faq:       '⚡ 자주 묻는 질문 (FAQ)',

    // ── 계산기
    calc_intro:       '귀사의 월 전기요금을 입력하면 CESS 설치 시 예상 절감액과 투자 회수 기간을 바로 확인할 수 있습니다.',
    calc_label_bill:  '월 평균 전기요금 (원)',
    calc_label_rate:  '예상 절전율 (%)',
    calc_label_ptype: '요금 유형',
    calc_ptype_ind:   '산업용 (대형)',
    calc_ptype_com:   '일반용 (상업)',
    calc_ptype_apt:   '주거용 (아파트)',
    calc_btn:         '절감액 계산하기',
    calc_monthly_save:'월 절감 예상액',
    calc_annual_save: '연간 절감 예상액',
    calc_roi:         '투자 회수 기간',
    calc_copy:        '결과 복사',
    calc_print:       '인쇄/PDF',
    calc_reset:       '초기화',
    calc_roi_title:   '투자 회수 예측 그래프',
    calc_note:        '※ 누진세 절감 효과 포함 시 절감율이 더 높아집니다. 실제 결과는 시설 조건에 따라 다를 수 있습니다.',

    // ── FAQ 탭
    faq_tab_all:       '전체',
    faq_tab_principle: '작동원리',
    faq_tab_install:   '설치·비용',
    faq_tab_effect:    '절감효과',
    faq_tab_safety:    '안전·AS',
    faq_cta_text:      '더 궁금한 점이 있으신가요?',
    faq_cta_btn:       '전문가에게 직접 문의하기',

    // ── 타임라인
    tl_intro: '첫 문의부터 비용 회수까지 — CESS 도입의 전 과정을 한눈에 확인하세요',
    tl_step:  ['무료 진단 신청', '현장 분석·측정', '제안서 검토·계약', 'CESS 설치·시운전', '모니터링·성과 확인', '투자 비용 전액 회수'],
    tl_desc:  [
      '온라인 문의 또는 전화 접수 → 전문 컨설턴트 배정 → 48시간 내 연락',
      '전기 사용량 패턴 분석 → 부하 측정 → 절감 가능 용량 산정 → 무료 보고서 제공',
      '맞춤 절감 제안서 제출 → 절감 보장 계약 체결 → 설치 일정 협의',
      '무정전 병렬 설치 → 전력 품질 최적화 → 안정화 테스트 → 결과 확인서 발급',
      '월별 절감 실적 리포트 → 분기 점검 → 절감율 미달 시 보장 처리',
      '평균 33개월 내 초기 투자비 전액 회수 → 이후 순수익 발생 → ESG·탄소크레딧 혜택'
    ],
    tl_duration: ['D+0 (당일)', 'D+3 ~ D+5', 'D+7 ~ D+14', 'D+15 ~ D+20', '매월 정기', '약 33개월 후'],

    // ── 문의 모달
    modal_title: '⚡ 무료 에너지 절감 진단 신청',
    modal_sub:   '귀사의 전기요금 절감 가능 여부를 무료로 진단해드립니다.\n전문 컨설턴트가 48시간 이내 연락드립니다.',
    modal_name:  '담당자 성함',
    modal_company:'회사명',
    modal_phone: '연락처',
    modal_email: '이메일',
    modal_bill:  '월 평균 전기요금 (원)',
    modal_msg:   '문의 내용',
    modal_msg_ph:'설치 규모, 시설 종류, 기타 문의 사항을 자유롭게 작성해주세요.',
    modal_privacy:'개인정보 수집·이용에 동의합니다. (진단 상담 목적, 3개월 보관)',
    modal_submit: '무료 진단 신청하기',
    modal_success_title: '신청이 완료되었습니다!',
    modal_success_msg:   '담당 컨설턴트가 48시간 이내에 연락드리겠습니다.\n감사합니다. ⚡',
    modal_ok:    '확인',

    // ── 푸터
    footer_title: 'Thank You',
    footer_sub:   'Best quality to our customer',
    footer_slogan:'전압 강하 없이 안전하게 전기요금을 절약할 수 없을까?',
    footer_brand: 'CESS가 해냅니다',
    footer_addr_label: '주소',
    footer_addr: '서울시 용산구 원효로 146, 금강프라임빌딩 4층',
    footer_company: '주식회사 코스모토',
    footer_dept:  '사업부 이사 : 임몽규',
    footer_tel:   '010-8265-1123',
    footer_tel_hours: '평일 09:00 – 18:00',
    footer_email: 'soostory11@gmail.com',
    footer_web:   'www.cosmotor.net',
    footer_copy:  '© 2025 COSMOTOR Co., Ltd. All rights reserved. | CESS® 등록 상표',
    footer_dl_btn:'전체 자료 다운로드',

    // ── 토스트 / 공통 UI
    toast_copy_ok:  '결과가 클립보드에 복사되었습니다.',
    toast_copy_fail:'복사 실패 — 직접 선택하여 복사해주세요.',
    toast_dl_start: '다운로드를 시작합니다…',
    toast_dl_fail:  '다운로드 실패',
    toast_submit_ok:'신청이 완료되었습니다!',
    toast_submit_fail:'제출 오류 — 다시 시도해주세요.',
    loading_text:   '에너지 절감 솔루션 로딩 중...',

    // ── Before/After 비교
    compare_intro:  '실제 도입 업체 평균 데이터 기준 — 10% 절전율 확보 시 기대 효과',
    compare_before: 'BEFORE',
    compare_after:  'AFTER',
    compare_arrow:  'CESS 적용',
    compare_items:  ['월 전기요금', '연간 CO₂ 배출', '장비 수명 (평균)', '불필요 열 발생', 'ESG 등급 영향'],
    compare_cess_applied: 'CESS 적용',

    // ── 유통망
    dist_page_title:  'CESS 유통망 관리 시스템',
    dist_add_btn:     '+ 신규 등록',
    dist_search_ph:   '회사명, 지역, 담당자 검색...',
    dist_filter_all:  '전체',
    dist_filter_domestic: '국내',
    dist_filter_overseas: '해외',
    dist_col_company: '회사명',
    dist_col_type:    '구분',
    dist_col_region:  '지역',
    dist_col_country: '국가/도시',
    dist_col_contact: '담당자',
    dist_col_phone:   '연락처',
    dist_col_email:   '이메일',
    dist_col_status:  '상태',
    dist_col_since:   '계약일',
    dist_col_action:  '관리',
    dist_edit:        '수정',
    dist_delete:      '삭제',
    dist_status_active: '활성',
    dist_status_inactive: '비활성',
    dist_status_pending: '검토중',
    dist_type_agency: '총판',
    dist_type_dealer: '대리점',
    dist_type_partner:'파트너',
    dist_form_title_add: '신규 유통사 등록',
    dist_form_title_edit:'유통사 정보 수정',
    dist_save:        '저장',
    dist_cancel:      '취소',
    dist_confirm_del: '정말 삭제하시겠습니까?',
    dist_empty:       '등록된 유통사가 없습니다.',
    dist_total:       '총',
    dist_unit:        '개사',
  },

  /* ══════════════════════════════════════════════
     English
  ══════════════════════════════════════════════ */
  en: {
    page_title: 'COSMOTOR CESS - Energy Saving Solution',
    page_desc:  'COSMOTOR CESS Energy Saving System. 10% power saving → 13% electricity bill reduction. ROI within 33 months.',

    nav_home:        'Home',
    nav_index:       'INDEX',
    nav_company:     'Company',
    nav_principle:   'Principle',
    nav_cert:        'Certification',
    nav_install:     'Installation',
    nav_sim:         'Simulation',
    nav_roi:         'Cost & ROI',
    nav_calc:        'Calculator',
    nav_download:    'Download',
    nav_distributor: 'Distributors',

    hero_top:    'A new era of electricity saving — powered by CESS.',
    hero_main:   'Energy Saving Solution Proposal',
    hero_sub:    '(COSMOTOR Electricity Saving System)',
    hero_typing_prefix: 'We save your ',
    hero_typing: ['Electricity Bills', 'CO₂ Emissions', 'Operating Costs', 'Carbon Footprint'],
    hero_cta1:   'View Proposal',
    hero_cta2:   'Download Cover',
    hero_stat1_label: 'Domestic Installations',
    hero_stat1_unit:  '+ Sites',
    hero_stat2_label: 'Export Countries',
    hero_stat2_unit:  'Nations',
    hero_stat3_label: 'Payback Period',
    hero_stat3_unit:  'Months',
    hero_stat4_label: 'Avg. Power Saving',
    hero_stat4_unit:  '%',

    benefit_title:   'CESS in Apartment Complexes — Dramatically Reduces Progressive Tariff!',
    benefit_hl:      '10% power saving → 13% bill reduction benefit!',
    effect_title:    'Outstanding Energy Saving Effect of CESS',
    effect_sub:      'The most powerful economic solution with no upfront cost',

    section_company:   'Company Overview',
    section_principle: 'Power Saving Principle',
    section_cert:      'Government Certifications',
    section_install:   'Installation Records',
    section_sim:       'Progressive Tariff Simulation',
    section_roi:       'Cost & Payback Period',
    section_dashboard: 'Performance Dashboard',
    section_carbon:    'Carbon Reduction · ESG',
    section_reviews:   'Customer Reviews',
    section_counter:   'CESS Real-time Cumulative Savings (Estimated)',
    section_energy:    'Why Energy Saving Matters',
    section_process:   'Installation Process',
    section_qa:        'Q & A',
    section_calc:      '⚡ Electricity Bill Savings Calculator',
    section_compare:   '⚡ Before vs After CESS',
    section_timeline:  '⚡ CESS Implementation Roadmap',
    section_faq:       '⚡ Frequently Asked Questions',

    calc_intro:       'Enter your monthly electricity bill to instantly calculate expected savings and payback period with CESS.',
    calc_label_bill:  'Monthly Electricity Bill (KRW)',
    calc_label_rate:  'Expected Power Saving Rate (%)',
    calc_label_ptype: 'Tariff Type',
    calc_ptype_ind:   'Industrial (Large)',
    calc_ptype_com:   'General (Commercial)',
    calc_ptype_apt:   'Residential (Apartment)',
    calc_btn:         'Calculate Savings',
    calc_monthly_save:'Est. Monthly Savings',
    calc_annual_save: 'Est. Annual Savings',
    calc_roi:         'Payback Period',
    calc_copy:        'Copy Result',
    calc_print:       'Print / PDF',
    calc_reset:       'Reset',
    calc_roi_title:   'ROI Forecast Graph',
    calc_note:        '※ Results include progressive tariff reduction effect. Actual results may vary by facility conditions.',

    faq_tab_all:       'All',
    faq_tab_principle: 'Principle',
    faq_tab_install:   'Installation',
    faq_tab_effect:    'Savings',
    faq_tab_safety:    'Safety & A/S',
    faq_cta_text:      'Have more questions?',
    faq_cta_btn:       'Contact Our Expert',

    tl_intro: 'From first inquiry to full ROI — the complete CESS implementation journey at a glance',
    tl_step:  ['Free Diagnosis', 'Site Analysis', 'Proposal & Contract', 'CESS Installation', 'Monitoring & Results', 'Full Investment Recovery'],
    tl_desc:  [
      'Online inquiry or phone → Expert consultant assigned → Contact within 48 hours',
      'Energy usage pattern analysis → Load measurement → Capacity assessment → Free report',
      'Custom savings proposal → Performance-guaranteed contract → Schedule installation',
      'Live parallel installation → Power quality optimization → Stability test → Confirmation issued',
      'Monthly savings report → Quarterly inspection → Guaranteed compensation if below target',
      'Average 33-month full cost recovery → Net profit thereafter → ESG & carbon credit benefits'
    ],
    tl_duration: ['Day 0', 'Day 3–5', 'Day 7–14', 'Day 15–20', 'Monthly', '~33 months'],

    modal_title: '⚡ Free Energy Savings Diagnosis',
    modal_sub:   'We diagnose your electricity cost reduction potential for free.\nOur expert consultant will contact you within 48 hours.',
    modal_name:  'Contact Name',
    modal_company:'Company',
    modal_phone: 'Phone',
    modal_email: 'Email',
    modal_bill:  'Monthly Electricity Bill (KRW)',
    modal_msg:   'Message',
    modal_msg_ph:'Installation scale, facility type, other inquiries...',
    modal_privacy:'I agree to the collection and use of personal information. (For consultation, stored 3 months)',
    modal_submit: 'Apply for Free Diagnosis',
    modal_success_title: 'Application Submitted!',
    modal_success_msg:   'Our expert consultant will contact you within 48 hours.\nThank you. ⚡',
    modal_ok:    'OK',

    footer_title: 'Thank You',
    footer_sub:   'Best quality to our customer',
    footer_slogan:'Can we save electricity safely without voltage drop?',
    footer_brand: 'CESS makes it possible.',
    footer_addr_label: 'Address',
    footer_addr: '4F Geumgang Prime Bldg, 146 Wonhyo-ro, Yongsan-gu, Seoul, Korea',
    footer_company: 'COSMOTOR Co., Ltd.',
    footer_dept:  'Business Director: Lim Mong-gyu',
    footer_tel:   '010-8265-1123',
    footer_tel_hours: 'Weekdays 09:00 – 18:00 (KST)',
    footer_email: 'soostory11@gmail.com',
    footer_web:   'www.cosmotor.net',
    footer_copy:  '© 2025 COSMOTOR Co., Ltd. All rights reserved. | CESS® Registered Trademark',
    footer_dl_btn:'Download All Materials',

    toast_copy_ok:  'Result copied to clipboard.',
    toast_copy_fail:'Copy failed — please select and copy manually.',
    toast_dl_start: 'Download starting…',
    toast_dl_fail:  'Download failed',
    toast_submit_ok:'Application submitted successfully!',
    toast_submit_fail:'Submission error — please try again.',
    loading_text:   'Loading Energy Saving Solution...',

    compare_intro:  'Based on average data from actual installations — expected effect with 10% power saving',
    compare_before: 'BEFORE',
    compare_after:  'AFTER',
    compare_arrow:  'CESS Applied',
    compare_items:  ['Monthly Bill', 'Annual CO₂', 'Equipment Life', 'Waste Heat', 'ESG Impact'],
    compare_cess_applied: 'CESS Applied',

    dist_page_title:  'CESS Distributor Management System',
    dist_add_btn:     '+ Add New',
    dist_search_ph:   'Search company, region, contact...',
    dist_filter_all:  'All',
    dist_filter_domestic: 'Domestic',
    dist_filter_overseas: 'Overseas',
    dist_col_company: 'Company',
    dist_col_type:    'Type',
    dist_col_region:  'Region',
    dist_col_country: 'Country/City',
    dist_col_contact: 'Contact',
    dist_col_phone:   'Phone',
    dist_col_email:   'Email',
    dist_col_status:  'Status',
    dist_col_since:   'Since',
    dist_col_action:  'Action',
    dist_edit:        'Edit',
    dist_delete:      'Delete',
    dist_status_active: 'Active',
    dist_status_inactive: 'Inactive',
    dist_status_pending: 'Pending',
    dist_type_agency: 'Agency',
    dist_type_dealer: 'Dealer',
    dist_type_partner:'Partner',
    dist_form_title_add: 'Add New Distributor',
    dist_form_title_edit:'Edit Distributor',
    dist_save:        'Save',
    dist_cancel:      'Cancel',
    dist_confirm_del: 'Are you sure you want to delete this?',
    dist_empty:       'No distributors registered.',
    dist_total:       'Total',
    dist_unit:        'companies',
  },

  /* ══════════════════════════════════════════════
     中文 (Chinese Simplified)
  ══════════════════════════════════════════════ */
  zh: {
    page_title: 'COSMOTOR CESS - 节能解决方案',
    page_desc:  'COSMOTOR CESS节能系统。节电率10%→电费削减13%，33个月内回收投资。',

    nav_home:        '首页',
    nav_index:       '目录',
    nav_company:     '公司概况',
    nav_principle:   '节电原理',
    nav_cert:        '政府认证',
    nav_install:     '安装现状',
    nav_sim:         '仿真模拟',
    nav_roi:         '建设费用',
    nav_calc:        '计算器',
    nav_download:    '下载资料',
    nav_distributor: '经销商管理',

    hero_top:    'CESS引领节能的全新时代',
    hero_main:   '节能解决方案提案书',
    hero_sub:    '（科思摩托节电器安装方案）',
    hero_typing_prefix: '为您节省 ',
    hero_typing: ['电费支出', 'CO₂排放', '运营成本', '碳足迹'],
    hero_cta1:   '查看提案书',
    hero_cta2:   '下载封面',
    hero_stat1_label: '国内安装运营',
    hero_stat1_unit:  '余家企业',
    hero_stat2_label: '海外出口',
    hero_stat2_unit:  '个国家',
    hero_stat3_label: '投资回收期',
    hero_stat3_unit:  '个月',
    hero_stat4_label: '平均节电率',
    hero_stat4_unit:  '%',

    benefit_title:   'CESS应用于公寓小区，大幅削减阶梯电价！',
    benefit_hl:      '节电率10% → 享受13%电费削减优惠！',
    effect_title:    'CESS卓越的节电效果',
    effect_sub:      '无需初期费用，最强经济性',

    section_company:   '公司概况',
    section_principle: '节电原理',
    section_cert:      '政府认证',
    section_install:   '安装现状',
    section_sim:       '阶梯电价模拟',
    section_roi:       '建设费用·回收期',
    section_dashboard: '业绩仪表盘',
    section_carbon:    '碳减排·ESG',
    section_reviews:   '客户评价',
    section_counter:   'CESS实时累计节省情况（估算）',
    section_energy:    '节能的必要性',
    section_process:   '安装流程',
    section_qa:        '常见问题',
    section_calc:      '⚡ 电费节省计算器',
    section_compare:   '⚡ CESS导入前后对比',
    section_timeline:  '⚡ CESS导入路线图',
    section_faq:       '⚡ 常见问题解答',

    calc_intro:       '输入贵司月均电费，立即查看安装CESS后的预期节省金额和投资回收期。',
    calc_label_bill:  '月均电费（韩元）',
    calc_label_rate:  '预计节电率（%）',
    calc_label_ptype: '电价类型',
    calc_ptype_ind:   '工业用（大型）',
    calc_ptype_com:   '一般用（商业）',
    calc_ptype_apt:   '居民用（公寓）',
    calc_btn:         '计算节省金额',
    calc_monthly_save:'预计月节省额',
    calc_annual_save: '预计年节省额',
    calc_roi:         '投资回收期',
    calc_copy:        '复制结果',
    calc_print:       '打印/PDF',
    calc_reset:       '重置',
    calc_roi_title:   '投资回收预测图',
    calc_note:        '※ 含阶梯电价节省效果时，节省率更高。实际效果因设施条件而异。',

    faq_tab_all:       '全部',
    faq_tab_principle: '工作原理',
    faq_tab_install:   '安装·费用',
    faq_tab_effect:    '节省效果',
    faq_tab_safety:    '安全·售后',
    faq_cta_text:      '还有其他问题吗？',
    faq_cta_btn:       '直接联系专家',

    tl_intro: '从首次咨询到成本回收——CESS导入全流程一目了然',
    tl_step:  ['免费诊断申请', '现场分析测量', '提案审核·签约', 'CESS安装调试', '监测·业绩确认', '投资成本全额回收'],
    tl_desc:  [
      '在线咨询或电话受理 → 分配专业顾问 → 48小时内联系',
      '电力使用模式分析 → 负载测量 → 可节省容量核算 → 免费报告',
      '提交定制节省方案 → 签订节省保障合同 → 协商安装日程',
      '不停电并联安装 → 电能质量优化 → 稳定性测试 → 出具确认书',
      '月度节省实绩报告 → 季度检查 → 未达标时保障处理',
      '平均33个月内全额回收初期投资 → 此后产生净收益 → ESG·碳信用额度'
    ],
    tl_duration: ['D+0（当天）', 'D+3～D+5', 'D+7～D+14', 'D+15～D+20', '每月定期', '约33个月后'],

    modal_title: '⚡ 免费节能诊断申请',
    modal_sub:   '我们将免费诊断贵司的电费节省可能性。\n专业顾问将在48小时内联系您。',
    modal_name:  '负责人姓名',
    modal_company:'公司名称',
    modal_phone: '联系电话',
    modal_email: '电子邮件',
    modal_bill:  '月均电费（韩元）',
    modal_msg:   '咨询内容',
    modal_msg_ph:'安装规模、设施类型、其他咨询事项...',
    modal_privacy:'同意收集和使用个人信息（用于诊断咨询，保存3个月）',
    modal_submit: '申请免费诊断',
    modal_success_title: '申请已提交！',
    modal_success_msg:   '专业顾问将在48小时内联系您。\n感谢您的信任。⚡',
    modal_ok:    '确认',

    footer_title: '感谢您',
    footer_sub:   'Best quality to our customer',
    footer_slogan:'能否在不降低电压的情况下安全节省电费？',
    footer_brand: 'CESS做到了',
    footer_addr_label: '地址',
    footer_addr: '韩国首尔市龙山区元晓路146号 金刚Prime大厦4层',
    footer_company: '科思摩托股份有限公司',
    footer_dept:  '事业部董事：林梦奎',
    footer_tel:   '010-8265-1123',
    footer_tel_hours: '工作日 09:00–18:00（韩国时间）',
    footer_email: 'soostory11@gmail.com',
    footer_web:   'www.cosmotor.net',
    footer_copy:  '© 2025 COSMOTOR Co., Ltd. 版权所有 | CESS® 注册商标',
    footer_dl_btn:'下载全部资料',

    toast_copy_ok:  '结果已复制到剪贴板。',
    toast_copy_fail:'复制失败 — 请手动选择并复制。',
    toast_dl_start: '下载开始…',
    toast_dl_fail:  '下载失败',
    toast_submit_ok:'申请提交成功！',
    toast_submit_fail:'提交错误 — 请重试。',
    loading_text:   '节能解决方案加载中...',

    compare_intro:  '基于实际导入企业平均数据 — 节电率10%时的预期效果',
    compare_before: '导入前',
    compare_after:  '导入后',
    compare_arrow:  '应用CESS',
    compare_items:  ['月电费', '年CO₂排放', '设备使用寿命', '多余热量', 'ESG等级影响'],
    compare_cess_applied: '应用CESS',

    dist_page_title:  'CESS经销商管理系统',
    dist_add_btn:     '+ 新增注册',
    dist_search_ph:   '搜索公司名、地区、负责人...',
    dist_filter_all:  '全部',
    dist_filter_domestic: '国内',
    dist_filter_overseas: '海外',
    dist_col_company: '公司名称',
    dist_col_type:    '类型',
    dist_col_region:  '地区',
    dist_col_country: '国家/城市',
    dist_col_contact: '负责人',
    dist_col_phone:   '联系电话',
    dist_col_email:   '电子邮件',
    dist_col_status:  '状态',
    dist_col_since:   '合同日期',
    dist_col_action:  '管理',
    dist_edit:        '修改',
    dist_delete:      '删除',
    dist_status_active: '活跃',
    dist_status_inactive: '停用',
    dist_status_pending: '审核中',
    dist_type_agency: '总代理',
    dist_type_dealer: '经销商',
    dist_type_partner:'合作伙伴',
    dist_form_title_add: '新增经销商',
    dist_form_title_edit:'修改经销商信息',
    dist_save:        '保存',
    dist_cancel:      '取消',
    dist_confirm_del: '确定要删除吗？',
    dist_empty:       '暂无注册经销商。',
    dist_total:       '共',
    dist_unit:        '家',
  },

  /* ══════════════════════════════════════════════
     日本語 (Japanese)
  ══════════════════════════════════════════════ */
  ja: {
    page_title: 'COSMOTOR CESS - 省エネソリューション提案書',
    page_desc:  'COSMOTOR CESS省エネシステム。節電率10%→電気料金13%削減、33ヶ月で投資回収。',

    nav_home:        'ホーム',
    nav_index:       'INDEX',
    nav_company:     '会社概要',
    nav_principle:   '節電原理',
    nav_cert:        '政府認証',
    nav_install:     '設置実績',
    nav_sim:         'シミュレーション',
    nav_roi:         '導入費用',
    nav_calc:        '計算機',
    nav_download:    '資料ダウンロード',
    nav_distributor: '販売網管理',

    hero_top:    'CESSが省エネの新時代を切り拓きます',
    hero_main:   '省エネソリューション提案書',
    hero_sub:    '（コスモトール節電器設置方案）',
    hero_typing_prefix: '削減するのは ',
    hero_typing: ['電気料金', 'CO₂排出量', '運営コスト', 'カーボンフットプリント'],
    hero_cta1:   '提案書を見る',
    hero_cta2:   '表紙ダウンロード',
    hero_stat1_label: '国内設置運用',
    hero_stat1_unit:  '社以上',
    hero_stat2_label: '海外輸出',
    hero_stat2_unit:  'ヶ国',
    hero_stat3_label: '投資回収期間',
    hero_stat3_unit:  'ヶ月',
    hero_stat4_label: '平均節電率',
    hero_stat4_unit:  '%',

    benefit_title:   'マンション団地へのCESS導入で累進電気料金を大幅削減！',
    benefit_hl:      '節電率10%確保で13%削減メリット！',
    effect_title:    'CESSの卓越した節電効果',
    effect_sub:      '初期費用ゼロで最強の経済性',

    section_company:   '会社概要',
    section_principle: '節電原理',
    section_cert:      '政府認証',
    section_install:   '設置実績',
    section_sim:       '累進電気料金シミュレーション',
    section_roi:       '導入費用・回収期間',
    section_dashboard: '成果ダッシュボード',
    section_carbon:    '炭素削減・ESG',
    section_reviews:   'お客様の声',
    section_counter:   'CESSリアルタイム累計削減状況（推定）',
    section_energy:    '省エネの必要性',
    section_process:   '設置プロセス',
    section_qa:        'Q & A',
    section_calc:      '⚡ 電気料金削減計算機',
    section_compare:   '⚡ CESS導入前後の比較',
    section_timeline:  '⚡ CESS導入ロードマップ',
    section_faq:       '⚡ よくある質問',

    calc_intro:       '月の電気料金を入力すると、CESS設置後の予想削減額と投資回収期間がすぐにわかります。',
    calc_label_bill:  '月平均電気料金（ウォン）',
    calc_label_rate:  '予想節電率（%）',
    calc_label_ptype: '電気料金タイプ',
    calc_ptype_ind:   '産業用（大型）',
    calc_ptype_com:   '一般用（商業）',
    calc_ptype_apt:   '住宅用（マンション）',
    calc_btn:         '削減額を計算する',
    calc_monthly_save:'月間予想削減額',
    calc_annual_save: '年間予想削減額',
    calc_roi:         '投資回収期間',
    calc_copy:        '結果をコピー',
    calc_print:       '印刷/PDF',
    calc_reset:       'リセット',
    calc_roi_title:   '投資回収予測グラフ',
    calc_note:        '※ 累進電気料金削減効果を含む場合、削減率はさらに高くなります。実際の結果は設備条件により異なります。',

    faq_tab_all:       'すべて',
    faq_tab_principle: '動作原理',
    faq_tab_install:   '設置・費用',
    faq_tab_effect:    '削減効果',
    faq_tab_safety:    '安全・AS',
    faq_cta_text:      'さらに質問がありますか？',
    faq_cta_btn:       '専門家に直接お問い合わせ',

    tl_intro: '初回問い合わせからコスト回収まで — CESS導入の全プロセスを一目で確認',
    tl_step:  ['無料診断申込', '現地分析・測定', '提案書検討・契約', 'CESS設置・試運転', 'モニタリング・成果確認', '投資費用全額回収'],
    tl_desc:  [
      'オンライン問い合わせまたは電話受付 → 専門コンサルタント配置 → 48時間以内に連絡',
      '電力使用パターン分析 → 負荷測定 → 削減可能容量算定 → 無料レポート提供',
      'カスタム削減提案書提出 → 削減保証契約締結 → 設置スケジュール協議',
      '無停電並列設置 → 電力品質最適化 → 安定化テスト → 確認書発行',
      '月次削減実績レポート → 四半期点検 → 達成未満時は保証処理',
      '平均33ヶ月以内に初期投資費全額回収 → 以降は純利益発生 → ESG・炭素クレジット特典'
    ],
    tl_duration: ['D+0（当日）', 'D+3〜D+5', 'D+7〜D+14', 'D+15〜D+20', '毎月定期', '約33ヶ月後'],

    modal_title: '⚡ 無料省エネ診断申込',
    modal_sub:   '貴社の電気料金削減可能性を無料で診断します。\n専門コンサルタントが48時間以内にご連絡します。',
    modal_name:  '担当者名',
    modal_company:'会社名',
    modal_phone: '電話番号',
    modal_email: 'メールアドレス',
    modal_bill:  '月平均電気料金（ウォン）',
    modal_msg:   'お問い合わせ内容',
    modal_msg_ph:'設置規模、施設種類、その他のご質問をご記入ください。',
    modal_privacy:'個人情報の収集・利用に同意します。（診断相談目的、3ヶ月保管）',
    modal_submit: '無料診断を申込む',
    modal_success_title: '申込が完了しました！',
    modal_success_msg:   '担当コンサルタントが48時間以内にご連絡します。\nありがとうございました。⚡',
    modal_ok:    '確認',

    footer_title: 'ありがとうございます',
    footer_sub:   'Best quality to our customer',
    footer_slogan:'電圧降下なしに安全に電気代を節約できないか？',
    footer_brand: 'CESSが実現します',
    footer_addr_label: '住所',
    footer_addr: '韓国ソウル市龍山区元暁路146 錦剛プライムビル4階',
    footer_company: 'コスモトール株式会社',
    footer_dept:  '事業部取締役：林夢圭',
    footer_tel:   '010-8265-1123',
    footer_tel_hours: '平日 09:00–18:00（韓国時間）',
    footer_email: 'soostory11@gmail.com',
    footer_web:   'www.cosmotor.net',
    footer_copy:  '© 2025 COSMOTOR Co., Ltd. 全著作権所有 | CESS® 登録商標',
    footer_dl_btn:'全資料ダウンロード',

    toast_copy_ok:  '結果がクリップボードにコピーされました。',
    toast_copy_fail:'コピー失敗 — 手動で選択してコピーしてください。',
    toast_dl_start: 'ダウンロード開始…',
    toast_dl_fail:  'ダウンロード失敗',
    toast_submit_ok:'申込が完了しました！',
    toast_submit_fail:'送信エラー — もう一度お試しください。',
    loading_text:   '省エネソリューション読み込み中...',

    compare_intro:  '実際の導入企業平均データ基準 — 節電率10%時の期待効果',
    compare_before: '導入前',
    compare_after:  '導入後',
    compare_arrow:  'CESS適用',
    compare_items:  ['月電気料金', '年間CO₂排出', '設備寿命（平均）', '不要発熱', 'ESGランク影響'],
    compare_cess_applied: 'CESS適用',

    dist_page_title:  'CESS販売網管理システム',
    dist_add_btn:     '+ 新規登録',
    dist_search_ph:   '会社名、地域、担当者を検索...',
    dist_filter_all:  'すべて',
    dist_filter_domestic: '国内',
    dist_filter_overseas: '海外',
    dist_col_company: '会社名',
    dist_col_type:    '区分',
    dist_col_region:  '地域',
    dist_col_country: '国/都市',
    dist_col_contact: '担当者',
    dist_col_phone:   '電話番号',
    dist_col_email:   'メール',
    dist_col_status:  'ステータス',
    dist_col_since:   '契約日',
    dist_col_action:  '管理',
    dist_edit:        '編集',
    dist_delete:      '削除',
    dist_status_active: '活動中',
    dist_status_inactive: '非活動',
    dist_status_pending: '審査中',
    dist_type_agency: '総代理店',
    dist_type_dealer: '代理店',
    dist_type_partner:'パートナー',
    dist_form_title_add: '新規販売店登録',
    dist_form_title_edit:'販売店情報編集',
    dist_save:        '保存',
    dist_cancel:      'キャンセル',
    dist_confirm_del: '本当に削除しますか？',
    dist_empty:       '登録された販売店はありません。',
    dist_total:       '合計',
    dist_unit:        '社',
  },

  /* ══════════════════════════════════════════════
     Tiếng Việt (Vietnamese)
  ══════════════════════════════════════════════ */
  vi: {
    page_title: 'COSMOTOR CESS - Giải pháp tiết kiệm điện',
    page_desc:  'Hệ thống tiết kiệm điện COSMOTOR CESS. Tiết kiệm 10% điện → giảm 13% hóa đơn, thu hồi vốn trong 33 tháng.',

    nav_home:        'Trang chủ',
    nav_index:       'MỤC LỤC',
    nav_company:     'Công ty',
    nav_principle:   'Nguyên lý',
    nav_cert:        'Chứng nhận',
    nav_install:     'Lắp đặt',
    nav_sim:         'Mô phỏng',
    nav_roi:         'Chi phí & ROI',
    nav_calc:        'Tính toán',
    nav_download:    'Tải tài liệu',
    nav_distributor: 'Quản lý đại lý',

    hero_top:    'CESS mở ra kỷ nguyên mới về tiết kiệm điện',
    hero_main:   'Đề xuất Giải pháp Tiết kiệm Điện',
    hero_sub:    '(Phương án lắp đặt thiết bị tiết kiệm điện COSMOTOR)',
    hero_typing_prefix: 'Tiết kiệm ',
    hero_typing: ['Chi phí điện', 'Khí thải CO₂', 'Chi phí vận hành', 'Dấu chân Carbon'],
    hero_cta1:   'Xem đề xuất',
    hero_cta2:   'Tải trang bìa',
    hero_stat1_label: 'Lắp đặt trong nước',
    hero_stat1_unit:  '+ đơn vị',
    hero_stat2_label: 'Xuất khẩu',
    hero_stat2_unit:  'quốc gia',
    hero_stat3_label: 'Thời gian hoàn vốn',
    hero_stat3_unit:  'tháng',
    hero_stat4_label: 'Tỷ lệ tiết kiệm TB',
    hero_stat4_unit:  '%',

    benefit_title:   'CESS tại khu chung cư — Giảm mạnh thuế lũy tiến điện!',
    benefit_hl:      'Tiết kiệm 10% điện → Hưởng lợi giảm 13% hóa đơn!',
    effect_title:    'Hiệu quả tiết kiệm điện vượt trội của CESS',
    effect_sub:      'Giải pháp kinh tế mạnh nhất — Không cần chi phí ban đầu',

    section_company:   'Tổng quan công ty',
    section_principle: 'Nguyên lý tiết kiệm điện',
    section_cert:      'Chứng nhận chính phủ',
    section_install:   'Hồ sơ lắp đặt',
    section_sim:       'Mô phỏng thuế lũy tiến',
    section_roi:       'Chi phí & Thời gian hoàn vốn',
    section_dashboard: 'Bảng điều khiển hiệu suất',
    section_carbon:    'Giảm Carbon · ESG',
    section_reviews:   'Đánh giá khách hàng',
    section_counter:   'Tiết kiệm tích lũy thời gian thực của CESS (Ước tính)',
    section_energy:    'Tại sao cần tiết kiệm điện',
    section_process:   'Quy trình lắp đặt',
    section_qa:        'Hỏi & Đáp',
    section_calc:      '⚡ Máy tính tiết kiệm điện',
    section_compare:   '⚡ So sánh Trước và Sau CESS',
    section_timeline:  '⚡ Lộ trình triển khai CESS',
    section_faq:       '⚡ Câu hỏi thường gặp',

    calc_intro:       'Nhập hóa đơn điện hàng tháng để tính ngay số tiền tiết kiệm dự kiến và thời gian hoàn vốn khi lắp đặt CESS.',
    calc_label_bill:  'Hóa đơn điện hàng tháng (KRW)',
    calc_label_rate:  'Tỷ lệ tiết kiệm điện dự kiến (%)',
    calc_label_ptype: 'Loại điện',
    calc_ptype_ind:   'Công nghiệp (Lớn)',
    calc_ptype_com:   'Thương mại',
    calc_ptype_apt:   'Dân dụng (Chung cư)',
    calc_btn:         'Tính tiết kiệm',
    calc_monthly_save:'Tiết kiệm hàng tháng (ước tính)',
    calc_annual_save: 'Tiết kiệm hàng năm (ước tính)',
    calc_roi:         'Thời gian hoàn vốn',
    calc_copy:        'Sao chép kết quả',
    calc_print:       'In / PDF',
    calc_reset:       'Đặt lại',
    calc_roi_title:   'Biểu đồ dự báo hoàn vốn',
    calc_note:        '※ Bao gồm hiệu ứng giảm thuế lũy tiến. Kết quả thực tế có thể thay đổi tùy điều kiện cơ sở.',

    faq_tab_all:       'Tất cả',
    faq_tab_principle: 'Nguyên lý',
    faq_tab_install:   'Lắp đặt',
    faq_tab_effect:    'Hiệu quả',
    faq_tab_safety:    'An toàn & BH',
    faq_cta_text:      'Bạn còn thắc mắc khác không?',
    faq_cta_btn:       'Liên hệ chuyên gia ngay',

    tl_intro: 'Từ lần liên hệ đầu tiên đến hoàn vốn — Toàn bộ quy trình triển khai CESS trong một cái nhìn',
    tl_step:  ['Đăng ký chẩn đoán miễn phí', 'Phân tích & đo lường tại chỗ', 'Xem xét đề xuất & ký hợp đồng', 'Lắp đặt & chạy thử CESS', 'Giám sát & xác nhận kết quả', 'Hoàn vốn đầu tư toàn bộ'],
    tl_desc:  [
      'Yêu cầu trực tuyến hoặc qua điện thoại → Phân công chuyên gia → Liên hệ trong 48 giờ',
      'Phân tích mẫu sử dụng điện → Đo tải → Tính toán công suất tiết kiệm → Báo cáo miễn phí',
      'Nộp đề xuất tiết kiệm tùy chỉnh → Ký hợp đồng bảo đảm tiết kiệm → Thống nhất lịch lắp đặt',
      'Lắp đặt song song không mất điện → Tối ưu hóa chất lượng điện → Kiểm tra ổn định → Cấp giấy xác nhận',
      'Báo cáo tiết kiệm hàng tháng → Kiểm tra hàng quý → Bồi thường nếu không đạt mục tiêu',
      'Hoàn vốn đầu tư ban đầu trung bình trong 33 tháng → Lợi nhuận ròng sau đó → Lợi ích ESG & tín chỉ carbon'
    ],
    tl_duration: ['Ngày 0', 'Ngày 3–5', 'Ngày 7–14', 'Ngày 15–20', 'Hàng tháng', '~33 tháng'],

    modal_title: '⚡ Đăng ký chẩn đoán tiết kiệm điện miễn phí',
    modal_sub:   'Chúng tôi chẩn đoán miễn phí khả năng tiết kiệm điện của doanh nghiệp bạn.\nChuyên gia tư vấn sẽ liên hệ trong vòng 48 giờ.',
    modal_name:  'Tên người liên hệ',
    modal_company:'Tên công ty',
    modal_phone: 'Điện thoại',
    modal_email: 'Email',
    modal_bill:  'Hóa đơn điện hàng tháng (KRW)',
    modal_msg:   'Nội dung tư vấn',
    modal_msg_ph:'Quy mô lắp đặt, loại cơ sở, các câu hỏi khác...',
    modal_privacy:'Tôi đồng ý thu thập và sử dụng thông tin cá nhân. (Mục đích tư vấn, lưu trữ 3 tháng)',
    modal_submit: 'Đăng ký chẩn đoán miễn phí',
    modal_success_title: 'Đăng ký hoàn tất!',
    modal_success_msg:   'Chuyên gia tư vấn sẽ liên hệ với bạn trong vòng 48 giờ.\nCảm ơn bạn. ⚡',
    modal_ok:    'Xác nhận',

    footer_title: 'Cảm ơn bạn',
    footer_sub:   'Best quality to our customer',
    footer_slogan:'Có thể tiết kiệm điện an toàn mà không giảm điện áp không?',
    footer_brand: 'CESS làm được điều đó',
    footer_addr_label: 'Địa chỉ',
    footer_addr: 'Tầng 4, Tòa nhà Geumgang Prime, 146 Wonhyo-ro, Yongsan-gu, Seoul, Hàn Quốc',
    footer_company: 'Công ty Cổ phần COSMOTOR',
    footer_dept:  'Giám đốc kinh doanh: Lim Mong-gyu',
    footer_tel:   '010-8265-1123',
    footer_tel_hours: 'Thứ Hai–Sáu 09:00–18:00 (giờ Hàn Quốc)',
    footer_email: 'soostory11@gmail.com',
    footer_web:   'www.cosmotor.net',
    footer_copy:  '© 2025 COSMOTOR Co., Ltd. Bảo lưu mọi quyền | Nhãn hiệu đã đăng ký CESS®',
    footer_dl_btn:'Tải tất cả tài liệu',

    toast_copy_ok:  'Kết quả đã được sao chép vào clipboard.',
    toast_copy_fail:'Sao chép thất bại — Vui lòng chọn và sao chép thủ công.',
    toast_dl_start: 'Đang tải xuống…',
    toast_dl_fail:  'Tải xuống thất bại',
    toast_submit_ok:'Đăng ký thành công!',
    toast_submit_fail:'Lỗi gửi — Vui lòng thử lại.',
    loading_text:   'Đang tải Giải pháp Tiết kiệm Điện...',

    compare_intro:  'Dựa trên dữ liệu trung bình từ các đơn vị đã lắp đặt — Hiệu quả kỳ vọng với tỷ lệ tiết kiệm 10%',
    compare_before: 'TRƯỚC',
    compare_after:  'SAU',
    compare_arrow:  'Áp dụng CESS',
    compare_items:  ['Hóa đơn hàng tháng', 'CO₂ hàng năm', 'Tuổi thọ thiết bị', 'Nhiệt lãng phí', 'Tác động ESG'],
    compare_cess_applied: 'Áp dụng CESS',

    dist_page_title:  'Hệ thống Quản lý Đại lý CESS',
    dist_add_btn:     '+ Thêm mới',
    dist_search_ph:   'Tìm theo công ty, khu vực, người liên hệ...',
    dist_filter_all:  'Tất cả',
    dist_filter_domestic: 'Trong nước',
    dist_filter_overseas: 'Nước ngoài',
    dist_col_company: 'Tên công ty',
    dist_col_type:    'Loại',
    dist_col_region:  'Khu vực',
    dist_col_country: 'Quốc gia/TP',
    dist_col_contact: 'Người liên hệ',
    dist_col_phone:   'Điện thoại',
    dist_col_email:   'Email',
    dist_col_status:  'Trạng thái',
    dist_col_since:   'Ngày ký HĐ',
    dist_col_action:  'Quản lý',
    dist_edit:        'Sửa',
    dist_delete:      'Xóa',
    dist_status_active: 'Hoạt động',
    dist_status_inactive: 'Ngưng HĐ',
    dist_status_pending: 'Đang xét',
    dist_type_agency: 'Tổng đại lý',
    dist_type_dealer: 'Đại lý',
    dist_type_partner:'Đối tác',
    dist_form_title_add: 'Thêm đại lý mới',
    dist_form_title_edit:'Chỉnh sửa thông tin đại lý',
    dist_save:        'Lưu',
    dist_cancel:      'Hủy',
    dist_confirm_del: 'Bạn có chắc muốn xóa không?',
    dist_empty:       'Chưa có đại lý nào được đăng ký.',
    dist_total:       'Tổng cộng',
    dist_unit:        'công ty',
  },
};

/* ════════════════════════════════════════════════
   I18N ENGINE — 언어 전환 핵심 로직
════════════════════════════════════════════════ */
const I18nEngine = (() => {
  const STORAGE_KEY = 'cess_lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'ko';

  /**
   * 현재 언어 번역 데이터 반환
   */
  function t(key) {
    const data = I18N[currentLang] || I18N['ko'];
    return data[key] !== undefined ? data[key] : (I18N['ko'][key] || key);
  }

  /**
   * 언어 변경 + DOM 전체 업데이트
   */
  function setLang(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    // data-i18n 텍스트 교체
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = t(key);
      if (typeof val === 'string') {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // data-i18n-html (HTML 컨텐츠 교체)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      const val = t(key);
      if (typeof val === 'string') el.innerHTML = val;
    });

    // data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      const val = t(key);
      if (typeof val === 'string') el.placeholder = val;
    });

    // 페이지 타이틀
    document.title = t('page_title');

    // 언어 버튼 활성 상태
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // 로딩 텍스트 (있으면)
    const loadingText = document.querySelector('.loading-text');
    if (loadingText) loadingText.textContent = t('loading_text');

    // 커스텀 이벤트 발생 (각 페이지에서 추가 처리 가능)
    document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang, t } }));
  }

  /**
   * 언어 선택 버튼 초기화
   */
  function initLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
  }

  /**
   * 초기화
   */
  function init() {
    initLangButtons();
    setLang(currentLang);
  }

  return { init, setLang, t, getCurrentLang: () => currentLang };
})();

// DOMContentLoaded 시 자동 초기화
document.addEventListener('DOMContentLoaded', () => I18nEngine.init());
