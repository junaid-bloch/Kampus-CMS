
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-campus-primary">Campus Flow</h1>
          </div>
          <Button onClick={handleLoginClick} variant="outline" className="border-campus-primary text-campus-primary hover:bg-campus-primary hover:text-white">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-campus-light to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-4xl font-bold text-campus-primary sm:text-5xl md:text-6xl">
                Welcome to Campus Flow
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl">
                A modern campus management system designed to streamline academic and administrative processes.
              </p>
              <div className="mt-5 sm:flex sm:justify-start md:mt-8">
                <Button onClick={handleLoginClick} className="bg-campus-primary text-white hover:bg-campus-primary/90">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <img 
                src="https://www.svitvasad.ac.in/img/Nursing/Infrastructure/IMG_0115.JPG" 
                alt="Student using laptop" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-campus-primary">Campus Facilities</h2>
            <p className="mt-2 text-gray-600">Explore our state-of-the-art facilities designed for an optimal learning experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://svitvasad.ac.in/img/lbraary3.jpg" 
                  alt="Modern Library" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-campus-dark">Digital Library</h3>
                <p className="mt-2 text-gray-600">Access to over 50,000 digital resources, study spaces, and research assistance.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://images.shiksha.com/mediadata/images/1480653411phpSSk29M.png" 
                  alt="Science Laboratory" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-campus-dark">Advanced Labs</h3>
                <p className="mt-2 text-gray-600">Cutting-edge equipment for research and practical learning experiences.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://i.ytimg.com/vi/yT4H0BZ5Rho/sddefault.jpg" 
                  alt="Campus Grounds" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-campus-dark">Recreation Centers</h3>
                <p className="mt-2 text-gray-600">Sports facilities, fitness centers, and outdoor areas for a balanced student life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Section - New Section with Photos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-campus-primary">Campus Life</h2>
            <p className="mt-2 text-gray-600">Experience the vibrant and enriching life on our campus.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://admin.svitvasad.ac.in/DataImages/638288677785772283.jpeg" 
                  alt="Student studying" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-campus-dark">Academic Excellence</h3>
              <p className="mt-4 text-gray-600">Our campus provides an environment that fosters academic excellence and intellectual growth. With dedicated faculty and modern learning tools, students are empowered to achieve their highest potential.</p>
            </div>

            <div className="flex flex-col justify-center order-4 md:order-3">
              <h3 className="text-2xl font-semibold text-campus-dark">Student Community</h3>
              <p className="mt-4 text-gray-600">Join a diverse and inclusive community where students from various backgrounds come together to learn, share ideas, and create lasting connections.</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md order-3 md:order-4">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://source.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Student community" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-campus-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-campus-primary">What Our Community Says</h2>
            <p className="mt-2 text-gray-600">Hear from our students, faculty, and staff about their experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-campus-secondary flex items-center justify-center text-white font-bold text-lg">
                  JS
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Jordan Smith</h4>
                  <p className="text-sm text-gray-500">Computer Science Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Campus Flow has made course registration and tracking assignments so much easier. I love how I can access all my academic information in one place!"</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-campus-primary flex items-center justify-center text-white font-bold text-lg">
                  RP
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Dr. Rebecca Park</h4>
                  <p className="text-sm text-gray-500">Associate Professor</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"As a faculty member, I appreciate how Campus Flow streamlines attendance tracking and grading. It's saved me countless hours of administrative work."</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-campus-warning flex items-center justify-center text-white font-bold text-lg">
                  MT
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Marcus Thompson</h4>
                  <p className="text-sm text-gray-500">Administrative Staff</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The reporting features in Campus Flow have transformed how we analyze student performance data and make informed decisions for our institution."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map Section - New Section with Map */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-campus-primary">Campus Map</h2>
            <p className="mt-2 text-gray-600">Find your way around our beautiful campus.</p>
          </div>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://source.unsplash.com/photo-1721322800607-8c38375eef04" 
              alt="Campus Map" 
              className="w-full h-[400px] object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-campus-dark">Our Campus</h3>
              <p className="mt-2 text-gray-600">Explore our sprawling campus with modern facilities, green spaces, and architectural marvels.</p>
              <Button className="mt-4 bg-campus-primary text-white hover:bg-campus-primary/90">
                View Interactive Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold">Campus Flow</h2>
              <p className="mt-2 text-gray-300">Modern Campus Management System</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Resources</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <p className="text-base text-gray-400">&copy; 2025 Campus Flow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
