import useTrans from '../hooks/useTrans';
import { useThemeColor } from '@/hooks/useThemeColor';
import Layout from '@/components/Layout';
import { openSans } from '@/contants';
import Board from '@/components/Board';

const features = ['feature1', 'feature2', 'feature3', 'feature4', 'feature5'];
const steps = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'];

export default function Home() {
  const { textColor, navBackgroundColor } = useThemeColor();
  const trans = useTrans();

  return (
    <Layout>
      <Board />
    </Layout>
  );
}
