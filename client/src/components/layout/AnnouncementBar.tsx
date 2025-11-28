
const AnnouncementBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-yellow-400 text-gray-900 py-2 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base font-medium">
          <a 
            href="https://fixedtoflow.carrd.co/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Amplified by AI, Anchored in Humanity
          </a>
          {" | 7-day free email course."}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
