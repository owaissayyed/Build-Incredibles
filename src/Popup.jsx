// Popup.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BiX } from 'react-icons/bi';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const Popup = ({ onClose }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('10:00');

    // Get today's date
    const today = new Date();
    const minDate = today;
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

    return (
        <div
            className="h-lvh fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row relative w-11/12 md:w-3/4 lg:w-1/2"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Icon */}
                <button 
                    className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    <BiX />
                </button>
                
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-2 text-center">Schedule Your Meeting</h2>
                    <p className="mb-4 text-center">Select a date for your meeting:</p>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        minDate={minDate}
                        maxDate={maxDate}
                        inline
                        className="border rounded-md p-2 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        calendarClassName="bg-white"
                        dayClassName={(date) => 
                            date.getDay() === 0 ? 'bg-red-200' : 'bg-white'
                        }
                        popperClassName="bg-white shadow-lg rounded-md"
                    />
                </div>
                
                <div className="md:w-1/2 md:pl-5 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold mb-2">Selected Date:</h3>
                    <p className="text-lg mb-4 text-gray-600">
                        {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
                    </p>
                    <h3 className="text-lg font-semibold mb-2">Select Time:</h3>
                    <TimePicker
                        onChange={setSelectedTime}
                        value={selectedTime}
                        disableClock
                        clearIcon={null}
                        className="border rounded-md p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default Popup;
