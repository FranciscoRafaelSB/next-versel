import Link from "next/link";
import { MainLayout } from "../../components/layout/MainLayout";

export default function PricingPage() {
  return (
    <>
      <h1>Pricing PAGE</h1>

      <h1 className={"title"}>
        Ir a <Link href="/">Index</Link>
      </h1>
      <p className={"description"}>
        Get started by editing
        <code className={"code"}> pages/pricing.js</code>
      </p>
    </>
  );
}

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};
