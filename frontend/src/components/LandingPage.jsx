import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'; // Import custom styles

export default function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Collaborative AI-Powered Ideation & Project Management</h1>
          <p className="lead mt-3">
            Collaborate, brainstorm, and manage projects with real-time AI assistance.
          </p>
          <div className="mt-4">
            <Link to="/login" className="btn btn-light btn-lg me-3">
              <i className="bi bi-box-arrow-in-right me-2"></i> Login
            </Link>
            <Link to="/register" className="btn btn-outline-light btn-lg">
              <i className="bi bi-person-plus me-2"></i> Register
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
<section className="py-5 bg-light">
  <div className="container">
    <div className="row text-center g-4"> {/* g-4 adds gap between columns */}
      <div className="col-md-4">
        <div className="feature-box h-100">
          <i className="bi bi-people display-4 text-primary mb-3"></i>
          <h5>Real-Time Collaboration</h5>
          <p>Work together on projects with your team, anytime and anywhere.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-box h-100">
          <i className="bi bi-lightbulb display-4 text-primary mb-3"></i>
          <h5>AI-Powered Ideas</h5>
          <p>Generate smart suggestions and innovative solutions instantly.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-box h-100">
          <i className="bi bi-kanban display-4 text-primary mb-3"></i>
          <h5>Smart Project Management</h5>
          <p>Track progress, set goals, and keep projects on schedule effortlessly.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="py-5 text-center bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">Get Started Today</h2>
          <p className="mb-4">Join our platform and supercharge your team's productivity with AI assistance.</p>
          <Link to="/register" className="btn btn-primary btn-lg">
            <i className="bi bi-rocket-takeoff me-2"></i> Create Your Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 text-center">
        <div className="container">
          <p className="mb-1">&copy; {new Date().getFullYear()} AI-Powered Project Platform. All rights reserved.</p>
          <div>
            <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
