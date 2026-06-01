import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>This note doesn’t exist (yet). The series is incomplete.</p>
      <p>
        <Link href="/">← Back to the start</Link>
      </p>
    </div>
  );
}
