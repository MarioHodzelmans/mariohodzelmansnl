import { Metadata } from "next";
import NotFound from "@/components/other-pages/404/NotFound";
export const metadata: Metadata = {
  title: "404 | Mario Hodzelmans | AI Systems Architect",
  description: "Mario Hodzelmans | AI Systems Architect",
};
export default function NotFoundPage() {
  return (
    <>
      <NotFound />
    </>
  );
}
