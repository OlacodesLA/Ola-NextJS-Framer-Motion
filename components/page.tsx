import Header from "./header";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function Page({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
