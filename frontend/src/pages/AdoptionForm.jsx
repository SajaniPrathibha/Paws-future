import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AdoptionForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedDog = location.state?.selectedDog;

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        currentJob:'',
        dogName: selectedDog?.title || '',
        message: '',
        residence: '',
        otherResidence: ''
    });

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Optional: update if user refreshes while keeping state
        if (selectedDog) {
            setFormData((prev) => ({ ...prev, dogName: selectedDog.title }));
        }
    }, [selectedDog]);


    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Adoption Request Submitted:', formData);
        setShowPopup(true); 
        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            address: '',
            currentJob: '',
            dogName: '',
            message: ''
        });
      };
    const handlePopupClose = () => {
        setShowPopup(false);
        navigate('/'); // Redirect to homepage
    };

  return (
      <div className="w-full min-h-[90vh] px-6 md:px-12 lg:px-24 py-10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 z-10">
              Adoption information
          </h2>
          <form
              onSubmit={handleSubmit}
              className="w-full max-w-xl space-y-8 p-6 rounded shadow-md"
          >


              <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
              />

              <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
              />
              

              <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
              />

              <input
                  type="text"
                  name="address"
                  placeholder="Home Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                  type="text"
                  name="currentJob"
                  placeholder="Current job"
                  value={formData.currentJob}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
              />


              <input
                  type="text"
                  name="dogName"
                  placeholder="Dog's Name You Want to Adopt"
                  value={formData.dogName}
                  onChange={handleChange}
                  required
                  readOnly
                  className="w-full border border-gray-300 rounded px-4 py-2 cursor-not-allowed"
              />

              <textarea
                  name="message"
                  placeholder="Why do you want to adopt this dog?"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded px-4 py-2"
              ></textarea>

              <button
                  type="submit"
                  className="w-full bg-[#FF914D] hover:bg-[#FF6B35] text-white font-bold py-2 rounded"
              >
                  Submit Request
              </button>
          </form>
          {showPopup && (
              <div className="fixed inset-0 bg-black/85 flex justify-center items-center z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full text-black">
                      <h3 className="text-lg font-bold mb-4">Request Submitted</h3>
                      <p className="mb-6">
                          Your request has been submitted. Our employee will contact you for further clarification.
                      </p>
                      <button
                          onClick={handlePopupClose}
                          className="bg-[#FF914D] hover:bg-[#FF6B35] text-white font-semibold py-2 px-6 rounded"
                      >
                          OK
                      </button>
                  </div>
              </div>

          )}

    </div>
  )
}

export default AdoptionForm