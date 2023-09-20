export default function Footer() {
  return (
    <footer className="w-full p-2 text-sm text-grey-800 mt-auto">
      <div className="flex flex-col justify-between items-center">
        <small className="text-sm">Stageflix &copy; 2023</small>
        <a
          target="_black"
          title="drama icons"
          href="https://www.flaticon.com/free-icons/drama"
          className="no-underline hover:underline decoration-grey-800"
        >
          Drama icons created by Freepik - Flaticon
        </a>
      </div>
    </footer>
  );
}
