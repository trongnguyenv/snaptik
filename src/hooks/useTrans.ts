import { useRouter } from 'next/router';
import en from '../../public/lang/en';
import vi from '../../public/lang/vi';
import br from '../../public/lang/br';
import id from '../../public/lang/id';
import { useMemo } from 'react';

const langs = {
  vi,
  en,
  br,
  ID: id,
};

type LOCALE = keyof typeof langs;

const useTrans = () => {
  const { locale } = useRouter();

  // Use the app's default locale ('vi') when locale is not available to keep
  // server and client initial renders consistent and avoid hydration mismatches.
  const trans = useMemo(() => langs[(locale as LOCALE) ?? 'vi'] || langs.vi, [locale]);

  return trans;
};

export default useTrans;
