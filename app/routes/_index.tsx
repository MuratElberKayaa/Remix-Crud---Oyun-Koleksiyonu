import type { MetaFunction } from "@remix-run/node";
import OyunPage from "../Pages/OyunPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix CRUD – Oyun Koleksiyonu" },
    { name: "description", content: "Video oyunu ekleme, listeleme, güncelleme ve silme (CRUD) uygulaması" },
  ];
};

export default function Index() {
  return <OyunPage />;
}
