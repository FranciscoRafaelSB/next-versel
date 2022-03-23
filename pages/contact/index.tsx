import Link from "next/link";
import { DarkLayout } from "../../components/layout/DarkLayout";
import { MainLayout } from "../../components/layout/MainLayout";

export default function Contact() {
  return (
    <>
      <h1>CONTACT PAGE</h1>

      <h1 className={"title"}>
        Ir a <Link href="/">Index</Link>
      </h1>
      <p className={"description"}>
        Get started by editing
        <code className={"code"}> pages/contact.js</code>
      </p>
    </>
  );
}

Contact.getLayout = function getLayout(pag: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{pag}</DarkLayout>
    </MainLayout>
  );
};
