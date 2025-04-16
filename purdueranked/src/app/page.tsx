import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StudentComparison } from "@/components/StudentComparison";
import { Leaderboard } from "@/components/Leaderboard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-10">
        <div className="container mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-6">
              Who&apos;s the <span className="text-blue-600">Better</span> CS Student?
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
              Select which student you think is better. The results will be analyzed and added to our rankings.
            </p>

            <StudentComparison />
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-6">
              The <span className="text-blue-600">Leaderboard</span>
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
              Top UIUC CS students ranked by their overall score.
            </p>

            <Leaderboard />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
