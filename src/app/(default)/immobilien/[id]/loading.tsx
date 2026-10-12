import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="bg-[#f7f6f2] pb-16 pt-8 md:pb-20 md:pt-12">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Skeleton className="h-7 w-24 rounded-full" />
            <Skeleton className="h-7 w-20 rounded-full" />
          </div>
          <Skeleton className="h-12 w-3/4 rounded-xl" />
          <Skeleton className="h-5 w-1/2 rounded-lg" />
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <Skeleton className="h-[260px] w-full rounded-none sm:h-[380px] md:h-[520px]" />
          <div className="flex gap-3 overflow-hidden p-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={`thumb-${index}`}
                className="h-16 w-24 shrink-0 rounded-lg sm:h-20 sm:w-28"
              />
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`quick-stat-${index}`}
                  className="rounded-2xl border border-neutral-200 bg-white p-4"
                >
                  <Skeleton className="mb-2 h-3 w-20 rounded" />
                  <Skeleton className="h-6 w-24 rounded" />
                </div>
              ))}
            </div>

            <Skeleton className="h-56 w-full rounded-2xl" />
            <Skeleton className="h-64 w-full rounded-2xl" />
            <Skeleton className="h-64 w-full rounded-2xl" />
          </div>

          <aside className="space-y-6">
            <Skeleton className="h-[420px] w-full rounded-2xl" />
            <Skeleton className="h-52 w-full rounded-2xl" />
          </aside>
        </div>
      </div>
    </section>
  );
}
