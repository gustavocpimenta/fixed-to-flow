
const AnnouncementBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] text-gray-900 py-3 px-4" style={{ backgroundColor: '#B3CCD0' }}>
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base font-medium">
          <a 
            href="https://fixedtoflow.carrd.co/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:no-underline"
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
