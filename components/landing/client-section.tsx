export default function ClientSection() {
  return (
    <section
      id="clients"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            Investments &amp; Associations
          </h2>

          <div className="mt-10">
            <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              <li className="flex items-center">
                <img
                  src="/w.png"
                  alt="w"
                  className="h-20 w-auto object-contain"
                />
              </li>
              <li className="flex items-center">
                <img
                  src="/x.png"
                  alt="x"
                  className="h-20 w-auto object-contain"
                />
              </li>
              <li className="flex items-center">
                <img
                  src="/e.png"
                  alt="e"
                  className="h-20 w-auto object-contain"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
