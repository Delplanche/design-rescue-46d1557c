ALTER TABLE public.publications
  ADD COLUMN IF NOT EXISTS subtitle text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS category text NOT NULL DEFAULT 'Algemeen',
  ADD COLUMN IF NOT EXISTS published_on date NOT NULL DEFAULT '2026-09-19',
  ADD COLUMN IF NOT EXISTS keywords text[] NOT NULL DEFAULT '{}';

UPDATE public.publications SET title='Pers-whitepaper: Lex Humanitas Digitalis & Systeemanalyse', subtitle='Systeemanalyse en modelwetgeving in beknopte persvorm', category='Pers', keywords=ARRAY['pers','whitepaper','lex humanitas digitalis','systeemanalyse','samenvatting'] WHERE code='WP';
UPDATE public.publications SET title='De Technologische Deceptie', subtitle='Infrastructuur, CRM & Chat-farms', category='Techniek', keywords=ARRAY['chat-farms','crm','infloww','automatisering','llm','ghost-chatting','infrastructuur'] WHERE code='01';
UPDATE public.publications SET title='De Financiële Schaduweconomie', subtitle='Carding & Witwassen', category='Financiën', keywords=ARRAY['carding','witwassen','microtransacties','crypto','usdt','tron','payment processors'] WHERE code='02';
UPDATE public.publications SET title='De Neurobiologie van de Verslaving', subtitle='Variable-reward & Operator-psychologie', category='Neurobiologie', keywords=ARRAY['variable reward','verslaving','operator','burnout','gedrag','desensitisatie'] WHERE code='03';
UPDATE public.publications SET title='De Sociologische Implosie', subtitle='Demografie & Digitale Substitutie', category='Sociologie', keywords=ARRAY['demografie','substitutie','korea','japan','relaties','paranoia'] WHERE code='04';
UPDATE public.publications SET title='Het Juridisch Failliet & Modelwetgeving', subtitle='Lex Humanitas Digitalis', category='Recht', keywords=ARRAY['avg','dsa','ai-verordening','ketenaansprakelijkheid','modelwetgeving','transparantie'] WHERE code='05';
UPDATE public.publications SET title='Het Post-Digitale Verzet', subtitle='Sanering & Analoge Heropbouw', category='Herstel', keywords=ARRAY['de-programmering','sanering','amnestie','analoog','gemeenschap','herstel'] WHERE code='06';