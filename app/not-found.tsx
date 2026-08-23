import Link from "next/link";
import { Container } from "@/components/LayoutBits";

export default function NotFound() {
  return (
    <div className="section-space">
      <Container>
        <h1 className="font-display text-4xl font-semibold text-brand-deep">Page not found</h1>
        <p className="mt-4 max-w-[50ch] text-text-muted">
          That URL is not part of the Caledon Station Homes investor guide.
        </p>
        <p className="mt-8">
          <Link href="/" className="btn-primary">
            Return to the investor home
          </Link>
        </p>
      </Container>
    </div>
  );
}
