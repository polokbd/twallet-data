// ===== Remote sources =====

export const RULES_URL =
  'https://raw.githubusercontent.com/polokbd/twallet-data/main/rules.json';

export const KB_META_URL =
  'https://raw.githubusercontent.com/polokbd/twallet-data/main/meta.json';

// Fallback bundled rules (used if offline on first ever open)
export const FALLBACK_RULES = {
  "version": 1,
  "updated": "2026-06-24",
  "germany": {
    "pfaendungsgrenze_single": 1402,
    "pfaendungsgrenze_1dependent": 1931,
    "pfaendungsgrenze_2dependent": 2223,
    "pfaendungsgrenze_3dependent": 2515,
    "kindergeld_per_child": 255,
    "mindestlohn_hourly": 12.82,
    "steuer_grundfreibetrag": 11604,
    "minijob_limit_monthly": 556,
    "alg1_duration_max_months": 24,
    "buergergeld_single_monthly": 563,
    "sozialversicherung_employee_percent": 19.6,
    "krankenkasse_employee_percent": 7.3,
    "rente_employee_percent": 9.3,
    "rundfunkbeitrag_monthly": 18.36,
    "blue_card_min_salary": 43800,
    "blue_card_shortage_min_salary": 39682,
    "naturalization_years": 5,
    "naturalization_fast_years": 3,
    "naturalization_fee_adult": 255,
    "einbuergerungstest_pass_score": 17,
    "einbuergerungstest_total_questions": 33,
    "dual_citizenship_allowed_since": "2024-06-27",
    "niederlassungserlaubnis_years": 5,
    "blue_card_niederlassungserlaubnis_months": 33,
    "blue_card_b1_niederlassungserlaubnis_months": 21
  },
  "bangladesh": {
    "eur_bdt_rate": 117.5,
    "usd_bdt_rate": 109.5,
    "bkash_cashout_fee_percent": 1.85,
    "nagad_cashout_fee_percent": 1.45,
    "remittance_incentive_percent": 2.5,
    "nrb_bond_rate_percent": 12,
    "nrb_bond_term_years_min": 3
  },
  "knowledge_db": {
    "version": 1,
    "url": "https://raw.githubusercontent.com/polokbd/twallet-data/main/knowledge.db",
    "size_mb": 1
  }
};

export const DB_NAME = 'knowledge.db';
